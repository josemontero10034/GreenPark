import { headAsistanceTitle } from "~/utils/constant";
import { type TableAsistanceProp } from "./types";
import { TableRow, TableHead, TableCell } from "@mui/material";
import { CheckBoxField } from "../common/input";

const AttendanceTableHead = (props: {values:TableAsistanceProp}) => {
    const {values} = props
  // the values type should come from prisma
  // const values: TableAsistanceProp = 
  // {
  //   firstLastName: "fddf",
  //   middleName: "fff",
  //   firstName: "ffdf",
  //   idOrPassport: "ff",
  //   inDate: "ff",
  //   outDate: "ddd",
  //   secondLastName: "dd",
  // }
  // extract name properties from the objet to array values
  const properties = Object.keys(values);
console.log(values)


    return (
      <TableHead>
        <TableRow>
          {properties.map((item) => (
            <TableCell key={item}>{headAsistanceTitle[item]}</TableCell>
          )).concat( <TableCell key="select"> Seleccionar Todo <CheckBoxField /></TableCell>)}
        </TableRow>
      </TableHead>
    );
  
};

export default AttendanceTableHead;
