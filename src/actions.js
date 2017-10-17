export default {
  markCell, unmarkCell, updateNewEraName, saveNewEra
}

function markCell (get, split, payload) {
  const state = get()
  const newMarkedCells = [...state.newEra.markedCells, payload]
  split({
    newEra: Object.assign(state.newEra, {
      markedCells: newMarkedCells
    })
  })
}

function unmarkCell (get, split, payload) {
  const state = get()
  const indexToDelete = state.newEra.markedCells.findIndex((markedCell) => {
    return (markedCell.year === payload.year && markedCell.month === payload.month)
  })
  const newMarkedCells = [
    ...state.newEra.markedCells.slice(0, indexToDelete),
    ...state.newEra.markedCells.slice(indexToDelete + 1)
  ]
  split({
    newEra: Object.assign(state.newEra, {
      markedCells: newMarkedCells
    })
  })
}

function updateNewEraName (get, split, payload) {
  const state = get()
  split({
    newEra: Object.assign(state.newEra, {
      name: payload
    })
  })
}

function saveNewEra (get, split, payload) {
  const state = get()
  const newSavedEras = [payload, ...state.savedEras]
  split({
    savedEras: newSavedEras,
    newEra: {
      name: '',
      markedCells: []
    }
  })
}
