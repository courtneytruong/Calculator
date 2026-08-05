// See https://aka.ms/new-console-template for more information

class Program
{
    public static void Main(string[] args)
    {
        decimal Calculate = UserInputFlow.GetUserInput();
        do
        {
            Console.WriteLine("What do you want to do next?\n1. Continue adding numbers,\n2. Clear the screen,\n3. Exit the program.");
            string userinput = Console.ReadLine();
            if (userinput == "1")
            {
                Console.WriteLine("Enter another operation:");
                string operation2 = Console.ReadLine();
                operation2 = ErrorHandling.OperatorCorrection(operation2);
                Console.WriteLine("Enter another number:");
                decimal number3 = ErrorHandling.NumberCorrection(Console.ReadLine());
                Calculate = CalculateNumbers.calculate(Calculate, number3, operation2);
                Console.WriteLine("Result: " + Calculate);
                continue;
            }
            else if (userinput == "2")
            {
                Calculate = UserInputFlow.GetUserInput();
            }
            else if (userinput == "3")
            {
                break;
            }
            else
            {
                Console.WriteLine("Invalid input. Please try again.");
            }
        } while (true);

    }
}
