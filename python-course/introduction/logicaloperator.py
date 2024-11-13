# logical operators = evaluate multiple conditions (or, and, not)
#                     or = at least one condition must be True
#                     and = both conditions must be True
#                     not = inverts the condition (not False, not True)


temp = 25
isRaining = False
isSunny = True

if temp > 3 or temp < 0 or isRaining:
    print("The outdoor event is cancelled")
else:
    print("The outdoor event is still scheduled")


if temp >= 28 and isSunny:
    print("It is Hot outside and sunny")
elif temp <= 0 and isSunny:
    print("It is sunny but cold")
