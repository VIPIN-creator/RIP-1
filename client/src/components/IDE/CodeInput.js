import React, { useState,useEffect } from "react";

const CodeInput = ({ testInput, setTestInput }) => {
	return (
		<div className="my-2">
			<form>
				<div className="form-group">
					<label className="my-1" htmlFor="input">INPUT</label>
					<textarea style={{height: '150px'}} className="form-control" id="input" rows="3" 
					 values = {testInput} onChange={(e) => setTestInput(e.target.value)}/>
				</div>
			</form>
		</div>
	);
};

export default CodeInput;