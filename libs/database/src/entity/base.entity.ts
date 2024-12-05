import { Worker } from 'snowflake-uuid';
import { CreateDateColumn, DeleteDateColumn, Index, PrimaryColumn, UpdateDateColumn } from 'typeorm';

const worker = new Worker();

export class BaseEntity {
  @PrimaryColumn({ name: 'id', type: 'bigint' })
  id: string = worker.nextId().toString();

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @Index()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt: Date;
}
