import React from "react";
import { toast } from "react-toastify";
import useUsers from "../../Hooks/useUsers";

function AllCustomers() {
  const [users] = useUsers([]);

  const makeAdmin = (email) => {
    fetch(`http://localhost:5000/api/users/admin/${email}`, {
      method: "PUT",
      headers: {
        // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.statusCode === 403) {
          toast.error("Made Admin Fail");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Made Admin Successfully");
        }
      });
  };

  return (
    <div>
      <p className="text-center py-5 md:text-4xl">All Customers</p>

      <div className="overflow-x-auto px-2">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>Roll</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr user={user} key={user._id}>
                <td>{i + 1}</td>
                <td>{user?.email} </td>
                <td>{user?.role ? "Admin" : "User"}</td>
                <td>
                  {user?.role !== "admin" ? (
                    <button
                      onClick={() => makeAdmin(user?.email)}
                      className="btn btn-xs btn-success text-white"
                    >
                      make Admin
                    </button>
                  ) : (
                    "Already Admin"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllCustomers;
