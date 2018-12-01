# Given the participants' score sheet for your University Sports Day, 
# you are required to find the runner-up score. You are given scores. 
# Store them in a list and find the score of the runner-up.

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    new_list = []
    for i in arr:
        if i not in new_list:
            new_list.append(i)
    new_list.sort()
    print (new_list[len(new_list)-2])