import { FieldValues } from "react-hook-form";
import HForm from "../../components/form/HForm";
import HInput from "../../components/form/HInput";
import { Button } from "antd";

const RegistrarDashboard = () => {

    const handleSubmit = (data: FieldValues) => {
        console.log(data);
    }

    return (
        <div>
            <HForm onSubmit={handleSubmit}>
                <div>
                    <div className="grid grid-cols-2 gap-3">
                        <HInput type="text" name={`education.1.degree`} label="Dregree" placeholder="Enter degree" required  />
                        <HInput type="text" name={`education.1.university`} label="University" placeholder="Enter university" required  />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <HInput type="text" name={`education.2.degree`} label="Dregree" placeholder="Enter degree" required  />
                        <HInput type="text" name={`education.2.university`} label="University" placeholder="Enter university" required  />
                    </div>
                    <Button htmlType="submit">Submit</Button>
                </div>
            </HForm>
        </div>
    );
};

export default RegistrarDashboard;