import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const Appointments = () => {
  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
    {
      id: "population",
      label: "Population",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "size",
      label: "Size\u00a0(km\u00b2)",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "size2",
      label: "Size2\u00a0(km\u00b2)",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "size3",
      label: "Size3\u00a0(km\u00b2)",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
  ];

  const rows = [
    {
      name: "India",
      code: "IN",
      population: 1324171354,
      size: 3287263,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "China",
      code: "CN",
      population: 1403500365,
      size: 9596961,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "Italy",
      code: "IT",
      population: 60483973,
      size: 301340,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "United States",
      code: "US",
      population: 327167434,
      size: 9833520,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "Canada",
      code: "CA",
      population: 37602103,
      size: 9984670,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "Australia",
      code: "AU",
      population: 25475400,
      size: 7692024,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "Germany",
      code: "DE",
      population: 83019200,
      size: 357578,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "Ireland",
      code: "IE",
      population: 4857000,
      size: 70273,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "Mexico",
      code: "MX",
      population: 126577691,
      size: 1972550,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "Japan",
      code: "JP",
      population: 126317000,
      size: 377973,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "France",
      code: "FR",
      population: 67022000,
      size: 640679,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "United Kingdom",
      code: "GB",
      population: 67545757,
      size: 242495,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "Russia",
      code: "RU",
      population: 146793744,
      size: 17098246,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "Nigeria",
      code: "NG",
      population: 200962417,
      size: 923768,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "Brazil",
      code: "BR",
      population: 210147125,
      size: 8515767,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "India",
      code: "IN",
      population: 1324171354,
      size: 3287263,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "China",
      code: "CN",
      population: 1403500365,
      size: 9596961,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "Italy",
      code: "IT",
      population: 60483973,
      size: 301340,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "United States",
      code: "US",
      population: 327167434,
      size: 9833520,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "Canada",
      code: "CA",
      population: 37602103,
      size: 9984670,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "Australia",
      code: "AU",
      population: 25475400,
      size: 7692024,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "Germany",
      code: "DE",
      population: 83019200,
      size: 357578,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "Ireland",
      code: "IE",
      population: 4857000,
      size: 70273,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "Mexico",
      code: "MX",
      population: 126577691,
      size: 1972550,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "Japan",
      code: "JP",
      population: 126317000,
      size: 377973,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "France",
      code: "FR",
      population: 67022000,
      size: 640679,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "United Kingdom",
      code: "GB",
      population: 67545757,
      size: 242495,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "Russia",
      code: "RU",
      population: 146793744,
      size: 17098246,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "Nigeria",
      code: "NG",
      population: 200962417,
      size: 923768,
      size2: 9984670,
      size3: 9984670,
    },
    {
      name: "Brazil",
      code: "BR",
      population: 210147125,
      size: 8515767,
      size2: 9984670,
      size3: 9984670,
    },
  ];

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
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
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
