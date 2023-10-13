import { useContext } from "react";
import { titleContext } from "./counter/counterContext";

const Home = () => {
  const { text, setText } = useContext(titleContext);
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText("goodbye")}>Click me</button>
    </div>
  );
};

export default Home;
