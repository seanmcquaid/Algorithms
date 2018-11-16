user_number = int(raw_input("What's your maximum number? "))

for i in range (0, user_number):
    if (i % 3 == 0 or i % 5 == 0):
        print i
    else:
        pass
