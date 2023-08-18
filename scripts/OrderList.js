export const OrderList = async () => {
  const response = await fetch(
    "http://localhost:8088/orders?_expand=paint&_expand=technologies&_expand=wheel&_expand=interior"
  );
  const orders = await response.json();
  const ordersListArray = orders.map((order) => {
    const orderPrice =
      order.paint.price +
      order.wheel.price +
      order.interior.price +
      order.technologies.price;
    return `<div>${order.paint.color} car with ${order.wheel.wheel} wheels, ${order.interior.material} interior, and the ${order.technologies.package} package for a total cost of $${orderPrice}</div>`;
  });
  const finalOrderList = ordersListArray.join(" ");
  return finalOrderList;
};
