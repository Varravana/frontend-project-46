import fs from 'fs'
import path from 'path'


export default (a, b) => {
  const comand1 = JSON.parse(fs.readFileSync(path.resolve(a), 'utf-8'))
  const comand2 = JSON.parse(fs.readFileSync(path.resolve(b), 'utf-8'))

  const genDiff = (obj1, obj2) => {
    const keys = [...new Set ([...Object.keys(obj1), ...Object.keys(obj2)])].sort()

    const diff = keys.map((key) => {
      if (!Object.hasOwn(obj2, key)) {
        return `- ${key}: ${obj1[key]}`
      }
      if (!Object.hasOwn(obj1, key)) {
        return `+ ${key}: ${obj2[key]}`
      }
      if (obj1[key] !== obj2[key]) {
        const ret = `- ${key}: ${obj1[key]}\n+ ${key}: ${obj2[key]}`
        return ret
      }
      return `  ${key}: ${obj1[key]}`
    })
    return `{\n${diff.join('\n')}\n}`
  }

  return genDiff(comand1, comand2)
}
