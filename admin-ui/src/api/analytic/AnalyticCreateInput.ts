import { InputJsonValue } from "../../types";

export type AnalyticCreateInput = {
  action?: string | null;
  category?: string | null;
  label?: string | null;
  meta?: InputJsonValue;
  userId?: string | null;
  value?: number | null;
};
