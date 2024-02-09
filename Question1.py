'''Write a Python function that takes an integer as input and determines if it's even or odd. Return 'Even' if the number is even and 'Odd' if it's odd.'''
def EvenorOdd(input):
	#write your code here and return the output
	if input%2==0:
		return 'even'
	else :
		return 'odd'



#do not change this code
if __name__=='__main__':
	input=7
	ans=EvenorOdd(input)
	print(ans)

#outputodd
