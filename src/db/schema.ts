import {integer, sqliteTable, text} from 'drizzle-orm/sqlite-core'

export const students = sqliteTable('students', {
    id: integer('id').primaryKey(),
    name: text('name').notNull(),
    gender: text('gender', { enum: ['남', '여'] }).notNull()
});