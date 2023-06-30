import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import axios from "axios";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

export default function ProductList() 
{
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [items, setItems] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        // deleteApi(id);
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(res.data);
        setItems(res.data);
      } catch (err) {
        console.log("data fetching error");
      }
    };
    fetchData();
  }, []);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ padding: "20px" }}
        >
          Products List
        </Typography>
        <Divider />
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell
                  style={{ minWidth: 100, fontWeight: "bold" }}
                  align="center"
                >
                  Name
                </TableCell>
                <TableCell
                  style={{ minWidth: 100, fontWeight: "bold" }}
                  align="center"
                >
                  Pack Size
                </TableCell>
                <TableCell
                  style={{ minWidth: 100, fontWeight: "bold" }}
                  align="center"
                >
                  Price
                </TableCell>
                <TableCell
                  style={{ minWidth: 100, fontWeight: "bold" }}
                  align="center"
                >
                  D.P.
                </TableCell>
                <TableCell
                  style={{ minWidth: 100, fontWeight: "bold" }}
                  align="center"
                >
                  B.V.
                </TableCell>
                <TableCell
                  style={{ minWidth: 100, fontWeight: "bold" }}
                  align="left"
                >
                  Action
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell key={row.id} align="center">
                          {row.name}
                        </TableCell>
                        <TableCell key={row.id} align="center">
                          {row.username}
                        </TableCell>
                        <TableCell key={row.id} align="center">
                          {row.email}
                        </TableCell>
                        <TableCell key={row.id} align="center">
                          {row.address.city}
                        </TableCell>
                        <TableCell key={row.id} align="center">
                          {row.phone}
                        </TableCell>
                        <TableCell align="center">
                          <Stack spacing={2} direction="row">
                            <EditIcon
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              className="cursor-pointer"
                              // onClick={() => editUser(row.id)}
                            />
                            <DeleteIcon
                              style={{
                                fontSize: "20px",
                                color: "darkred",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                deleteUser(row.id);
                              }}
                            />
                          </Stack>
                        </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        rowsPerPage={rowsPerPage}
        page={page}
        count={ items.length }
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
