import fs from 'fs';
import path from 'path';

export default (a, b) => {
    const comand1 = JSON.parse(fs.readFileSync(path.resolve(a), 'utf-8'));
    const comand2 = JSON.parse(fs.readFileSync(path.resolve(b), 'utf-8'));
    console.log ("filepath1", comand1);
    console.log ("filepath2", comand2);
    return comand1 === comand2
}