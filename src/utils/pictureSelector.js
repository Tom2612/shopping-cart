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
import timeMachine from '../pictures/TimeMachine.png';
import warWorlds from '../pictures/War_of_the_Worlds.png';
import watchmen from '../pictures/Watchmen.png';
import s2001 from '../pictures/2001.png';
import bravenewworld from '../pictures/bravenewworld.png';
import endersgame from '../pictures/endersgame.png';
import irobot from '../pictures/irobot.png';
import jurassicpark from '../pictures/jurassicpark.png';
import neuromancer from '../pictures/neuromancer.png';
import slaughter from '../pictures/slaughter.png';
import noImage from '../pictures/noImage.png';


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
    } else if (name === 'The Time Machine') {
        return timeMachine;
    } else if (name === 'The War of the Worlds') {
        return warWorlds;
    } else if (name === 'Watchmen') {
        return watchmen;
    } else if (name === '2001: A Space Odyssey'){
        return s2001;
    }else if (name==='Brave New World') {
        return bravenewworld;
    } else if (name === 'Ender\'s Game') {
        return endersgame;
    } else if (name === 'I, Robot') {
        return irobot;
    } else if (name === 'Jurassic Park') {
        return jurassicpark;
    } else if (name === 'Neuromancer') {
        return neuromancer;
    } else if (name === 'Slaughterhouse-five') {
        return slaughter;
    } else return noImage
}