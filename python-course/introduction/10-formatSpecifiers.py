# format specifiers = {:flags} format a value based on what flags are inserted

# .(number)f = found to that many decimal places ()
# :(number) = allocate that many spaces
# :03 = allocate and zero pad that many spaces
# :< = left justify
# :> = right justify
# :^ = center align
# :+ = use a plus sign to indicate a positive value
# := = place to sign to indicate positive value
# :  = insert a space before positive numbers
# :, = comma separator


price1 = 3.14159
price2 = -9872.65
price3 = 1222.34

print(f"Price 1 is ${price1:.2f}")  # two floating numbers
print(f"Price 2 is ${price2:.10}")  # allocates 10 spaces
print(f"Price 3 is ${price3:.010}")  # allocates 10 spaces with 0 as placeholder

print(f"Price 1 is ${price1:<10}")  # left justified, allocates 10 spaces
print(f"Price 2 is ${price2:>10}")  # right justified
print(f"Price 3 is ${price3:^10}")  # center align

print(f"Price 1 is ${price1:+}")  # Shows if number is positive or negative
print(f"Price 2 is ${price2:+}")  # Shows if number is positive or negative
print(f"Price 3 is ${price3: }")  # Space before positive numbers

print(f"Price 1 is ${price1:+,.2f}")  # comma separator
print(f"Price 2 is ${price2:,.5f}")  # comma separator
print(f"Price 3 is ${price3:,}")  # comma separator
