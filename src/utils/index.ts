import { useMemo } from 'react'

export const useClassNames = (...names: ReadonlyArray<string | undefined>) => {
  return useMemo(() => names.filter((name) => !!name).join(' '), [names])
}
