import {
  pgTable,
  serial,
  varchar,
  text,
  integer,
  numeric,
  timestamp,
  uniqueIndex,
  primaryKey,
} from "drizzle-orm/pg-core";

/* ------------------------------------------------------------------ */
/*  services                                                           */
/* ------------------------------------------------------------------ */
export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  shortName: varchar("short_name", { length: 100 }).notNull(),
  regulationName: varchar("regulation_name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  metaDescription: text("meta_description").notNull(),
  icon: varchar("icon", { length: 50 }).notNull().default("Shield"),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/* ------------------------------------------------------------------ */
/*  locations                                                          */
/* ------------------------------------------------------------------ */
export const locations = pgTable("locations", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  county: varchar("county", { length: 255 }).notNull(),
  region: varchar("region", { length: 255 }).notNull(),
  population: integer("population"),
  latitude: numeric("latitude", { precision: 10, scale: 7 }).notNull(),
  longitude: numeric("longitude", { precision: 10, scale: 7 }).notNull(),
  intro: text("intro"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/* ------------------------------------------------------------------ */
/*  industries                                                         */
/* ------------------------------------------------------------------ */
export const industries = pgTable("industries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description").notNull(),
  painPoint: text("pain_point").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/* ------------------------------------------------------------------ */
/*  local_intros — unique content per service+location (THIN GUARD)    */
/* ------------------------------------------------------------------ */
export const localIntros = pgTable(
  "local_intros",
  {
    id: serial("id").primaryKey(),
    serviceId: integer("service_id")
      .notNull()
      .references(() => services.id),
    locationId: integer("location_id")
      .notNull()
      .references(() => locations.id),
    content: text("content").notNull(),
  },
  (table) => [
    uniqueIndex("local_intros_service_location_idx").on(
      table.serviceId,
      table.locationId
    ),
  ]
);

/* ------------------------------------------------------------------ */
/*  faqs                                                               */
/* ------------------------------------------------------------------ */
export const faqs = pgTable("faqs", {
  id: serial("id").primaryKey(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  serviceId: integer("service_id").references(() => services.id),
  locationId: integer("location_id").references(() => locations.id),
  industryId: integer("industry_id").references(() => industries.id),
  sortOrder: integer("sort_order").notNull().default(0),
});

/* ------------------------------------------------------------------ */
/*  reviews                                                            */
/* ------------------------------------------------------------------ */
export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  author: varchar("author", { length: 255 }).notNull(),
  rating: integer("rating").notNull(),
  reviewText: text("review_text").notNull(),
  source: varchar("source", { length: 50 }).notNull().default("google"),
  locationId: integer("location_id").references(() => locations.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/* ------------------------------------------------------------------ */
/*  service_industries — many-to-many                                  */
/* ------------------------------------------------------------------ */
export const serviceIndustries = pgTable(
  "service_industries",
  {
    serviceId: integer("service_id")
      .notNull()
      .references(() => services.id),
    industryId: integer("industry_id")
      .notNull()
      .references(() => industries.id),
    relevanceNote: text("relevance_note"),
  },
  (table) => [
    primaryKey({ columns: [table.serviceId, table.industryId] }),
  ]
);
