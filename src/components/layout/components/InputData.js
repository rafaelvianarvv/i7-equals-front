import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styles from "./InputData.module.css";

function InputData({ text, handleOnChange, value }) {

  function handleChange(data) {    
    handleOnChange(data);
  }

  return (
    <div className={styles.form_control}>
      <label>{text}</label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={text}
          format="DD-MM-YYYY"
          value={value}
          onChange={(newValue) => {
            handleChange(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      {/* <LocalizationProvider dateAdapter={AdapterLuxon} locale={'pt'}>
        <DatePicker
          disableFuture
          format="DD-MM-YYYY"
          value={value}
          onChange={(newValue) => {
            handleChange(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>         */}
    </div>
  );
}

export default InputData;
