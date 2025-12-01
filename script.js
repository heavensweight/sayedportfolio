// Function to reveal the surprise GIF
function revealFun() {
    const box = document.getElementById("funArea");
    box.style.display = "block"; // Show the GIF when the button is clicked
}

// Fun floating emoji effect
document.addEventListener("click", function(e) {
    const emojiList = ["✨","🔥","💫","🎉","⭐","⚡","🌟"];
    const emoji = emojiList[Math.floor(Math.random() * emojiList.length)];

    // Create emoji
    const span = document.createElement("div");
    span.classList.add("float-icon");
    span.style.left = e.pageX + "px";
    span.style.top = e.pageY + "px";
    span.innerText = emoji;
    document.body.appendChild(span);
    setTimeout(() => { span.remove(); }, 1800);
});
