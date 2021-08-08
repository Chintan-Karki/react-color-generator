import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const defaultColorValue = new Values("#425").all(10);
	const [color, setColor] = useState("");
	const [error, setError] = useState(false);
	const [list, setList] = useState(defaultColorValue);

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			let colors = new Values(color).all(10);
			setList(colors);
		} catch (error) {
			setError(true);
			console.log(error);
		}
	};

	return (
		<>
			<ToastContainer autoClose={2000} />
			<section className="container">
				<h3>Color Generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={color}
						onChange={(e) => setColor(e.target.value)}
						placeholder="#425"
						className={`${error && "error"}`}
					/>
					<button className="btn" type="submit">
						Submit
					</button>
				</form>
			</section>
			<section className="colors">
				{list.map((color, index) => {
					return (
						<SingleColor
							key={index}
							{...color}
							index={index}
							hexColor={color.hex}
						/>
					);
				})}
			</section>
		</>
	);
}

export default App;
