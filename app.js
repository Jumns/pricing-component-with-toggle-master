document.addEventListener("DOMContentLoaded", function () {
  // setting a global state (for managing toggle states)
  let currentPriceState = "annual";

  // Selecting all Annual prices
  const annualPrices = document.querySelectorAll(".price.annually");
  // Selecting all monthly prices
  const monthlyPrices = document.querySelectorAll(".price.monthly");

  // Selecting toggler element
  const toggle = document.querySelector(".slider.round");
  toggle.addEventListener("click", function () {
    if (currentPriceState == "annual") {
      /* ============ display monthly info ============= */
      // hiding annual prices
      annualPrices.forEach((priceElem) => {
        priceElem.classList.add("d-none");
      });

      // showing monthly prices
      monthlyPrices.forEach((priceElem) => {
        priceElem.classList.remove("d-none");
      });

      // setting state to monthly
      currentPriceState = "monthly";
    } else {
      // else switch back to annual info
      /* ============ display annual info ============= */
      // hiding monthly prices
      monthlyPrices.forEach((priceElem) => {
        priceElem.classList.add("d-none");
      });

      // showing annual prices
      annualPrices.forEach((priceElem) => {
        priceElem.classList.remove("d-none");
      });

      // setting state to annual
      currentPriceState = "annual";
    }
  });
});
