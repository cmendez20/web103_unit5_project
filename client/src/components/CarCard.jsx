import carCardStyles from './CarCard.module.css';

export function CarCard({ props }) {
  return (
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
    </div>
  );
}
