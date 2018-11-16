# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.


user_number = int(raw_input("What's your maximum number? "))

sum = 0
for i in range (0, user_number):
    if ((i % 3 == 0) or (i % 5 == 0)):
        sum += i

print sum

# FIZZBUZZ
# Print all integers from 1-100
# If the number is divisible by 3, print fizz instead of the number
# If the number is divisible by 5, print buzz instead of the number
# If the number is divisible by 15, print fizzbuzz instead of the number

for i in range (0,100):
        if (i% 15 == 0):
                print "Fizzbuzz"
        elif (i % 3 == 0):
                print "Fizz"
        elif (i % 5 == 0):
                print "Buzz"
        else:
                print i