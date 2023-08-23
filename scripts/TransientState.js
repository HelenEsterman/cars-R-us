const transientState = {
  paintId: 0,
  technologiesId: 0,
  wheelId: 0,
  interiorId: 0,
  carId: 0,
};

export const setPaintId = (paintChosen) => {
  transientState.paintId = paintChosen;
};
export const setTechId = (techChosen) => {
  transientState.technologiesId = techChosen;
};
export const setWheelId = (wheelChosen) => {
  transientState.wheelId = wheelChosen;
};
export const setInteriorId = (interiorChosen) => {
  transientState.interiorId = interiorChosen;
};
export const setCarId = (modelChosen) => {
  transientState.carId = modelChosen;
  console.log(transientState);
};

export const saveToPermanentState = async () => {
  if (
    transientState.paintId > 0 &&
    transientState.technologiesId > 0 &&
    transientState.wheelId > 0 &&
    transientState.interiorId > 0 &&
    transientState.carId > 0
  ) {
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transientState),
    };
    const response = await fetch("http://localhost:8088/orders", postOptions);

    const customEvent = new CustomEvent("orderPostedToApi");
    document.dispatchEvent(customEvent);
    transientState.paintId = 0;
    transientState.technologiesId = 0;
    transientState.interiorId = 0;
    transientState.wheelId = 0;
    transientState.carId = 0;
  }
};
