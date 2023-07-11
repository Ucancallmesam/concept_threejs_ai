import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'
const ColorPicker = () => {
    const snap = useSnapshot(state);
  return (
    <div className='absolute left-full ml-3'>
        <SketchPicker 
            color={snap.color}
            disableAlpha
            presetColors={[
                '#461E52',
                '#DD517F',
                '#E68E36',
                '#556DC8',
                ' #7998EE',
            ]}
            onChange={(color) => state.color = color.hex}
        />
    </div>
  )
}

export default ColorPicker