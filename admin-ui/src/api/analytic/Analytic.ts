import { JsonValue } from "type-fest";

export type Analytic = {
  action: string | null;
  category: string | null;
  createdAt: Date;
  id: string;
  label: string | null;
  meta: JsonValue;
  updatedAt: Date;
  userId: string | null;
  value: number | null;
};
