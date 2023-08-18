import { InteriorOptions } from "./InteriorSelection.js";
import { OrderButton } from "./OrderButton.js";
import { OrderList } from "./OrderList.js";
import { PaintOptions } from "./PaintSelection.js";
import { TechnologyOptions } from "./TechnologySelection.js";
import { WheelOptions } from "./WheelSelection.js";

const mainContainer = document.querySelector(".container");

const render = async () => {
  const paintHtml = await PaintOptions();
  const techHtml = await TechnologyOptions();
  const wheelHtml = await WheelOptions();
  const interiorHtml = await InteriorOptions();
  const buttonHtml = OrderButton();
  const orderListHtml = await OrderList();
  const mainHtml = `
    <h1>Cars 'R Us: Personal Car Builder</h1>
        <div>
            <h3>Paints</h3>
                ${paintHtml}
        </div>
        <div>
            <h3>Technologies</h3>
                ${techHtml}
        </div>
        <div>
            <h3>Wheels</h3>
                ${wheelHtml}
        </div>
        <div>
            <h3>Interior</h3>
                ${interiorHtml}
        </div>
        <div>
            <p>${buttonHtml}</p>
        </div>
        <div>
            <h3>Custom Car Orders</h3>
            ${orderListHtml}
        </div>
    `;
  mainContainer.innerHTML = mainHtml;
};

render();

document.addEventListener("orderPostedToApi", render);
