import { TableBody, TableCell, TableRow } from "@mui/material";
import { type TableAsistanceProp } from "./types";
import { FC } from "react";
import { CheckBoxField } from "../common/input";

const AttendanceTableInfo = (prop:{ values:TableAsistanceProp[]} ) => {

const {values} = prop
  

  return (
    <TableBody>
      {values.map((row) => (
        <TableRow
          key={row.idOrPassport}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.firstName}
          </TableCell>
          <TableCell align="right">{row.middleName}</TableCell>
          <TableCell align="right">{row.firstLastName}</TableCell>
          <TableCell align="right">{row.secondLastName}</TableCell>
          <TableCell align="right">{row.idOrPassport}</TableCell>
          <TableCell align="right">{row.inDate}</TableCell>
          <TableCell align="right">{row.outDate}</TableCell>
          {/* checkbox to delete or modify */}
          <TableCell><CheckBoxField/></TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default AttendanceTableInfo;
