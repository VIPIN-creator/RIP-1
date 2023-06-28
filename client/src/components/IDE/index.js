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
import Navbar from "./CodeNavBar";
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
		<div className="h-screen w-full">
			<div className="flex md:flex-row flex-col h-full w-full">
				<div className="flex h-full flex-col md:w-2/3 w-full ">
					<Navbar
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
				</div>
				<div 
				className="md:w-1/3 border-l-1
				border-gray-200 flex w-full md:flex-col 
				flex-row-reverse h-full"
				>
					<CodeOutput output={output} toggled={toggled} status={status} />
					<CodeInput
						testInput={testInput}
						setTestInput={setTestInput}
						setToggled={setToggled}
					/>
				</div>
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