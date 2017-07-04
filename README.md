# Leao Virtual DOM

### Virtual DOM implementation

#### Installation
------
`$ npm install leao`


#### Features
------

- Create nodes
- Update elements
------
##### create a node

```javascript
const yourConstName = (
  Leao.h(type, props, children)
)
```
###### e.g
```javascript
const a = (
  h('ul', { className: 'list' },
    h('li', {}, 'item 1'),
    h('li', {}, 'item 2')
  )
)
```
------
##### Update element

```javascript
Leao.updateElement(parent, newNode, oldNode)
```
###### If there's no oldNode, it will display the newNode
------
#### e.g
------
##### install [node-browserify](https://github.com/substack/node-browserify) to require leao in the browser
```javascript
const Leao = require('leao');

const h = Leao.h;

const a = (
  h('ul', { className: 'list' },
    h('li', {}, 'item 1'),
    h('li', {}, 'item 2')
  )
)

const b = (
  h('ul', { className: 'list' },
    h('li', {}, 'item 1'),
    h('li', {}, 'item 3')
  )
)

// give the div the id of root
const $root = document.getElementById('root');
//create a button with the id reload
const $reload = document.getElementById('reload');

Leao.updateElement($root, a);
$reload.addEventListener('click', () => {
  Leao.updateElement($root, b, a);
});

```






