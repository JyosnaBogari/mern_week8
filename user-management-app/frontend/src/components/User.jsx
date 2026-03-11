import { useLocation } from "react-router";
import { formCard } from "../styles/common";

function User() {
  let { state } = useLocation();

  // if no user selected it show the no user selected
  if (!state || !state.user) {
    return (
      <p className="text-blue-500 text-2xl text-center p-10">
        No Users Found.. Select User
      </p>
    );
  }

  return (
    <div className={`${formCard} max-w-md mx-auto mt-10 shadow-md rounded-lg p-6 bg-white`}>
      
      {/* User Details */}
      <h2 className="text-2xl font-semibold text-center mb-4 text-blue-500">
        User Details
      </h2>

      <div className="space-y-2 text-gray-700">
        <p><span className="font-semibold">Name:</span> {state.user.name}</p>
        <p><span className="font-semibold">Email:</span> {state.user.email}</p>
        <p><span className="font-semibold">DOB:</span> {state.user.dob}</p>
        <p><span className="font-semibold">Mobile:</span> {state.user.mobileNumber}</p>
      </div>

    </div>
  );
}

export default User;