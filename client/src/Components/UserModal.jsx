import React from "react";
import Modal from "react-modal";

const UserModal = ({ isOpen, onClose, user }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="User Details">
      {user && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-blue-200 p-7 rounded-lg z-10">
            <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
            <table className="w-full mb-4">
              <tbody>
                <tr>
                  <td className="pr-4 font-medium">ID:</td>
                  <td>{user.id}</td>
                </tr>
                <tr>
                  <td className="pr-4 font-medium">Username:</td>
                  <td>{user.username}</td>
                </tr>
                <tr>
                  <td className="pr-4 font-medium">Email:</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td className="pr-4 font-medium">Phone:</td>
                  <td>{user.phone}</td>
                </tr>
                <tr>
                  <td className="pr-4 font-medium">Website:</td>
                  <td>
                    <a
                      href={`https://${user.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {user.website}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="pr-4 font-medium">Address:</td>
                  <td>
                    {user.address.street}, {user.address.suite},{" "}
                    {user.address.city}, {user.address.zipcode}
                  </td>
                </tr>
                <tr>
                  <td className="pr-4 font-medium">Company:</td>
                  <td>{user.company.name}</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-center">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gray-950 text-white rounded-xl"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default UserModal;
