import { setPaintId } from "./TransientState.js";

export const PaintOptions = async () => {
  const response = await fetch("http://localhost:8088/paints");
  const paintOptions = await response.json();
  let finalPaintChoices = `<option value="0">Select a paint color</option>`;
  const paintSelectionsArray = paintOptions.map((paint) => {
    return `<option value="${paint.id}">${paint.color}</option>`;
  });
  const paintChoices = paintSelectionsArray.join(" ");
  finalPaintChoices += paintChoices;
  return `<select id="paint">${finalPaintChoices}</select>`;
};

const handleChangingPaintId = (changeEvent) => {
  if (changeEvent.target.id === "paint") {
    const paintValueAsInt = parseInt(changeEvent.target.value);
    setPaintId(paintValueAsInt);
  }
};

document.addEventListener("change", handleChangingPaintId);
