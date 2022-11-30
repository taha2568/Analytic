import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AnalyticServiceBase } from "./base/analytic.service.base";

@Injectable()
export class AnalyticService extends AnalyticServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
