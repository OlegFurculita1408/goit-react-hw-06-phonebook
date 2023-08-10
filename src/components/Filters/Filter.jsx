// import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    const handleFilterChange = e => {
        dispatch(filterContacts(e.target.value));
  };
        return (
            <div className={css.containerFilter}>
                <label htmlFor="fiind">Find contacts by name</label>
                    <input type="text"
                        onChange={handleFilterChange}
                        value={filter}
                />
            </div>
            )
}
// Filter.propTypes = {
//   handleFilterChange: PropTypes.func.isRequired,
//   filterValue: PropTypes.string.isRequired,
// };
export default Filter