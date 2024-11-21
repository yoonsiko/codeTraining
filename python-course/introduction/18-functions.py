# function = a block of reusable code
# place () after the function name to invoke it


def func(x):
    print("Hello World!")
    print("\n", x)


# func("YES")

# return = state used to end a function
#          and send a result back to the caller


def add(x, y):
    z = x + y
    return z


def sub(x, y):
    z = x - y
    return z


def mul(x, y):
    z = x * y
    return z


def div(x, y):
    z = x / y
    return z


print(add(1, 2))
print(sub(1, 2))
print(mul(2, 3))
print(div(1, 2))
