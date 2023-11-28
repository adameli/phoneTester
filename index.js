"use strict"

let value = 0;
const inputs = document.querySelectorAll(".code");
inputs[0].focus();

inputs.forEach(input => {
    input.addEventListener("keyup", function (e) {
        let key = e.key;
        let id = parseInt(this.id) + 1;
        let previousSibling = this.previousElementSibling;
        let nextSibling = document.getElementById(id);
        console.log(value);
        if (key === "Backspace") {
            if (value < 2) {
                return;
            } else {
                previousSibling.focus();
                value = 0;
            }

        } else {
            if (nextSibling === null) {
                return
            }
            nextSibling.focus();
        }


    })
})

inputs.forEach(input => {
    input.addEventListener("keydown", function (e) {
        let key = e.key;
        if (key === "Backspace") {
            value++
        }
    })
})