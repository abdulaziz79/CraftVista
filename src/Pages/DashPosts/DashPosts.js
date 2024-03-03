import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// import EditServiceForm from "./EditServiceForm";
// import ServiceAddForm from "./AddServiceForm";
import styles from "./DashPosts.module.css";
// import { Helmet } from "react-helmet-async";
import image from "../../assets/images/profile.png"
import "./DashPosts.css"

export default function DashPosts() {
  const [rows, setRows] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [loading, setLoading]= useState(true)
  const [isServiceFormOpen, setIsServiceFormOpen] = useState(false);

    const fetchServices = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_PATH}/post/readPosts`);
        if(response){
            setRows(response.data);
            setLoading(false)
        }
        // console.log(response.data)
        
      } catch (error) {
        console.error("Error fetching services:", error.message);
      }
    }

    useEffect(() => {
      fetchServices();
    }, []);

  const handleEditClick = (service) => {
    setIsServiceFormOpen(true);
    setSelectedService(service);
  };

  const handleDeleteClick = async (postID) => {
    try {
      const response=await axios.delete(`${process.env.REACT_APP_PATH}/post/delete/${postID}`);
      if(response){
        // console.log("deleted")
        fetchServices()
      }
    //   fetchServices();
    } catch (error) {
      console.error("Error deleting service:", error.message);
    }
  };

  const handleAddClick = () => {
    setIsAddFormOpen(true);
  };

  const handleAddFormClose = () => {
    setIsAddFormOpen(false);
  };
  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    { field: "userId", headerName: "Email", flex: 1 ,  renderCell: (params) => (
        <span>{params.row.userId && params.row.userId.email}</span>
      ),},
    { 
        field: "description", 
        headerName: "Description", 
        flex: 1,
        renderCell: (params) => (
          <div style={{ overflow: 'auto' }}>
            {params.value}
          </div>
        ),
      },    { field: "location", headerName: "Location", flex: 1 },
    { 
        field: "categoryId", 
        headerName: "Category", 
        flex: 1,
        renderCell: (params) => (
          <span>{params.row.categoryId && params.row.categoryId.title}</span>
        ),
      },
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      renderCell: (params) => (
        <img
          src={params.value ?`${process.env.REACT_APP_PATH}/${params.value}`:image}
          alt="Service"
          style={{ width: 50, height: 50, objectFit:"cover" }}
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <div >
          {/* <div onClick={() => handleEditClick(params.row)} style={{ cursor: "pointer" }}>
            <EditIcon />
          </div> */}
          <div onClick={() => handleDeleteClick(params.row._id)} style={{ cursor: "pointer" }}>
            <DeleteIcon />
          </div>
        </div>
      ),
    },
  ];

  return (
    < div className={styles.postsHolder}>
    {/* <Helmet>
    <title>Services</title>
    <meta name="Services" content="Services table" />
  </Helmet> */}
    <main style={{ width: "90%", float: "left", margin: "auto", height: "650px", marginBottom: "7rem" }} className={styles.postsHolder}>
      <h1 style={{ fontSize: 30, fontWeight: "bold", marginBottom: 30 }}> Posts </h1>
      <section>
 
      </section>
      <section>
      <DataGrid
        rows={rows}
        columns={columns}
        pagination
        pageSize={5}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[5, 10, 20]}
        components={{
          Toolbar: CustomToolbar,
        }}
        loading={loading}
        sx={{
            color: "#0a213d",
            paddingTop: "1rem",
            border: "3px solid black",
            padding:"20px",
            borderRadius:"1px",
            maxWidth:"2000px",
            height:"650px",
            "& .MuiDataGrid-root": {
              backgroundColor: "black",
            },
            "& .MuiDataGrid-columnHeader": {
              // Background color of column headers
              color: "black",
              fontFamily: "Outfit",
              fontSize: "19px",
              // Text color of column headers
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "1px solid #ccc", // Border between cells
              color: "black",
              fontSize: "17px",
              // Text color of cells
            },
            "& .MuiTablePagination-root": {
              color: "black", // Text color of pagination
            },
            "& .MuiDataGrid-toolbar": {
              color: "black",
              backgroundColor: "black", // Background color of the toolbar
            },
            "& .MuiDataGrid-toolbarContainer": {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "black",
              // color: 'blue',
            },
            "& .MuiButtonBase-root": {
              color: "black", // Text color for buttons in the toolbar
            },
            "& .MuiPaginationItem-icon": {
              color: "black", // Color of pagination icons
            },
            "& .MuiSvgIcon-root": {
              color: "black",
            },
            "& .MuiDataGrid-row , & .MuiDataGrid-cell": {
              maxHeight: "80px !important",
              height: "80px !important",
            },
          }}
        />
        </section>
        <section>
      {/* {isServiceFormOpen && (
        <EditServiceForm service={selectedService} onClose={() => setIsServiceFormOpen(false)}  fetchUpdatedData={fetchServices} />
      )} */}
      {/* {isAddFormOpen && <ServiceAddForm onClose={handleAddFormClose}  fetchUpdatedData={fetchServices} />} */}
      </section>
      {/* Add necessary components like ToastContainer */}
      </main>
    </div>
  );
}

const CustomToolbar = () => {
  return (
    <GridToolbar>{/* Add any custom elements or styling here */}</GridToolbar>
  );
};
