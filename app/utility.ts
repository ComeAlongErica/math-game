function getInputValue(elementId: string): string {
  const inputElm: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId)
  return inputElm.value
}

function logger(message: string): void {
  console.log(message)
}

export { getInputValue as getValue, logger }