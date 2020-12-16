import { Command, CommandoMessage } from 'discord.js-commando';

export default class Coin extends Command {
  constructor(client) {
    super(client, {
      name: "coin",
      memberName: "coin",
      group: "casino",
      description: "Flip a coin",
      args: [
        {
          key: "bet",
          prompt: "How much do you want to bet?",
          type: "integer",
          validate: bet => Number(bet) === 10
        },
        {
          key: "choice",
          prompt: "Heads or Tails?",
          type: "string",
          oneOf: ['heads', 'tails', 'h', 't']
        }
      ]
    });
  }

  async run(message: CommandoMessage, { bet, choice }) {
    const result = Math.random() < 0.5 ? 'heads' : 'tails'
    choice = ['heads', 'h'].includes(choice.toLowerCase()) ? 'heads' : 'tails'
    message.say(`You bet ${bet}. It came up ${result}`)
    if (choice.toLowerCase() === result) {
      // TODO increase player balance
      return message.say('YOU WON!!!')
    } else {
      // TODO decrease player balance
      return message.say('BETTER LUCK NEXT TIME')
    }
  }
}
