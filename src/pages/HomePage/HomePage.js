import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"
import Movie from "../../components/Movie"

export default function HomePage() {
    const [movies,setMovies] = useState(undefined);

    useEffect(() => {
        const url = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
        const promise = axios.get(url);
        promise.then((response) => {
            setMovies(response.data)
            console.log(response.data)
        });
        promise.catch(err => console.log(err));
    },[]);

    if(movies === undefined){
        return <div>Carregando...</div>
    }

    return (
        <PageContainer>
            Selecione o filme
            <ListContainer>
                {movies.map((movie) => (
                    <Link to={`/sessoes/${movie.id}`}>
                        <Movie posterUrl={movie.posterURL}/>
                    </Link>
                ))}
            </ListContainer>
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
    padding-top: 70px;
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
