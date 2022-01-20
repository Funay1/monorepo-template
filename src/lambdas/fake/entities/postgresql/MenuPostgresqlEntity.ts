import { Exclude } from 'class-transformer';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('menu')
class MenupostgresqlEntity {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column()
    name: string;

    @ManyToOne(() => MenupostgresqlEntity, (menu) => menu, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'menu_parent_id' })
    realatedId;
}

export { MenupostgresqlEntity };
