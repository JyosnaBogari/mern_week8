import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'


function AddUser() {
   let { register, handleSubmit, formState: { errors } } = useForm()
   let [error, setError] = useState(null);
   let [loading, setLoading] = useState(true)
   const navigate = useNavigate();

   //after form submit the user details will be return to here (newUser)
   const onUserCreate = async (newUser) => {
      try {
        // making an API request
        //this will sends to the backend server
         let res = await fetch("https://mern-week8-3.onrender.com/user-api/users", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
        //  convert Js object to Json
            body: JSON.stringify(newUser)
         });

        //  checking res status code
         if (res.status === 201) {
          // navigate to userlist component
          
            navigate('/userlist')
         } else {
          // manual error handling
            throw new Error("Error Occured")
         }
      } catch (err) {
         setError(err.message)
      } finally {
        // setLoading to false
         setLoading(false)
      }
   }

   return (
  <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
    <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Add New User</h1>
    <form onSubmit={handleSubmit(onUserCreate)} className="flex flex-col space-y-4">
      
      <input 
        type="text" 
        placeholder="Name"
        {...register("name", { required: true })} 
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input 
        type="text" 
        placeholder="Email"
        {...register("email", { required: true })} 
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input 
        type="date" 
        
        {...register("dateOfBirth", { required: true })} 
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input 
        type='number'
        placeholder="Mobile Number"
        {...register("mobileNumber", { required: true })} 
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button 
        type="submit" 
        className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Add User
      </button>
    </form>
  </div>
);
}

export default AddUser