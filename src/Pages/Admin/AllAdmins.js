import React, { useState } from "react";
import useUsers from "../../Hooks/useUsers";
import { toast } from "react-hot-toast";

function AllAdmins() {
  const [users] = useUsers([]);
  // const remaining = products.filter((product) => product._id !== id);
  // setProducts(remaining);
  const admin = users.filter((u) => u.role === "admin");

  const removeUser = (email) => {
    fetch(`http://localhost:5000/api/admin/${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount) {
          toast.success("Deleted Admin");
        }
      });
  };

  return (
    <div>
      <p className="text-center py-5 md:text-4xl">All Admin</p>

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
            {admin?.map((user, i) => (
              <tr user={user} key={user?._id}>
                <td>{i + 1}</td>
                <td>{user?.email} </td>
                <td>{user?.role ? "Admin" : "User"}</td>
                <td>
                  <button
                    onClick={() => removeUser(user?.email)}
                    className="btn btn-xs btn-error text-white"
                  >
                    Remove User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllAdmins;
