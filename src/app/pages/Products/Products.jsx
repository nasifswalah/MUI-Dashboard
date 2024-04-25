import React from "react";
import DashboardWraper from "../../components/DashboardWraper";
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from "@mui/material";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'productName', headerName: 'Product Name', width: 130 },
    { field: 'brandName', headerName: 'Brand Name', width: 130 },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 90,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      type: 'number',
      width: 90,
    },
    {
      field: 'category',
      headerName: 'Category',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 160,
      valueGetter: (value, row) => `${row.category || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, brandName: 'Snow', productName: 'Jon', price: 35, quantity: 16, category : 'Mens, Kids' },
    { id: 2, brandName: 'Lannister', productName: 'Cersei', price: 42, quantity: 16, category: 'Mens, Kids' },
    { id: 3, brandName: 'Lannister', productName: 'Jaime', price: 45, quantity: 16, category: 'Mens, Kids' },
    { id: 4, brandName: 'Stark', productName: 'Arya', price: 16, quantity: 16, category: 'Mens, Kids' },
    { id: 5, brandName: 'Targaryen', productName: 'Daenerys', price: null, quantity: 16, category: 'Mens, Kids' },
    { id: 6, brandName: 'Melisandre', productName: null, price: 150, quantity: 16, category: 'Mens, Kids' },
    { id: 7, brandName: 'Clifford', productName: 'Ferrara', price: 44, quantity: 16, category: 'Mens, Kids' },
    { id: 8, brandName: 'Frances', productName: 'Rossini', price: 36, quantity: 16, category: 'Mens, Kids' },
    { id: 9, brandName: 'Roxie', productName: 'Harvey', price: 65, quantity: 16, category: 'Mens, Kids' },
  ];
  
const ProductsPage = () => {
    return (
        <DashboardWraper title={"Products"} >
            <Paper style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10]}
                    checkboxSelection
                />
            </Paper>
        </DashboardWraper>
    );
};

export default ProductsPage;