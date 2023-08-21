// 20% discount
function updateTotalWithDiscount() {
    const discountValue = (total * discountPercentage) / 100;
    const discountedTotal = total - discountValue;
  
    const discountElement = document.getElementById("discount");
    discountElement.innerText = `Discount: ${discountValue.toFixed(2)} TK`;
  
    const totalElement = document.getElementById("total");
    if (discountPercentage > 0) {
      totalElement.innerText = `Total: ${discountedTotal.toFixed(2)} TK`;
    } else {
      totalElement.innerText = `Total: ${total.toFixed(2)} TK`;
    }
  }