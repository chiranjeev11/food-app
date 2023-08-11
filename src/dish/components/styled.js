import styled, { css } from "styled-components";

export const StyledProductDetails = styled.div`
	text-align: initial;
	margin: 20px 0px 10px 0px;
	padding-bottom: 20px;
	border-bottom: 1px solid #e5e5e5;
`;

export const StyledProductName = styled.div`
	font-size: 24px;
	font-weight: 600;
`;

export const StyledRating = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background: #50c452;
	padding: 2px 4px;
	border-radius: 10%;
	font-size: 8px;
	height: 30%;
`;

export const StyledProductDescription = styled.div`
	color: #919699;
	font-family: Roboto;
	font-size: 13px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-align: initial;
	width: 40%;
`;

export const StyledProductImage = styled.img`
	border-radius: 10%;
	height: 100px;
	width: 50%;
`;

export const StyledText = styled.span`
	color: #919699;
	font-family: Roboto;
	font-size: 13px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	width: 40%;
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
