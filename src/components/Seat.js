import { useState } from "react";
import styled from "styled-components";

export default function Seat({id,name,isAvailable,seats,setSeats}){
    const selectedColor = "#1AAE9E";
    const selectedBorder = "#0E7D71"
    const availableColor = "#C3CFD9"
    const availableBorder = "#808F9D"
    const unavailableColor = "#FBE192"
    const unavailableBorder = "#F7C52B"

    const [selected,setSelected] = useState(false);
    

    function selectSeat(){
        if(isAvailable){
            setSelected(!selected);
            const aux = [...seats];
            aux.push(id);
            setSeats(aux);
        }else{
            alert("Esse assento não está disponível");
        }
    }

    function changeColor(isAvailable,selected){
       if(!isAvailable){
        return unavailableColor;
       }else{
            if(selected){
                return selectedColor;
            }else
                return availableColor;
       }
    }

    function changeBorderColor(isAvailable,selected){
        if(!isAvailable){
            return unavailableBorder;
           }else{
                if(selected){
                    return selectedBorder;
                }else
                    return availableBorder;
           }
    }


    return (
        <SeatItem 
            isAvailable={isAvailable}
            selected={selected}
            changeColor={changeColor}
            changeBorderColor={changeBorderColor}
            onClick={selectSeat}
        >
            {name > 9 ? name : `0${name}`}
        </SeatItem>
    );
}

const SeatItem = styled.div`
    border: 1px solid ${(props) => props.changeBorderColor(props.isAvailable, props.selected)};     
    background-color: ${(props) => props.changeColor(props.isAvailable, props.selected)};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`