import { Inputs } from '@/app/types/common-types'

const cleanInputs = (inputs: Inputs) => {
  const cleanedInputs = {} as Record<string, unknown>

  for (const key in inputs) {
    const value = inputs[key]

    if (value !== '' && value !== undefined) {
      cleanedInputs[key] = value
    }
  }

  return cleanedInputs
}

export default cleanInputs
