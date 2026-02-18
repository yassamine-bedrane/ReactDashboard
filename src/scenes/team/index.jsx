import { Box, Typography, useTheme, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useEffect, useState } from "react";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import PlumbingOutlinedIcon from "@mui/icons-material/PlumbingOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technicians.json")
      .then((res) => res.json())
      .then((data) => setRows(data))
      .finally(() => setLoading(false));
  }, []);

  const roleIcon = (role) => {
    if (role === "Electrician") return <EngineeringOutlinedIcon />;
    if (role === "HVAC") return <BuildOutlinedIcon />;
    if (role === "Plumber") return <PlumbingOutlinedIcon />;
    return null;
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.7 },

    {
      field: "name",
      headerName: "Technician",
      flex: 1.2,
      cellClassName: "name-column--cell",
    },

    {
      field: "role",
      headerName: "Role",
      flex: 1,
      renderCell: ({ row: { role } }) => (
        <Box display="flex" alignItems="center" gap="6px">
          {roleIcon(role)}
          <Typography>{role}</Typography>
        </Box>
      ),
    },

    {
      field: "region",
      headerName: "Region",
      flex: 1,
    },

    {
      field: "rating",
      headerName: "Rating",
      flex: 0.7,
      type: "number",
    },

    {
      field: "status",
      headerName: "Status",
      flex: 0.9,
      renderCell: ({ row: { status } }) => (
        <Chip
          label={status}
          color={status === "active" ? "success" : "default"}
          size="small"
        />
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="TECHNICIANS" subtitle="Field Workforce Overview" />

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .name-column--cell": { color: colors.greenAccent[300] },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={rows}
          columns={columns}
          loading={loading}
        />
      </Box>
    </Box>
  );
};

export default Team;
