import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Page } from '@syncfusion/ej2-react-grids';

import { employeesDatas, employeesGrid } from '@/dummydata/dummy';
import Header from '@/components/Header';

const Employees = () => {
  
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="sticky top-0 z-50 w-full  overflow-scroll custom-scrollbar">
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-dark-2 rounded-3xl">
      <Header category="Information about our employees" title="Employees" />
      <GridComponent 
      dataSource={employeesDatas}
      allowPaging
      allowSorting
      pageSettings={{ pageCount: 5 }}
      editSettings={editing}
      width='auto'>
        <ColumnsDirective>
        {employeesGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={[Page]}/>
      </GridComponent>
    </div>
    </div>
  );
};
export default Employees;