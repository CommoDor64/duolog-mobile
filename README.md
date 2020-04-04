# DUOLOG

## Run

- make sure that Expo SDK is installed as well as expo mobile client
- cd into root of project
- `expo start`

## Structure:

There are 3 main view which are nested in a React Navigation StackView

- ProgramScrollView (soon to be composed inside "HomeView")
- ProgramView
- TrainingDayView

So a user selects a program from a list at **ProgramScrollView**, then moves to **ProgramView** to select a day, lastly the exercise is being selected on **TrainingDayView**

## TODO

### architecture:

- data normalization, the model is highly nested
- sync routing with redux store i.e routing with state
- fix actions injections sometimes the action is injected to parent component and being passed down the component chain for not reason

### features:

- add difficulty level to each exercise
- ~~add sections by day~~
- add notes by day
- fix view for day and exercise presentation - horizontal list?
