import time
from .thing import Thing


class Dimmer(Thing):
    """Definition of a Dimmer"""

    def __init__(self, name='Test Dimmer', value=0, status=False):
        """
        Dimmer Constructor

        Parameters
        ---------
        name
            A string to assign to the `name` instance attribute.
        value
            An interger to set the dimmer level.
        status
            A boolean to set the status of the dimmer if it triggered.
        """

        super().__init__(name)
        self.value = value
        self.status = status
        self.controls.extend(["dimmer"])
        self.type = __class__.__name__
        self.update()

    def dimmer(self, value=0):
        """
        Value of dimmer according to slider.
        """
        self.value = value
        print('dimmer value: ' + str(self.value) + '!')
        if int(self.value) >= 1:
            self.status = True
        else:
            self.status = False
        self.update()
        return True
