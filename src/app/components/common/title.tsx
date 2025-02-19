import { titleDepartmentNameById } from "~/utils/constant";

const TitleDepartment = (props: { type: "OBRAS_EXTERIORES" | "PANETE_Y_VACIADO" | "ALMACEN" | "DOCUMENTACION" }) => {

  const { type } = props;

  return (
    <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem] pb-4">
      Departamento de 
      <span className="text-[rgba(89,233,84,0.58)] pl-4">
        {titleDepartmentNameById[type]}
      </span>
    </h1>
  );
};

export default TitleDepartment;
