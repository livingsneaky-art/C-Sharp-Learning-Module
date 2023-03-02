//Module Introduction
/*
    - Basic syntax of C#
    Agenda
        - Understanding the essential C# building blocks
        - Working with built-in types
        - C# operators
        - Using data and time
        - Converting between types
        - Implicit typing
             Implicit typing = is a feature of C# that allows you to declare variables without explicitly specifying their type.
             Explicit typing = is a feature of C# that allows you to declare variables by explicitly specifying their type.
*/

//Understanding the Essential C# Building Blocks
/*
    C# Statements 
        - Actions
        - Flow of the program
        - End with semicolon
    C# Identifiers
        - Identifiers start with a letter or underscore and can container letters, digits and underscores
        - if start with digit or special character, it is 
    C# Comments
        - Single line 
    C# Keywords = reserved words
        - int, in, class, using, while, new, null, if, case
        - ref, return, lock, long, string, struct, const, enum, void
    C# Variables
        - A variable holds a value
        - Integer, string, date..
        - Created in a declaration statement
    Creating an Integer Variable
        - int age;
            age = 25;
        - int Age;
        - int ageOfEmployee;
    Using the Variable
        - Console.WriteLine(age);
*/

//Demo: Using the Essential C# Building Blocks
/*
    - Using the essential C# building blocks
*/

//Working with Built-in Types
/*
    - C# is a strongly typed language
        - Every variable has a type
        - Used to store information
        - Expressions will return a value of a specified type
    
    Using Data Types in C#
        - Size and location in memory
        - Data range
        - Supported operations

    Data Types in C#
        - Predefined types
        - User-defined types

    Predefined Data Types in C# or Primitive Data Types
        - bool
        - int
        - float
        - double
        - decimal
        - char    

    More Predefined Data Types
        - byte (sbyte)
        - short (ushort)
        - object 
        - string
    
    Creating an Integer Value
        - int a = 2;
        - int b = a + 3;
        - bool c = true;
    
    C# Types Lead to Type Safety
        - int c = 3
        - c = true; //invalid why? because c is an integer and true is a boolean
*/

//Demo: Working with Primitive Types
/*
    Working with primitive types
*/

//Using a const Value
/*
    decimal interestRate = 0.07m;
    const = is a keyword that is used to declare a constant variable. A constant variable is a variable whose value cannot be changed once it is initialized.

    const decimal interestRate = 0.07m; 
        - using const its value cannot be changed
*/

//Getting to Know Strings
/*
    - Containes text
    - Stored as list of char objects
    - string type

    Creating Basic Strings
    - string s1 = "Hello world"; 
    - string s2 = string.Empty; = is a static property of the string class that returns an empty string.
*/

//Demo: Creating Strings