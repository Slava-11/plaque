import { TableProvider } from "./context/AppTableContext";
import { AppTable } from "./sections/AppTable";

function App() {
  return (
    <TableProvider>
      <main>
        <AppTable />
      </main>
    </TableProvider>
  );
}

export default App;
