import { Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import {Delete} from '@mui/icons-material';

export const AddAttendanceButton = ()=>{

    return <Button variant="contained" endIcon={<SendIcon />}>
    Agregar
  </Button>
}

export const DeleteAttendanceButton = ()=>{

  return <Button variant="contained" endIcon={<Delete />}>
  Eliminar
</Button>
}

