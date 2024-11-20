# collection = single "variable" used to store multiple values
# List = [] ordered and changeable. Duplicates OK
# Set = {} unordered and immutabel, but Add/Remove Ok. NO duplicates
# Tuple = () ordered and unchangeable. Duplicates OK. Faster


### List ###
fruits = ["apple", "orange", "banana", "coconut"]

# print(dir(fruits))
# print(help(fruits))
# print(len(fruits))
# print("apple" in fruits)  # returns True
# print("pineapple" in fruits)  # returns False
# fruits[0] = "pineapple" # swaps first element
# fruits.append("apple") # adds element end of the list
# fruits.remove("apple") # removes the element from the list
# fruits.insert(1, "pear") # inserts pear in index 1
# fruits.sort() # sorts list
# fruits.reverse() # reverses the list
# fruits.index("apple") # finds the index of the element
# fruits.count("apple") # counts the occurence of the element

# print(fruits.index("apple"))


### Set ###
# fruitSet = {"apple", "orange", "banana", "coconut"}
# cant change values but can add and remove
# fruitSet.add("pineapple")
# fruitSet.remove("apple")
# fruitSet.pop() # Will remove random since it is unordered

fruitTuple = ("apple", "orange", "banana", "coconut")
print(fruitTuple.count("apple"))
