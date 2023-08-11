import styled, { css } from "styled-components";

export const BlackBlock = styled.div`
	height: 50px;
	background: black;
`;

export const StyledStatus = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: black;
	color: white;
	padding: 9px 20px;
	border-radius: 5%;
	font-size: 14px;
	width: 45%;
	top: 87%;
	font-family: fangsong;
	left: 23%;
	position: fixed;
`;

export const StyledDateTime = styled.div`
	background: white;
	position: fixed;
	top: 4%;
	left: 8%;
	border-radius: 4%;
	width: 78%;
	height: 6%;
	box-shadow: 0px 0px 1px 0px;
	padding: 7px 11px;
	font-size: 12px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	z-index: 3;
`;

export const SpacerY = styled.div(
	({ size = "0px" }) => css`
		height: ${size};
		width: 0px;
	`
);

export const SpacerX = styled.div(
	({ size }) => css`
		width: ${size};
		height: 0px;
	`
);
