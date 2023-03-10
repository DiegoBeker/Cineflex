import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"

export default function App() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [seats, setSeats] = useState([]);
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    //console.log(seats);
    function resetData() {
        setTitle("");
        setDate("");
        setTime("");
        setSeats([]);
        setName("");
        setCpf("");
    }

    return (
        <BrowserRouter>
            <NavContainer>CINEFLEX</NavContainer>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sessoes/:idFilme" element={<SessionsPage />} />
                <Route
                    path="/assentos/:idSessao"
                    element={
                        <SeatsPage
                            seats={seats}
                            setSeats={setSeats}
                            setTitle={setTitle}
                            setDate={setDate}
                            setTime={setTime}
                            name={name}
                            setName={setName}
                            cpf={cpf}
                            setCpf={setCpf}
                        />
                    }
                />
                <Route
                    path="/sucesso"
                    element={
                        <SuccessPage
                            title={title}
                            date={date}
                            time={time}
                            seats={seats}
                            name={name}
                            cpf={cpf}
                            resetData={resetData}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
