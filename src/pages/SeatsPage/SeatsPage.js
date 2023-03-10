import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Caption from "../../components/Caption";
import Form from "../../components/Form";
import Seat from "../../components/Seat";


export default function SeatsPage({ seats, setSeats,setTitle, setDate, setTime, name, setName, cpf, setCpf }) {
    const [ids, setIds] = useState([]);
    const [sessao, setSessao] = useState(undefined);
    const { idSessao } = useParams();
    //console.log(ids);
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);
        promise.then(response => {
            setSessao(response.data);
        });
    }, [])

    function updateData(){
            setTitle(sessao.movie.title);
            setDate(sessao.day.date);
            setTime(sessao.name);
    }

    if (sessao === undefined) {
        return <div>Carregando...</div>
    }

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {sessao.seats.map((a) => (
                    <Seat
                        key={a.id}
                        id={a.id}
                        name={a.name}
                        isAvailable={a.isAvailable}
                        ids={ids}
                        setIds={setIds}
                        seats={seats}
                        setSeats={setSeats}
                        updateData={updateData}
                    />
                ))}
            </SeatsContainer>
            <Caption />
            <Form ids={ids} name={name} setName={setName} cpf={cpf} setCpf={setCpf}/>
            <FooterContainer data-test="footer">
                <div>
                    <img src={sessao.movie.posterURL} alt="poster" />
                </div>
                <div>
                    <p>{sessao.movie.title}</p>
                    <p>{sessao.day.weekday} - {sessao.name}</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`