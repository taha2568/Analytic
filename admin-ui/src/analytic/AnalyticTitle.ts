import { Analytic as TAnalytic } from "../api/analytic/Analytic";

export const ANALYTIC_TITLE_FIELD = "action";

export const AnalyticTitle = (record: TAnalytic): string => {
  return record.action || record.id;
};
