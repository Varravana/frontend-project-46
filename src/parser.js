import fs from 'fs'
import path from 'path'
import parsers from './parsers.js'
import getDiff from './getDiff.js'
import getDiff2 from './getDiff2.js'

const getParsData = (filePath) => {
  const fileFormat = path.extname(filePath);
  const data = fs.readFileSync(path.resolve(filePath), 'utf-8');
  return parsers(data, fileFormat)
}


const parser = (a, b) => {

  const comand1 = getParsData(a);
  const comand2 = getParsData(b);
const diff = getDiff2(comand1, comand2);
return JSON.stringify(diff, null, 2);
};
export default parser
