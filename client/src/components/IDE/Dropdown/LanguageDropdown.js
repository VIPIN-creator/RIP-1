import React from 'react'
import Select from "react-select";
import { LANGUAGES } from './Language';

export default function LangugeDropdown({language,setLanguage}) {
  return (
    <Select
      placeholder={language.label}
      options={LANGUAGES}
      value={language.value}
      className="mx-2"
      onChange={(e) => {
        setLanguage(e);
      }}
		/>
  )
}