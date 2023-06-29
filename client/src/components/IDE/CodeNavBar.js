import { connect } from 'react-redux';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import LanguageDropdown from "./Dropdown/LanguageDropdown";
import ThemeDropdown from "./Dropdown/ThemeDropdown";
// import { checkStatus, submitCode } from "../../api";
import {runCode, runTest} from "../../actions/code"

const CodeNavbar = ({
	language,
	setLanguage,
	setTheme,
	theme,
	testInput,
	code,
	runCode,
	runTest,
	question
}) => {
	const handleRunCode = () => {
		runCode({language: language.value, code: code, testInput: testInput});
	};
	const handleRunTest = () => {
		runTest({language: language.value, code: code, question: question});
	};

	return (
		<div className="d-flex flex-row my-3">
			<button
				onClick={handleRunCode}
				className="btn btn-success mx-1">
				<FontAwesomeIcon
					icon={faPlayCircle}
					className="mr-2"
					color="white"
					size="sm"
				/>
				<span> Run Code </span>
			</button>
			<button
				onClick={handleRunTest}
				className="btn btn-primary mx-1">
				<FontAwesomeIcon
					icon={faPlayCircle}
					className="mr-2 "
					color="white"
					size="sm"
				/>
				<span> Run Tests </span>
			</button>
			<LanguageDropdown language={language} setLanguage={setLanguage}/>
			<ThemeDropdown theme={theme} setTheme={setTheme} />
		</div>
	);
};

const mapStateToProps = (state)=>{
    console.log(state.questions);
    return{
        question: state.questions.currentQuestion.body.id,
    }
}

export default connect(mapStateToProps,{runCode, runTest})(CodeNavbar);