# while loop = execute some code WHILE some condition remains true

# name = input("Enter your name: ")
# while name == "":
#     print("You did not enter you name")
#     name = input("Enter your name: ")

# print(f"Hello {name}")

num = int(input("Enter a # between 1-10: "))

while num < 1 or num > 10:
    print("not valid number")
    num = int(input("Enter a # between 1-10: "))

print(f"your number is {num}")