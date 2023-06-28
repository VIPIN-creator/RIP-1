import React from 'react'
import Select from "react-select";
import { defineTheme } from "./Theme"

import {monacoThemes} from "./Theme";

export default function ThemeDropdown({theme,setTheme}) {
	function handleThemeChange(th) {
		const theme = th;
		if (["light", "vs-dark"].includes(theme.value)) {
			setTheme(theme);
		} else {
			defineTheme(theme.value).then((_) => setTheme(theme.value));
		}
	}
  return (
    <Select
					placeholder={theme}
					options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
						label: themeName,
						value: themeId,
						key: themeId,
					}))}
					value={theme.value}
					className="px-2"
					onChange={handleThemeChange}
				/>
  )
}