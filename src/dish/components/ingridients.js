import React from "react";
import { ArrowDownIcon } from "../../assets/ArrowDown";
import { ArrowUpIcon } from "../../assets/ArrowUp";
import { SpacerX, SpacerY, StyledText } from "./styled";

export const Ingredients = ({ ingredients }) => {
	const [showVegetables, setShowVegetables] = React.useState(true);
	const [showSpices, setShowSpices] = React.useState(true);

	return (
		<div style={{ marginRight: "16px" }}>
			<div style={{ display: "flex", alignItems: "center" }}>
				<h4>Vegetables ({ingredients?.vegetables?.length})</h4>
				<SpacerX size="4px" />
				{showVegetables ? (
					<div onClick={() => setShowVegetables(!showVegetables)}>
						<ArrowDownIcon />
					</div>
				) : (
					<div onClick={() => setShowVegetables(!showVegetables)}>
						<ArrowUpIcon />
					</div>
				)}
			</div>
			{showVegetables &&
				ingredients?.vegetables.map((vege) => (
					<>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<StyledText>{vege.name}</StyledText>
							<StyledText style={{ textAlign: "right" }}>
								{vege.quantity} Pc
							</StyledText>
						</div>
						<SpacerY size="6px" />
					</>
				))}
			<div style={{ display: "flex", alignItems: "center" }}>
				<h4>Spices ({ingredients?.spices?.length})</h4>
				<SpacerX size="4px" />
				{showSpices ? (
					<div onClick={() => setShowSpices(!showSpices)}>
						<ArrowDownIcon />
					</div>
				) : (
					<div onClick={() => setShowSpices(!showSpices)}>
						<ArrowUpIcon />
					</div>
				)}
			</div>
			{showSpices &&
				ingredients?.spices?.map((spice) => (
					<>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<StyledText>{spice.name}</StyledText>
							<StyledText style={{ textAlign: "right" }}>
								{spice.quantity} Pc
							</StyledText>
						</div>
						<SpacerY size="6px" />
					</>
				))}
		</div>
	);
};
