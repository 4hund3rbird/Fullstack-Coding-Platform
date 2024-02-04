console.log("hello");

let q = [1, 2, 3, 4, 5, 6, 7];

if (q.includes(0)) {
  console.log(true);
} else {
  console.log(false);
}

let names = [
  "aniket",
  "ram",
  "piyush",
  "nishant",
  "gogi",
  "ramesh",
  "aditya",
  "raman",
];
let ran = [];
while (ran.length < 5) {
  let n = names[Math.floor(Math.random() * names.length)];
  if (ran.includes(n) == false) {
    ran.push(n);
  }
}
console.log(Set);
ran;
ran;
