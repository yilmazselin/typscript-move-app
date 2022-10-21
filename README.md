# Question

Please update `src/move.ts` to pass tests. You can find the tests in `src/move.spec.ts`.

### Move function signature

| Key         | Type             | Description                  |
|-------------|------------------|------------------------------|
| list        | Folder[]         | Given list                   |
| source      | string           | Id of the moved file         |
| destination | string           | Id of the folder to be moved |


### Folder shape

| Key   | Type           | Description                 |
|-------|----------------|-----------------------------|
| id    | string         | Unique identifier of folder |
| name  | string         | Name of the folder          |
| files | File []        | Files in this folder        |

### File shape

| Key  | Type   | Description               |
|------|--------|---------------------------|
| id   | string | Unique identifier of file |
| name | string | Name of the file          |


> NOTE: All IDs are unique.  

## Lint the code

```bash
yarn lint
```

## Running tests

```bash
yarn test
```

> NOTE: If you believe that some scenarios are missing in the tests, don't hesitate to add them to suite.

## Format the code

```bash
yarn format
``` 
# typscript-move-app
