import { Command, CommandoMessage } from "discord.js-commando";

export default class Cups extends Command {
    constructor(client) {
        super(client, {
            name: "cups",
            memberName: "cups",
            group: "casino",
            description: "Guess which cup out of 3 is hiding the latinum",
            args: [
                {
                    key: "bet",
                    prompt: "How much do you want to bet?",
                    type: "integer",
                    validate: bet => Number(bet) <= 100 && Number(bet) >= 25
                },
                {
                    key: "cup",
                    prompt: "Which cup do you think the latinum is in?",
                    type: "integer",
                    oneOf: [1, 2, 3]
                }
            ]
        });
    }

    async run(message: CommandoMessage, { bet, cup }) {
        const result = Math.ceil(Math.random() * 3);
        message.say("The cups are shuffling...");
        message.say(`The latinum was under cup ${result}`);
        if (cup === result) {
            // TODO increase player balance
            return message.say('YOU WON!!!');
        } else {
            // TODO decrease player balance
            return message.say('BETTER LUCK NEXT TIME');
        }
    }
}