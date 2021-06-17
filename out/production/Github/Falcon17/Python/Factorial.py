num = int(input("Enter a number: "))
fact = 1
while num < 0:
    num = int(input("Enter a possitive number: "))
if num == 0 or num == 1:
    print(f"factorial of {num} is: 1")
else:
    for i in range(1, num+1):
        fact = fact*i
print(f"factorial of {num} is: {fact}")
