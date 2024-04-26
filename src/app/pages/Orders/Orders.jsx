import React from "react";
import DashboardWraper from "../../components/DashboardWraper";
import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'productName', headerName: 'Product Name', width: 130 },
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
  { field: 'username', headerName: 'User Name', width: 130 },
  {
    field: 'date',
    headerName: 'Date',
    width: 110,
  },
  {
    field: 'address',
    headerName: 'Address',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 250,
    valueGetter: (value, row) => `${row.address || ''}`,
  },
];

const rows = [
  { id: 1, productName: "Jeans", price: 35.99, quantity: 2, username: "user123", date: "2024-04-26", address: "123 Main St, Anytown, USA" },
{ id: 2, productName: "T-Shirt", price: 15.50, quantity: 3, username: "customer456", date: "2024-04-25", address: "456 Elm St, Somewhere, USA" },
{ id: 3, productName: "Dress", price: 49.99, quantity: 1, username: "buyer789", date: "2024-04-24", address: "789 Oak St, Nowhere, USA" },
{ id: 4, productName: "Sweater", price: 29.00, quantity: 2, username: "shopperABC", date: "2024-04-23", address: "ABC Maple St, Anyplace, USA" },
{ id: 5, productName: "Jacket", price: 89.99, quantity: 1, username: "customerXYZ", date: "2024-04-22", address: "XYZ Pine St, Everywhere, USA" },
{ id: 6, productName: "Skirt", price: 39.99, quantity: 2, username: "user123", date: "2024-04-21", address: "123 Main St, Anytown, USA" },
{ id: 7, productName: "Polo Shirt", price: 25.50, quantity: 1, username: "customer456", date: "2024-04-20", address: "456 Elm St, Somewhere, USA" },
{ id: 8, productName: "Blouse", price: 45.99, quantity: 3, username: "buyer789", date: "2024-04-19", address: "789 Oak St, Nowhere, USA" },
{ id: 9, productName: "Sweatpants", price: 34.00, quantity: 1, username: "shopperABC", date: "2024-04-18", address: "ABC Maple St, Anyplace, USA" },
{ id: 10, productName: "Dress Shirt", price: 59.99, quantity: 2, username: "customerXYZ", date: "2024-04-17", address: "XYZ Pine St, Everywhere, USA" },


];


const OrdersPage = () => {
  return (
    <DashboardWraper title={"Orders"} >
      <Paper style={{ height: 600, width: '100%' }}>
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

export default OrdersPage;