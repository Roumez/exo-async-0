const fsPromises = require('fs/promises')
const toUpperCase = async () => {
  try {
    let txt1 = await fsPromises.readFileSync('hello.txt', 'utf-8')
    txt1 = txt1.toUpperCase()
    await fsPromises.writeFileSync('hello.txt', txt1)
  } catch (e) {
    console.log(e.message)
  }
}
