import { Parser } from "./Parsers";

// принимает prefix
// возвращает функцию которую можно применять как декоратор
// defineMetadata записывает префикс как метаданные класса

export function ConfigSection({prefix} : {prefix: string}) {
    return function (constructor: Function) {
        Reflect.defineMetadata('config:prefix', prefix, constructor);
    };
}

// принимает имя перемнной и парсе
// возвращает декоратор для свойства
// извлекает существующие свойства через getMetadata
// создает обьект для нового свйства
// добавляет метаданные о свойстве через defineMetadata
// сохр метаданные о существующих + новое проперти
export function Property(envVar: string, parser: Parser<any>) {
    return function (target: any, key: string | symbol) {
        const existingProperties = Reflect.getMetadata('config:properties', target.constructor) || [];
        const newProperty = { key, envVar, parser };

        Reflect.defineMetadata('config:properties', [...existingProperties, newProperty], target.constructor);
    };
}
