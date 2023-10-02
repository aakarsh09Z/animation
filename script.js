

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

const colors = ["red", "yellow", "lime", "orange", "teal", "yellowgreen", "greenyellow", "purple", "#ff6f61", "#9b2335", "#ffa500"];

let fish_generator = () => {
    const x = -250;
    const y = Math.random() * 500;

    let fishGroup = document.createElement("div");
    fishGroup.classList.add('fish');

    let tail = document.createElement("div");
    tail.style.borderLeftColor = colors[Math.floor(Math.random() * colors.length)];
    tail.classList.add('tail');
    tail.style.left = x + "px";
    tail.style.top = y + "px";


    let fb = document.createElement("div");
    fb.style.borderLeftColor = colors[Math.floor(Math.random() * colors.length)];
    fb.classList.add('fish-body');

    let eye = document.createElement("div");
    eye.classList.add('eye');

    fb.appendChild(eye);
    tail.appendChild(fb);
    fishGroup.appendChild(tail);

    bubble.appendChild(fishGroup);

};

// let fish_generator2 = () => {
//     const x = -250;
//     const y = Math.random() * 500;

//     let fishGroup = document.createElement("div");
//     fishGroup.classList.add('fish');

//     let tail = document.createElement("div");
//     tail.classList.add('tail');
//     tail.style.left = x + "px";
//     tail.style.top = y + "px";

//     let fb = document.createElement("div");
//     fb.classList.add('fish-body');

//     let eye = document.createElement("div");
//     eye.classList.add('eye');

//     fb.appendChild(eye);
//     tail.appendChild(fb);
//     fishGroup.appendChild(tail);

//     bubble.appendChild(fishGroup);
// };

setInterval(fish_generator, 1000);
// setInterval(fish_generator2, 1000);

setInterval(bubble_generator, 350);


