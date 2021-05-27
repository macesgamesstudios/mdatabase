# mDatabase Module - Information

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
mdatabase.deleteData(<dataName>, <databaseFile>)
mdatabase.checkData(<dataName>, <databaseFile>)
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

mdatabase.addData("tutorial", "hi!", 'cat.json')
```

Now there is a data called "tutorial" in our database called cat.js and the equivalent of this data is "hi". If you want, let's look at our database file;
```
{
  "tutorial": "hi"
}
```

# getData(..);

Now we can pull the data we have created into our file. For example, let's equal our variable named "prefix" to "tutorial" data;

```
const mdatabase = require('maces_database')
const prefix = "";

prefix = mdatabase.getData("tutorial", 'cat.json')
console.log(prefix)
```

Yes, our "prefix" value has now been synchronized with the "tutorial" data in our database file. In this case, it will print hi to our console as we first give our "hi" variable. If there is no such data in our database file, the module will warn you with an error!

# checkData(..); (bool : true, false)

What we want is to check whether there is any data in your database file;

```
const mdatabase = require('maces_database')

if (mdatabase.checkData("tutorial", 'cat.json')){
console.log("found")
}
else {
console.log("not found")
}
```

In this case, since our database file contains "tutorial" data, the program will write "found" text to the console.

# deleteData(..);

If you want to destroy a data on our database, you can easily complete it with function.

```
const mdatabase = require('maces_database')

mdatabase.deleteData("tutorial", 'cat.json')
```

Let's take a look at our database file;

```
{

}
```

# Example

I throw you want to get data from the database file to a data;

```
const mdatabase = require('maces_database')
const prefix = "";

if (mdatabase.checkData("tutorial", 'cat.json')){
prefix = mdatabase.getData("tutorial", 'cat.json')

console.log('setted : ' + prefix)
}
else {
prefix = "&"

console.log('setted : ' + prefix)
}
```

In this case, if we have "tutorial" data in our database file, our prefix variable will be synchronized with tutorial data and a notification message will be sent to the console. If not, our data will be set as "&" and a notification message will be sent to the console.

# License
http://mqsftp.gq/license/
