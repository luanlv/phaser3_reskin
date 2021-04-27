import React from "react";

export default class App extends React.Component {
	render() {
		return (
			<div style={{ textAlign: "left", padding: 10 }}>
				<h4>Phaser Demo</h4>
				<button onClick={() => {
					window.test()
				}}>Change Images</button>
				<br />
				<br />
				Button: <input
					defaultValue="Hello mgamee!"
					onChange={(e)=> {
						window.changeText(e.target.value)
					}}
				/>
				<br />
				<br />
				Alert: <input
					defaultValue="Hello mgamee!"
					onChange={(e)=> {
						window.changeAlert(e.target.value)
					}}
				/>
			</div>
		);
	}
}
