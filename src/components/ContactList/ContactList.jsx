// import PropTypes from "prop-types";
import css from './ContactList.module.css';
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contactSlice';



const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => {
        return state.contacts.items.filter(item =>
            item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim())
    );
  });
        return (
            <>
            <ul className={css.contactList}>
                {contacts.map(item => {
                    return (
                        <li key={nanoid()} className={css.contactsItem}>
                        <p>
                            {item.name}: <span>{item.number}</span>
                        </p>
                        <button className={css.itemBtn}
                                onClick={() => dispatch(deleteContact(item.id))}>Delete</button>
                                {/* handlerDelete */}
                        </li>
                    );
                })}
            </ul>
            </>
        );
    }
// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//         id: PropTypes.string,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//         })
//     ).isRequired,
//     handlerDelete: PropTypes.func.isRequired,
// };
export default ContactList