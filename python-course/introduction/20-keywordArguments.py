# keyword arguments = an argument precded by an identifier
#                     helps with readibility
#                     order of arguments doesn't matter
#                     1. positional, 2. default, 3. Keyword, 4.arbitrary


def hello(greeting, title, first, last):
    print(f"{greeting} {title}{first} {last}")


hello("Hello", title="Mr.", last="Squarepants", first="Spongebob")
