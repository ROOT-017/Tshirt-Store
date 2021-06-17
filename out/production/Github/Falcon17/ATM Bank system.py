# Simple Banking System with few banking services...
print("Welcome to ROOT-TECH.inc...")
chances = 3
balance = 10000
pin = 1234
restart = 'Y'
#Looping throught the options
while chances > 0:
    print("Enter your 4 digits pin")
    print(f"Chances letf: {chances}")
    entered_pin = int(input(">"))
    if entered_pin == pin:
        while restart not in ['N', 'NO', 'no', 'No', 'nO']:
            print("Enter 1 to check balance:\n")
            print("Enter 2 to deposit funds:\n")
            print("Enter 3 to withdraw funds:\n")
            print("Enter 4 to return card:\n")
            option = int(input(">"))
            if option == 1:
                print(f"Your balance is : ${balance}")
                print("Do you want to go perform another operation (Y/N)")
                restart = input(">")
                if restart in ['N', 'NO', 'no', 'No', 'nO']:
                    print("Have a nice day😀\n")
                    break

            elif option == 2:
                print("Enter desired amount")
                balance += float(input(">"))
                print("Do you want to go perform another operation (Y/N)")
                restart = input(">")
                if restart == 'N':
                    print("Have a nice day😉\n")
                    break
            elif option == 3:
                print("Enter amount: ")
                withdraw = float(input(">"))
                if balance > withdraw:
                    balance -= withdraw
                    print(f"Withdraw of ${withdraw} completed successfully...")
                    print("Do you want to go perform another operation (Y/N)")
                    restart = input(">")
                    if restart.upper() == 'N':
                        print("Have a nice day😀\n")
                        break
                else:
                    print("Insuficient😥 Funds Recharge you account!")
                    print("Do you want to go perform another operation (Y/N)")
                    restart = input(">")
                    if restart.upper() == 'N':
                        print("Have a nice day\n")
                        break
            elif option == 4:
                print("Wait while can while card is ejected...")
#               print("Do you want to go perform another operation (Y/N)")

                print("Have a nice day😉\n")
                break
    elif entered_pin != pin:
        print("Incorrect Pin")
        chances = chances-1
        print(f"Chances letf: {chances}")
        if chances == 0:
            print("Failled to enter correct pin")
            break
