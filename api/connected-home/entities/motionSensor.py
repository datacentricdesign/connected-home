import time
from .thing import Thing


class MotionSensor (Thing):
    """Definition of a Motion Sensor."""

    def __init__(self, name='Test Motion Sensor', status=False):
        """
        Switch Constructor

        Parameters
        ---------
        name
            A string to assign to the `name` instance attribute.
        status
            A boolean to set the status of the Motion Event.
        """
        super().__init__(name)

        self.controls.extend(["motion_event"])
        self.status = False
        self.type = __class__.__name__
        self.update()

    def motion_event(self):
        """
        Trigger Motion Event.
        """
        print('A motion Detected!')
        self.status = True
        self.update()
        return True
