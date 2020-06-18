from .dimmableLight import DimmableLight


class ColoredLight(DimmableLight):
    """Definition of a Colored Light."""

    def __init__(self, name='Test Colored Light', status=False):
        """
        Colored Light Constructor

        Parameters
        ---------
        name
            A string to assign to the `name` instance attribute.
        Red
            An interger to set the red color value.
        Green
            An interger to set the green color value.
        Blue
            An interger to set the blue color value.
        status
            A boolean to set the status of the switch.
        """
        super().__init__(name)
        self.status = False
        self.controls.extend(["rgbColor"])
        self.type = __class__.__name__
        self.update()

    def rgbColor(self, value=[0, 0, 0]):
        """
        Change the value of rgb color according to each slider.
        """
        self.value = value[0], value[1], value[2]

        print('RGB Value:' + str(self.value))
        self.update()
        return True
