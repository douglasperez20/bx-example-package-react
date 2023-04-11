# bx-tmpl-github-package-node

Este package tiene como finalidad facilitar la creación de aplicaciones client-side en formato de package con los siguientes objetivos:

1. Autónoma al funcionamiento del package: El desarrollo propuesto permite ejecutar la aplicación de forma aislada para su desarrollo en local o alguna url a disposición.
2. Versionable: Mediante los estándares de publicación de npm se debe versionar según el tipo de cambio.[Documentacion](https://docs.npmjs.com/about-semantic-versioning)
3. Soporte a Typescript: El correcto consumo del package dependerá de las reglas de validación de tipos a nivel de Typescript. para esto se dispone una configuración que facilita esto.
4. Soporte a [package.json#exports](https://nodejs.org/api/packages.html#package-entry-points): El correcto consumo del package dependerá de las reglas de exportación de archivos que se busca visibilizar.

## Desarrollo local.

```bash
## Instalación de dependencias
npm run i


## Servidor local de desarrollo
npm run dev
```

## Release

El release es la forma de visibilizar la aplicación como un package, la pipeline adjunta permite:

1. Generar la build del proyecto a través de [Vite](https://vitejs.dev/).
2. Generar los tipo de Typescript .
3. Generar los [package.json#exports](https://nodejs.org/api/packages.html#package-entry-points) y [package.json#typesVersions](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions) segun la build y los tipos a travez de [@atomico/vite](https://atomico.gitbook.io/doc/packages/atomico-vite) y [@atomico/exports](https://atomico.gitbook.io/doc/packages/introduction/atomico-exports)

### Pasos de un release.

1. `npm version`: determina una versión de la aplicación.
2. `git tag -a <tag> -m <message>`: genera una instantánea del repo version
3. `git push origin <rama> <tag>`: envía al repo los cambios.
4. Desde github publicar el release según el tag asignado.
