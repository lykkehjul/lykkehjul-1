input.onButtonPressed(Button.A, function () {
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
})
input.onButtonPressed(Button.B, function () {
    basic.pause(randint(1500, 3000))
    Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
})
