import { useData } from '../../hooks/useData';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export const DataTable = ({ dataUrl, colDefs }) => {
  const rowData = useData(dataUrl);

  return (
    <div className='ag-theme-alpine' style={{ height: 400, width: '100%' }}>
      <AgGridReact
        rowData={rowData.dataseries || []}
        columnDefs={colDefs}
        paginationPageSize={5}
        pagination={true}
      ></AgGridReact>
    </div>
  );
};
