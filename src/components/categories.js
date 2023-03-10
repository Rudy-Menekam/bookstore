import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <button type="button" className="statusBtn" onClick={() => handleStatus()}>CHECK STATUS </button>
      <span className="status">{status}</span>
    </>
  );
};
export default Categories;
