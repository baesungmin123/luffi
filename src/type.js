'use strict';

new TypeIt('.home_title-strong',{
    loop:true,
    speed: 75,

})
    .move(-12)
    .type('Pink Pink ')
    .pause(1000)
    .move(null,{to:'END'})
    .delete()
    .type('Luffi Corder')
    .pause(1000)
    .move(-12)
    .type('Janmang ')
    .pause(1000)
    .delete()
    .type('뽀롱뽀롱 마을 ')
    .pause(1000)
    .move(12)
    .delete()
    .go();