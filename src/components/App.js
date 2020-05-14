import React from 'react';
import './App.css';
import Header from "./header/Header";
import Container from "@material-ui/core/Container";
import MemeGeneratorContainer from "./meme-generator/MemeGeneratorContainer";

export default function App() {
  return (
    <div>
      <Header/>
      <Container maxWidth="md">
        <MemeGeneratorContainer/>
      </Container>
    </div>
  );
}
