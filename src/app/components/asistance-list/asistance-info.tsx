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
  );
};

export default AsistanceInfo;
