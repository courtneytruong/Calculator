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
}