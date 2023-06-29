import React,{useEffect, useState} from "react";
import Editor from "@monaco-editor/react";

import { useWindowSize } from "./Hook/winodwSize";
import { handleEditorDidMount } from "./Utils/CodeEditorUtils";

const CodeEditor = ({ theme, code, setCode, language }) => {
	const { width } = useWindowSize;
	
	return (
		<Editor
			height={"600px"}
			width={`100%`}
			language={language}
			value={code}
			theme={theme}
			className="text-3xl"
			defaultValue="//Write your code here"
			onMount={handleEditorDidMount}
			onChange={(value) => setCode(value)}
		/>
	);
};

export default CodeEditor;