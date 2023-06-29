import { connect } from 'react-redux';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import LanguageDropdown from "./Dropdown/LanguageDropdown";
import ThemeDropdown from "./Dropdown/ThemeDropdown";
// import { checkStatus, submitCode } from "../../api";
import {runCode} from "../../actions/code"

const CodeNavbar = ({
	language,
	setLanguage,
	setTheme,
	theme,
	setStatus,
	testInput,
	code,
	runCode
}) => {
	const handleSubmit = () => {
		setStatus("Running");
		const formData={
			language_id: language.id,
      		source_code: btoa(code),
      		stdin: btoa(testInput),
		}
    	console.log(language);
		//runCodeDummy();
		runCode({language: language.value, code: code, testInput: testInput});
	};

	return (
		<div className="d-flex flex-row my-3">
			<button
				onClick={handleSubmit}
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
				onClick={handleSubmit}
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

export default connect(null,{runCode})(CodeNavbar);