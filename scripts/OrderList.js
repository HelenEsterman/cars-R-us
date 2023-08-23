export const OrderList = async () => {
  const response = await fetch(
    "http://localhost:8088/orders?_expand=paint&_expand=technologies&_expand=wheel&_expand=interior&_expand=car"
  );
  const orders = await response.json();
  const ordersListArray = orders.map((order) => {
    const totalPrice =
      order.paint.price +
      order.wheel.price +
      order.interior.price +
      order.technologies.price;
    const orderPrice = totalPrice * order.car.multiplier;
    const officialOrderPrice = orderPrice.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return `<div class="eachOrder">${order.paint.color} car with ${order.wheel.wheel} wheels, ${order.interior.material} interior, and the ${order.technologies.package} package for a total cost of ${officialOrderPrice}</div>`;
  });
  const finalOrderList = ordersListArray.join(" ");
  return finalOrderList;
};
