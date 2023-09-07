import { CharacterData } from '../data/characterData'


interface useUpdateNonNestedCharacterValueProps {
  objKey: string
  charEditIndex: number
  newValue: CharacterData[]
  setCombatants: (value: CharacterData[]) => void
}

const updateNonNestedCharacterValue = (
  objKey: string,
  newValue: CharacterData[],
  setCombatants: (value: CharacterData[]) => void,
  charEditIndex: number
) => {
  setCombatants((prevState) => {
    const newState = prevState.map((obj: CharacterData, index: number) => {
      // 👇️ if the passed charIndex equals the map index, update provided property
      if (charEditIndex === index) {
        return { ...obj, [objKey]: newValue }
      }

      // 👇️ otherwise return object as is
      return obj
    })

    return newState
  })
}

export default updateNonNestedCharacterValue
