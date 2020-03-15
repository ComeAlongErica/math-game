class Utility {
  static getInputValue(elementId: string): string {
    const inputElm: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId)
    return inputElm.value
  }
}