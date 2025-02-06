import { FieldValues } from "react-hook-form";
import HForm from "../../components/form/HForm";
import HInput from "../../components/form/HInput";

const AdminDashboard = () => {

  const handleLogin = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center">
      <HForm onSubmit={handleLogin}>
        <div className="space-y-3">
          <div className="flex flex-col">
            <label>Email</label>
            <HInput type='email' name='email' placeholder="Enter email" />
          </div>
          <div>
            <button className="bg-blue-500 w-full py-1 rounded text-white cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </HForm>
    </div>
  );
};

export default AdminDashboard;
