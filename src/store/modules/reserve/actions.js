export function addReservaRequest(id){
    return {
        type: 'ADD_RESERVE_REQUEST',
        id
    }
}
export function addReservaSuccess(trip){
    return {
        type: 'ADD_RESERVE_SUCCESS',
        trip
    }
}

export function removeReserva(id){
    return {
        type: 'REMOVE_RESERVE',
        id, 
    }
}

export function updateAmountRequest(id, amount){
    return {
        type: 'UPDATE_RESERVE_REQUEST',
        id, 
        amount
    }
}

export function updateAmountSuccess(id, amount){
    return {
        type: 'UPDATE_RESERVE_SUCCESS',
        id, 
        amount
    }
}

