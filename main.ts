
let text = "fdsfsd"



input.onButtonPressed(Button.A, function () {
    radio.sendString(text)
})
basic.forever(function() {
    
    radio.setGroup(23)

    

  
})
radio.onReceivedString(function(receivedString: string) {
    
    basic.showString(text)
})