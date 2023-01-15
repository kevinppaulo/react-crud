import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { getStudents } from "../service/student-api";
import StudentListItem from "../components/StudentListItem";
import NobodyHere from "../components/NobodyHere";
import { Link } from "react-router-dom";

import { refresh } from '../store/student-slice';
import { useSelector, useDispatch } from "react-redux";

function List() {

  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  useEffect(() => {
    getStudents().then((students) => {
      dispatch(refresh(students));
    });
  }, []);

  return (
    <div>
      <ListGroup>
        {students.map((student) => (
          <StudentListItem
            key={student.id}
            student={student}
          />
        ))}
      </ListGroup>

      {students.length === 0 && <NobodyHere />}

      <Link to="/new">
        <Button variant="primary" className="mt-4" style={{ width: "100%" }}>
          +Adicionar Novo
        </Button>
      </Link>
    </div>
  );
}

export default List;
