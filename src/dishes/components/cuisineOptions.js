import React from "react";
import { StyledOption, StyledOptions, SpacerX } from "./styled";

export const CuisineOptions = () => {
	const titles = ["Italian", "Indian", "Thai", "Italian"];
	return (
		<StyledOptions>
			{titles.map((title) => (
				<>
					<Option title={title}></Option>
					<SpacerX size="8px" />
				</>
			))}
		</StyledOptions>
	);
};

const Option = ({ title }) => {
	return <StyledOption>{title}</StyledOption>;
};
