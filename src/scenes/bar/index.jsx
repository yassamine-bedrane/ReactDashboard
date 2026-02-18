import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Technician Workload Overview" subtitle="Compare the number of completed, pending, and overdue work orders per technician." />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;