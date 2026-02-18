import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Technician Roles Distribution" subtitle="Visualize the proportion of each role among technicians." />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;