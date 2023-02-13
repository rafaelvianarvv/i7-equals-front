// import { DatePicker, LocalizationProvider } from '@material-ui/lab';
// import AdapterLuxon from '@mui/lab/AdapterLuxon';
// import { TextField } from '@mui/material';
import styles from "./InputData.module.css";

function InputData({ text, handleOnChange, value }) {

  function handleChange(data) {    
    handleOnChange(data);
  }

  return (
    <div className={styles.form_control}>
      <label>{text}</label>
{/*       
      <LocalizationProvider dateAdapter={AdapterLuxon} locale={'pt'}>
        <DatePicker
          disableFuture
          format="DD-MM-YYYY"
          value={value}
          onChange={(newValue) => {
            handleChange(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>        
       */}
    </div>
  );
}

export default InputData;
