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
          type: "integer"
        }
      ]
    });
  }

  async run(message: CommandoMessage, { bet }) {
    const result = Math.random() < 0.5 ? 'heads' : 'tails'
    return message.say(`You bet ${bet}. It came up ${result}`)
  }
}
