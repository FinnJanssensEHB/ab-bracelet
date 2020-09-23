radio.onReceivedNumber(function (receivedNumber) {
    led.plotBarGraph(
    radio.receivedPacket(RadioPacketProperty.SignalStrength) + 128,
    86
    )
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) + 128 >= 80) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0)
})
