import React from "react";
import Square from "./Square";

const style = {
	border: "2px solid darkblue",
	borderRadius: "10px",
	width: "300px",
	height: "300px",
	margin: "0 auto",
	display: "grid",
	gridTemplate: "repeat(3, 1fr)/ repeat(3, 1fr)",
};

const Playboard = ({ squares, onClick }) => (
	<div style={style}>
		{squares.map((sq, i) => (
			<Square key={i} value={sq} onClick={() => onClick(i)} />
		))}
	</div>
);

export default Playboard;
