const fs = require('fs')

class mdatabase{
  constructor(){
  }

  information(){
    console.log("github.com/macesgamesstudios/mdatabase")
  }

  addData(veriableName, veriable, databaseFile,){
    const file = JSON.parse(fs.readFileSync(databaseFile , 'utf8'))
    file[veriableName] = veriable
    return fs.writeFileSync(databaseFile , JSON.stringify(file, null, 1))
  }

  getData(veriableName, databaseFile){
    const file = JSON.parse(fs.readFileSync(databaseFile , 'utf8'))
    if (!file[veriableName]) new TypeError('null veriableName!');
    return file[veriableName];
  }

  checkData(veriableName, databaseFile){
    const file = JSON.parse(fs.readFileSync(databaseFile , 'utf8'))
    return file[veriableName] ? true : false
  }

  deleteData(veriableName, databaseFile){
    const file = JSON.parse(fs.readFileSync(databaseFile , 'utf8'))
    if (!file[veriableName]) new TypeError('null veriableName!');
    delete file[veriableName]
    return fs.writeFileSync(databaseFile , JSON.stringify(file, null, 1))
  }
}

module.exports = new mdatabase()
