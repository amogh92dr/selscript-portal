# SeleniumScript-Portalv1

Yet another app

### Installation

Run `yarn` after cloning to download dependencies.

### Running the app

##### Environment variables

This application uses `dotenv` to manage environment variables in development. Copy the `.env.sample` file at the root of the project to supply the appropriate environment variables.

##### Script

For development, run `yarn start:dev` and visit `http://localhost:9000/`. This allows for hot module replacement, allowing you to see your changes immediately in the browser.
Additionally, you can run `yarn start:nf` to start up the server and webpack independently and concurrently using foreman, and with server hot reloading using nodemon, for which you can optionally include the following env var:

* `WEBPACK_PORT`: port to be used by webpack-dev-server. Default: 8080

**Note:** it's assumed that the `nodemon` and `foreman` packages are installed globally:

* `yarn global add nodemon`.
* `yarn global add foreman`.

### Linting

To run the linter on the project use: `yarn lint`.

You can also integrate the linter with your editor/IDE. For more info:

- https://github.com/roadhump/SublimeLinter-eslint
- https://github.com/AtomLinter/linter-eslint
- https://www.jetbrains.com/help/webstorm/2016.2/eslint.html

### Styling (Prettier)

This repo is configured with the styling tool prettier integrated into the eslint workflow. (https://github.com/prettier/prettier) Whenever `yarn lint` is run, eslint is run in `--fix` mode which will automatically reformat all js and jsx files. (`--fix` does not run in CI)

Prettier can also be integrated directly into your editor which will allow formatting on save which further reduces the workload by immediately formatting your code. Many code editors are supported. For more info: https://github.com/prettier/prettier#editor-integration

Recommended settings:

- Enable format on save
- Only format if a Prettier config is found

Prettier is configured to use the following settings:

- Single Quotes
- Print Width of 100
- Trailing Comma to 'all'
