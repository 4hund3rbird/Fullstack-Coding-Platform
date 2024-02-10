'''Write a Python function that takes a string as input and counts the number of vowels in it. Consider both lowercase and uppercase vowels. Return the count as an integer.'''
def CountVowels(input):
	#write your code here and return the output
	vovels = ["a","e","i","o","u"]
	count = 0
	for i in input:
		if i in vovels:
			count += 1
	return count









#do not change this code
if __name__=='__main__':
	input='Hello World'
	ans=CountVowels(input)
	print(ans)

#output --> 

'''3
'''