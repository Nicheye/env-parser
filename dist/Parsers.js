"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanParser = exports.NumberParser = exports.StringParser = void 0;
// парсит строки
// T = string
// возвращает тоже строку
// если уже строка - просто отдает значение
class StringParser {
    parse(value) {
        console.log(`Parsing string: ${value}`);
        return value;
    }
}
exports.StringParser = StringParser;
// парсит числа
// T = number
// если после конвертации все равно not-a-number - выдает ошибку
class NumberParser {
    parse(value) {
        console.log(`Parsing number: ${value}`);
        const num = Number(value);
        if (isNaN(num)) {
            throw new Error(`значние ${value} не валидное число`);
        }
        return num;
    }
}
exports.NumberParser = NumberParser;
// парсит boolean
// T = boolean
// переводит значение в lowercase и сравнивает, если не равно true или false - выдает ошибку
class BooleanParser {
    parse(value) {
        if (value.toLowerCase() === 'true')
            return true;
        if (value.toLowerCase() === 'false')
            return false;
        throw new Error(`значние ${value} не валидное boolean`);
    }
}
exports.BooleanParser = BooleanParser;
