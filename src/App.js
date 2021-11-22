import "./App.css";
import style from "./components/contacts.module.css";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

export default function App() {
  return (
    <div className="App">
      <h1 className={style.title}>Phonebook</h1>
      <Form />
      <h2 className={style.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
