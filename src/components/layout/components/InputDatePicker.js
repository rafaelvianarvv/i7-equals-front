import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./InputData.module.css";

function InputDatePicker({ text, handleOnChange, value }) {

  function handleChange(data) {    
    handleOnChange(data);
  }

  return (
    <div className={styles.form_control}>
        <label>{text}</label>
        <DatePicker 
                selected={value}
                onChange={date => handleOnChange(date)} 
                id="data"
                placeholderText={text}
                dateFormat='dd/MM/yyyy'
                /> 
    </div>
  );
}

export default InputDatePicker