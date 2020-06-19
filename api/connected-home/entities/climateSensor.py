import time
from .thing import Thing


class ClimateSensor(Thing):
    """Definition of a Climate Sensor."""

    def __init__(self, name='Test Climate Sensor'):
        """
        Climate Sensor Constructor

        Parameters
        ---------
        name
            A string to assign to the `name` instance attribute.
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
