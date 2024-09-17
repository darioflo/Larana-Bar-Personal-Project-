import { useEffect, useState } from "react";
import CardUser from "../CardUser/CardUser";
import "./Team.css";
import { TeamUsers } from "../../types";
import axios, { AxiosResponse } from "axios";

const Team: React.FC = () => {
  const [users, setUsers] = useState<TeamUsers[]>([]);

  const getUsers = async (): Promise<void> => {
    try {
      const response: AxiosResponse<{ results: any[] }> = await axios.get(
        "https://randomuser.me/api/?results=3"
      );
      const modifiedUsers: TeamUsers[] = response.data.results.map(
        (element: any) => ({
          name: {
            title: element.name.title,
            first: element.name.first,
            last: element.name.last,
          },
          cell: element.cell,
          email: element.email,
          city: element.location.city,
          country: element.location.country,
          dob: {
            age: element.dob.age,
          },
          picture: {
            thumbnail: element.picture.thumbnail,
          },
        })
      );
      setUsers(modifiedUsers);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="users-container">
      {users.map((user, index) => (
        <CardUser key={index} user={user} />
      ))}
    </div>
  );
};

export default Team;
