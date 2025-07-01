import parser from '../src/parser.js'

test ('parser-json', () => {
  expect(parser('__fixtures__/file1.json', '__fixtures__/file2.json')).toBe(`{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`)
})

test ('parser-yaml', () => {
  expect(parser('__fixtures__/file1.yaml', '__fixtures__/file2.yaml')).toBe(`{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`)
})
