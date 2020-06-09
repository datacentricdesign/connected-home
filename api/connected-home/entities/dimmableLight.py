import time
from .light import Light


class DimmableLight(Light):
    """Definition of a Dimmable."""

    def __init__(self, name='Test DimmableLight', value=0, status=False):
        """
        DimmableLight Constructor

        Parameters
        ---------
        name
            A string to assign to the `name` instance attribute.
        value
            An interger to set the brightness level.
        status
            An integer to set the brightness of the light.
        """
        super().__init__(name)
        self.status = False
        self.value = value
        # self.controls.extend(["brightness"])
        self.type = __class__.__name__
        self.update()

    def brightness(self, value=0):
        """
        Change the value of brightness according to slider.
        """
        self.value = value
        print('Brightness Level' + value + '!')
        self.update()
        return True
