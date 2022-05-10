// Christian Cox
// Systems Integration Project
// Trivia Game Youtube Link: https://youtu.be/xYGsXual_Wc

let startTime;
let gameState = 'wait';
let score = 0;
let true_Button;
let false_Button;

// SERIAL VARIABLES
let serialPDM;
let portName = "COM3";
let sensors;

// SYNTH INSTRUMENT
let synth = new Tone.PolySynth().toDestination();

// MAIN MELODY USED FOR 'PLAYING' GAMESTATE
let melodyPlay = new Tone.Sequence((time, note)=>{
    if (note != null)
    {
        synth.triggerAttackRelease(note, 0.05, time);
    }
}, ['G2','A2','B2','C2','F2','D2','F2','C2','B2']);

// MELODY USED FOR 'wait' GAMESTATE (STARTING GAME)
let melodyStart = new Tone.Sequence((time, note)=>{
    if (note != null)
    {
        synth.triggerAttackRelease(note, 0.1, time);
    }
}, ['B4', 'A4']);

// MELODY USED FOR 'end' GAMESTATE (GAME OVER)
let melodyEnd = new Tone.Sequence((time, note)=>{
    if (note != null)
    {
        synth.triggerAttackRelease(note, 0.7, time);
    }
}, ['B4', null, 'A4', null, 'G4', null, 'F4', null, 'E4']);

function preload()
{
    // SERIAL COMMUNICATION
    serialPDM = new PDMSerial(portName);
    console.log(serialPDM.inData);
    sensors = serialPDM.sensorData;
}

function setup() 
{
    createCanvas(1000, 600);
    background(0, 0, 0);
    imageMode(CENTER);

    // DEFAULT PLAYBACK RATE
    melodyPlay.playbackRate = 0.75;
}


// COUNTDOWN
function timer()
{
    return int((millis() - startTime) / 1000);   
}

function startScreen()
{
    textSize(30);
    fill(255, 255, 255);
    text('Trivia Game with Arduino!', 150, 100);
    text('Answer the trivia question using the', 150, 290);
    text('"True" or "False" buttons', 150, 330);
    text('Press the Arduino Button or click to start the game.', 150, 450);

    if (sensors.start_B == 0 || mouseIsPressed)
    {
        startTime = millis();
        gameState = 'playing1';
    }
}

function playScreen1()
{
    // START SOUND
    melodyStart.loop = 1;
    melodyStart.start();
    Tone.Transport.start();
    
    // PLAY SOUND
    melodyPlay.start();
    Tone.Transport.start();
    
    // TIMER
    let time = timer();
    let totalTime = 40;

    textSize(30);
    fill(255, 255, 255);
    text("Time: " + (totalTime - time), 10, 30);
    text("Score: " + score, 10, 60);
    text("Hint: Wrong Answers will decrease your score!", 200, 30);
    text("Question: True or False?", 200, 200);

    Questions(0);

    if (time >= totalTime)
    {
        gameState = 'end';
    }
}

function playScreen2()
{
    // START SOUND
    melodyStart.loop = 1;
    melodyStart.start();
    Tone.Transport.start();
    
    // PLAY SOUND
    melodyPlay.start();
    Tone.Transport.start();
    
    // TIMER
    let time = timer();
    let totalTime = 40;

    textSize(30);
    fill(255, 255, 255);
    text("Time: " + (totalTime - time), 10, 30);
    text("Score: " + score, 10, 60);
    text("Hint: Wrong Answers will decrease your score!", 200, 30);
    text("Question: True or False?", 200, 200);

    Questions(1);

    if (time >= totalTime)
    {
        gameState = 'end';
    }
}

function playScreen3()
{
    // START SOUND
    melodyStart.loop = 1;
    melodyStart.start();
    Tone.Transport.start();
    
    // PLAY SOUND
    melodyPlay.start();
    Tone.Transport.start();
    
    // TIMER
    let time = timer();
    let totalTime = 40;

    textSize(30);
    fill(255, 255, 255);
    text("Time: " + (totalTime - time), 10, 30);
    text("Score: " + score, 10, 60);
    text("Hint: Wrong Answers will decrease your score!", 200, 30);
    text("Question: True or False?", 200, 200);

    Questions(2);

    if (time >= totalTime)
    {
        gameState = 'end';
    }
}

function playScreen4()
{
    // START SOUND
    melodyStart.loop = 1;
    melodyStart.start();
    Tone.Transport.start();
    
    // PLAY SOUND
    melodyPlay.start();
    Tone.Transport.start();
    
    // TIMER
    let time = timer();
    let totalTime = 40;

    textSize(30);
    fill(255, 255, 255);
    text("Time: " + (totalTime - time), 10, 30);
    text("Score: " + score, 10, 60);
    text("Hint: Wrong Answers will decrease your score!", 200, 30);
    text("Question: True or False?", 200, 200);

    Questions(3);

    if (time >= totalTime)
    {
        gameState = 'end';
    }
}

