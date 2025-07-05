import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router"; // react-router-dom theke import korbo
import { useGetUserByIdQuery, useUpdateUserByIdMutation } from "../../redux_rtk/features/users/usersApi";
import Loader from "./Loader";

const EditUser = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: user = {}, isLoading, error } = useGetUserByIdQuery(id);
  const [updateUserById] = useUpdateUserByIdMutation();

  // user data change hole sudhu ekbar reset korbe form ke
  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      reset(user);
    }
  }, [user, reset]);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await updateUserById({ id, ...data, isActive: true }).unwrap();
      alert("User updated successfully");
      navigate("/users");  
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="shadow-md rounded-lg p-8">
      <h2 className="text-xl font-semibold mb-5">Update User</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div>
          <label>Name: </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Enter your name"
            className="border focus:outline-0 ml-3"
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Enter your email"
            className="border focus:outline-0 ml-3"
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            {...register("age", { required: true })}
            type="number"
            placeholder="Enter your age"
            className="border focus:outline-0 ml-3"
          />
        </div>

        <button type="submit" className="px-6 py-2 rounded border text-blue-600">
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
