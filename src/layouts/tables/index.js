import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { getOrgList } from "apihelpers/api";

function Tables() {
  const [data, setData] = useState([]);

  const columns = [
    {
      field: "author",
      headerName: "Organization Owner",
      width: 300, // Adjust the column width as needed
      headerAlign: "left", // Align the header text to the left
      align: "left", // Align cell content to the left
    },
    {
      field: "function",
      headerName: "Organization Name",
      width: 300,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "employed",
      headerName: "No Of Users",
      width: 300,
      headerAlign: "center", // Align the header text to the center
      align: "center",
    },
    {
      field: "action",
      headerName: "No Of Vidychat",
      width: 300,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "int",
      headerName: "No Of Interactions",
      width: 300,
      headerAlign: "center",
      align: "center",
    },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getOrgList();
        const orgData = response.data.data.map((org, index) => ({
          id: index + 1,
          author: org._id,
          function: org.name,
          employed: org.userCount,
          action: org.videoChatCount,
          int: org.interactionCount,
        }));
        setData(orgData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Authors Table
                </MDTypography>
              </MDBox>
              <MDBox p={3}  >
                <div style={{ height: 600, width: "100%", fontStyle:"normal"}}>
                  <DataGrid
                    rows={data}
                    columns={columns}
                  />
                </div>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
