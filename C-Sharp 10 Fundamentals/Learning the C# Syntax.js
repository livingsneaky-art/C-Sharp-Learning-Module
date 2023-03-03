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

//C# Operators
/*
    Expressions in C#
        - Arithmetic expressions;

        int a, b, c;
        a = 3;
        b = 10;
        c = a++;
        b = a + b * c;
    
    Arithmetic Oerators = +, -, *, /, %, ++, --
    Equality operators = ==, !=
    Logical operators = &&, ||, !
    Assignment operators = =, +=, -=, *=, /=, %=, &=, |=, ^=, <<=, >>=

    Compound Assignment Operators
        int month = 3;
        month = month + 1;
        month  += 1;
    
    Operators Depend on the Type
        string result1 = "a" + "b";
        string result2 = "a" * "b"; //invalid
*/

//Demo: Using Operators in C#
/*
    - Using operators in C#
    - Defult values for types in C#
*/

//Members On Primitive Types
/*
    int intMaxValue = int.MaxValue; //is a static property of the int class that returns the maximum value of an int.
    int intMinValue = int.MinValue; //is a static property of the int class that returns the minimum value of an int.
    double doubleMaxValue = double.MaxValue; //is a static property of the double class that returns the maximum value of a double.

    Members of char Type
    chat myChar = 'a'; //is a primitive type that represents a Unicode character.
    bool isWhiteSpace = char.IsWhiteSpace(myChar); //is a static method of the char class that returns a boolean value indicating whether the specified character is white space.
    bool isDigit = char.IsDigit(myChar); //is a static method of the char class that returns a boolean value indicating whether the specified character is a digit.
    bool isPunctuation = char.IsPunctuation(myChar); //is a static method of the char class that returns a boolean value indicating whether the specified character is a punctuation mark.
*/

//Demo: Working with Members on Primitive Types

//Using Date and Time in C#
/*
    Working with Dates
        - DateTime = is a struct that represents a date and time.
        - TimSpan = is a struct that represents a time interval.

    Working with DateTime and DateOnly
        DateTime employeeStartDate = new DateTime(2025, 03, 28);
        DateTime today = DateTime.Today;
        DateTime twoDaysLater = someDateTime.AddDays(2);
        DaysOfWeek day = someDateTime.DayOfWeek;
        bool isDST = someDateTime.IsDayLightSavingTime();
*/

//Demo: Working with DateTime

//Converting Between Types
/*
    This Doesn't Work;
        int a = 3;
        a = "Hello world"; //invalid
    Changing between Types
        - Implicit conversion
        - Casting Explicit conversion
        - Helpers

    Using an Implicit Cast
        int a = 123456789;
        long l = a; //implicit cast
    
    Performing an Explicit Cast
        double d = 123456789.0;
        int a = (int) d; //explicit cast
    
    Parsing = is a method that converts a string to a specified type.
*/

//Demo: Converting Between Types

//Implicit Typing
/*
    So Far, We've Used Explicit Typing
        Explicit Typing = is a feature of C# that allows you to declare variables by explicitly specifying their type.
            int a = 123;
            bool b = true;
            double d = 11.0;
        Implicit Typing = is a feature of C# that allows you to declare variables by implicitly specifying their type.
            var a = 123; //a will be an integer
            var b = true; //b will be a boolean
            var d = 11.0; //d will be a double

    Understanding Implicit Typing
        - Type is infered = is a feature of C# that allows you to declare variables by implicitly specifying their type.
        - Not always as readable
        - Sometimes required (using LINQ)

    This Won't Work...
        var employeeAge; //invalid
*/

//Demo: Using var

//Summary
/*
    - C# is a strongly typed language
    - Contains build-in data types
    - Conversion between types is supported

    Up next:
    Using decisions and iterations in C#
*/