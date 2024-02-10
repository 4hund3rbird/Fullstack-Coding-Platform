'''Write a Python function that takes a list of numbers as input, removes duplicate elements, and returns a new list without duplicates.'''
def DuplicateElements(input):
	#write your code here and return the output
	return list(set(input))
	









#do not change this code
if __name__=='__main__':
	input=[1, 2, 3, 2, 4, 5, 3]
	ans=DuplicateElements(input)
	print(ans)

#output --> 

'''[1, 2, 3, 4, 5]
'''