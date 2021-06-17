# Wieght converter from Kg to Lbs and vice versa...
# ...................................................
def weight_converter(weight):

    unit = input('What is the unit (L) lbs or (K) kg :')
    if unit.upper() == "L":
        converted = weight * 0.45
        print(f"You're {converted} kilos")
        return converted

    elif unit.upper() == "K":
        converted = weight / 0.45
        print(f"You're {converted} lbs")
        return converted


print("Convert Kg to Lbs and Vice Versa")
weight = float(input('Input your weight:'))
weight_converter(weight)
