# Given the names and grades for each student in a Physics class of  students, 
# store them in a nested list and print the name(s) of any student(s) having the second lowest grade.

# Note: If there are multiple students with the same grade, order their names 
# alphabetically and print each name on a new line.

if __name__ == '__main__':
    for _ in range(int(input())):
        name = input()
        score = float(input())
        class_list = []
        student_profile =[]
        student_profile.append(name)
        student_profile.append(score)
        class_list.append(student_profile)
        print (class_list[0])