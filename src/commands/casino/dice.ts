import { Command, CommandoMessage } from 'discord.js-commando';

export default class Dice extends Command {
    constructor(client) {
        super(client, {
            name: "dice",
            memberName: "dice",
            group: "casino",
            description: "Roll a set of dice",
            args: [
                {
                    key: "bet",
                    prompt: "How much do you want to bet?",
                    type: "integer",
                    validate: bet => Number(bet) <= 100 && Number(bet) >= 25
                }
            ]
        });
    }

    async run(message: CommandoMessage, { bet }) {
        const die_1 = Math.ceil(Math.random() * 6);
        const die_2 = Math.ceil(Math.random() * 6);
        const result = die_1 + die_2;
        message.say('The dice rolls...');
        message.say(`The dice landed on ${die_1} and ${die_2} with a total of ${result}`);
        if ([2, 7, 11, 12].includes(result)) {
            // TODO increase player balance
            return message.say('YOU WON!!!');
        } else {
            // TODO decrease player balance
            return message.say('BETTER LUCK NEXT TIME');
        }
    }
}