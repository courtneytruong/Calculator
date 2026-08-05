public class UserInputFlow
{
    public static decimal GetUserInput()
    {
        Console.WriteLine("Enter a number:");
        decimal number1 = ErrorHandling.NumberCorrection(Console.ReadLine() ?? "default");
        Console.WriteLine("Enter an operator (+, -, *, /):");
        string operation = Console.ReadLine() ?? "default";
        operation = ErrorHandling.OperatorCorrection(operation ?? "default");
        Console.WriteLine("Enter another number:");
        decimal number2 = ErrorHandling.NumberCorrection(Console.ReadLine() ?? "default");
        decimal Calculate = CalculateNumbers.calculate(number1, number2, operation);
        Console.WriteLine("Result: " + Calculate);
        return Calculate;
    }
}