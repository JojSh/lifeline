import React from 'react'
import { configure, render } from 'enzyme'
import Cell from './components/Cell'

import Adapter from 'enzyme-adapter-react-15'
configure({ adapter: new Adapter() })

function cell (markedCells) {
  return (
    <Cell
      year={1986}
      month={'November'}
      markedCells={markedCells}
    />
  )
}

describe('Cell', () => {
  it('will not be marked if it is not a marked cell', () => {
    expect(render(cell([])).find('.cell-marker').length).toBe(0)
  })

  it('will be marked if it is a marked cell', () => {
    expect(render(cell([{ year: 1986, month: 'November' }])).find('.cell-marker').length).toBe(1)
  })
})
