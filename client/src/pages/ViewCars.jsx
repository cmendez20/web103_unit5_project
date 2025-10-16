import '../App.css';
import { useQuery } from '@tanstack/react-query';
import { CarCard } from '../components/CarCard';

async function getCars() {
  const res = await fetch('/api/cars');
  const data = await res.json();
  return data;
}

const ViewCars = () => {
  const query = useQuery({ queryKey: ['cars'], queryFn: getCars });

  if (query.isLoading) {
    return <div className="loadingMessage">Fetching all custom cars</div>;
  }
  return (
    <div>
      {query.isFetched && query.data.length < 1
        ? 'No custom cars available'
        : query.data.map(car => <CarCard key={car.id} props={car} />)}
    </div>
  );
};

export default ViewCars;
