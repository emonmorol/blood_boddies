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
import { Link } from "react-router-dom";
import baseAxios from "../../Api/instance";
import auth from "../../firebase.init";

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

  console.log(user.email);

  const { data: appoints, isLoading } = useQuery("appointments", () =>
    baseAxios.get(`/appointments?email=${user?.email}`)
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(appoints.data);

  return (
    <>
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
                        className="btn btn-xs"
                      >
                        Payment
                      </Link>
                      <button className="btn btn-xs">Cancel</button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Appointments;
