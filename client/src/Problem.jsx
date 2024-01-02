import "./styles/Problem.css";
const Problem = () => {
  return (
    <div>
      <h3 className="title">Problem Statement:</h3>
      <div className="problemStatement show">
        Here is a sample line of code that can be executed in Python:
        print("Hello, World!") You can just as easily store a string as a
        variable and then print it to stdout: my_string = "Hello, World!"
        print(my_string) The above code will print Hello, World! on your screen.
        Try it yourself in the editor below! Input Format You do not need to
        read any input in this challenge. Output Format Print Hello, World! to
        stdout. Sample Output 0 Hello, World!
      </div>
      <h3 className="title">Sample Output:</h3>
      <div className="show">Hello, World!</div>
    </div>
  );
};

export default Problem;
