import { useEffect, useState } from "react";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;

	return { width, height }
}

export default function useWindowSize() {
	/* Store Data */
	/* ----- */

	/* Hooks */
	/* ----- */

	/* Variable Constant */
	/* ----- */

	/* Variable State */
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	/* Function */
	/* ----- */

	/* componentDidMount and componentDidUpdate */
	useEffect(() => {
		const handleResize = () => {
			setWindowDimensions(getWindowDimensions())
		}

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return windowDimensions
}

