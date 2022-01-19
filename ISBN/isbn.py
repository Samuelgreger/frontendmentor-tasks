def is_valid_isbn(input_isbn):
    list_isbn = []
    numbers = ["1","2","3","4","5","6","7","8","9","0"]
    sum = 0
    for i in (input_isbn):
        if i in numbers:
            list_isbn.append(int(i))

    if len(list_isbn) != 13:
        return f"ISBN: {input_isbn} is not valid"
    
    for i in range(len(list_isbn)-1):
        if (int(i) % 2) == 0:
            sum += (int(i) * 3)
        else:
            sum += int(i)
    l_num_str = str(sum)[-1]
    l_num = int(l_num_str)
    safe_num = 10-l_num

    if safe_num != list_isbn[-1]:
        return f"ISBN: {input_isbn} is not valid"
    
    return f"Valid ISBN. \nISBN: {input_isbn}, Sum: {sum}"

while True:
    isbn = input("ISBN: ")#"978-1-59327-603-4"
    if not isbn:
        break
    print(f"This is {is_valid_isbn(isbn)}\n")
