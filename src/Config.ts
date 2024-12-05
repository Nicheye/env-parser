// создает конструктор (создается при создании обьекта класса)
// извлекает префикс, если нет, то пустой
// извлекает свойства, если нет, то пустой массив
// проходит по свойствам и создает для каждого свойства полную переменную окружения
// если переменная окружения не установлена, то выдает ошибку
// если переменная установлена, то применяет парсер и записывает в свойство  

export class Config {
    constructor() {
        const prefix = Reflect.getMetadata('config:prefix', this.constructor) || '';
        const properties = Reflect.getMetadata('config:properties', this.constructor) || [];

        // раскладываем массив свойств по переменным и парсерам
        for (const { key, envVar, parser } of properties) {
            const fullEnvVar = `${prefix}_${envVar}`;
            const value = process.env[fullEnvVar];

            if (value === undefined) {
                throw new Error(`Environment variable ${fullEnvVar} is not set.`);
            }

            (this as any)[key] = parser.parse(value);
        }
    }
}
