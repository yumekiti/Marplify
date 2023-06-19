import { FC } from "react";
import Presentation from "./components/Presentation";

const App: FC = () => {
  return (
    <div className="App">
      <Presentation content={`# Hello World!\n---\n# こんにちは、世界`} />
    </div>
  );
}

export default App;