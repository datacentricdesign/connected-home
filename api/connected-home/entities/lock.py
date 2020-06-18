import time
from .thing import Thing


class Lock(Thing):
    """Definition of a Switch."""

    def __init__(self, name=''):
        """
        Lock Constructor

        Parameters
        ---------
        name
            A string to assign to the `name` instance attribute.
        status
            A boolean to set the status of the lock.
        """
        super().__init__(name)
        self.controls.extend(["lock", "unlock", "toggle"])
        self.type = __class__.__name__
        self.update()

    def lock(self):
        """
        Turning The Lock-In.
        """
        self.status = True
        print('Lock-' + self.text_status() + '!')
        self.update()
        return True

    def unlock(self):
        """
        Turning The Lock-Out.
        """
        self.status = False
        print('Lock-' + self.text_status() + '!')
        self.update()
        return True

    def toggle(self):
        """
        Toggling the Lock
        """
        self.status = not self.status
        print('Toggled, Lock ' + self.text_status() + '!')
        self.update()
        return True

    def text_status(self):
        if (self.status):
            return 'In'
        return 'Out'
