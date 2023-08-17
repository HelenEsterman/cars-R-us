export const PaintOptions = async () => {
  const response = await fetch("http://localhost:8088/paint");
  const paintOptions = await response.json();
  let finalPaintChoices = `<option value="0">Select a paint color</option>`;
  const paintSelectionsArray = paintOptions.map((paint) => {
    return `<option value="${paint.id}">${paint.color}</option>`;
  });
  const paintChoices = paintSelectionsArray.join(" ");
  finalPaintChoices += paintChoices;
  return `<select id="paint">${paintChoices}</select>`;
};
