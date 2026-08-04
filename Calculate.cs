public class CalculateNumbers
{

    public static decimal calculate(decimal number1, decimal number2, string operation)
    {
        decimal Calculate = operation switch
        {
            "+" => (number1 + number2),
            "-" => (number1 - number2),
            "*" => (number1 * number2),
            "/" => (number1 / number2),
        };
        return Calculate;
    }
}