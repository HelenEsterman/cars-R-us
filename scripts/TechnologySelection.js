export const TechnologyOptions = async () => {
  const response = await fetch("http://localhost:8088/technology");
  const techOptions = await response.json();
  let finalTechChoices = `<option value="0">Select a technology package</option>`;
  const techSelectionsArray = techOptions.map((tech) => {
    return `<option value="${tech.id}">${tech.package} Package</option>`;
  });
  const techChoices = techSelectionsArray.join(" ");
  finalTechChoices += techChoices;
  return `<select id="tech">${finalTechChoices}</select>`;
};
