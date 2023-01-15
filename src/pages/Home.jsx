import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import information from "../illustrations/information.svg";

function Home() {
  const illustrationStyle = {
    maxWidth: "300px",
    display: "block",
    marginRight: "auto",
    marginLeft: "auto",
  };

  return (
    <div>
      <img alt="Inforation Flow" style={illustrationStyle} src={information} />

      <h1>Olá</h1>
      <div>
        <p>
          Este projeto é um aplicativo CRUD (Create, Read, Update, Delete)
          desenvolvido utilizando as seguintes tecnologias:
        </p>
        <ul>
          <li>React (Frontend)</li>
          <li>Java Spring (Backend)</li>
          <li>Docker</li>
          <li>Nginx</li>
        </ul>
      </div>
      <Link to="/list">
        <Button style={{width: "100%"}}>Ir para lista</Button>
      </Link>
    </div>
  );
}

export default Home;
