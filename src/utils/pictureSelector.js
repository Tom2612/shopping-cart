import frankenstein from '../pictures/frankenstein.png';
import nef from '../pictures/1984.png';
import dadoes from '../pictures/DADOES.png';
import dune from '../pictures/Dune.png';
import f451 from '../pictures/Fahrenheit 451.png'
import handmaid from '../pictures/Handmaids Tale.png';
import hitchhikers from '../pictures/Hitchhikers Guide.png';
import hyperion from '../pictures/Hyperion.png';
import journey from '../pictures/JourneytotheCenter.png';
import theStand from '../pictures/The_Stand.png';
import timeMachine from '../pictures/Time_Machine.png';
import warWorlds from '../pictures/War_of_the_Worlds.png';
import watchmen from '../pictures/Watchmen.png';
import noImage from '../pictures/noImage.png'

export default function pictureSelector(name) {
    if (name === 'Frankenstein') {
        return frankenstein;
    } else if (name === '1984'){
        return nef;
    } else if (name === 'Dune') {
        return dune;
    } else if (name === 'Do Androids Dream of Electric Sheep?') {
        return dadoes;
    } else if (name === 'Fahrenheit 451') {
        return f451;
    } else if (name === 'The Handmaid\'s Tale') {
        return handmaid;
    } else if (name === 'Hitchhiker\'s Guide to the Galaxy') {
        return hitchhikers;
    } else if (name === 'Hyperion') {
        return hyperion;
    } else if (name === 'Journey to the Center of the Earth') {
        return journey;
    } else if (name === 'The Stand') {
        return theStand;
    } else if (name === ' The Time Machine') {
        return timeMachine;
    } else if (name === 'The War of the Worlds') {
        return warWorlds;
    } else if (name === 'Watchmen') {
        return watchmen;
    } else return noImage;
}