import { saveToPermanentState } from "./TransientState.js";

export const OrderButton = () => {
  return `<button id="placeOrder">Place Car Order</button>`;
};

const buttonClickEvent = (clickEvent) => {
  if (clickEvent.target.id === "placeOrder") {
    saveToPermanentState();
  }
};

document.addEventListener("click", buttonClickEvent);
