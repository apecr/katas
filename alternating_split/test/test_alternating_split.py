import pytest
from src.alternating_split import encrypt


def test_0_value():
     assert encrypt("This is a test!", 0) == "This is a test!"



# Test.assert_equals(alternating_split.encrypt("This is a test!", 1), "hsi  etTi sats!")
# Test.assert_equals(alternating_split.encrypt("This is a test!", 2), "s eT ashi tist!")
# Test.assert_equals(alternating_split.encrypt("This is a test!", 3), " Tah itse sits!")
# Test.assert_equals(alternating_split.encrypt("This is a test!", 4), "This is a test!")
# Test.assert_equals(alternating_split.encrypt("This is a test!", -1), "This is a test!")
# Test.assert_equals(alternating_split.encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig")
#
# Test.assert_equals(alternating_split.decrypt("This is a test!", 0), "This is a test!")
# Test.assert_equals(alternating_split.decrypt("hsi  etTi sats!", 1), "This is a test!")
# Test.assert_equals(alternating_split.decrypt("s eT ashi tist!", 2), "This is a test!")
# Test.assert_equals(alternating_split.decrypt(" Tah itse sits!", 3), "This is a test!")
# Test.assert_equals(alternating_split.decrypt("This is a test!", 4), "This is a test!")
# Test.assert_equals(alternating_split.decrypt("This is a test!", -1), "This is a test!")
# Test.assert_equals(alternating_split.decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!")
#
# Test.assert_equals(alternating_split.encrypt("", 0), "")
# Test.assert_equals(alternating_split.decrypt("", 0), "")
# Test.assert_equals(alternating_split.encrypt(None, 0), None)
# Test.assert_equals(alternating_split.decrypt(None, 0), None)
