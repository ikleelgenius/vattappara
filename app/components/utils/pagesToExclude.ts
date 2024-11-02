const pagesToExclude = (pathname: string) => [''].some((a: string) => pathname?.includes(a))

export { pagesToExclude }
