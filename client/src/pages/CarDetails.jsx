import { useLocation } from 'react-router-dom';
import { CarCardDetails } from '../components/CarCardDetails';
import '../App.css';

const CarDetails = () => {
  let { state } = useLocation();
  return <CarCardDetails props={state} />;
};

export default CarDetails;
