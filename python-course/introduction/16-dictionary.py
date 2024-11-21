# dictionary = a collection of {key:value} pairs
#              ordered and changeable. No duplicates


capitals = {
    "USA": "Washington D.C.",
    "India": "New Delhi",
    "China": "Beijing",
    "Russia": "Moscow",
}

# print(capitals.get("USA"))

# capitals.update({"Germany": "Berlin"})  # Adds new key value pair
# capitals.update({"USA": "Detroit"})  # Updates value if key already exists
# capitals.pop("China")  # Removes the key value pair
# capitals.popitem()  # Removes the last key value pair
# capitals.clear()  # Removes all key value pairs

# keys = capitals.keys() # returns all keys in a list
# for key in capitals.keys():
#     print(key)
# print(keys)

# values = capitals.values() # returns all values in a list
# for value in values:
#     print(value)

# items = capitals.items() # returns all key value pairs as a tuple in a list
# for key, value in capitals.items():
#     print(f"{key}: {value}")

print(capitals)
