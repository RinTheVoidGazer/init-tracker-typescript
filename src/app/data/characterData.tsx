import { createUniqueId } from '../utils/functions/createUniqueId';

interface CharacterStatus {
  name: string;
  duration: number;
}

const characterData = [
  {
    id: createUniqueId(),
    name: "",
    statuses: [] as CharacterStatus[],
    curHp: 0,
    maxHp: 0,
    init: 0,
    ac: 0,
    isEnemy: false,
    isMainParty: false, // TODO Flag that always excludes character from the Clear Combatants button
    keepAfterClear: false, // TODO Flag to exclude character from the Clear Combatants button
  },
]


export type CharacterData = typeof characterData[0]
export type CharacterDataKey = keyof typeof characterData[0]
export type CharacterStatuses = CharacterStatus

export default characterData
