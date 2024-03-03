import React, { useState, useEffect } from "react";
import UserModal from "./UserModal";

const UserTable = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [usersData, setUsersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsersData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const openModal = (user) => {
    setSelectedUser(user);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setModalIsOpen(false);
  };

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = usersData.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="overflow-x-auto m-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 px-4 border">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 border">
              Name
            </th>
            <th scope="col" className="px-6 py-3 border">
              Username
            </th>
            <th scope="col" className="px-6 py-3 border">
              Email
            </th>
            <th scope="col" className="px-6 py-3 border">
              Phone
            </th>
            <th scope="col" className="px-6 py-3 border">
              Website
            </th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr
              key={user.id}
              className="bg-white"
              onClick={() => openModal(user)}
            >
              <td className="px-6 py-4 font-medium text-gray-900 border">
                {user.name}
              </td>
              <td className="px-6 py-4 border">{user.username}</td>
              <td className="px-6 py-4 border">{user.email}</td>
              <td className="px-6 py-4 border">{user.phone}</td>
              <td className="px-6 py-4 border">{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center mt-4">
        {Array.from(
          { length: Math.ceil(usersData.length / usersPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-300 ${
                currentPage === index + 1 ? "bg-gray-300" : ""
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>

      <UserModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        user={selectedUser}
      />
    </div>
  );
};

export default UserTable;
