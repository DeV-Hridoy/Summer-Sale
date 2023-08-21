let total = 0;
let discountPercentage = 0;

function handleCLikBtn(target) {
  const selectedItemContainer = document.getElementById("selected-items");
  const itemName = target.childNodes[5].childNodes[1].innerText;

  
  const li = document.createElement("li");
  li.innerText = itemName;
  selectedItemContainer.appendChild(li);

  const price = parseFloat(target.childNodes[7].innerText.split(" ")[0]);

  total += price;
  document.getElementById("total-price").innerText = total.toFixed(2);

  // Enable the 'make-purchase' when the total is grater than 0
  
  const makePurchaseButton = document.getElementById("make-purchase");
  if (total > 0) {
    makePurchaseButton.removeAttribute("disabled");
  } else {
    makePurchaseButton.setAttribute("disabled", "true");
  }

  // Enable the 'apply-button' when total is 200 or greater
  const applyButton = document.getElementById("apply-button");
  if (total >= 200) {
    applyButton.removeAttribute("disabled");
  } else {
    applyButton.setAttribute("disabled", "true");
  }

  updateTotalWithDiscount();

  
  
}





