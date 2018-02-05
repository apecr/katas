from math import floor


def decrypt(encrypted_text, n):
    output = encrypted_text
    if encrypted_text is None or len(encrypted_text) == 0 or n is None or n <= 0:
        return encrypted_text
    while n > 0:
        n -= 1
        output = decrypt_single(output)
    return output


def decrypt_single(text):
    list = []
    i = 0
    middle = floor(len(text)/2) - 1
    for char in text:
        if i <= middle:
            list.insert(i*2 + 1, char)
        else:
            list.insert(2*(i -1 - middle), char)
        i += 1
    return ''.join(list)


def encrypt(text, n):
    output = text
    if text is None or len(text) == 0 or n is None or n <= 0:
        return text
    while n > 0:
        n -= 1
        output = encrypt_sigle(output)
    return output


def encrypt_sigle(text):
    return text[1::2] + text[0::2]


print(encrypt("This is a test!", 0))
print(encrypt("This is a test!", 1))
print(encrypt("This is a test!", 2))
print(encrypt("This is a test!", 3))
print(encrypt("This is a test!", 4))
print(encrypt("This is a test!", -1))
print(encrypt("This is a test!", None))

print('dec1: ',decrypt("This is a test!", 0))
print('dec2: ',decrypt("hsi  etTi sats!", 1))
print('dec3: ',decrypt("s eT ashi tist!", 2))
print('dec4: ',decrypt(" Tah itse sits!", 3))
print('dec5: ',decrypt("This is a test!", 4))
print('dec6: ',decrypt("This is a test!", -1))
print('dec7: ',decrypt("hskt svr neetn!Ti aai eyitrsig", 1))

print(encrypt("", 0))
print(decrypt("", 0))
print(encrypt(None, 0))
print(decrypt(None, 0))
print('dec2: ',decrypt("hsi  etTi sats!", 1))