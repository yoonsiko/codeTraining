x = 10
# x = x + 1
# x = x - 2
# x = x * 3
# x = x/2
# x = x**2

# x += 1
# x -= 2
# x *= 3
# x /= 2
# x **= 2

# remainder = x % 3

x = 3.14
y = -4
z = 5

# result = round(x)
# result = abs(y)
# result = pow(4, 3)  # 64
# result = max(x, y, z)
# result = min(x, y, z)

import math

# result = math.pi
# result = math.e
# result = math.sqrt(10)
#result = math.ceil(x)  # rounds up to the higher integer
#result = math.floor(x)  # rounds down to the lowest integer

# print(result)

r = float(input("Enter radius"))

c = 2*math.pi*r
a = math.pi*r**2
var = math.sqrt(pow(c,2) + pow(a,2))

print(f"The circumference is {round(c,2)}")