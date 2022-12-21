import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const useToken = (user) => {
    const [token, setToken] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        const email = user?.user?.email;
        const existingUser = { email: email };

        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(existingUser),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.acknowledged) {
                        navigate("/")
                    }
                    // const secretToken = data.token;
                    // localStorage.setItem("accessToken", secretToken);
                    // setToken(secretToken);
                });
        }
    }, [user,navigate]);
    return [token,setToken];
};
export default useToken;