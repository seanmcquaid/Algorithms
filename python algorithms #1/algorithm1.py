user_number = int(raw_input("What's your maximum number? "))

sum = 0
for i in range (0, user_number):
    if ((i % 3 == 0) or (i % 5 == 0)):
        sum += i

print sum