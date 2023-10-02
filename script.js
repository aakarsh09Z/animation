const elem = selector => document.querySelector(selector);

const bubble = elem(".box");

let bubble_generator = () => {

    const x = Math.random() * 850;
    const y = Math.random() * 550;

    let bubbleGroup = document.createElement("ul");
    bubbleGroup.style.left = x + "px";
    bubbleGroup.style.top = y + "px";
    for (let i = 0; i < 4; i++) {
        let bb = document.createElement("li");
        bubbleGroup.appendChild(bb);
    }
    bubble.appendChild(bubbleGroup);

};

setInterval(bubble_generator, 350);


