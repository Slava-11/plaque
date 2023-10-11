import { ApiProvider } from "./context/AppContext";
import { Chart } from "./sections/Chart";
import DataTable from "./sections/DataTable";
import PaginatedTable from "./sections/PaginatedTable";
import TableExample from "./sections/TableExample";

function App() {
  return (
    <ApiProvider>
      <main>
        {/* <TableExample/> */}
        {/* <PaginatedTable/> */}
        {/* <DataTable/> */}
        <Chart/>
      </main>
    </ApiProvider>
  );
}

export default App;
