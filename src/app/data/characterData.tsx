const characterData = [
  {
    id: 'fancy id',
    name: "",
    statuses: [] as string[],
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

export default characterData
