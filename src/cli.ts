import { Command } from 'commander'
import { main } from '.'
import { existWithError } from './utils/exit-with-error'

export const registerCli = () => {
  const program = new Command()

  program
    .name('unwrap')
    .description('Move all contents of a directory to its parent directory.\n\nIslam Yamor [2025].')
    .argument('<directory>', 'Directory to unwrap')
    .option('-d, --delete', 'Delete the empty directory after unwrapping')
    .action(
      async (directory, options) =>
        await main(directory, options.delete).catch((error: any) => {
          existWithError(error.message)
        })
    )
  return program.parse(process.argv)
}
