import "./App.css";
import { Routes, Route } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JoinForm from "./pages/home/JoinForm";
import HiScore from "./pages/HiScore";
import Play from "./pages/play/Play";

function App() {
  return (
    <VStack justifyContent="space-between" h="100vh" bgColor="gray.100">
      <Header />
      <Routes>
        <Route path="/" element={<JoinForm />} />
        <Route path="/hiscores" element={<HiScore />} />
        <Route path="/play/:id" element={<Play />} />
      </Routes>
      <Footer />
    </VStack>
  );
}

export default App;
