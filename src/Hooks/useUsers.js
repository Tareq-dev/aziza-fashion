import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://aziza-fashion-world.onrender.com/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users._id]);

  return [users, setUsers];
};
export default useUsers;
