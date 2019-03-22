export const ADD_COLUMN = 'ADD_COLUMN'
export const REMOVE_COLUMN = 'REMOVE_COLUMN'

export function addColumn(column) {
    return {
        type: ADD_COLUMN,
        column: column
    }
}

export function removeColumn(column) {
    console.log(column)
    return {
        type: REMOVE_COLUMN,
        column: column
    }
}
