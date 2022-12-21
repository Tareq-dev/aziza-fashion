import { useEffect, useState } from "react";

const useUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, [users._id]);

    return [users, setUsers];
};
export default useUsers;