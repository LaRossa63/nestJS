import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => ({
  uri: getMongoUri(configService),
  ...getMongoOptions(),
});

export const getMongoUri = (configService: ConfigService): string =>
  'mongodb://' +
  configService.get('MONGO_LOGIN') +
  ':' +
  configService.get('MONGO_PASSWORD') +
  '@' +
  configService.get('MONGO_HOST') +
  ':' +
  configService.get('MONGO_PORT') +
  '/' +
  configService.get('MONGO_AUTH_DATABASE');

export const getMongoOptions = (): Omit<TypegooseModuleOptions, 'uri'> => ({
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
});
