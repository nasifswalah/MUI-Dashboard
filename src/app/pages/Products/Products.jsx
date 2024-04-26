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
  { id: 1, brandName: 'Snow', productName: 'Jon', price: 35, quantity: 16, category: 'Mens, Kids' },
  { id: 2, brandName: 'MountainGear', productName: 'Hiker', price: 45, quantity: 20, category: 'Mens' },
  { id: 3, brandName: 'AdventureZone', productName: 'Explorer', price: 55, quantity: 12, category: 'Womens' },
  { id: 4, brandName: 'TrailBlazer', productName: 'Rover', price: 60, quantity: 25, category: 'Mens, Womens' },
  { id: 5, brandName: 'ExtremeX', productName: 'Survivor', price: 75, quantity: 18, category: 'Unisex' },
  { id: 6, brandName: 'OutdoorMaster', productName: 'TrailBlaze', price: 50, quantity: 30, category: 'Mens, Womens' },
  { id: 7, brandName: 'SummitSeeker', productName: 'SummitPro', price: 80, quantity: 10, category: 'Mens' },
  { id: 8, brandName: 'TrekTech', productName: 'ExplorerPlus', price: 65, quantity: 22, category: 'Womens' },
  { id: 9, brandName: 'AdventurePlus', productName: 'Trekker', price: 70, quantity: 15, category: 'Mens' },
];

const ProductsPage = () => {
  return (
    <DashboardWraper title={"Products"} >
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

export default ProductsPage;