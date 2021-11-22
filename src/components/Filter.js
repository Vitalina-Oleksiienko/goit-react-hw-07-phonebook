import React from "react";
import PropTypes from "prop-types";
import style from "./contacts.module.css";

import { connect } from "react-redux";
import { changeFilter } from "../redux/action";

function Filter({ handleChange }) {
  return (
    <>
      <label htmlFor="find" className={style.label}>
        Find contacts by name
      </label>
      <input
        className={style.input}
        autoComplete="off"
        id="find"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]"
        onChange={(e) => {
          e.preventDefault();
          handleChange(e);
        }}
      ></input>
    </>
  );
}

const dispatchProps = (dispatch) => ({
  handleChange: (e) => dispatch(changeFilter(e.target.value.toLowerCase())),
});

export default connect(null, dispatchProps)(Filter);

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
