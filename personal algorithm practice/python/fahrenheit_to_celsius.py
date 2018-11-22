fahrenheit = int(raw_input("What's the temperature outside in Fahrenheit? "))
def f_to_c():
    celsius = (fahrenheit - 32) * (5.0/9.0)
    print str(celsius)

celsius = int(raw_input("What's the temperature outside in Celsius? "))
def c_to_f():
    fahrenheit = (celsius * (9.0/5.0)) + 32
    print str(fahrenheit)

f_to_c()
c_to_f()