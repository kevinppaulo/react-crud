import umbrella from "../illustrations/umbrella.svg";

function NobodyHere() {
  const illustrationStyle = {
    maxWidth: "300px",
    display: "block",
    marginRight: "auto",
    marginLeft: "auto",
  };

  return (
    <>
      <img alt="Umbrella in a beach" src={umbrella} style={illustrationStyle} />
      <br />
      <h1>Parece que não tem nada por aqui</h1>
      <p>Vamos começar adicionando novos estudantes</p>
    </>
  );
}

export default NobodyHere;
