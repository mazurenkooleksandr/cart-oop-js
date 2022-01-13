if (localStorage.getItem("cart")) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  let shopCart = new Cart(cart); // cart - массив товарів в корзині
  console.log(shopCart);
  document.querySelector(".cart-out").innerHTML = ""; // очищаю вивід
  document.querySelector(".cart-out").append(shopCart.render()); // відмальовую корзину

  document.querySelector(".cart-out").addEventListener("click", (event) => {
    let target = event.target;
    if (target.classList.contains("delete")) {
      shopCart.goodsDelete(target.dataset["articul"]);
      document.querySelector(".cart-out").innerHTML = "";
      document.querySelector(".cart-out").append(shopCart.render());
      localStorage.setItem("cart", JSON.stringify(shopCart.items));
      return true;
    } else if (target.classList.contains("plus")) {
      shopCart.goodsPlus(target.dataset["articul"]);
      console.log(shopCart);
      document.querySelector(".cart-out").innerHTML = "";
      document.querySelector(".cart-out").append(shopCart.render());

      localStorage.setItem("cart", JSON.stringify(shopCart.items));
      return true;
    } else if (target.classList.contains("minus")) {
      shopCart.goodsMinus(target.dataset["articul"]);
      document.querySelector(".cart-out").innerHTML = "";
      document.querySelector(".cart-out").append(shopCart.render());
      localStorage.setItem("cart", JSON.stringify(shopCart.items));
      return true;
    }
  });
}
