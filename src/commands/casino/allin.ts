import { Command, CommandoMessage } from 'discord.js-commando';

export default class Betaallin extends Command {
  constructor(client) {
    super(client, {
      name: "betaallin",
      memberName: "betaallin",
      group: "casino",
      description: "Push all your latinum in and cross your fingers",
      args: [
        {
            key: "bet",
            prompt: "How much do you want to bet?",
            type: "integer"
        },
        {
            key: "mult",
            prompt: "Please set a multiplier?",
            type: "integer"
        }
      ]
    });
  }

  async run(message: CommandoMessage, { bet, mult }) {
    const num = Math.floor(Math.random() * (mult + 1))
    const result = num === 0 ? true : false
    console.log(num)  
    if (result) {
        const amountWon = mult * bet
        // TODO add amountWon to player account
        const msg = '▂▃▅▇█▓▒░ [♠]  [♥]  [♦]  [♣] ░▒▓█▇▅▃▂\n\t\tCONGRATULATIONS YOU WON\n░▒▓█▇▅▃▂ ⚅ J A C K P O T ⚅ ▂▃▅▇█▓▒░'
        return message.say(msg)
    }
    else {
        const msg = "Nothing happens. You stare at the machine contemplating your decision."
        return message.say(msg)
        // TODO remove currency from player account?
        
    }
    
  }
}
