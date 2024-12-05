"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
require("reflect-metadata");
const Config_1 = require("./Config");
const Decorators_1 = require("./Decorators");
const Parsers_1 = require("./Parsers");
// наследует от Config, значит вызывается конструктор
// применяются декораторы для обьяления переменных окружения и парсеров
// связываются свойства через с перемнной окружения и используется парсер для преобразования в нужный формат
let AppConfig = class AppConfig extends Config_1.Config {
};
exports.AppConfig = AppConfig;
__decorate([
    (0, Decorators_1.Property)('API_KEY', new Parsers_1.StringParser()),
    __metadata("design:type", String)
], AppConfig.prototype, "apiKey", void 0);
__decorate([
    (0, Decorators_1.Property)('BASE_URL', new Parsers_1.StringParser()),
    __metadata("design:type", String)
], AppConfig.prototype, "baseUrl", void 0);
__decorate([
    (0, Decorators_1.Property)('EXAMPLE_VARIABLE', new Parsers_1.NumberParser()),
    __metadata("design:type", Number)
], AppConfig.prototype, "exampleVariable", void 0);
exports.AppConfig = AppConfig = __decorate([
    (0, Decorators_1.ConfigSection)({ prefix: 'APP' })
], AppConfig);
