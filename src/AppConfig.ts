import 'reflect-metadata';
import { Config } from './Config';
import { ConfigSection, Property } from './Decorators';
import { StringParser, NumberParser } from './Parsers';

// наследует от Config, значит вызывается конструктор
// применяются декораторы для обьяления переменных окружения и парсеров
// связываются свойства через с перемнной окружения и используется парсер для преобразования в нужный формат
@ConfigSection({ prefix: 'APP' })
export class AppConfig extends Config {
// name!: type of parse
  @Property('API_KEY', new StringParser())
  readonly apiKey!: string;

  @Property('BASE_URL', new StringParser())
  readonly baseUrl!: string;

  @Property('EXAMPLE_VARIABLE', new NumberParser())
  readonly exampleVariable!: number;
}
