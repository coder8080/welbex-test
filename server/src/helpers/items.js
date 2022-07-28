// Функции для работы с записями

module.exports.optionToOperator = (option) => {
  switch (option) {
    case 'equals':
      return '='
    case 'contains':
      return 'LIKE'
    case 'greater':
      return '>'
    case 'less':
      return '<'
  }
}

module.exports.checkIfCorrect = ({ filterField, filterOption }) => {
  if (['greater', 'less'].includes(filterOption) && filterField === 'title') {
    return false
  } else if (filterOption === 'contains' && filterField !== 'title') {
    return false
  }
  return true
}
