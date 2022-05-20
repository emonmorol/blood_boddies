import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import baseAxios from "../../Api/instance";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import swal from "sweetalert";

const Appointments = () => {
  const [user] = useAuthState(auth);

  const columns = [
    {
      id: "name",
      label: "Name",
      minWidth: 170,
      align: "center",
    },
    {
      id: "bloodGroup",
      label: "Blood Group",
      minWidth: 170,
      align: "center",
    },
    {
      id: "center",
      label: "Donation Center",
      minWidth: 170,
      align: "center",
    },
    {
      id: "date",
      label: "Donation Date",
      minWidth: 170,
      align: "center",
    },
    {
      id: "phone",
      label: "Phone",
      minWidth: 170,
      align: "center",
    },
  ];

  const {
    data: appoints,
    Loading,
    refetch,
  } = useQuery("appointments", () =>
    baseAxios.get(`/appointments?email=${user?.email}`)
  );

  const handleDelete = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Appointment ! ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        baseAxios.delete(`/appointments/${id}`).then((res) => {
          if (res.data.deletedCount === 1) {
            swal("Your Appointment has been Cancelled!", {
              icon: "success",
            });
            refetch();
          }
        });
      } else {
        swal("If You Are in Need Of Blood We'll be there");
      }
    });
  };

  if (Loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <h2>This is appointments</h2>
      <TableContainer sx={{ width: "90%", maxHeight: "80vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell
                key={"action"}
                align={"center"}
                style={{ minWidth: 170 }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appoints?.data?.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                  <TableCell key={"action"} align={"center"}>
                    <div className="flex gap-3 justify-center">
                      <Link
                        to={`/dashboard/payment/${row._id}`}
                        className="btn btn-xs text-white"
                      >
                        Payment
                      </Link>
                      <button
                        onClick={() => handleDelete(row._id)}
                        className="btn btn-xs btn-error"
                      >
                        Cancel
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Appointments;
