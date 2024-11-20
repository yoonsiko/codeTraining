# validate user input exercise
# 1. username is no more than 12 characters
# 2. username must not contain spaces
# 3. username must not contain digits

username = input("Enter your username: ")

if len(username) > 12:
    print("Your username cannot be longer than 12 characters")
elif not username.find(" ") == -1:
    print("Can't contain spaces")
elif username.isalpha() == False:
    print("Can't contain any digits")
else:
    print(f"Welcome {username}")
