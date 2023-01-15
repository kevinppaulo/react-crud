import ListGroup from "react-bootstrap/ListGroup";
import Image from 'react-bootstrap/Image';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { refresh } from '../store/student-slice';
import Button from "react-bootstrap/Button";

import { getStudents, deleteStudent } from "../service/student-api";


function StudentListItem({ student }) {
  const editLink = "/edit/" + student.id;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDeleteClicked = async (event) => {
    event.preventDefault();
    if (window.confirm("Tem certeza que deseja excluir este aluno?") === false) return;
    await deleteStudent(student);
    const students = await getStudents();
    dispatch(refresh(students));
    navigate("/list");
  };

  return (
    <Link to={editLink} style={{ textDecoration: "none" }}>
      <ListGroup.Item>
        <Image src={student.photo} roundedCircle width={40} height={40} style={{ marginRight: "2rem", objectFit: "cover" }} />
        <span>{student.name}</span>
        <Button title="Excluir estudante" onClick={onDeleteClicked} variant="light" style={{ position: "absolute",  right: "1rem" }} >
          <i className="fa-solid fa-trash-can text-danger" ></i>
        </Button>
      </ListGroup.Item>
    </Link>
  );
}

export default StudentListItem;
