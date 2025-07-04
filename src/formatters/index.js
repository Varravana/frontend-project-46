import stylish from "./stylish.js"
import plain from "./plain.js"

const toFormat = (data, format) => {
   switch (format){
    case 'stylish': {
     return stylish(data)
  }
  case 'plain': {
    return plain(data)
  }
  } 
}

export default toFormat