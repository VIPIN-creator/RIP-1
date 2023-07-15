const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const executeCpp = async (filePath) => {
	const bindir = await compileCpp(filePath);
	const stdout = await runBin(filePath, bindir);
	return stdout;
};

const executeC = async (filePath) => {
	const bindir = await compileC(filePath);
	const stdout = await runBin(filePath, bindir);
	return stdout;
};

const compileCpp = (filePath) => {
	const outputDir = path.join(__dirname, "outputs");
	
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}
	const jobId = path.basename(filePath).split(".")[0]; // basename will give us jobId.cpp
	const outputPath = path.join(outputDir, `${jobId}.out`);
	return new Promise((resolve, reject) => {
		exec(
			`g++ ${filePath} -o ${outputPath}`,
			(error, stdout, stderr) => {
				error && reject({ error, stderr });
				stderr && reject(stderr);
				resolve(outputPath);
			}
		);
	});
};

const compileC = (filePath) => {
	const outputDir = path.join(__dirname, "outputs");
	
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}
	const jobId = path.basename(filePath).split(".")[0]; // basename will give us jobId.cpp
	const outputPath = path.join(outputDir, `${jobId}.out`);
	return new Promise((resolve, reject) => {
		exec(
			`gcc ${filePath} -o ${outputPath}`,
			(error, stdout, stderr) => {
				error && reject({ error, stderr });
				stderr && reject(stderr);
				resolve(outputPath);
			}
		);
	});
};

const runBin = (filePath, binpath) => {
	const outputDir = path.join(__dirname, "outputs");
	
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}
	const jobId = path.basename(filePath).split(".")[0]; // basename will give us jobId.cpp
	return new Promise((resolve, reject) => {
		exec(
			`${binpath} < ${outputDir}/input.txt`,
			(error, stdout, stderr) => {
				error && reject({ error, stderr });
				stderr && reject(stderr);
				resolve(stdout);
			}
		);
	});
};


const executePython = (filePath, inputFilePath) => {
	return new Promise((resolve, reject) => {
		exec(`python3 ${filePath} ${inputFilePath}`, (error, stdout, stderr) => {
			error && reject({ error, stderr });
			stderr && reject(stderr);
			resolve(stdout);
		});
	});
};

const executeJavascript = (filePath) => {
	return new Promise((resolve, reject) => {
		exec(`node ${filePath}`, (error, stdout, stderr) => {
			error && reject({ error, stderr });
			stderr && reject(stderr);
			resolve(stdout);
		});
	});
};
const executeCode = (codeFilePath, language, inputFilePath) => {
	if (language === "cpp") {
		return executeCpp(codeFilePath);
	} else if (language === "python") {
		return executePython(codeFilePath, inputFilePath);
	} else if (language === "javascript") {
		return executeJavascript(codeFilePath);
	} else if (language === "c") {
		return executeC(codeFilePath);
	}
};

const compileCode = (codeFilePath, language) => {
	if (language === "cpp") {
		return compileCpp(codeFilePath);
	} else if (language === "c") {
		return compileC(codeFilePath);
	}
	return null;
};

const runCode = (codeFilePath, language, inputFilePath, binDir) => {
	if (language === "cpp") {
		return runBin(codeFilePath, binDir);
	} else if (language === "python") {
		return executePython(codeFilePath, inputFilePath);
	} else if (language === "javascript") {
		return executeJavascript(codeFilePath);
	} else if (language === "c") {
		return runBin(codeFilePath, binDir);
	}
};

module.exports = {
	executeCode,
	compileCode,
	runCode
};
