import { setTechId } from "./TransientState.js";

export const TechnologyOptions = async () => {
  const response = await fetch("http://localhost:8088/technologies");
  const techOptions = await response.json();
  let finalTechChoices = `<option value="0">Select a technology package</option>`;
  const techSelectionsArray = techOptions.map((tech) => {
    return `<option value="${tech.id}">${tech.package} Package</option>`;
  });
  const techChoices = techSelectionsArray.join(" ");
  finalTechChoices += techChoices;
  return `<select id="tech">${finalTechChoices}</select>`;
};

const handleChangingTechId = (changeEvent) => {
  if (changeEvent.target.id === "tech") {
    const techValueAsInt = parseInt(changeEvent.target.value);
    setTechId(techValueAsInt);
  }
};

document.addEventListener("change", handleChangingTechId);
