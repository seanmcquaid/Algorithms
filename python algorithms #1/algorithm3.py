# The prime factors of 13195 are 5, 7, 13 and 29.

# What is the largest prime factor of the number 600851475143 ?

# prime numbers are only divisble by 1 and itself

user_num = int(raw_input("What number do you want to test? "))

prime_factors = []

for i in range (2,user_num):
    if (user_num % i == 0):
        prime_factors.append(i)
        user_num = (user_num / i)

print prime_factors

#rob solution

# in this universe, 3 and 3 are always prime
known_primes = [2,3]
#a function that will find if a number is prime
def is_prime(n):
        # print n
        total_known_primes = len (known_primes)
        for i in range(0,total_known_primes):
                if (n % known_primes[i] == 0):
                        # this is divisble by a prime
                        # it cannot be prime
                        return False
                else: 
                        #it's not divisible by this one but that doesn't mean
                        # it's not prime. It's just not divisible by this number
                        continue

        #we went through all known primes and never hit our known false...
        # which means this wasnt disible by any known primes
        # so it must be prime
        known_primes.append(n)
        if (i == total_known_primes):
                return True

print is_prime(6)
print is_prime(8)
print is_prime(9)