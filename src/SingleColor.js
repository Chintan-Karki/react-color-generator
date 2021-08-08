import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
	const [alert, setAlert] = useState(false);
	const bcg = rgb.join(",");
	const hexHash = `#${hexColor}`;

	useEffect(() => {
		const timeout = setTimeout(() => {
			setAlert(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, [alert]);

	return (
		<article
			className={`color ${index > 9 && "color-light"}`}
			style={{ backgroundColor: `rgb(${bcg})` }}
			onClick={() => {
				toast(`🦄  COPIED TO THE CLIPBOARD`, {
					position: "top-right",
					hideProgressBar: false,
				});
				setAlert(true);
				navigator.clipboard.writeText(`${hexHash}`);
			}}
		>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">{hexHash}</p>
			{alert && <p className="alert">COPIED TO THE CLIPBOARD!</p>}
		</article>
	);
};

export default SingleColor;
