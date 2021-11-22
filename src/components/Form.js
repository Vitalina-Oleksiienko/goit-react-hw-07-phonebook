import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./contacts.module.css";
import { v4 as uuidv4 } from "uuid";

import { connect } from "react-redux";
import { contactSubmit } from "../redux/action";

function Form({ handleSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const inputNameId = uuidv4();
  const inputNumberId = uuidv4();

  const handleChangeInput = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "number") {
      setNumber(e.target.value);
    }
  };
  return (
    <>
      <form
        className={style.form}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit([name, number]);
          setName("");
          setNumber("");
        }}
      >
        <label htmlFor={inputNameId}>Name</label>
        <input
          className={style.input}
          id={inputNameId}
          value={name}
          autoComplete="off"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChangeInput}
        />
        <label htmlFor={inputNumberId}>Number</label>
        <input
          className={style.input}
          id={inputNumberId}
          value={number}
          autoComplete="off"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChangeInput}
        />
        <button type="submit" className={style.btn}>
          Add contact
        </button>
      </form>
    </>
  );
}

const dispatchProps = (dispatch) => ({
  handleSubmit: (data) => dispatch(contactSubmit(data)),
});

export default connect(null, dispatchProps)(Form);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
