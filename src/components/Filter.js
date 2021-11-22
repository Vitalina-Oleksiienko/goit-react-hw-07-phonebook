import React from "react";
import style from "./contacts.module.css";

import { useDispatch } from "react-redux";
import { changeFilter } from "../redux/action";

export default function Filter() {
  const dispatch = useDispatch();

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
          dispatch(changeFilter(e.target.value.toLowerCase()));
        }}
      ></input>
    </>
  );
}
