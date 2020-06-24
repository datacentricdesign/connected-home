import time
from .thing import Thing


class LightSensor(Thing):
    """Definition of a Light Sensor"""

    def __init__(self, name='', status=False):
        """
        Light Sensor Constructor

        Parameters
        ---------
        name
            A string to assign to the `name` instance attribute.
        """

        super().__init__(name)
        self.controls.extend(["brightness"])
        self.status = False
        self.type = __class__.__name__
        self.update()

    def brightness(self, value=0):
        """
        Light Brightness according to slider input.
        """
        self.value = value
        print('Light Brightness value: ' + str(self.value) + '!')
        if int(self.value) >= 1:
            self.status = True
        else:
            self.status = False
        self.update()
        return True
