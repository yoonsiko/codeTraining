# *args     = allows you to pass multiple non-key arguments
# **kwargs  = allows you to pass multiple keyword-arguments
#             * unpacking operator


def add(*args):
    total = 0
    for arg in args:
        total += arg
    print(total)


def print_address(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")


# print_address(street="123 fake st.", city="Detroit", state="MI", zip="54321")


def shipping_label(*args, **kwargs):
    for arg in args:
        print(arg, end=" ")
    print()
    for key, value in kwargs.items():
        print(value, end=" ")


shipping_label(
    "Dr.",
    "Spongebob",
    "Squarepants",
    street="123 fake st.",
    apt="100",
    city="Detroit",
    state="MI",
)
