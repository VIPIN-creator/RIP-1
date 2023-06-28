import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import LanguageDropdown from "./Dropdown/LanguageDropdown";
import ThemeDropdown from "./Dropdown/ThemeDropdown";
// import { checkStatus, submitCode } from "../../api";

const CodeNavbar = ({
	language,
	setLanguage,
	setTheme,
	theme,
	setOutput,
	setStatus,
	testInput,
	code
}) => {
	const handleSubmit = () => {
		setStatus("Running");
		const formData={
			language_id: language.id,
      source_code: btoa(code),
      stdin: btoa(testInput),
		}
    console.log(formData);
	};

	return (
		<div className="d-flex flex-row my-2">
			<button
				onClick={handleSubmit}
				className="btn btn-success">
				<FontAwesomeIcon
					icon={faPlayCircle}
					className="mr-2"
					color="white"
					size="sm"
				/>
				<span>  Run Code  </span>
			</button>
			<LanguageDropdown language={language} setLanguage={setLanguage}/>
			<ThemeDropdown theme={theme} setTheme={setTheme} />
		</div>
	);
};

export default CodeNavbar;