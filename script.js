const getUniqueCharacters = str => {
    resultSet = new Set()
    for(let i = 0; i < str.length; i++)
    {
        resultSet.add(str[i])
    }
    return [resultSet.size, Array.from(resultSet).join('')]
};

let inputField = document.querySelector('input')
inputField.addEventListener('input', () =>{
    uniques = getUniqueCharacters(inputField.value)
    document.querySelector('p').textContent = `Result: ${uniques[1]} | Length: ${uniques[0]}`
})