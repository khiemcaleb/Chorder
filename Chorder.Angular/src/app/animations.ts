import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { transition } from '@angular/animations';
import { style, animate } from '@angular/animations';


export let move = trigger('move', [
    state("left", style({
        transform: 'translateX(-150px)'
    })),
    state("right", style({
        transform: 'translateX(0)'
    })),
    transition('right => left', [
        animate(500)
    ]),
    transition('left => right', [
        animate(500)
    ])
])

export let Animationfocus = trigger('focus', [
    state("focus",style({
        width: '100%',
        border: 'solid white',
    })),
    transition('* => void', [
        animate(500)
    ]),
    transition('void => *', [
        animate(500)
    ])
])
