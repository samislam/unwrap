import { readdir, rename } from 'fs/promises'
import { join, basename, dirname } from 'path'
import { checkExistence } from './check-existence'

export async function unwrap(directory: string) {
  const parentDir = dirname(directory)
  const files = await readdir(directory, { withFileTypes: true })
  if (files.length === 0) {
    console.error(`The directory '${directory}' is already empty.`)
    return
  }
  for (const file of files) {
    const oldPath = join(directory, file.name)
    let newPath = join(parentDir, file.name)

    // Prevent overwriting existing files
    let counter = 1
    while (await checkExistence(newPath)) {
      newPath = join(parentDir, `${basename(file.name)}_copy${counter}`)
      counter++
    }

    await rename(oldPath, newPath)
    console.log(`Moved: ${oldPath} → ${newPath}`)
  }
}
