function scrollLeft1(target) {
  const container = document.querySelector(`.${target}`);
  container.scrollLeft -= 300;
}

function scrollRight1(target) {
  const container = document.querySelector(`.${target}`);
  container.scrollLeft += 300;
}


function incr(count,type){
  let qty=parseInt(count.innerText);
  console.log(count)
  console.log(type)
  console.log(qty)
  if(type==='add'){
    qty++
  }
  else if(qty>0){
    qty--

  }
  count.innerText=qty
  console.log(count)
}

function addToCart(img, price, btn) {
  let qty = Number(btn.previousElementSibling.querySelector(".qty").innerText);

  if (qty === 0) {
    alert("Select quantity first");
    return;
  }

  let name = btn.parentElement.querySelector("h2").innerText;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existing = cart.find(item => item.name === name);

  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({ name, img, price, quantity: qty });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}