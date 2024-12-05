"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigSection = ConfigSection;
exports.Property = Property;
// принимает prefix
// возвращает функцию которую можно применять как декоратор
// defineMetadata записывает префикс как метаданные класса
function ConfigSection({ prefix }) {
    return function (constructor) {
        Reflect.defineMetadata('config:prefix', prefix, constructor);
    };
}
// принимает имя перемнной и парсе
// возвращает декоратор для свойства
// извлекает существующие свойства через getMetadata
// создает обьект для нового свйства
// добавляет метаданные о свойстве через defineMetadata
// сохр метаданные о существующих + новое проперти
function Property(envVar, parser) {
    return function (target, key) {
        const existingProperties = Reflect.getMetadata('config:properties', target.constructor) || [];
        const newProperty = { key, envVar, parser };
        Reflect.defineMetadata('config:properties', [...existingProperties, newProperty], target.constructor);
    };
}
