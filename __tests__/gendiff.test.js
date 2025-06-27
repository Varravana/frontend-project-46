import parser from '../src/parser.js'

test ('parser ', () => {
  expect(parser('file1.json', 'file2.json')).toBe(`{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`)
})
