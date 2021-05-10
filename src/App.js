import logo from './logo.svg';
import './App.css';

import { magusData, columns } from "./data"
import MaterialTable from 'material-table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ maxWidth: '100%' }}>
          <MaterialTable options={{
            filtering: true,
            paging: false,
            fixedColumns: {
              left: 1
            }
          }} columns={columns} data={magusData} title='Books Directory' />
        </div>
      </header>
    </div>
  );
}

export default App;
