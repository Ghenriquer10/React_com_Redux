import React from "react";
import './reserva.css'
import {MdDelete, MdAddCircle, MdRemoveCircle} from 'react-icons/md'
import { useSelector, useDispatch } from "react-redux";
import { removeReserva,  updateAmountRequest } from "../../store/modules/reserve/actions";

export default function Reservas(){
    const reservas = useSelector(state => state.reserve)
    const dispatch = useDispatch();

    function handleRemove(id){
        dispatch(removeReserva(id))
    }

    function decrementAmount(trip){
        dispatch(updateAmountRequest(trip.id, trip.amount - 1))
    }

    function incrementAmount(trip){
        dispatch(updateAmountRequest(trip.id, trip.amount + 1))
    }

    return(
        
        <div>
            <h1 className="title">Você solicitou {reservas.length} reserva(s)</h1>
            {reservas.map(reserva => {
                return(
                    <div className="reservas" key={reserva.id}>
                        <img src={reserva.image} alt={reserva.title}/>
                        <strong>{reserva.title}</strong>
                        <div className="botoes">
                            <button onClick={() => decrementAmount(reserva)}>
                                <MdRemoveCircle size={15} color="blue"/>
                            </button>
                            <input type="text" readOnly value={reserva.amount}/>
                            <button onClick={() =>incrementAmount(reserva)}>
                                <MdAddCircle size={15} color="blue"/>
                            </button>
                        </div>
                        <button type="button" onClick={() => handleRemove(reserva.id)} >
                            <MdDelete size={20} color="#000"/>
                        </button>
                    </div>
                )
            })}
            <footer>
                <button type="button">Solicitar reservas!!</button>
            </footer>
        </div>
    )
}