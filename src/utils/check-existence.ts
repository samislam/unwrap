import to from 'await-to-js'
import { readdir } from 'fs/promises'

/** Helper function to check if a file exists */
export async function checkExistence(path: string): Promise<boolean> {
  const [err] = await to(readdir(path))
  if (err) return false
  else return true
}
