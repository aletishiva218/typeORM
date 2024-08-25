import "reflect-metadata";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DataSource,
  Repository,
} from "typeorm";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

// Define the User entity
@Entity()
class Airports {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  icao_code?: string;

  @Column({ nullable: true })
  iata_code?: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  type?: string;

  @Column({ nullable: true })
  city_id?: number;

  @Column({ nullable: true })
  country_id?: number;

  @Column({ nullable: true })
  continent_id?: number;

  @Column({ nullable: true })
  website_url?: string;

  @Column({ nullable: true })
  created_at?: Date;

  @Column({ nullable: true })
  updated_at?: Date;

  @Column({ nullable: true })
  latitude_deg?: number;

  @Column({ nullable: true })
  longitude_deg?: number;

  @Column({ nullable: true })
  elevation_ft?: number;

  @Column({ nullable: true })
  wikipedia_link?: string;
}

@Entity()
class Countries {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({nullable:true})
  name?: string;

  @Column({nullable:true})
  alt_name?: string;

  @Column({nullable:true})
  country_code_two?: string;

  @Column({nullable:true})
  country_code_three?: string;

  @Column({nullable:true})
  flag_app?: string;

  @Column({ nullable: true })
  mobile_code?: number;

  @Column({nullable:true})
  continent_id?: number;

  @Column({nullable:true})
  country_flag?: string;
}

@Entity()
class Cities {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({nullable:true})
  name?: string;

  @Column({nullable:true})
  alt_name?: string;

  @Column({nullable:true})
  country_id?: number;

  @Column({nullable:true})
  is_active?: boolean;

  @Column({ nullable: true })
  created_at?: Date;

  @Column({ nullable: true })
  updated_at?: Date;

  @Column({ nullable: true })
  lat?: number;


  @Column({ nullable: true })
  long?: number;
}

// Create the TypeORM connection
const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.host,
  port: Number(process.env.dbport),
  username: process.env.usernae, // Replace with your PostgreSQL username
  password: process.env.password, // Replace with your PostgreSQL password
  database:process.env.database, // Replace with your PostgreSQL database name
  synchronize: true, // Automatically create the database schema
  entities: [Airports, Countries, Cities],
  
});

const getAirportByIcaoCode = async (iataCode: string) => {
  const airportRepository: Repository<Airports> =
    AppDataSource.getRepository(Airports);

  // Using `findOne` to get a single record by condition
  const airport = await airportRepository.findOne({
    where: { iata_code: iataCode }, // Condition
  });

  return airport;
};

const getCountryById = async (countryId: number) => {
  const countryRepository: Repository<Countries> =
    AppDataSource.getRepository(Countries);

  // Using `findOne` to get a single record by condition
  const country = await countryRepository.findOne({
    where: { id: countryId }, // Condition
  });

  return country;
};

const getCityByCountryId = async (countryId: number) => {
  const cityRepository: Repository<Cities> =
    AppDataSource.getRepository(Cities);

  // Using `findOne` to get a single record by condition
  const city = await cityRepository.findOne({
    where: { country_id: countryId }, // Condition
  });

  return city;
};

// Initialize the DataSource and start the Express server
AppDataSource.initialize()
  .then(async () => {
    const airportRepository = AppDataSource.getRepository(Airports);

    // Create an Express application
    const app = express();
    app.use(bodyParser.json());
    // Define a GET endpoint to retrieve all users
    app.get("/:iata_code", async (req: Request, res: Response) => {
      const { iata_code } = req.params;
      getAirportByIcaoCode(iata_code).then((airport) => {
        if (airport) {
          let { country_id, city_id, ...newAirport } = airport;
          let address = {};
          if (airport.country_id)
            getCountryById(airport.country_id).then((country) => {
              if (!country) 
              {
                (address as any).country = null;
                (newAirport as any).address = address;
                res.json(newAirport)
              }
              else {
                (address as any).country = { ...country };
                getCityByCountryId(country.id).then(city=>{
                    if(!city)
                    (address as any).city = null;
                        else
                    (address as any).city = {...city};
                    (newAirport as any).address = { ...address };
                  return  res.json(newAirport);
                });
            }
           
            });
        } else {
          res.json({
            message: "No airport found with the given IATA CODE code.",
          });
        }
      });
    });

    // Start the Express server
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => console.log("Error: ", error));
