// интерфеййс парсера (<T> позволяет использоваться любым типам данных)
// берет данные в string возвращает в типе T
export interface Parser<T> {
    parse(value: string): T;
}

// парсит строки
// T = string
// возвращает тоже строку
// если уже строка - просто отдает значение
export class StringParser implements Parser<string> {
    parse(value: string): string {
        console.log(`Parsing string: ${value}`);
        return value;
    }
}


// парсит числа
// T = number
// если после конвертации все равно not-a-number - выдает ошибку
export class NumberParser implements Parser<number> {
    parse(value: string): number {
        console.log(`Parsing number: ${value}`);
        const num = Number(value);
        if (isNaN(num)) {
            throw new Error(`значние ${value} не валидное число`);
        }
        return num;
    }
}

// парсит boolean
// T = boolean
// переводит значение в lowercase и сравнивает, если не равно true или false - выдает ошибку
export class BooleanParser implements Parser<boolean> {
    parse(value: string): boolean {
       if (value.toLowerCase() === 'true') return true;
       if (value.toLowerCase() === 'false') return false;
       throw new Error(`значние ${value} не валидное boolean`)
    }
}