
"use client"
import { Autocomplete, Checkbox, TextField } from "@mui/material";

export const SearchTextField = () => {
  return <TextField className="bg-white" fullWidth label="fullWidth" id="fullWidth"  />;
};

export const AutoCompleteField = () => {
  return (
    <Autocomplete
      disablePortal
      
      className="bg-slate-50 w-[300]"
      renderInput={(params) => <TextField {...params} label="Movie" />}
      options={[]}
    />
  );
};

export const CheckBoxField = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return <Checkbox className="bg-slate-50" {...label} />;
};
