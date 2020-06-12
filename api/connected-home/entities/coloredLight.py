from .dimmableLight import DimmableLight


class ColoredLight(DimmableLight):
    """Definition of a Colored Light."""

    def __init__(self, name='Test Colored Light', red=0, green=0, blue=0, status=False):
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
        self.status = status
        self.red = red
        self.green = green
        self.blue = blue
        self.controls.extend(["rgbColor"])
        self.type = __class__.__name__
        self.update()

    def rgbColor(self, r=0, g=0, b=0):
        """
        Change the value of rgb color according to each slider.
        """
        # self.red = r
        # self.green = g
        # self.blue = b
        print('RGB Value: (' + str(self.red) + ', ' +
              str(self.green) + ', ' + str(self.blue) + ')')
        self.update()
        return True
