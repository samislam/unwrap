#!/usr/bin/env bun

import { rmdir } from 'fs/promises'
import { registerCli } from './cli'
import { unwrap } from './utils/unwrap'
import { isDirectory } from './utils/is-directory'
import { checkExistence } from './utils/check-existence'
import { existWithError } from './utils/exit-with-error'

export async function main(directory: string, autoDelete: boolean = false) {
  // Check if the directory exists
  if (!(await checkExistence(directory))) existWithError('Directory does not exist!')
  // Check if its a directory not a file
  if (!(await isDirectory(directory))) existWithError(`Error: '${directory}' is not a directory`)
  // do the unwrapping process
  await unwrap(directory)
  // optionally delete the empty folder
  if (autoDelete) await rmdir(directory)
}

registerCli()
