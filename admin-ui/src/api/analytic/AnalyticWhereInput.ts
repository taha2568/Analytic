import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type AnalyticWhereInput = {
  action?: StringNullableFilter;
  category?: StringNullableFilter;
  id?: StringFilter;
  label?: StringNullableFilter;
  meta?: JsonFilter;
  userId?: StringNullableFilter;
  value?: FloatNullableFilter;
};
