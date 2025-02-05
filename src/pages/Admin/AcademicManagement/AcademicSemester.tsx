import { useGetAllSemesterQuery } from "../../../redux/features/AcademicSemester/academicSemesterApi";

const AcademicSemester = () => {

    const data = useGetAllSemesterQuery('');
    console.log(data.data);

    return (
        <div>
            <h1>This is academic semester</h1>
        </div>
    );
};

export default AcademicSemester;