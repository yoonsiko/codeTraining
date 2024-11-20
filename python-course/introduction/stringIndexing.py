# indexing = accessing elements of a sqeuence using [] (indexing operator)
#            [start : end : step]

creditNumber = "1234-5678-9012-3456"

print(creditNumber[0])  # output: 1
print(creditNumber[:4])  # output: 1234
print(creditNumber[5:9])  # output: 5678
print(creditNumber[5:])  # output: 5678-9012-3456
print(creditNumber[-1])  # output: 6
print(creditNumber[-2])  # output: 5
print(creditNumber[-4:])  # output: 3456
print(creditNumber[::3])  # 146-136
print(creditNumber[::-1])  # 6543-2109-8765-4321
