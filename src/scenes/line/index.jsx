import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Weekly Operations Metrics" subtitle="Track technicians, open work orders, and revenue trends over 12 weeks." />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;