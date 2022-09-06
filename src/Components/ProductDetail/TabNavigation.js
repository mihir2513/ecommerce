import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export default function TabNavigation(props) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Detail" value="1" sx={{ border: 1 }} />
            <Tab label="More Info" value="2" sx={{ border: 1 }} />
            <Tab label="Reviews" value="3" sx={{ border: 1 }} />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ border: 1, borderColor: "divider" }}>
          {props.productDecription}
        </TabPanel>
        <TabPanel value="2" sx={{ border: 1, borderColor: "divider" }}>
          More Info
        </TabPanel>
        <TabPanel value="3" sx={{ border: 1, borderColor: "divider" }}>
          Reviews
        </TabPanel>
      </TabContext>
    </Box>
  );
}
