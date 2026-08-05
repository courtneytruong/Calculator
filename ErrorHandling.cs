public class ErrorHandling
{
    public static string OperatorCorrection(string operation)
    {
        if (operation != "+" && operation != "-" && operation != "*" && operation != "/")
        {
            Console.WriteLine("Invalid operator. Please enter a valid operator (+, -, *, /):");
            operation = Console.ReadLine();
            return OperatorCorrection(operation);
        }
        else
        {
            return operation;
        }
    }
    public static decimal NumberCorrection(string number)
    {
        decimal parsedNumber;
        while (!decimal.TryParse(number, out parsedNumber))
        {
            Console.WriteLine("Invalid number. Please enter a valid number:");
            number = Console.ReadLine();
        }
        return parsedNumber;
    }
}