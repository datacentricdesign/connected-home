# Connected Home

Connected Home is a teaching environment simulating a connected home. The aim is to enable industrial product designers to experience software-based product development.

The current current release is available here: ...

# Running Connected Home on your machine

The easiest way to run Connected Home on your machine is to use Docker. See how to install Docker [here](https://www.docker.com/products/docker-desktop).



# Development

## Setup

* Git
* Python 3.7.3
* VisualStudio Code with Python plugin
* virtualenv

## API


### Publish a new version of the api on PyPi

First we need to install twine and bum

```
pip install twine bumpversion
```

Then, we use bumpversion to increment the new version. In the example below,
change the version to the current one. Choose from major, minor or patch version.

```
bumpversion --current-version 0.0.1 patch setup.py connected_home/__init__.py
```

```
python setup.py sdist bdist_wheel
```

