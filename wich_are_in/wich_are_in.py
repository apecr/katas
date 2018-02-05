def in_array(array1, array2):
    # your code
    results = [included(array2, element) for element in array1 if included(array2, element) is not None]
    return sorted(list(set(results)))


def included(array, element):
    for item in array:
        if element in item:
            return element


a1 = ["live", "arp", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
r = ['arp', 'live', 'strong']
print(in_array(a1, a2), r)

print(in_array(['cod', 'code', 'wars', 'ewar'] , ['lively', 'alive', 'harp', 'sharp', 'armstrong', 'codewars']), ['cod', 'code', 'ewar', 'wars'])