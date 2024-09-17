import "./CardUser.css";
import { TeamUsers } from "../../types";

interface Props {
  user: TeamUsers;
}

const CardUser: React.FC<Props> = ({ user }) => {
  return (
    <div className="card-user">
      <img src={user.picture.thumbnail} />
      <h3>
        {user.name.title} {user.name.first} {user.name.last}
      </h3>
      <p>
        <strong>Teléfono: {user.cell}</strong>
      </p>
      <p>
        <strong>Email: {user.email}</strong>
      </p>
      <p>
        <strong>Ciudad: {user.city}</strong>
      </p>
      <p>
        <strong>País: {user.country}</strong>
      </p>
      <p>
        <strong>Edad: {user.dob.age}</strong>
      </p>
    </div>
  );
};

export default CardUser;
