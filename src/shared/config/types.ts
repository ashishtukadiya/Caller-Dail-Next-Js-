
export interface TableColumn {
    Header: string;
    accessor?: string;
    sort?: string | boolean;
    Cell?: (column:any) => JSX.Element;
  }
   
  export  interface DateFiler {
    startDate: string;
    endDate: string;
    label: string;
  }