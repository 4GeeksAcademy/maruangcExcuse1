/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function obteneri(max) {
  return Math.floor(Math.random() * max);
}

window.onload = function() {
  let l =
    who[obteneri(4)] +
    " " +
    action[obteneri(4)] +
    " " +
    what[obteneri(3)] +
    " " +
    when[obteneri(5)];
  document.getElementById("excuse").innerHTML = l;
  console.log("Hello Rigo from the console!");
};
