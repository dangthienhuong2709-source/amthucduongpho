const popup = document.getElementById("popup");
const textBox = document.getElementById("popup-text");


// Menu click
document.querySelectorAll(".product").forEach(item => {
  item.addEventListener("click", () => {
    const name = item.dataset.item;
    showPopup(`🎉 Đã đặt món ${name}!\nCảm ơn đã ủng hộ anh Xiki!`);
  });
});


// Donate click
document.querySelectorAll(".donate-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    showPopup(`💸 Cảm ơn anh em đã donate ${btn.dataset.amount}!`);
  });
});


function showPopup(msg) {
  popup.style.display = "flex";
  textBox.innerHTML = msg;
}
function closePopup() {
  popup.style.display = "none";
}
