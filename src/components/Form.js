import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Form({ids,name,setName,cpf,setCpf}) {

    const navigate = useNavigate();

    function bookSeats(e){
        e.preventDefault();
        const body = {ids:ids, name: name, cpf: cpf};
        console.log(body);
        const promise = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",body);
        promise.then((response) =>{
            console.log(response);
            navigate("/sucesso");
        });
    }

    return (
        <form onSubmit={bookSeats}>
            <FormContainer>
                Nome do Comprador:
                <input data-test="client-name" placeholder="Digite seu nome..." value={name} required onChange={(e) => setName(e.target.value)}/>

                CPF do Comprador:
                <input data-test="client-cpf" placeholder="Digite seu CPF..." value={cpf} required onChange={(e) => setCpf(e.target.value)}/>

                <button data-test="book-seat-btn" type="submit">Reservar Assento(s)</button>
            </FormContainer>
        </form>
    );
}

const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`
