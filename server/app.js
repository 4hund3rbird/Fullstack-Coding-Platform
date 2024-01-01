import express from "express";
import cors from "cors";
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.listen(port, () => {
  console.log(`listing on port : ${port}`);
});

app.post("/runcode", (req, res) => {
  console.log(req.body);
});
app.get("/test", (req, res) => {
  const testStrings = [
    "Hello, world!",
    "This is a test string.",
    "12345",
    "Testing 1, 2, 3.",
    "Lorem ipsum dolor sit amet.",
    "🚀 Testing emojis! 😊🎉",
    "Coding is fun!",
    "Array of test strings.",
    "Node.js is awesome!",
    "Testing JavaScript code.",
    "OpenAI GPT-3 is amazing!",
    "Programming is an art.",
    "2023-01-01",
    "Random test string.",
    "Let's code together!",
    "123abc",
    "Testing special characters: !@#$%^&*()_+-=[]{}|;':,.<>/?",
    "Strings and more strings.",
    "Check if this works!",
    "The quick brown fox jumps over the lazy dog.",
    "Testing string manipulation.",
    "End of test strings.",
  ];

  // You can use this array of test strings in your JavaScript code.

  res.send(testStrings);
});
