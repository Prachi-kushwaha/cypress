import { pgTable, PgTable, timestamp, uuid } from "drizzle-orm/pg-core";

export const workspaces = pgTable("workspaces", {
    id:uuid('id').defaultRandom().primaryKey().notNull(),
    creditedAt:timestamp('credited_at',{
        withTimezone: true,
        mode:'string'
    }),
    workspaceOwner: uuid('workspace_owner').notNull(),
    title:text('title').notNull(),
    iconId:text('icon_id').notNull(),
    data:text('data').notNull(),
    data:text('data'),
    inTrash:text('in_trash').notNull(),
    data:text('data'),
    inTrash:text('in_trash'),
    logo:text('logo'),
    bannerUrl:text('banner_url')
})