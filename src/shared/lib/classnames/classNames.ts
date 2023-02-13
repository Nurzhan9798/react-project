type Mods = Record<string, string | boolean>

export function classNames (
  mainCls: string,
  mods: Mods = {},
  additionalCls: string[] = []
): string {
  const result = [
    mainCls,
    ...additionalCls.filter(Boolean),
    ...Object.entries(mods)
      .filter(([classname, value]) => Boolean(value))
      .map(([classname]) => classname)
  ].join(' ')
  console.log('clasnames', result)
  return result
}
