import "./styles.css";
import Component from "./Expand.js";

export default function App() {
  const babalu = ["Hello there", "Well then", "Bonjourno"];
  return (
    <div className="App">
      {babalu.map((element) => (
        <Component someProp={element} />
      ))}
    </div>
  );
}
