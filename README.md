# free-market-web-ui

La Next.js app que se sirve de [`free-market-api`](https://github.com/juanlopez1/free-market-api). Fue realizada para el code challenge de Front-End de Mercado Libre. Se encuentra online [aquí](https://free-market-web-ui-a360180d92b3.herokuapp.com).

## Instalación

Para instalar las dependencias, ejecutá el siguiente comando:

```bash
npm install
```

## Scripts Disponibles

### `dev`

```bash
npm run dev
```

Inicia el servidor de desarrollo de Next.js. El endpoint que se utiliza es [http://localhost:3000](http://localhost:3000).

### `build`

```bash
npm run build
```

Compila la aplicación Next.js para producción y genera la carpeta `.next` con los archivos compilados.

### `start`

```bash
npm start
```

Inicia la aplicación Next.js en modo producción utilizando los archivos compilados de la carpeta `.next`.

### `lint`

```bash
npm run lint
```

Ejecuta el linter de TypeScript para verificar errores de tipo y formatea el código utilizando Biome.

### `test`

```bash
npm run test
```

Ejecuta los `tests` utilizando Jest y recopila la cobertura de las pruebas.

### `test:watch`

```bash
npm run test:watch
```

Ejecuta los `tests` en modo "watch".

### `postbuild`

```bash
npm run postbuild
```

Genera los sitemaps de la app utilizando `next-sitemap`. Este comando se ejecuta automáticamente después del comando `build`.
