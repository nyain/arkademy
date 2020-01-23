class Employee():
    name="Nadeshiko"

    def get_name(self):
        return self.name

employee = Employee()
employee.name ="Udin"
print(employee.get_name())