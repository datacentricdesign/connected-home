# Connected Home

Connected Home is a teaching environment simulating a connected home. The aim is to enable industrial product designers to experience software-based product development.

The current current release is available here: ...

# Running Connected Home on your machine

The easiest way to run Connected Home on your machine is to use Docker. See how to install Docker [here](https://www.docker.com/products/docker-desktop).

Once Docker is running on your machine, go to Docker settings (Preferences on Mac) > Command Line and "enable experimental features" so that the app feature of Docker is accessible.

In the terminal, run the following command:

```sh
docker app install datacentricdesign/connected-home:0.0.6
```

# What Does it Do

When Connected Home is running, it runs an API in Python, and a web user interface in Angular.

Both are accessible via a web browser.

First, the web UI is accessible locally, on port 4200 ([http://localhost:4200](http://localhost:4200)). It loads a minimal dashboard listing the 'things' available, retrived from the API. By default the server create a light bulb and a switch, the light bulb is OFF and the switch is ON. Their behaviours are not connected.

![Dashboard](docs/img/dashboard.png)

The services available for each thing are listed. For instance, a light bulb as 'TURN ON' and 'TURN OFF'. Clicking on these buttons triggers the function on the server. For instance, after clicking on 'TURN ON', you can refresh the page and observe the light bulb icon turning yellow.

Second, the API is accessible on port 5000 ([http://localhost:5000/things](http://localhost:5000)). It exposes the functionalities of Connected Home.

In the current version, it can:

- retrieve all things: ([GET /things](http://localhost:5000/things))

![API Things](docs/img/dashboard.png)

- retrieve a thing by id: GET /things/:thingId

- create a thing: POST /things

This time the we cannot use the web browser, as we want to execute a POST request (making a change on the server).

A nice tool to play with REST API is [Postman](https://www.postman.com/). Here is a Postman collection with the APIs of Connected Home: [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/bcc6244b6a2f1f129d9f)

To create a thing, the request must provide a json object as follows, including a name and a type (Switch of Light).

```json
{
    "name": "Thing name",
    "type": "Switch"
}
```

- control a thing: POST /things/:thingId/controls/controlId

## Uninstall

To uninstall the app, run:

```sh
docker app uninstall connected-home
```

# Development

To contribute to the Connected Home platform, we recommend the following setup

Requirements:
* Git
* VisualStudio Code with Python plugin
* Python 3.7.3
* virtualenv
* Install NodeJs from [NodeJs Official Page](https://nodejs.org/en).

## Step 1: get the code

To get the code on your machine, you need to clone the Git repository hosting the code.
In the terminal, you the 'cd' command to navigate to the folder where you want the code.
Use the following command to clone the Git repository.

```sh
git clone git@github.com:datacentricdesign/connected-home.git
```

Then, you can open VisualStudio Code. In the top menu, click File > Open... and
select the folder connected-home folder you have just cloned.

## Step 2: setting up the API

The API is implemented in Python 3 with Flask. In VisualStudio Code, open a terminal and enter the api folder.

```sh
cd api
```

To avoid distubing other Python setup on your machine, we setup a virtual environment with virtualenv. To create a virtualenvironment called 'venv', with execute the following command:

```sh
virtualenv venv
```

Then we activate this environment with source:

```sh
source venv/bin/activate
```

If it worked properly, you should see (venv) appearing on the left side of the line in terminal.

We can now start install the dependencies of the API:

```sh
pip install -r requirements.txt
```

To let VisualStudio knows where to find the dependencies (in the newly created venv), click on 'Python' in the bottom left corner, click 'Enter interpreter path...' > 'Find...' and navigate till the venv folder > bin > python3.

The setup is ready to run the API, simply by executing the connected-home module

```sh
python -m connected-home
```

A message should appear saying 'Switched On!', as the script create a switch and a light bulb, then turn on the light bulb.

In the web browser, the API should be accessible on http://localhost:80/things

## Step 3: setting up the UI

The ui is develop with Angular, NodeJS and TypeScript. In the terminal, enter the app-ui
folder and install the dependencies with npm. Leaving the API running, open a 2nd terminal and navigate to app-ui folder.

```
cd app-ui
```

We need the Angular command line tool to execute the development server, we install it 'globally', meaning it will be 
accessible from any terminal on the machine.

```
npm install -g @angular/cli
```

In contrast with Pip, NPM handle the dependencies locally for each project. We can install all dependencies for the project with:

```
npm install
```

To start the development server with hot reloading (automatically recompiling TypeScript and refreshing) we

```
npm start
```

After a successfull compilation, the server start listing on 4200. You can navigate to [http://localhost:4200/](http://localhost:4200/)

## Step 4: Create a new feature

We switch to the branch 'develop', so that we do not mess we the master branch.

```
git checkout develop
```

From this branch, we create a new feature branch to start developing new feature (change 'myfeaturename')

```
git checkout -b feature-myfeaturename develop
```

We can nown edit the code, run either the API or the UI to test, regularly stage, commit and push changes.

Once the feature works as intented and all changes are committed, it is time to merge it with the develop branch.

We go back to the develop branch

```
git checkout develop
```

Execute the merge as follows:

```
git merge --no-ff feature-myfeaturename
```

You will be prompt to enter a message in vim, type :x and press enter to save and quit.

We can now delete the feature branch and push the changes

```
git branch -d feature-myfeaturename
git push origin develop
```

## Step 5: Making a new release

To package a new app, all the features to be released must be merged into the develop branch first (step 4).

Once the develop version runs as intented, we can create a new release branch (change 0.0.5 for the appropriate version).

```
git checkout -b release-0.0.5 develop
```

For the api, we first we need to install twine and bumpversion

```
pip install twine bumpversion
```

Then, we use bumpversion to increment the new version. In the example below,
change the version to the current one. Choose from major, minor or patch version.

```
cd ./api
bumpversion --current-version 0.0.4 patch setup.py connected-home/__init__.py
```

Let's package the api library:

```
python setup.py sdist bdist_wheel
```

Then, we publish on PyPi with (this step requires credentials):

```
python -m twine upload dist/*
```

For the UI, we need to update the version in the package.json.

The ui can be updated on NPM with (this step requires credentials):

```
cd app-ui
npm publish
```

Finally, in the connected-home.dockerapp/docker-compose.yml we need to update the version of the docker images '...release-0.0.5'. The docker images will be generated automatically when we push the release on GitHub.

We are ready to commit these changes.

```
git commit -a -m "Bumped version number to 0.0.5"
```

Let's now merge the release with the master branch and create a tag

```
git checkout master
git merge --no-ff release-0.0.5
git tag -a 0.0.5
```

Let's push everything on GitHub, including the new tag.

```
git push --follow-tags
```

When the docker hub is done building the api and app-ui image, we can create a new version of the docker app.

```
docker app bundle connected-home.dockerapp -t datacentricdesign/connected-home:0.0.5
docker app validate connected-home.dockerapp
docker app push connected-home --tag  datacentricdesign/connected-home:0.0.5
```

We catchup our develop branch with the release branch

```
git checkout develop
git merge --no-ff release-0.0.5
```

And we get rid of the release branch

```
git branch -d release-0.0.5
```
