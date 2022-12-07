# @mmc-cloud/web-lib
A commonly used web lib.

### Installation

```bash
pnpm i @mmc-cloud/web-lib
```

### Usage

```ts
import { wait } from '@mmc-cloud/web-lib'

const test = async () => {
  await wait(2000)
  console.log('1')
}

test()
```