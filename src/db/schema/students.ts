import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const students = sqliteTable("students", {
  id: integer("id").primaryKey(),
  name: text("name"),
  gender: text("gender"),
  group: integer("group")
})