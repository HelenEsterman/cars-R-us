import { setWheelId } from "./TransientState.js";

export const WheelOptions = async () => {
  const response = await fetch("http://localhost:8088/wheels");
  const wheelOptions = await response.json();
  let finalWheelChoices = `<option value="0">Select a wheel style</option>`;
  const wheelSelectionsArray = wheelOptions.map((wheel) => {
    return `<option value="${wheel.id}">${wheel.wheel}</option>`;
  });
  const wheelChoices = wheelSelectionsArray.join(" ");
  finalWheelChoices += wheelChoices;
  return `<select id="wheels">${finalWheelChoices}</select>`;
};

const handleChangingWheelId = (changeEvent) => {
  if (changeEvent.target.id === "wheels") {
    const wheelValueAsInt = parseInt(changeEvent.target.value);
    setWheelId(wheelValueAsInt);
  }
};

document.addEventListener("change", handleChangingWheelId);
