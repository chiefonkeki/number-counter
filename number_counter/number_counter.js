let count = 0;
const display = document.getElementById("counter");

function updateDisplay() {
    display.textContent = count;
    display.style.color = count > 0 ? "green" : count < 0 ? "red" : "black";
}

function showEmoji (emoji) {
    const elem = document.getElementById("emoji")
    elem.textContent = emoji;
    elem.style.opacity = '1';
    elem.style.transform = 'scale(1.4)';
    setTimeout(() => {
        elem.style.opacity = '0';
        elem.style.transform = 'scale(1)';
    }, 700)
}
document.getElementById("increasing").addEventListener("click", () => {
    count++;
    updateDisplay();
    showEmoji("😂");
});
document.getElementById("decreasing").addEventListener("click", () => {
    count--;
    updateDisplay();
    showEmoji("😭");
});
document.getElementById("reset").addEventListener("click", () => {
    count = 0;
    updateDisplay();
    showEmoji("🌈");
});
