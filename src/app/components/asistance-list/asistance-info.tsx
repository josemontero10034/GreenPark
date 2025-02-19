import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import AttendanceTableHead from "./Asistance-Table-Title";
import AttendanceTableInfo from "./asistance-table-info";
import { type TableAsistanceProp } from "./types";
import { type FC } from "react";
import {
  AutoCompleteField,
  CheckBoxField,
  SearchTextField,
} from "../common/input";
import { AddAttendanceButton, DeleteAttendanceButton } from "../common/button";

const valuesFromPrisma: TableAsistanceProp[] = [
  {
    firstLastName: "fddf",
    middleName: "fff",
    firstName: "ffdf",
    idOrPassport: "ff",
    inDate: "ff",
    outDate: "ddd",
    secondLastName: "dd",
  },
];

const AttendanceInfo: FC = () => {
  return (
    <>
      <div className="mb-3 w-full flex-col space-y-3">
        {/* search bar */}
        <SearchTextField />
        {/* filters */}
        <div className="flex gap-2">
          {/* filter by department */}
          <AutoCompleteField />
          {/* filter by shielfs */}
          <AutoCompleteField />
          {/* filter by active or inactive user */}
          <CheckBoxField />
          {/* ADD filter by date  */}
        </div>
        {/* add new asistance */}

        <AddAttendanceButton />
        <DeleteAttendanceButton />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <AttendanceTableHead
            values={{
              firstLastName: "fddf",
              middleName: "fff",
              firstName: "ffdf",
              idOrPassport: "ff",
              inDate: "ff",
              outDate: "ddd",
              secondLastName: "dd",
            }}
          />
          <AttendanceTableInfo values={valuesFromPrisma} />
        </Table>
      </TableContainer>
    </>
  );
};

export default AttendanceInfo;
