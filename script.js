const elem = selector => document.querySelector(selector);

const bubble = elem(".box");

bubble.addEventListener("click", e => {
    const x = e.offsetX;
    const y = e.offsetY;

    let bubbleGroup = document.createElement("ul");
    bubbleGroup.style.left = x + "px";
    bubbleGroup.style.top = y + "px";
    bubble.appendChild(bubbleGroup);
});
