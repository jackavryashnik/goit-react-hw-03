import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css'

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <li className={css.contact}>
      <div className={css.contactInfo}>
        <p>
          <IoPersonSharp /> {name}
        </p>
        <p>
          <FaPhoneAlt /> {number}
        </p>
      </div>
      <button className={css.btn} id={id} onClick={(e) => onDelete(e.target.id)}>Delete</button>
    </li>
  );
};

export default Contact;
