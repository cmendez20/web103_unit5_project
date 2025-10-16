import { useQueryClient, useMutation } from '@tanstack/react-query';
import carCardStyles from './CarCard.module.css';
import { Link, useNavigate } from 'react-router-dom';

async function deleteCar(id) {
  await fetch(`/api/cars/${id}`, {
    method: 'DELETE',
  });
}

export function CarCardDetails({ props }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: deleteCar,
    onSuccess: async () => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({ queryKey: ['cars'] });
      navigate('/customcars');
    },
  });

  return (
    <div>
      <h2>Custom Car #{props.id} Details</h2>
      <div className={carCardStyles.card}>
        <p>
          <strong>Name:</strong> {props.name}
        </p>
        <p>
          <strong>Exterior Color:</strong> {props.exterior_color}
        </p>
        <p>
          <strong>Roof:</strong> {props.roof}
        </p>
        <p>
          <strong>Wheels:</strong> {props.wheels}
        </p>
        <p>
          <strong>Interior:</strong> {props.interior}
        </p>
        <p>
          <strong>Price:</strong> ${props.price}
        </p>
        <div className="button-container">
          <Link to={`/edit/${props.id}`} state={props} role="button">
            EDIT
          </Link>
          <button
            onClick={() => {
              mutation.mutate(props.id);
            }}
          >
            {mutation.isPending ? 'Deleting Car...' : 'DELETE'}
          </button>
        </div>
      </div>
    </div>
  );
}
