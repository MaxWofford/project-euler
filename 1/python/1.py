total = 0

def is_multiple(num):
    if (num % 3 == 0 or num % 5 == 0):
        return True
    return False

for x in range(1, 1000):
    if (is_multiple(x)):
        total = total + x   

print(total)
