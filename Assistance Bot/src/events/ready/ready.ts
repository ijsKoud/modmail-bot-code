import BaseEvent from '../../utils/structures/BaseEvent';
import DiscordClient from '../../client/client';

export default class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client: DiscordClient) {
    client.user.setActivity('reading my DMs | DM me for assistance', { type: 'PLAYING' });
    console.log('Bot has logged in.');
  }
}