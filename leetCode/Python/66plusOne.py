# You are given a large integer represented as an integer array digits,
# where each digits[i] is the ith digit of the integer.
# The digits are ordered from most significant to least significant
# in left-to-right order. The large integer does not contain any
# leading 0's.

# Increment the large integer by one and return the resulting array of
# digits.


class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        char = ""
        list = []

        for i in range(len(digits)):
            char += str(digits[i])

        char = int(char) + 1

        for e in str(char):
            list.append(int(e))
        return list
