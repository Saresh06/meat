let cart = JSON.parse(localStorage.getItem("cart")) || [];
let table = document.getElementById("cartTable");
let grandTotalEle = document.getElementById("grandTotal");

function loadCart() {
    table.innerHTML = `
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
        </tr>
    `;

    let grandTotal = 0;

    cart.forEach((item, index) => {
        let total = item.price * item.quantity;
        grandTotal += total;

        let row = document.createElement("tr");

        row.innerHTML = `
            <td><img src="${item.img}" \></td>
            <td><h1>₹${item.price}</h1></td>
            <td>
                <button onclick="updateQty(${index}, -1)">–</button>
                <b>${item.quantity}</b>
                <button onclick="updateQty(${index}, 1)">+</button>
            </td>
            <td><h1>₹${total}</h1></td>
        `;

        table.appendChild(row);
    });

    grandTotalEle.innerText = "Total: ₹" + grandTotal;
    
    localStorage.setItem("billAmount", grandTotal);
}

function updateQty(i, change) {
    cart[i].quantity += change;

    if (cart[i].quantity < 1) {
        cart[i].quantity = 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

loadCart();



if (cart.length>0){
 document.getElementsByClassName("order-btn")[0].innerHTML=`<div class="place"><a href="payment.html">Place Order</a></div>`

}