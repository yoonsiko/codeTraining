# Inheritance = Allows a class to inherit attributes and methods from another class
#               Helps with code reusability and extensibility
#               class Child(parent)


class Animal:

    def __init__(self, name):
        self.name = name
        self.is_alive = True

    def eat(self):
        print(f"{self.name} is eating")

    def sleep(self):
        print(f"{self.name} is sleeping")


class Dog(Animal):
    def speak(self):
        print("Woof!")


class Cat(Animal):
    def speak(self):
        print("meow")


class Cow(Animal):
    pass

dog = Dog("Scooby")
cat = Cat("Garfield")
cow = Cow("Litago")

print(dog.name)
print(dog.is_alive)
dog.eat()
dog.sleep()
dog.speak()