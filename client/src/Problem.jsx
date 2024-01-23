import "./styles/Problem.css";
const Problem = () => {
  return (
    <div>
      <h3 className="title">Problem Statement:</h3>
      <div className="problemStatement show">
        Given a sorted array of positive integers. Your task is to rearrange the
        array elements alternatively i.e first element should be max value,
        second should be min value, third should be second max, fourth should be
        second min and so on. Note: Modify the original array itself. Do it
        without using any extra space. You do not have to return anything.
      </div>
      <h3 className="title">Sample Input:</h3>
      <div className="show">{"n = 6 arr[] = {1,2,3,4,5,6}"}</div>
      <h3 className="title">Sample Output:</h3>
      <div className="show">{"6 1 5 2 4 3"}</div>
      <h3 className="title">Explanation:</h3>
      <div className="show">
        {
          "Max element = 6, min = 1,second max = 5, second min = 2, and so on... Modified array is : 6 1 5 2 4 3."
        }
      </div>
    </div>
  );
};

export default Problem;
