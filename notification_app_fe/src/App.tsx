import { useEffect } from "react";
import { Log } from "../../logging_middleware/src";

function App() {
  useEffect(() => {
    Log("frontend", "info", "page", "Application started");
  }, []);

  return <h1>Notification App</h1>;
}

export default App;