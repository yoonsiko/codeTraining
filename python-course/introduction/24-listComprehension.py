# List comprehension = A concise way to create lists in Python
#                      Compact and easier to read than traditional loops
#                      [expression for value in iterable if condition]

# doubles = [x * 2 for x in range(1,11)]

# print(doubles)

# fruits = ["apple", "orange", "banana"]
# fruits = [fruit.upper() for fruit in fruits]
# print(fruits)

numbers = [1, -2, 3, -4, 5, -6]
positive_nums = [num for num in numbers if num >= 0]
negative_nums = [num for num in numbers if num <= 0]
even_nums = [num for num in numbers if num % 2 == 0]

print(positive_nums)
print(negative_nums)
print(even_nums)
