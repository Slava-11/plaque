import { ApiProvider } from "./context/AppContext";
import { Chart } from "./sections/Chart";

function App() {
  return (
    <ApiProvider>
      <main>
        <Chart/>
      </main>
    </ApiProvider>
  );
}

export default App;
