import StudentForm from "../components/StudentForm";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { addStudent, editStudent, getStudents } from "../service/student-api";
import { add, remove, update, refresh } from '../store/student-slice';

function Edit() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const student = useSelector((state) => state.students.find(student => student.id === parseInt(id)));

  const onSubmit = async (event, student) => {
    event.preventDefault();
    console.log(student);

    if (student.id) {
      await editStudent(student);
    } else {
      await addStudent(student);
    }

    dispatch(refresh(await getStudents()));
    navigate("/list");
  };

  return (
    <div>
      <StudentForm onSubmit={onSubmit} student={student}></StudentForm>
    </div>
  );
}

export default Edit;
