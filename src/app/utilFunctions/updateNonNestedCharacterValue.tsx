import { CharacterData } from '../data/characterData'

const updateNonNestedCharacterValue = (
  objKey: string,
  newValue: any,
  setCombatants: (value: CharacterData[]) => any,
  charEditIndex: number
): void => {
  setCombatants((prevState: CharacterData[]) => {
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
