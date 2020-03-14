/*
It's a Pokemon battle! Your task is to calculate the damage that a particular move would do using the following formula (not the actual one from the game):

damage = 50 * (attack / defense) * effectiveness
Where:

attack = your attack power
defense = the opponent's defense
effectiveness = the effectiveness of the attack based on the matchup (see explanation below)
Effectiveness:

Attacks can be super effective, neutral, or not very effective depending on the matchup. For example, water would be super effective against fire, but not very effective against grass.

Super effective: 2x damage
Neutral: 1x damage
Not very effective: 0.5x damage
To prevent this kata from being tedious, you'll only be dealing with four types: fire, water, grass, and electric. Here is the effectiveness of each matchup:

fire > grass
fire < water
fire = electric
water < grass
water < electric
grass = electric
For this kata, any type against itself is not very effective. Also, assume that the relationships between different types are symmetric (if A is super effective against B, then B is not very effective against A).

The function you must implement takes in:

your type
the opponent's type
your attack power
the opponent's defense 
*/

function calculateDamage(yourType, opponentType, attack, defense){
    let damage;
    let effectiveness;
    let types = [
        {   type: "fire",
            strength: "grass",
            neutral: "electric",
            weakness: "water",
        },
        {   
            type: "water",
            strength: "fire",
            neutral: "electric",
            weakness: "grass",
        },
        {   
            type: "grass",
            strength: "water",
            neutral: "electric",
            weakness: "fire",
        },
        {   
            type: "electric",
            strength: "water",
            neutral: "grass",
            weakness: "null",
        },        
    ]

    for(let t=0; t<types.length; t++) {
        if(yourType === types[t].type) {
            // console.log(types[t].type);

            for(let key in types[t]) {
                if(types[t][key] === opponentType) {
                    // console.log(types[t][key]);

                    switch(key) {
                        case "weakness": effectiveness = 0.5; break;
                        case "neutral": effectiveness = 1; break;
                        case "strength": effectiveness = 2; break;
                        default: break;
                    }
                    // console.log( effectiveness )
                    damage = ( 50 * (attack/defense) * effectiveness );
                }
            }
            return damage;
        } 
    }

}

calculateDamage("fire", "water", 100, 100)