import style from "./main.css";
import { sayHello } from "./lib/greetings";
import { sum, product } from "./lib/math-functions";

console.log(`sayHello('Mike'): ${sayHello("Mike")}`);
console.log(`sum(1, 2): ${sum(1, 2)}`);
console.log(`product(3, 5): ${product(3, 5)}`);
