import { CarOptions } from "./CarOptions.js";
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
  const carHtml = await CarOptions();
  const buttonHtml = OrderButton();
  const orderListHtml = await OrderList();
  const mainHtml = `
    <div class="selections">
        <div id="eachSelection">
            <h3>Paints</h3>
                ${paintHtml}
        </div>
        <div id="eachSelection">
            <h3>Technologies</h3>
                ${techHtml}
        </div>
        <div id="eachSelection">
            <h3>Wheels</h3>
                ${wheelHtml}
        </div>
        <div id="eachSelection">
            <h3>Interior</h3>
                ${interiorHtml}
        </div>
        <div id="eachSelection">
            <h3>Model</h3>
                ${carHtml}
        </div>
    </div>
            <article class="order">
                ${buttonHtml}
            </article>
        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${orderListHtml}
        </article>
    `;
  mainContainer.innerHTML = mainHtml;
};

render();

document.addEventListener("orderPostedToApi", render);
