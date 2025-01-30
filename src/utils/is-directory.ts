import to from 'await-to-js'
import { stat } from 'fs/promises'
import { existWithError } from './exit-with-error'

export async function isDirectory(path: string) {
  const [err, pathStat] = await to(stat(path))
  if (err) existWithError(err.message)
  return pathStat.isDirectory()
}
