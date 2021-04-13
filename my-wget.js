const axios = require('axios')
const fsPromises = require('fs/promises')

const main = async () => {
  try {
    const response = await axios.get('https://fr.wikipedia.org/wiki/Black_hat')
    await fsPromises.writeFile('black_hat.html', response.data) // response.data est une string qui est la page html
    const stat = await fsPromises.stat('black_hat.html')
    console.log(stat)
  } catch (e) {
    console.error(e.message)
  }
}

main()