function playScreen5()
{
    // START SOUND
    melodyStart.loop = 1;
    melodyStart.start();
    Tone.Transport.start();
    
    // PLAY SOUND
    melodyPlay.start();
    Tone.Transport.start();
    
    // TIMER
    let time = timer();
    let totalTime = 40;

    textSize(30);
    fill(255, 255, 255);
    text("Time: " + (totalTime - time), 10, 30);
    text("Score: " + score, 10, 60);
    text("Hint: Wrong Answers will decrease your score!", 200, 30);
    text("Question: True or False?", 200, 200);

    Questions(4);

    if (time >= totalTime)
    {
        gameState = 'end';
    }
}

function gameOver()
{
    // STOP PLAYING MUSIC ON GAME OVER
    melodyEnd.loop = 1;
    melodyStart.stop();
    melodyPlay.stop();
    melodyEnd.start();
    Tone.Transport.start();

    text("GAME OVER", 150, 100);
    text("Press the arduino button or ANY KEY to RESTART the game!", 150, 200);
    text("Final Score: " + score + "/5", 150, 350);

    if (sensors.restart_B == 0 || keyIsPressed)
    {
        // RESET GAME SETTINGS
        score = 0;
        melodyPlay.playbackRate = 0.75;

        melodyEnd.stop();
        
        startTime = millis();
        gameState = 'playing1';
    }
}

function draw() 
{
    background(0, 0, 0);
    
    // SWITCHING GAME STATES
    if (gameState == 'wait')
    {
        startScreen();
    }

    else if (gameState == 'playing1')
    {
        playScreen1();
    }

    else if (gameState == 'playing2')
    {
        playScreen2();
    }

    else if (gameState == 'playing3')
    {
        playScreen3();
    }

    else if (gameState == 'playing4')
    {
        playScreen4();
    }

    else if (gameState == 'playing5')
    {
        playScreen5();
    }

    else if (gameState == 'end')
    {
        gameOver();
    }    
}

function Questions(question_num)
{
    switch(question_num)
    {
        case 0:
            text("No word in English rhymes with orange.", 200, 300);
            true_Button = createButton('TRUE');
            false_Button = createButton('FALSE')
            true_Button.position(300, 400);
            false_Button.position(500, 400);
            true_Button.size(150, 100);
            false_Button.size(150, 100);
            true_Button.mousePressed(function() 
            {
                score += 1;
                gameState = 'playing2';
                serialPDM.transmit('true_LED', 0);
            });
            false_Button.mousePressed(function()
            {
                gameState = 'playing2';
                serialPDM.transmit('false_LED', 0);
            });

            break;

        case 1:
            text("Bats are blind.", 200, 300);
            true_Button = createButton('TRUE');
            false_Button = createButton('FALSE')
            true_Button.position(300, 400);
            false_Button.position(500, 400);
            true_Button.size(150, 100);
            false_Button.size(150, 100);
            true_Button.mousePressed(function() 
            {
                gameState = 'playing3';
                serialPDM.transmit('false_LED', 0);
            });
            false_Button.mousePressed(function()
            {
                score += 1;
                gameState = 'playing3';
                serialPDM.transmit('true_LED', 0);
            });
        
            break;

        case 2:
            text("Nails are made of keratin.", 200, 300);
            true_Button = createButton('TRUE');
            false_Button = createButton('FALSE')
            true_Button.position(300, 400);
            false_Button.position(500, 400);
            true_Button.size(150, 100);
            false_Button.size(150, 100);
            true_Button.mousePressed(function() 
            {
                score += 1;
                gameState = 'playing4';
                serialPDM.transmit('true_LED', 0);
            });
            false_Button.mousePressed(function()
            {
                gameState = 'playing4';
                serialPDM.transmit('false_LED', 0);
            });

            break;

        case 3:
            text("Holland is also called the Netherlands.", 200, 300);
            true_Button = createButton('TRUE');
            false_Button = createButton('FALSE')
            true_Button.position(300, 400);
            false_Button.position(500, 400);
            true_Button.size(150, 100);
            false_Button.size(150, 100);
            true_Button.mousePressed(function() 
            {
                score += 1;
                gameState = 'playing5';
                serialPDM.transmit('true_LED', 0);
            });
            false_Button.mousePressed(function()
            {
                gameState = 'playing5';
                serialPDM.transmit('false_LED', 0);
            });

            break;

        case 4:
            text("Sydney is the capital of Australia.", 200, 300);
            true_Button = createButton('TRUE');
            false_Button = createButton('FALSE')
            true_Button.position(300, 400);
            false_Button.position(500, 400);
            true_Button.size(150, 100);
            false_Button.size(150, 100);
            true_Button.mousePressed(function() 
            {
                serialPDM.transmit('false_LED', 0);
                gameState = 'end';
            });
            false_Button.mousePressed(function()
            {
                score += 1;
                serialPDM.transmit('true_LED', 0);
                gameState = 'end';
            });

            break;
    }
}
