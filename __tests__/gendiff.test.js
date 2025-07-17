import parser from '../src/parser.js'
import fs from 'fs'
import gendiff from '../bin/gendiff.js'

test ('parser-json-stylish', () => {
  expect(gendiff('__fixtures__/file3.json', '__fixtures__/file4.json')).toBe(fs.readFileSync('./__fixtures__/expectedStylish.txt', "utf-8"))
})
