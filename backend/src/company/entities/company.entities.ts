import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('companies')
export class CompaniesEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number; //Идентификатор компании

  @Field()
  @CreateDateColumn()
  createdAt: Date; //Дата создания

  @Field()
  @UpdateDateColumn()
  updatedAt: Date; //Дата обновления

  @Field()
  @Column()
  author: string; //Идентификатор пользователя который создал новую организацию

  @Field()
  @Column()
  type: string; //Тип организации (Физ. лицо, Юр. лицо)

  @Field()
  @Column()
  name: string; //Название организации (ООО "Компания")

  @Field()
  @Column()
  inn: string | null; //ИНН организации

  @Field()
  @Column()
  country: string | null; //Страна организации

  @Field()
  @Column()
  index: string | null; //Индекс организации

  @Field()
  @Column()
  region: string | null; //Регион в которой находится организация

  @Field()
  @Column()
  district: string | null; //Район в котором находится организация

  @Field()
  @Column()
  city: string | null; //Город в котором находится организация

  @Field()
  @Column()
  settlement: string | null; //Населенный пункт в котором находится организация

  @Field()
  @Column()
  street: string | null; //Улица по которой находится организация

  @Field()
  @Column()
  house: string | null; //Номер дома в котором находится организация

  @Field()
  @Column()
  apartment: string | null; //Номер квартиры в которой находится организация
}
