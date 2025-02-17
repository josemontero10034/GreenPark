import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import AsistanceTableHead from "./Asistance-Table-Title";
import AsistanceTableInfo from "./asistance-table-info";
import { type TableAsistanceProp } from "./types";
import { type FC } from "react";
import {
  AutoCompleteField,
  CheckBoxField,
  SearchTextField,
} from "../common/input";

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

const AsistanceInfo: FC = () => {
  return (
    <>
      <div className="mb-3 flex-col gap-2 w-full">
        <SearchTextField />
        <div className="flex gap-2">
          {/* filter by department */}
          <AutoCompleteField />
          {/* filter by shielfs */}
          <AutoCompleteField />
          {/* filter by active or inactive user */}
          <CheckBoxField />
          {/* ADD filter by date  */}
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <AsistanceTableHead
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
          <AsistanceTableInfo values={valuesFromPrisma} />
        </Table>
      </TableContainer>
    </>
  );
};

export default AsistanceInfo;
