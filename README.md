# unwrap

Move all contents of a directory to its parent directory.

# installation

### 1. Download one of the native binaries here:

| Operating system | Download                     |
| ---------------- | ---------------------------- |
| Linux (x64)      | [⬇ Download](./build/unwrap) |

### 2. Move to /bin and grant execution permissions

```sh
$ sudo mv unwrap /bin 
$ cd /bin 
$ sudo chmod +x ./unwrap 
```

### 3. Close and reopen your terminal
```sh
$ exit
```

# Usage:
```sh
Usage: unwrap [options] <directory>

Move all contents of a directory to its parent directory.


Arguments:
  directory     Directory to unwrap

Options:
  -d, --delete  Delete the empty directory after unwrapping
  -h, --help    display help for command
```

# Example:
```sh
# before
demo/
└── example
    ├── 1.txt
    ├── 2.txt
    └── 3.txt
```
```sh
$ unwrap -d ./example
Moved: example/2.txt → 2.txt
Moved: example/1.txt → 1.txt
Moved: example/3.txt → 3.txt
```
```sh
# after
demo/
├── 1.txt
├── 2.txt
└── 3.txt
```

# Contribute:

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run ./src/index.ts
```
