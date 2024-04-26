import React from "react";
import DashboardWraper from "../../components/DashboardWraper";
import { Button, Checkbox, Divider, FormControlLabel, Paper, Stack, Switch, Typography } from "@mui/material";

const SettingsPage = () => {
  return (
    <DashboardWraper title={"Settings"} >
      <Paper sx={{ p: 3 }} >
        <Stack sx={{gap:2}} >
        <Stack direction="row" alignItems="center" >
          <Typography sx={{ flexGrow: 1 }} >Allow Notifications</Typography>
          <Switch defaultChecked />
        </Stack>
        <Stack direction="row" alignItems="center" >
          <Typography sx={{ flexGrow: 1 }} >Allow Retunrs</Typography>
          <Switch defaultChecked />
        </Stack>
        <Divider/>
        <Stack direction="row" alignItems="center" >
          <Typography sx={{ flexGrow: 1 }} >
            Accepted Payments
            </Typography>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Cards" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="UPI" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="COD" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Pay Later" />
        </Stack>
        <Button variant="contained" >Save</Button>
        </Stack>
      </Paper>
    </DashboardWraper>
  );
};

export default SettingsPage;