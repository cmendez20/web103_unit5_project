import { useForm } from 'react-hook-form';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import '../App.css';

async function addCar(carDetails) {
  await fetch('/api/cars', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(carDetails),
  });
}

const CreateCar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: addCar,
    onSuccess: async () => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({ queryKey: ['cars'] });
      navigate('/customcars');
    },
  });

  const onSubmit = data => mutation.mutate(data);

  return (
    <div>
      <h2>Get started by creating your own custom car!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <input
          placeholder="Custom Car Name"
          {...register('name', { required: true })}
        />
        {errors.name && <span>Custom car name is required</span>}

        {/* Exterior Color */}
        <select {...register('exterior_color', { required: true })}>
          <option value="">Select Exterior Color</option>
          <option value="Midnight Black">Midnight Black</option>
          <option value="Pearl White">Pearl White</option>
          <option value="Crimson Red">Crimson Red</option>
        </select>
        {errors.exterior_color && <span>Exterior color is required</span>}

        {/* Roof */}
        <select {...register('roof', { required: true })}>
          <option value="">Select Roof</option>
          <option value="Panoramic Glass">Panoramic Glass</option>
          <option value="Matte Black">Matte Black</option>
          <option value="Body Color">Body Color</option>
        </select>
        {errors.roof && <span>Roof type is required</span>}

        {/* Wheels */}
        <select {...register('wheels', { required: true })}>
          <option value="">Select Wheels</option>
          <option value="18-inch Alloy">18-inch Alloy</option>
          <option value="19-inch Sport">19-inch Sport</option>
          <option value="20-inch Performance">20-inch Performance</option>
        </select>
        {errors.wheels && <span>Wheel Type is required</span>}

        {/* Interior */}
        <select {...register('interior', { required: true })}>
          <option value="">Select Interior</option>
          <option value="Black Leather">Black Leather</option>
          <option value="Tan Fabric">Tan Fabric</option>
          <option value="Gray Suede">Gray Suede</option>
        </select>
        {errors.interior && <span>Interior Type is required</span>}

        {/* Price */}
        <input
          type="number"
          step="0.01"
          placeholder="Price"
          {...register('price', { required: true, min: 0 })}
        />
        {errors.price && <span>Price is required</span>}

        <input type="submit" value="Create Car" />
      </form>
    </div>
  );
};

export default CreateCar;
