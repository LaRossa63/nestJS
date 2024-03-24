import { ITelegramOptions } from '../telegram/telegram.interface';
import { ConfigService } from '@nestjs/config';

export const geTelegramConfig = (
  configService: ConfigService,
): ITelegramOptions => {
  console.log('configService', configService.get('TELEGRAM_TOKEN_API'));

  const token = configService.get('TELEGRAM_TOKEN_API');
  if (!token) {
    throw new Error('TELEGRAM_TOKEN_API не задан');
  }

  return {
    token,
    chatId: configService.get('TELEGRAM_CHAT_ID') || '',
  };
};
