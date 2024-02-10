'''Write a Python function to calculate the factorial of a given non-negative integer. Ensure your function handles edge cases such as 0 and 1.'''
def Factorial(input):
	#write your code here and return the output
	fact = 1
	for i in range(input,0,-1):
		fact = fact * i
	return fact









#do not change this code
if __name__=='__main__':
	input=5
	ans=Factorial(input)
	print(ans)

#output --> 

'''120
'''