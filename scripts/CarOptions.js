import { setCarId } from "./TransientState.js";

export const CarOptions = async () => {
  const response = await fetch("http://localhost:8088/cars");
  const cars = await response.json();
  let finalCarHtml = `<option value="0">Select a car model</option>`;
  const carsArray = cars.map((car) => {
    return `<option value="${car.id}">${car.type}</option>`;
  });
  const carOptions = carsArray.join(" ");
  finalCarHtml += carOptions;
  return `<select id="car">${finalCarHtml}</select>`;
};

const handleCarIdStateUpdate = (changeEvent) => {
  if (changeEvent.target.id === "car") {
    const carValueAsInt = parseInt(changeEvent.target.value);
    setCarId(carValueAsInt);
  }
};

document.addEventListener("change", handleCarIdStateUpdate);
