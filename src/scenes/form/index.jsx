import { Box, Button, TextField, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const roles = ["Electrician", "HVAC", "Plumber"];
const statuses = ["active", "inactive"];
const regions = ["Île-de-France", "Normandie", "Hauts-de-France", "Auvergne-Rhône-Alpes"];

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log("New Technician:", values);
    alert(`Technician ${values.name} created!`);
    // Later: push to JSON or API
  };

  return (
    <Box m="20px">
      <Header title="CREATE TECHNICIAN" subtitle="Add a New Technician" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={techSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                label="Full Name"
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                select
                fullWidth
                variant="filled"
                label="Role"
                name="role"
                value={values.role}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.role && !!errors.role}
                helperText={touched.role && errors.role}
                sx={{ gridColumn: "span 1" }}
              >
                {roles.map((role) => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                fullWidth
                variant="filled"
                label="Status"
                name="status"
                value={values.status}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.status && !!errors.status}
                helperText={touched.status && errors.status}
                sx={{ gridColumn: "span 1" }}
              >
                {statuses.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                fullWidth
                variant="filled"
                label="Region"
                name="region"
                value={values.region}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.region && !!errors.region}
                helperText={touched.region && errors.region}
                sx={{ gridColumn: "span 2" }}
              >
                {regions.map((region) => (
                  <MenuItem key={region} value={region}>
                    {region}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Rating"
                name="rating"
                value={values.rating}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.rating && !!errors.rating}
                helperText={touched.rating && errors.rating}
                sx={{ gridColumn: "span 2" }}
                inputProps={{ step: 0.1, min: 0, max: 5 }}
              />
            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create Technician
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const techSchema = yup.object().shape({
  name: yup.string().required("Required"),
  role: yup.string().required("Required"),
  status: yup.string().required("Required"),
  region: yup.string().required("Required"),
  rating: yup
    .number()
    .min(0, "Rating must be ≥ 0")
    .max(5, "Rating must be ≤ 5")
    .required("Required"),
});

const initialValues = {
  name: "",
  role: "",
  status: "active",
  region: "",
  rating: 0,
};

export default Form;
