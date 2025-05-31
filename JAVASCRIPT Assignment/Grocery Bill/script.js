document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("grocery-form");
  const totalPriceElement = document.getElementById("totalPrice");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const riceQty = parseFloat(document.getElementById("riceQty").value) || 0;
    const beansQty = parseFloat(document.getElementById("beansQty").value) || 0;
    const chickenQty = parseFloat(document.getElementById("chickenQty").value) || 0;

    const prices = {
      rice: 4,
      beans: 3,
      chicken: 7
    };

    const total =
      riceQty * prices.rice +
      beansQty * prices.beans +
      chickenQty * prices.chicken;

    totalPriceElement.textContent = `$${total.toFixed(2)}`;
  });
});
