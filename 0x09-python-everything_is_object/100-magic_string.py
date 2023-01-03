#!/usr/bin/python3
def magic_string():
    magic_string.count = getattr(magic_string, 'count', 0) + 1
    return ("BestSchool, " * (magic_string.count - 1) + "BestSchool")
for i in range(10):
    print(magic_string())
