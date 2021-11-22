import React from "react";
import PropTypes from "prop-types";
import style from "./contacts.module.css";
import { connect } from "react-redux";
import { contactDelete } from "../redux/action";

function ContactList({ contacts, filter, handleDelete }) {
  const filterContacts = () => {
    return contacts.filter((el) => {
      const array = el.name.toLowerCase().split(" ");

      for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase().match(new RegExp(`^${filter}`)) !== null) {
          return true;
        }
      }
      return false;
    });
  };

  return (
    <ul className={style.list}>
      {filterContacts().map((el) => (
        <li className={style.listItem} key={el.id}>
          {el.name}: {el.number}
          <button
            type="button"
            className={style.btnDelete}
            id={el.id}
            onClick={handleDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

const stateProps = (state) => {
  return {
    contacts: state?.contacts ?? [],
    filter: state?.filter ?? "",
  };
};

const dispatchProps = (dispatch) => ({
  handleDelete: (e) => dispatch(contactDelete(e.target.id)),
});

export default connect(stateProps, dispatchProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
