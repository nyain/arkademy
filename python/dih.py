'''
# string
x="x"
food="pizza mozarella"
my_favourite_food="pizza mozarella"
myFavouriteFood="pizza mozarella"

print(x)
print(food)
print(my_favourite_food)
print(myFavouriteFood)

# integer
number= 1
first_number= 2
second_number= 3

print(number)
print(first_number)
print(second_number)

# double dan float
decimal = 1.2
my_decimal = 3.3

print(decimal)
print(my_decimal)

# boolean
is_clean = False

print(is_clean and is_clean)

# array

fruits=["apple","banana","mango","grape"]

#update array
fruits[3]="duwet"

#add value array
fruits.append("orange")

#delete value array
del fruits[1]

# print(fruits)

# dict/object

profile ={
    "first_name": 'Vincent',
    "last_name": 'Williams',
    "age": 17,
    "gender": "male",
    "is_active": True,
    "friends": ["adi","udin","tom","mark"]
}


friends= profile['friends']
my_second_friends = friends[2]

#print(my_second_friends)

todos=[
    {"id": 1,"name": "washing cat", "is_done": False},
    {"id": 2,"name": "helping mom", "is_done": True}
]

print(todos[1]['name'])

for i in range(1,10):
    print(i)

phones = ['Xiaomi','Sony','Samsung']

for phone in phones:
    print(phone)

phones = [
    {"id": 1,"name": "Xiaomi"},
    {"id": 2,"name": "Sony"},
    {"id": 3,"name": "Samsung"}

]

for phone in phones:
    print(phone['name'])


name = raw_input("1.Mohon masukkan nama anda: ")
address= raw_input("2.Mohon masukkan alamat anda: ")

print("Halo %s,alamat anda berada di %s" % (name,address))

first_number = raw_input("Masukkan angka pertama: ")
second_number = raw_input("Masukkan angka kedua: ")

operasi2 = ['1. Tambah','2. Kali','3. Bagi']

for phone in operasi2:
    print(phone)


operasi=raw_input("mau diapain cok: ")

if operasi=='1':
    print(int(first_number)+int(second_number))

if operasi=='2':
    print(int(first_number)*int(second_number))

if operasi=='3':
    print( int(first_number)/int(second_number))
'''