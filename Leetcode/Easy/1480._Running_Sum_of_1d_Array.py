from typing import List

class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        summation = 0
        result = []
        for num in nums:
            summation += num
            result.append(summation)
        
        return result


if __name__ == "__main__":
    test = Solution()
    ans = test.runningSum([1, 2, 3, 4])
    print(ans)
