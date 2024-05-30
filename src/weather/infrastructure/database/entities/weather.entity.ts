import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('weathers')
export class WeatherEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city: string;

  @Column()
  temperature: number;

  @Column()
  description: string;

  @Column()
  timestamp: Date;
}
