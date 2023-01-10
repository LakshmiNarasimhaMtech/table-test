import { dataUrl, columnDefs } from './constants';
import './App.css';
import { DataTable } from './components/table';

function App() {
  return (
    <div className='App'>
      <DataTable dataUrl={dataUrl} colDefs={columnDefs} />
    </div>
  );
}

export default App;
