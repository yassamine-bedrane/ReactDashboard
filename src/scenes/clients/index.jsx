import { Box, useTheme, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useEffect, useState } from "react";

const Clients = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/clients.json")
      .then((res) => res.json())
      .then((data) => setRows(data))
      .finally(() => setLoading(false));
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "Client ID",
      flex: 0.8,
    },
    {
      field: "name",
      headerName: "Client Name",
      flex: 1.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "industry",
      headerName: "Industry",
      flex: 1,
      renderCell: ({ value }) => (
        <Chip
          label={value}
          size="small"
          sx={{
            backgroundColor: colors.greenAccent[700],
            color: "#fff",
          }}
        />
      ),
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    
  ];

  return (
    <Box m="20px">
      <Header title="CLIENTS" subtitle="Service Locations" />

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
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          getRowId={(row) => row.id}
        />
      </Box>
    </Box>
  );
};

export default Clients;
