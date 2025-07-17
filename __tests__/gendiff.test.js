import parser from '../src/parser.js'
import fs from 'fs'
import gendiff from '../bin/gendiff.js'

test ('parser-json-stylish', () => {
  expect(parser('__fixtures__/file3.json', '__fixtures__/file4.json')).toBe(fs.readFileSync('./__fixtures__/expectedStylish.txt', "utf-8"))
})

test ('parser-yaml-stylish', () => {
  expect(parser('__fixtures__/file3.yaml', '__fixtures__/file4.yaml')).toBe(fs.readFileSync('./__fixtures__/expectedStylish.txt', "utf-8"))
})


test ('parser-yaml-plain', () => {
  expect(parser('__fixtures__/file3.yaml', '__fixtures__/file4.yaml', '-f plain')).toBe(fs.readFileSync('./__fixtures__/expectedPlain.txt', "utf-8"))
})

test ('parser-json-plain', () => {
  expect(parser('__fixtures__/file3.json', '__fixtures__/file4.json', '-f plain')).toBe(fs.readFileSync('./__fixtures__/expectedPlain.txt', "utf-8"))
}) 

test ('parser-json-json', () => {
  expect(parser('__fixtures__/file3.json', '__fixtures__/file4.json', '-f json')).toBe(fs.readFileSync('./__fixtures__/expectedJson.txt', "utf-8"))
}) 

test ('parser-yaml-json', () => {
  expect(parser('__fixtures__/file3.yaml', '__fixtures__/file4.yaml', '-f json')).toBe(fs.readFileSync('./__fixtures__/expectedJson.txt', "utf-8"))
}) 


test ('parser-json-stylish', () => {
  expect(parser('__fixtures__/file3.json', '__fixtures__/file4.json')).toBe(`{
   common: {
    + follow: false
      setting1: Value 1
    - setting2: 200
    - setting3: true
    + setting3: null
    + setting4: blah blah
    + setting5: {
          key5: value5
      }
       setting6: {
           doge: {
            - wow: 
            + wow: so much
          }
          key: value
        + ops: vops
      }
  }
   group1: {
    - baz: bas
    + baz: bars
      foo: bar
    - nest: {
          key: value
      }
    + nest: str
  }
- group2: {
      abc: 12345,
      deep: {
          id: 45
      }
  }
+ group3: {
      deep: {
          id: {
              number: 45
          }
      },
      fee: 100500
  }
}`)
})