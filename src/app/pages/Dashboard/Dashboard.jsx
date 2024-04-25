import React from "react";
import DashboardWraper from "../../components/DashboardWraper";
import { Avatar, Grid, Paper, Stack, Typography } from "@mui/material";
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import UndoIcon from '@mui/icons-material/Undo';

const Dashboard = () => {
  return (
    <DashboardWraper title={"Dashboard"} >
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper sx={{ p: 3 }} >
            <PaperItem title="Orders" count="234" color="#1976d2" icon={<InventoryIcon/>} ></PaperItem>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 3 }} >
          <PaperItem title="Users" count="5234" color="#1976d2" icon={<GroupIcon/>} ></PaperItem>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 3 }} >
          <PaperItem title="Revenue" count="3,56,719" color="#1976d2" icon={<CurrencyRupeeIcon/>} ></PaperItem>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 3 }} >
          <PaperItem title="Refunds" count="26,784" color="#1976d2" icon={<UndoIcon/>} ></PaperItem>
          </Paper>
        </Grid>
      </Grid>
    </DashboardWraper>
  );
}

const PaperItem = ({color, icon, title, count}) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar sx={{ backgroundColor: color, width: 54, height: 54 }} >
        {icon}
      </Avatar>
      <div>
        <Typography color={"primary"} >{title}</Typography>
        <Typography variant="h4" >{count}</Typography>
      </div>
    </Stack>
  );
}

export default Dashboard