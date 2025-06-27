import parser from '../src/parser.js'
import path from 'path';

const getPath = (fileName) => path.resolve(process.cwd(), fileName);

test ('parser ', () => {
    expect(parser(
        getPath('file1.json'),
        getPath('file2.json')
    )).toBe(2);
})