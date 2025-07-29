const makeValue = (data) => {
  if (typeof data === 'object' && data !== null) {
    return `[complex value]`
  }

  if (typeof data === 'string') {
    return `'${data}'`
  }

  return `${data}`
}

const plain = (data, path = '') => data.map((item) => {
  const {
    type, key, newValue, oldValue, children,
  } = item
  const curentKey = path === '' ? `${key}` : `${path}.${key}`

  switch (type) {
    case 'tree': {
      return `${plain(children, curentKey)}`
    }
    case 'added': {
      return `Property '${curentKey}' was added with value: ${makeValue(newValue)}\n`
    }
    case 'deleted': {
      return `Property '${curentKey}' was removed\n`
    }
    case 'changed': {
      return `Property '${curentKey}' was updated. From ${makeValue(oldValue)} to ${makeValue(newValue)}\n`
    }
  }
}).join('')

export default plain
