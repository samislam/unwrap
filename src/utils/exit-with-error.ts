export function existWithError(message: string): never {
  console.error(message)
  process.exit(-1)
}
