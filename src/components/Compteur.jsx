import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { countSelector, addValue } from "../store/slices/countSlice";

function Compteur() {
	const total = useSelector(countSelector);
	const dispatch = useDispatch();

	return (
		<div>
			<p>{total}</p>
			<button onClick={() => dispatch(addValue(1))}>Add 1</button>
			<button onClick={() => dispatch(addValue(10))}>Add 10</button>
		</div>
	);
}

export default Compteur;
