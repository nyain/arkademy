class Employee():
    def __init__(self,**kwargs):
        k = kwargs
        self.name = k['name']
        self.salary = k['salary']
        self.gender = k['gender']
        self.age = k['age']

    def get_name(self):
        return self.name

employee=Employee(salary=1000,gender="female",age=27,name="Luna")
print(
    "%s salary is: %s,gender is %s,and %s years old" %
    (employee.name, employee.salary,employee.gender, employee.age)
)