import { v4 as uuidv4 } from 'uuid';

export const createUniqueId = () => {
  let uniqueId : string = uuidv4()

  return uniqueId
}

