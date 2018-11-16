# The prime factors of 13195 are 5, 7, 13 and 29.

# What is the largest prime factor of the number 600851475143 ?

# prime numbers are only divisble by 1 and itself

user_num = int(raw_input("What number do you want to test? "))

prime_factors = []

for i in range (2,user_num):
    if (user_num % i == 0):
        prime_factors.append(i)
        user_num = (user_num / i)
    elif (i == user_num):
        break

print prime_factors