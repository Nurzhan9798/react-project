
type Mods =  Record<string, string | boolean>

export function classNames(mainCls: string, mods: Mods, additionalCls: string[]): string {
    return [
        mainCls,
        ...additionalCls,
        ...Object.entries(mods)
            .filter(([classname, value]) => Boolean(value))
            .map(([classname]) => classname)
    ].join(' ');
}