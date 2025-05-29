# Steps To Setup Things:

1. `tsc --init`
2. `node i`
3. `npm init -y`
4. `mkdir ./src`
4. `mkdir ./dist`
5. Create the `index.html` file in the root project folder.
6. Create the `index.ts` file inside `./src`.
7. Place `./dist` in the `outDir` settings inside the `tsconfig.json`.
8. Run the command `tsc --w` to run the ts files with auto comilation directly in to the `./dist` folder.
9. Currently using `Live Server VS Extension +  TS tracking compilation`.