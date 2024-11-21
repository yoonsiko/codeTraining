name = input("Enter your full name: ")
phone_number = input("Enter your phone number: ")

# result = len(name)
# result = name.find(
#     "code"
# )  # Finds the position of the entered input in find and returns the index on the string

# result2 = name.rfind(
#    " "
# )  # Find the position of the last occurence of the entered input

# name = name.capitalize()
# name = name.upper()
# name = name.lower()
# result = name.isdigit()
# result = name.isalpha()
# result = phone_number.count("-")
result = phone_number.replace("-", " ")

print(name)
print(result)
