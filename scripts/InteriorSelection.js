import { setInteriorId } from "./TransientState.js";

export const InteriorOptions = async () => {
  const response = await fetch("http://localhost:8088/interiors");
  const interiorOptions = await response.json();
  let finalInteriorChoices = `<option value="0">Select an interior material</option>`;
  const interiorSelectionsArray = interiorOptions.map((interior) => {
    return `<option value="${interior.id}">${interior.material}</option>`;
  });
  const interiorChoices = interiorSelectionsArray.join(" ");
  finalInteriorChoices += interiorChoices;
  return `<select id="interior">${finalInteriorChoices}</select>`;
};

const handleChangingInteriorId = (changeEvent) => {
  if (changeEvent.target.id === "interior") {
    const interiorValueAsInt = parseInt(changeEvent.target.value);
    setInteriorId(interiorValueAsInt);
  }
};

document.addEventListener("change", handleChangingInteriorId);
