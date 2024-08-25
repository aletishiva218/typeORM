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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let Airports = class Airports {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Airports.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Airports.prototype, "icao_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Airports.prototype, "iata_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Airports.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Airports.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Airports.prototype, "city_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Airports.prototype, "country_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Airports.prototype, "continent_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Airports.prototype, "website_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Airports.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Airports.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Airports.prototype, "latitude_deg", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Airports.prototype, "longitude_deg", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Airports.prototype, "elevation_ft", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Airports.prototype, "wikipedia_link", void 0);
Airports = __decorate([
    (0, typeorm_1.Entity)()
], Airports);
let Countries = class Countries {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Countries.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Countries.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Countries.prototype, "alt_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Countries.prototype, "country_code_two", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Countries.prototype, "country_code_three", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Countries.prototype, "flag_app", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Countries.prototype, "mobile_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Countries.prototype, "continent_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Countries.prototype, "country_flag", void 0);
Countries = __decorate([
    (0, typeorm_1.Entity)()
], Countries);
let Cities = class Cities {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cities.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Cities.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Cities.prototype, "alt_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Cities.prototype, "country_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Cities.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Cities.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Cities.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Cities.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Cities.prototype, "long", void 0);
Cities = __decorate([
    (0, typeorm_1.Entity)()
], Cities);
const AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.host,
    port: Number(process.env.dbport),
    username: process.env.usernae,
    password: process.env.password,
    database: process.env.database,
    synchronize: true,
    entities: [Airports, Countries, Cities],
});
const getAirportByIcaoCode = (iataCode) => __awaiter(void 0, void 0, void 0, function* () {
    const airportRepository = AppDataSource.getRepository(Airports);
    const airport = yield airportRepository.findOne({
        where: { iata_code: iataCode },
    });
    return airport;
});
const getCountryById = (countryId) => __awaiter(void 0, void 0, void 0, function* () {
    const countryRepository = AppDataSource.getRepository(Countries);
    const country = yield countryRepository.findOne({
        where: { id: countryId },
    });
    return country;
});
const getCityByCountryId = (countryId) => __awaiter(void 0, void 0, void 0, function* () {
    const cityRepository = AppDataSource.getRepository(Cities);
    const city = yield cityRepository.findOne({
        where: { country_id: countryId },
    });
    return city;
});
AppDataSource.initialize()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    const airportRepository = AppDataSource.getRepository(Airports);
    const app = (0, express_1.default)();
    app.use(body_parser_1.default.json());
    app.get("/:iata_code", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { iata_code } = req.params;
        getAirportByIcaoCode(iata_code).then((airport) => {
            if (airport) {
                let { country_id, city_id } = airport, newAirport = __rest(airport, ["country_id", "city_id"]);
                let address = {};
                if (airport.country_id)
                    getCountryById(airport.country_id).then((country) => {
                        if (!country) {
                            address.country = null;
                            newAirport.address = address;
                            res.json(newAirport);
                        }
                        else {
                            address.country = Object.assign({}, country);
                            getCityByCountryId(country.id).then(city => {
                                if (!city)
                                    address.city = null;
                                else
                                    address.city = Object.assign({}, city);
                                newAirport.address = Object.assign({}, address);
                                return res.json(newAirport);
                            });
                        }
                    });
            }
            else {
                res.json({
                    message: "No airport found with the given IATA CODE code.",
                });
            }
        });
    }));
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}))
    .catch((error) => console.log("Error: ", error));
