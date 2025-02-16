import { headAsistanceTitle } from "~/utils/constant";
import { type TableAsistanceProp } from "./types";
import { TableRow, TableHead, TableCell } from "@mui/material";

const AsistanceTableHead = (props: {values:TableAsistanceProp}) => {
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
  if(values){

    return (
      <TableHead>
        <TableRow>
          {properties.map((item) => (
            <TableCell key={item}>{headAsistanceTitle[item]}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  return (
    <TableHead>
      <TableRow>
        {properties.map((item) => (
          <TableCell key={item}>{headAsistanceTitle[item]}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default AsistanceTableHead;
