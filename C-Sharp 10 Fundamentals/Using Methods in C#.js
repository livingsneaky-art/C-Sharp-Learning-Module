//Using Methods in C#
//Module Introduction
/*
    - Understanding methods
    - Adding a helper file
    - Finding the correct method
    - Understanding variable scope
    - More opstions with methods
    - Introducing the Main method
*/

//Understanding Methods
/*
    Our current code...
       Is one large block
    
    Some code can be resued multiple times though
    Using methods will help
    Similar to functions or subroutines

    Methods in C#
        - Code block
        - Receives parameters and (optionally) returns value
        - Readable code and code reuse
        - Declared within a class or struct
    
    C# Method Syntax
        <access modifier> <return type> Method_Name (Parameters)
        {
            //method statements
        }
    
    Looking at a First Method
    Returning a Value
    Return type must be specified
        public int AddTwoNumbers(int a, int b)
        {
            return a + b;
        } 

    Returning a Value
    Value must be returned for all possible execution paths    
        public int AddTwoNumbers(int a, int b)
        {
            if(a > b)
            {
                return a + b;
            }
            //no value returned if we get here -> compile time error
        }
        
    
    A Method without Return Value
        public void DisplaySum(int a, int b)
        {
            int sum = a + b;
            Console.WriteLine("The sum is " + sum); 
        }
    
    Invoking a Method
    We can pass arguments: values for the parameter(s)
    ...
    DisplaySum(3, 52);
    ...

    Flow of Execution
    Console.WriteLine("Before DisplaySum");
    DisplaySum(3, 5);
    Console.WriteLine("After DisplaySum");

    public void DisplaySum(int a, int b)
    {
        int sum = a + b;
        Console.WriteLine("The sum is " + sum);
    }

    Capturing a Return Value
    Only possible if method isn't returning void
    int p1 = 3;
    int p2 = 5;
    DisplaySum(p1, p2);
    int result = AddTwoNumbers(55, 44);
*/