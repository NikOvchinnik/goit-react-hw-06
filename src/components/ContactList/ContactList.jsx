import Contact from "../Contact/Contact";
import style from "./ContactList.module.css"

const ContactList = ({ contactsFiltred, onDelete }) => {
  return (
    <ul className={style.contactList}>
      {contactsFiltred.map((contact) => {
        return (
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
