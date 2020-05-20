from context import connected_home
from connected_home.entities.button import Button

import unittest

class TestButton(unittest.TestCase):

    def test_button(self):
        name = 'Hello Button'
        button = Button(name)
        self.assertEqual(button.name, name, "Should be " + name)

if __name__ == '__main__':
    unittest.main()
