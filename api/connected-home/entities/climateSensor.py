import time
from .thing import Thing


class ClimateSensor(Thing):
    """Definition of a Motion Sensor."""

    def __init__(self, name='Test Climate Sensor'):
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

        self.controls.extend(["temperature", "humidity"])
        self.type = __class__.__name__
        self.temp = 0
        self.humid = 0
        self.update()

    def temperature(self, value):
        """
        Update Temperature Sensor Value
        """
        self.temp = value
        print('Temperature Input: ' + str(self.temp) + "°C")
        self.update()
        return True

    def humidity(self, value):
        """
        Update Humidity Sensor Value
        """
        self.humid = value
        print('Humidity Input: ' + str(self.humid) + "%")
        self.update()
        return True
