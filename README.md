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

# ```mdatabase.addData(..)```
