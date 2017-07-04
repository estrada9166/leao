const Leao = require('../lib/leao')();

const h = Leao.h;

const a = (
  h('ul', { className: 'list' },
    h('li', {}, 'item 1'),
    h('li', {}, 'item 2')
  )
)

const b = (
  h('div', { className: 'list' },
    h('li', {}, 'item 1'),
    h('li', {}, 'item 3')
  )
)

const nodeA = { 
      type: 'ul', props: { className: 'list' },children:
       [ { type: 'li', props: {}, children: ['item 1'] },
         { type: 'li', props: {}, children: ['item 2'] } ] 
      }

test('create a node with type, params and childs', () => {
  expect(JSON.stringify(a)).toBe(JSON.stringify(nodeA))
})

test('Check if the node is different from the new node', () => {
  const sameNode = Leao.changed(a, a);
  const differentNodes = Leao.changed(a, b);

  expect(sameNode).toBe(false)
  expect(differentNodes).toBe(true)
})