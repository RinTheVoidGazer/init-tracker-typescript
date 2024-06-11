// React
import { useState } from 'react'

// MUI
import { TextField } from '@mui/material'
import { useUpdateCombatant } from '../../hooks/useUpdateCombatant'
import { useCombatantInfo } from '../../../combatants/hooks/useCombatantInfo'

// Functions

interface DamageInputProps {
  charId: string
}

const DamageInput = ({ charId }: DamageInputProps) => {
  const [inputValue, setInputValue] = useState(0)

  const { updateCombatant } = useUpdateCombatant()
  const { getCharacterProp } = useCombatantInfo()

  const curHp = getCharacterProp(charId, 'curHp') as number
  const maxHp = getCharacterProp(charId, 'maxHp') as number

  const handleHpCalc = (curHp: number, maxHp: number, value: number) => {
    return curHp - value > maxHp ? maxHp : curHp - value
  }

  return (
    <TextField
      label="Damage"
      variant="filled"
      type="number"
      size="small"
      style={{ width: '80px' }}
      value={inputValue}
      onChange={(e: any) => setInputValue(e.target.value)}
      onBlur={
        (e: any) =>
          updateCombatant(
            charId,
            'curHp',
            handleHpCalc(curHp, maxHp, e.target.value)
          )
      }
    />
  )
}

export default DamageInput
