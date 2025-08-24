# esap

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).


migration:run
รัน migration files ที่ยังไม่ได้รันเพื่ออัพเดต database schema

migration:revert
ย้อนกลับ migration ล่าสุดที่รันไปแล้ว

migration:generate
สร้าง migration file อัตโนมัติจากการเปลี่ยนแปลงใน Entity

migration:create
สร้าง migration file เปล่าสำหรับเขียน SQL เอง

สมมติได้รับโปรเจคมา วิธีรันคือ 
1. npm install เพื่อติดตั้ง node dependencies
2. สร้าง database ชื่อ esap_db
3. ตั้งค่าของ .env
4. npm run migration:run เพื่อรัน migration และสร้างตาราง
5. npm run start:dev รันแอพ

ถ้าต้องการแก้ไข database ให้แก้ไขที่ Entitiy files
1. แก้ไข Entity
2. สร้าง migration 
npm run migration:generate <MIGRATION_NAME>
3. รัน migration
npm run migration:run

ถ้าต้องการย้อน migration หรือ แก้ไข migration เดิม
1. ย้อน migration 
npm run migration:revert
2. แก้ไข migration หรือ ลบ+รัน generate ใหม่
3. รัน migration
npm run migration:run

