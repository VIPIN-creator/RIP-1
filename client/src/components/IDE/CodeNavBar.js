import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import LanguageDropdown from "./Dropdown/LanguageDropdown";
import ThemeDropdown from "./Dropdown/ThemeDropdown";
// import { checkStatus, submitCode } from "../../api";

const Navbar = ({
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
		<div className="grid grid-cols-2 m-2">
			<button
				onClick={handleSubmit}
				className="bg-[#5cb85c] border-[#4cae4c] border-1 text-white rounded-full w-32 text-sm md:text-base hover:border-[#398439] hover:bg-[#449d44] ">
				<FontAwesomeIcon
					icon={faPlayCircle}
					className="mr-2"
					color="white"
					size="sm"
				/>
				<span>Run Code</span>
			</button>
			<div className="grid  grid-cols-2 gap-2">
				<LanguageDropdown language={language} setLanguage={setLanguage}/>
				<ThemeDropdown theme={theme} setTheme={setTheme} />
			</div>
		</div>
	);
};

export default Navbar;