// import React from 'react';
// import CodeEditor from "./CodeEditor";
// import CodeOutput from "./CodeOutput";
// import CodeInput from "./CodeInput";
// import CodeNavBar from "./CodeNavBar";
// import Question from "./Question";
import { connect } from 'react-redux';

import "./index.css";
import React, { useEffect, useState } from "react";
import CodeEditor from "./CodeEditor";
import CodeOutput from "./CodeOutput";
import CodeInput from "./CodeInput";
import CodeNavbar from "./CodeNavBar";
import {boilerCodes} from "./BoilerCode";

function Header() {
	const [output, setOutput] = useState("");
	const [language, setLanguage] = useState({
		label: "JavaScript",
		value: "javascript",
		id:63,
		name: "JavaScript",
	});

	
	const [code, setCode] = useState(boilerCodes(language.id));
	const [toggled, setToggled] = useState(true);
	const [testInput, setTestInput] = useState("");
	const [theme, setTheme] = useState("vs-dark");
	const [status, setStatus] = useState(null);

	useEffect(() => {
		setCode(boilerCodes(language.id));
	}, [language]);
	
	return (
		<div class="container">
			<div class="row">
				<div class="col-8">
					<CodeNavbar
						setLanguage={setLanguage}
						language={language}
						setTheme={setTheme}
						theme={theme}
						setOutput={setOutput}
						setStatus={setStatus}
						testInput={testInput}
						code={code}
					/>

					<CodeEditor
						theme={theme}
						code={code}
						setCode={setCode}
						language={language}
					/>
					<CodeOutput output={output} toggled={toggled} status={status} />
					<CodeInput
						testInput={testInput}
						setTestInput={setTestInput}
						setToggled={setToggled}
					/>
				</div>
				<div class="col-4">col-4</div>
			</div>
		</div>
	);
}

// class Header extends React.Component{

//     render(){
//         return(
//             <div>
//                 IDE
//             </div>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
}

export default connect(mapStateToProps,{/*logout*/})(Header);