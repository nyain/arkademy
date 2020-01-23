operator=raw_input("Please input operator (+ - / *): ")
first_number = raw_input("#1: ")
second_number = raw_input("#2: ")

first_number=int(first_number)
second_number=int(second_number)

def calculate(operator,number1,number2):
    if operator == "+":
        return number1+number2
    elif operator == "-":
        return number1-number2
    elif operator == "*":
        return number1*number2
    else:
        return number1/number2
        
print(calculate(operator,first_number,second_number))