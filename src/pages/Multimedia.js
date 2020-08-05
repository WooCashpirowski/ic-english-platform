import React from "react";
import { useParams } from "react-router-dom";

const Multimedia = () => {
  const { id } = useParams();
  return <h1>hello from multimedia no: {id}</h1>;
};

export default Multimedia;
