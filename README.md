# Flashcards Project

This repository contains my implementation of the mobile application "Flashcard" (Android and iOS) (React Native assessment project for the [Udacity React Nanodegree Program](https://www.udacity.com/course/react-nanodegree--nd019)).

This app allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks and then take quizzes on those decks.

## App Functionality

### Decks

This view displays all the decks created with the title and the number of cards in it.
The user would be able to tap in any of the decks to see the detail.

#### Deck Detail

On this view, the user will see the title of the deck and the number of cards that it contains. Also, will be able to choose between to create a new card or to answer the quiz.

#### Quiz

On this view the user would be able to go through all the cards in the deck selected. The card question will be displayed with an option to view the answer (flipping the card). It will also show a correct button and an incorrect button that will allow the user to register if he was able to answer the question correctly or not.

After the user completes the quiz, the score will be displayed.

#### Add New Card

On this view, the user will be able to add a new card to the deck selected. It will display an option to enter in the question, an option to enter in the answer and an option to submit the new question.


### New Deck

In this view of the application the user would be able to create a deck which can hold an unlimited number of cards.

## Getting started

### Step 1:
Check out the project's "master" branch and install the latest version of [Node](https://nodejs.org/) or [Yarn](https://yarnpkg.com/en/docs/install) .

### Step 2:

After successfully finish the installation, cd into your project directory and run the command "npm install" if you installed Node or "yarn start" if you chosen Yarn. This will take a while for your first install as it will download all the project dependencies.

```
cd /Flashcards
$ npm install
```

```
cd /Flashcards
$ yarn install
```

### Step 3:
When the installation of the dependencies has finished, you should be able to do:

```
$ npm start
```

or

```
$ yarn start
```

### Step 4:
Following the instructions to run the app on the corresponding simulator.
