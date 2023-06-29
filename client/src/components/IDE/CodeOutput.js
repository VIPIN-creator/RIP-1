import React from "react";

const CodeOutput = ({ output, error }) => {
	return (
		<div className="my-2">
			<form>
				<div className="form-group">
					<label className="my-1" htmlFor="output">OUTPUT</label>
					<textarea style={{height: '200px', color: (error)?'red':'black'}} className="form-control" id="output" rows="3" 
								value={output} readOnly="readonly"/>
				</div>
			</form>
		</div>
	);
};

export default CodeOutput;