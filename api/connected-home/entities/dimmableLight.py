from .light import Light


class DimmableLight(Light):
    """Definition of a Dimmable  Light"""

    def __init__(self, name='Test Dimmable Light', value=0, status=False):
        """
        DimmableLight Constructor

        Parameters
        ---------
        name
            A string to assign to the `name` instance attribute.
        value
            An interger to set the brightness level.
        status
            A boolean to set the status of the switch.
        """
        super().__init__(name)
        self.status = False
        self.value = value
        self.controls.extend(["brightness"])
        self.type = __class__.__name__
        self.update()

    def brightness(self, value=0):
        """
        Change the value of brightness according to slider.
        """
        self.value = value
        print('Brightness Level: ' + self.value + '!')
        self.update()
        return True
