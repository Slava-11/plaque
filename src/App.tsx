import { ApiProvider } from "./context/AppContext";
import Main from "./sections/Main";

import TableExample from "./sections/TableExample";

function App() {
  return (
    <ApiProvider>
      <main>
        {/* <Main/> */}
        {/* <TableExample /> */}
      </main>
    </ApiProvider>
  );
}

export default App;
