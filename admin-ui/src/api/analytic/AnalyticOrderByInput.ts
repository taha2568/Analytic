import { SortOrder } from "../../util/SortOrder";

export type AnalyticOrderByInput = {
  action?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  label?: SortOrder;
  meta?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  value?: SortOrder;
};
