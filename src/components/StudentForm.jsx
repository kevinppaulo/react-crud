import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { uploadPicture } from "../service/student-api";
import Image from "react-bootstrap/Image";

function StudentForm({ student, onSubmit }) {
  const [formData, setFormData] = useState(student);

  useEffect(() => {
    setFormData(student);
  }, [student]);

  const fallbackImage = "https://www.gravatar.com/avatar/?d=mp";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = async (e) => {
    const pictureUrl = await uploadPicture(e.target.files[0]);
    setFormData({ ...formData, photo: pictureUrl });
  };


  return (
    <>
      <Row style={{ justifyContent: "center" }}>
        <Image alt="carregando..." src={formData?.photo || fallbackImage} roundedCircle style={{ objectFit: "cover", maxWidth: "120px", aspectRatio: 1 / 1, padding: "0px" }} />
      </Row>

      <Form onSubmit={(event) => onSubmit(event, formData)}>

        <Row>
          <Form.Control
            type="hidden"
            name="id"
            value={formData?.id}
          />

          <Form.Group as={Col} controlId="formGroupName">
            <Form.Label>Nome *</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Digite o nome (obrigatório)"
              onChange={handleChange}
              required
              value={formData?.name}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGroupAddress">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="text"
              name="address"
              placeholder="Digite o endereço"
              onChange={handleChange}
              value={formData?.address}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGroupPhone">
            <Form.Label>Telefone *</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Digite o telefone (obrigatório)"
              required
              onChange={handleChange}
              value={formData?.phone}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGroupFile">
            <Form.Label>Foto</Form.Label>
            <Form.Control
              type="file"
              name="picture"
              onChange={handleFileChange}
            />
          </Form.Group>
        </Row>

        <Button style={{ marginTop: "1rem", width: "100%" }} variant="primary" type="submit">
          enviar
        </Button>
      </Form>
    </>

  );
}

export default StudentForm;
