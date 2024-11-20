# Shopping cart program

foods = []
prices = []
total = 0

while True:
    food = input("Enter a food to buy (q to quit): ")
    if food.lower() == "q":
        break
    else:
        price = input(f"Enter the price of {food}: $")
        foods.append(food)
        prices.append(price)

print("---Your cart---")

for x in foods:
    print(x, end=" ")
