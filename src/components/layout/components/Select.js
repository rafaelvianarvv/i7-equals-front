import styles from "./Select.module.css";

function Select({ text, name, textOption, options, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name} onChange={handleOnChange} value={value}>
        <option>{textOption}</option>
        {options.map((option) => (
          <option value={option.codigo} key={option.codigo}>
            {option.codigo} - {option.descricao}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select