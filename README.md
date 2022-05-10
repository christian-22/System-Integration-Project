# System-Integration-Project
My name is Christian Cox and this is an extended tutorial on my final project.

#
#
# **Trivia Game**

## Description
This is a trivia game that asks five true or false questions. It was made using p5 (JavaScript), the ELEGOO Uno R3 with Arduino software, and the Tone.js JavaScript library for sound.

## Tutorial
To start the game, press the button next to the green LED on the breadboard. Then press the "true" or "false" buttons for each question before the timer ends. Each question answered correctly increases your score by "1" point. When you answer a question correctly, the green LED will flash. When you answer a question incorrectly, the red LED will flash. Press the button next to the red LED to restart the game if you want to play again!

## Showcase Video: https://youtu.be/xYGsXual_Wc


## Specifications
### Hardware
- UNO R3 Controller Board
- USB Cable
- Green LED
- Red LED
- 7 Breadboard Jumper Wires
- 2 Buttons
- 2 Resistors

![pic2-resized](https://user-images.githubusercontent.com/71905486/167710039-f82a8135-89a4-410e-af63-c7cc6e019c6c.jpeg)
![pic1](https://user-images.githubusercontent.com/71905486/167711974-6c43ca77-f7b6-47b9-b88e-e7c7ed7ce6d6.jpeg)

### Software
- p5 (JavaScript)
- Tone.js Library
- Arduino IDE
- p5 Serial Control

#### Start Screen
<img width="350" alt="start_screen_r" src="https://user-images.githubusercontent.com/71905486/167712794-faa79e56-2e71-4201-9041-08af656ff1e4.png">

#### Question Screen
<img width="350" alt="Q1_noscore_r" src="https://user-images.githubusercontent.com/71905486/167712766-b3a1c667-cb73-44bc-8e22-921b324813c9.png">
<img width="350" alt="Q3_score_r" src="https://user-images.githubusercontent.com/71905486/167712777-cbb9f7be-b60d-4b74-b93b-92256d92e75c.png">

#### Game Over Screen
<img width="350" alt="over_screen_r" src="https://user-images.githubusercontent.com/71905486/167712753-a64c0cb7-1e3f-47f6-8d07-55b9fe7bd370.png">



## Diagram
![system_integration_model-resize](https://user-images.githubusercontent.com/71905486/167710669-b19cda7d-071a-47c4-b9f8-b88cb6a0c1e7.jpg)


## Conceptual Implementation vs. Final Implementation
Initially, the two buttons on the ELEGOO Uno R3 were meant to answer "True" and "False" while playing the game. However, I ran into a conceptual error in my code when implementing this feature. The way I chose to transmit the buttons caused them to constantly output "1" when not pressed and then "0" when pressed. The problem is that my code used this information to switch states, or questions, which caused all of the questions to be instantly answered when a button was pressed. Thus, the final implementation uses the buttons to start and restart the game instead of to play the game.

## Future Implementations
- To make dedicated true and false buttons on the breadboard, so users can play the game completely through the hardware.
- To take trivia questions from a database to make questions more random and different each time you play.
- To make the game more visually appealing by adding animations to question transitions.
- To add a buzzer sound when time expires and to implement a display on the ELEGOO Uno R3 that shows the timer.

