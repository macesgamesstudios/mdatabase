# mDatabase Module - Info

This module helps you to save, read and write data to your project in a simple way.

Warning: This GitHub project contains the open source code of the package. You don't need to download any files from GitHub to add and use the package in your project!

# mDatabase Module - Installation

> First, we enter the following command in the location of our project;
```
npm i maces_database
```
> Then we add the following lines to our code file;
```
const mdatabase = require('maces_database')
```

# Functions;

In this project, certain functions and areas are specified in order to perform operations. These;

```
mdatabase.addData(<dataName>, <dataValue>, <databaseFile>)
mdatabase.getData(<dataName>, <databaseFile>)
mdatabase.checkData(<dataName>, <databaseFile>)
mdatabase.deleteData(<dataName>, <databaseFile>)
```

# First Setup & addData(..);

In our project, we create a file with any name named database.json (I'll name it cat.js xd). After opening our file, it will be enough to write the following in it.

```
{

}
```

After creating our file, we can write our codes in our code file.

```
const mdatabase = require('maces_database')

mdatabase.addData("tutorial", "hi!", 'cat.js')
```

Now there is a data called "tutorial" in our database called cat.js and the equivalent of this data is "hi". If you want, let's look at our database file;
```
{
  "tutorial": "hi"
}
```

# getData(..);

