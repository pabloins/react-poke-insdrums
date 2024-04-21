import { PokemonTypes } from "../constants/types";
import { PokemonType } from "../interfaces/PokemonData";
import bug from '../assets/bug.svg';
import dark from '../assets/dark.svg';
import dragon from '../assets/dragon.svg';
import electric from '../assets/electric.svg';
import fairy from '../assets/fairy.svg';
import fighting from '../assets/fighting.svg';
import fire from '../assets/fire.svg';
import flying from '../assets/flying.svg';
import ghost from '../assets/ghost.svg';
import grass from '../assets/grass.svg';
import ground from '../assets/ground.svg';
import ice from '../assets/ice.svg';
import normal from '../assets/normal.svg';
import poison from '../assets/poison.svg';
import psychic from '../assets/psychic.svg';
import rock from '../assets/rock.svg';
import steel from '../assets/steel.svg';
import water from '../assets/water.svg';

export const mapTypeToIcon = (type: PokemonType) => {
    switch (type.type.name) {
        case PokemonTypes.BUG:
            return bug;
        case PokemonTypes.DARK:
            return dark;
        case PokemonTypes.DRAGON:
            return dragon;
        case PokemonTypes.ELECTRIC:
            return electric;
        case PokemonTypes.FAIRY:
            return fairy;
        case PokemonTypes.FIGHTING:
            return fighting;
        case PokemonTypes.FIRE:
            return fire;
        case PokemonTypes.FLYING:
            return flying;
        case PokemonTypes.GHOST:
            return ghost;
        case PokemonTypes.GRASS:
            return grass;
        case PokemonTypes.GROUND:
            return ground;
        case PokemonTypes.ICE:
            return ice;
        case PokemonTypes.NORMAL:
            return normal;
        case PokemonTypes.POISON:
            return poison;
        case PokemonTypes.PSYCHIC:
            return psychic;
        case PokemonTypes.ROCK:
            return rock;
        case PokemonTypes.STEEL:
            return steel;
        case PokemonTypes.WATER:
            return water;
        default:
            return "";
    }
}