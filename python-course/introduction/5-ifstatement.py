# if = Do some code only IF some condition is True
#      Else do something else

age = int(input("Enter your age: "))

if age >= 100:
    print("Too old!")
elif age >=18:
    print("You are signed up")
elif age < 0:
    print("invalid")
else:
    print("You must be 18+")