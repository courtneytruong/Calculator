public class UserInputFlow
{
    public static decimal GetUserInput()
    {
        Console.WriteLine("Enter a number:");
        decimal number1 = decimal.Parse(Console.ReadLine());
        Console.WriteLine("Enter an operator (+, -, *, /):");
        string operation = Console.ReadLine();
        operation = ErrorHandling.OperatorCorrection(operation);
        Console.WriteLine("Enter another number:");
        decimal number2 = decimal.Parse(Console.ReadLine());
        decimal Calculate = CalculateNumbers.calculate(number1, number2, operation);
        Console.WriteLine("Result: " + Calculate);
        return Calculate;
    }
}