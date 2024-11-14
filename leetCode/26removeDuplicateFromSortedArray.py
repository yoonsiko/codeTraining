# Given an integer array nums sorted in non-decreasing order,
# remove the duplicates in-place such that each unique element
# appears only once. The relative order of the elements should
# be kept the same. Then return the number of unique elements in nums.

# Consider the number of unique elements of nums to be k,
# to get accepted, you need to do the following things:

# Change the array nums such that the first k elements
# of nums contain the unique elements in the order they
# were present in nums initially. The remaining elements
# of nums are not important as well as the size of nums.

# Return k.


class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        k = 0
        for i in range(1, len(nums)):
            if nums[i] != nums[k]:
                k += 1
                nums[k] = nums[i]
        return k


# [0,0,1,1,1,2,2,3,3,4]
# k = 0, nums[0] = 0   i = 1, nums[1] = 0, nums[0] == nums[1], do nothing
# k = 0, nums[0] = 0   i = 2, nums[2] = 1, nums[0] != nums[2], k = 1 and nums[1] = 1
# [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
# k = 1, nums[1] = 1, i = 3, nums[3] = 1, nums[1] == nums[3], do nothing
# k = 1, nums[1] = 1, i = 4, nums[4] = 1, nums[1] == nums[4], do nothing
# k = 1, nums[1] = 1, i = 5, nums[5] = 2, nums[1] != nums[5], k = 2 and num[2] = 2
# [0, 1, 2, 1, 1, 2, 2, 3, 3, 4]
# k = 2, nums[2] = 2, i = 6, nums[6] = 2, nums[2] == nums[6], do nothing
# k = 2, nums[2] = 2, i = 7, nums[7] = 3, nums[2] != nums[7], k = 3 and nums[3] = 3
# [0, 1, 2, 3, 1, 2, 2, 3, 3, 4]
# k = 3, nums[3] = 3, i = 8, nums[8] = 3, nums[3] == nums[8], do nothing
# k = 3, nums[3] = 3, i = 9, nums[9] = 4, nums[3] != nums[9], k = 4 and nums[4] = 4
# for loop ends, we return the final
list = [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]
print(list[:5])
