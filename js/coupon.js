// apply coupon function
function applyCoupon() {
    const couponInput = document.getElementById("coupon");
    if (couponInput.value === "SELL200") {
      discountPercentage = 20;
    } else {
      discountPercentage = 0;
    }
  
    updateTotalWithDiscount();
  }