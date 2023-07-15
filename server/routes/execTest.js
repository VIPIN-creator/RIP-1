var express = require('express');
var router = express.Router();
const { generateCodeFile, generateInputFile } = require("./generateCodeFile");
const { runCode, compileCode } = require("./executeCodeFile");
const {auth} = require('./auth');
const Question = require('../models/question');


/* POST */
//router.use('/', auth);

router.post('/', async(req, res) => {
  

   try {
        const { language, code, question } = req.body;
        let ques = await Question.findById(question);
        let fail = [];
        const codeFilePath = await generateCodeFile(language, code);
        const binDir = await compileCode(codeFilePath, language);
        for (let index = 0; index < ques.testcases.length; index++) {
            const element = ques.testcases[index];
            const inputFilePath = await generateInputFile(element.input);
            const output = await runCode(codeFilePath, language, inputFilePath, binDir);
            if(!(output == element.output)){
                fail.push({input: element.input, codeOutput: output, expOutput: element.output});
            }
        }
        testSize = ques.testcases.length;
        successCount = testSize - fail.length;
       
        return res.status(200).json({ testSize, successCount, fail });

   } catch (error) {
    res.status(500).json({ error });    
   }

	// if (code === undefined) {
	// 	return res.status(400).json({ success: false, error: "Empty code Body" });
	// }
	// // generate a "code file" from the code
	// // then compile that cpp file
	// // get output
	// try {
	// 	const codeFilePath = await generateCodeFile(language, code);
	// 	const inputFilePath = await generateInputFile(testInput);
	// 	const output = await executeCode(codeFilePath, language, inputFilePath);
	// 	console.log("this is output", output);
	// 	return res.json({ output });
	// } catch (err) {
	// 	res.status(500).json({ err });
	// }
});



module.exports = router;
