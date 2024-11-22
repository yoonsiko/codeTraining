# class variables = shared among all instances of a class
#                   Defined outside the constructor
#                   Allow you to share data among all object created from that class


class Student:

    class_year = 2024
    num_students = 0

    def __init__(self, name, age):
        self.name = name
        self.age = age
        Student.num_students += 1


student1 = Student("Halvor", 21)
student2 = Student("Frikk", 24)
print(Student.num_students)
