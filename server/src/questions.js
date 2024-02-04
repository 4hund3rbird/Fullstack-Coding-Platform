const pythonCodingQuestions = [
  {
    title: "Sum of Two Numbers",
    question:
      "Write a Python function that takes two numbers as input, calculates their sum, and returns the result. Ensure your function handles both positive and negative numbers.",
    sample_input: "3, 5",
    sample_output: "8",
    code: "def sum_of_two_numbers(a, b):\n    return a + b",
    explanation:
      "This problem tests basic arithmetic operations in Python. To solve it, use the '+' operator to add the two numbers together. Make sure to consider positive and negative inputs.",
  },
  {
    title: "Factorial",
    question:
      "Write a Python function to calculate the factorial of a given non-negative integer. Ensure your function handles edge cases such as 0 and 1.",
    sample_input: "5",
    sample_output: "120",
    code: "def factorial(n):\n    return 1 if n == 0 or n == 1 else n * factorial(n - 1)",
    explanation:
      "This problem assesses knowledge of recursion and mathematical operations. The factorial of a number is the product of all positive integers up to that number. Handle edge cases for 0 and 1.",
  },
  {
    title: "Reverse a String",
    question:
      "Write a Python function that takes a string as input, reverses it, and returns the reversed string. Ensure your function handles strings with both lowercase and uppercase characters.",
    sample_input: "hello",
    sample_output: "'olleh'",
    code: "def reverse_string(s):\n    return s[::-1]",
    explanation:
      "This problem tests string manipulation skills. Use slicing to reverse the string by specifying a step of -1 in the slice. Make sure to handle both lowercase and uppercase characters.",
  },
  {
    title: "List Max Element",
    question:
      "Write a Python function that takes a list of numbers as input, finds the maximum element, and returns it. Ensure your function handles lists with both positive and negative numbers.",
    sample_input: "[4, 7, 1, 9, 3]",
    sample_output: "9",
    code: "def find_max_element(arr):\n    return max(arr)",
    explanation:
      "This problem assesses knowledge of lists and built-in functions. Use the 'max()' function to find the maximum element in the list. Ensure your function handles both positive and negative numbers.",
  },
  {
    title: "Palindrome Check",
    question:
      "Write a Python function that checks if a given string is a palindrome. Ignore spaces, consider case-insensitive, and handle alphanumeric characters. Return True if the string is a palindrome, and False otherwise.",
    sample_input: "A man a plan a canal Panama",
    sample_output: "True",
    code: "def is_palindrome(s):\n    s = ''.join(char.lower() for char in s if char.isalnum())\n    return s == s[::-1]",
    explanation:
      "This problem assesses string manipulation and logical reasoning. Remove non-alphanumeric characters, convert to lowercase, and compare the string with its reverse. Consider case-insensitivity and handle spaces.",
  },
  {
    title: "Prime Number Check",
    question:
      "Write a Python function that takes a positive integer as input and checks if it's a prime number. Return True if the number is prime and False otherwise.",
    sample_input: "11",
    sample_output: "True",
    code: "def is_prime(num):\n    return all(num % i != 0 for i in range(2, int(num**0.5) + 1)) and num > 1",
    explanation:
      "This problem tests knowledge of loops and basic number theory. A prime number has no positive divisors other than 1 and itself. Ensure your function handles positive integers.",
  },
  {
    title: "Count Vowels",
    question:
      "Write a Python function that takes a string as input and counts the number of vowels in it. Consider both lowercase and uppercase vowels. Return the count as an integer.",
    sample_input: "Hello World",
    sample_output: "3",
    code: "def count_vowels(s):\n    return sum(1 for char in s if char.lower() in 'aeiou')",
    explanation:
      "This problem tests string manipulation and basic counting. Convert each character to lowercase and count the vowels using a generator expression. Handle both lowercase and uppercase vowels.",
  },
  {
    title: "Duplicate Elements",
    question:
      "Write a Python function that takes a list of numbers as input, removes duplicate elements, and returns a new list without duplicates.",
    sample_input: "[1, 2, 3, 2, 4, 5, 3]",
    sample_output: "[1, 2, 3, 4, 5]",
    code: "def remove_duplicates(lst):\n    return list(set(lst))",
    explanation:
      "This problem assesses knowledge of sets and list manipulation. Use the 'set()' function to eliminate duplicates and then convert back to a list.",
  },
  {
    title: "Even or Odd",
    question:
      "Write a Python function that takes an integer as input and determines if it's even or odd. Return 'Even' if the number is even and 'Odd' if it's odd.",
    sample_input: "7",
    sample_output: "'Odd'",
    code: "def check_even_or_odd(num):\n    return 'Even' if num % 2 == 0 else 'Odd'",
    explanation:
      "This problem checks understanding of conditional statements and modulus operator. Use the '%' operator to check if the number is divisible by 2.",
  },
];
export default pythonCodingQuestions;
