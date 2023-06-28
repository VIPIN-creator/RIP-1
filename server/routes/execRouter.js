var express = require('express');
var router = express.Router();
const { generateCodeFile, generateInputFile } = require("./generateCodeFile");
const { executeCode } = require("./executeCodeFile");

/* POST */
router.post('/', async(req, res) => {
    const { language, code, testInput } = req.body;
	if (code === undefined) {
		return res.status(400).json({ success: false, error: "Empty code Body" });
	}
	// generate a "code file" from the code
	// then compile that cpp file
	// get output
	try {
		const codeFilePath = await generateCodeFile(language, code);
		const inputFilePath = await generateInputFile(testInput);
		const output = await executeCode(codeFilePath, language, inputFilePath);
		console.log("this is output", output);
		return res.json({ output });
	} catch (err) {
		res.status(500).json({ err });
	}
});


// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.get("/", (req, res) => {
// 	return res.json({ hello: "world" });
// });

// app.post("/run", async (req, res) => {
	
// });

// app.listen(process.env.PORT | 5000, () => {
// 	console.log("Listening on port 5000");
// });


module.exports = router;
