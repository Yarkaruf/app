export const getIsRouterPathInclude = (currentPath: string, paths: string[]) => {
  return paths?.reduce((previousValue, currentValue) => {
    return (previousValue || currentPath.includes(currentValue))
  }, false) || false;
}

