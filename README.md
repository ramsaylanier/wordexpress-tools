# wordexpress-tools

Various tools used in the [Vue](https://github.com/ramsaylanier/wordexpress-starter-vue) and [React](https://github.com/ramsaylanier/wordexpress-starter-react) WordExpress Starter Kits.

WordExpress Tools consist of the following:

- **WordExpress Helpers**: These are various helper functions used by the WordExpress starter kits. They do things like parse page/post content

- **WordExpress Shortcodes**: resolving functions that work with the WordExpress Database connectors to resolver GraphQL Queries


## Installation

```
npm install --save wordexpress-schema
```

## Usage

* [Using with Vue](#using-with-vue-starter-kit)

* [Custom Shortcodes](#custom-shortcodes)



## Using With Vue Starter Kit

Tools are used as part of the core Vue Starter Kit as a Vue plugin. The plugin is installed when creating the main Vue app, like so:

```es6
...
import {WordExpressShortcodes, WordExpressHelpers} from 'wordexpress-tools'

Vue.use(WordExpressPlugin, {
  shortcodes: WordExpressShortcodes,
  helpers: WordExpressHelpers
})
...

```

## Custom Shortcodes
You can add your own custom shortcodes and helpers by extending each object.

```es6
//my-custom-shortcode.js
import {GetShortCode} from 'wordexpress-tools'

const MyCustomShortcode = line => {
  const shortcode = GetShortCode(line)
  const {params, content} = shortcode

  // return custom html here
  return (`<div>${content}</div>`)
}

export default MyCustomShortcode

```

Then, when you install the Vue plugin, simplty extend WordExpressShortcodes.

```es6
import {WordExpressShortcodes, WordExpressHelpers} from 'wordexpress-tools'
import MyCustomPlugin from './path/to/my-custom-plugin.js'

const shortcodes = {
  ...WordExpressShortcodes,
  nameOfCustomShortcode: MyCustomShortcode
}

Vue.use(WordExpressPlugin, {
  shortcodes,
  helpers: WordExpressHelpers
})
```

Now, in your Wordpress WYSIWYG you can use something like `[nameOfCustomShortcodes param1="param"]content[/nameOfCustomShortcode]`. Please not that the name of the shortcode has to match the key in the extended shortcode object.
