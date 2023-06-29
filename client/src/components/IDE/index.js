import { connect } from 'react-redux';

import "./index.css";
import React, { useEffect, useState } from "react";
import CodeEditor from "./CodeEditor";
import CodeOutput from "./CodeOutput";
import CodeInput from "./CodeInput";
import CodeNavbar from "./CodeNavBar";
import {boilerCodes} from "./BoilerCode";
import question from '../question';

function Ide({output, error}) {
	const [language, setLanguage] = useState({
		label: "JavaScript",
		value: "javascript",
		id:63,
		name: "JavaScript",
	});

	
	const [code, setCode] = useState(boilerCodes(language.id));
	const [testInput, setTestInput] = useState("");
	const [theme, setTheme] = useState("vs-dark");
	const [status, setStatus] = useState(null);

	useEffect(() => {
		setCode(boilerCodes(language.id));
	}, [language]);
	
	return (
		<div className="mx-5 my-4">
			<div className="row">
				<div className="col-4">
					<question.View />
				</div>
				<div className="col-8">
					<CodeEditor
						theme={theme}
						code={code}
						setCode={setCode}
						language={language}
					/>
					<CodeNavbar
						setLanguage={setLanguage}
						language={language}
						setTheme={setTheme}
						theme={theme}
						setStatus={setStatus}
						testInput={testInput}
						code={code}
					/>
					<CodeInput
						testInput={testInput}
						setTestInput={setTestInput}
					/>
					<CodeOutput output={output} error={error}/>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
    return {
        output : state.code.output,
		error : state.code.error
    }
}

export default connect(mapStateToProps,null)(Ide);