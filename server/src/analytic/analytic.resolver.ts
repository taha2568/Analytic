import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AnalyticResolverBase } from "./base/analytic.resolver.base";
import { Analytic } from "./base/Analytic";
import { AnalyticService } from "./analytic.service";

@graphql.Resolver(() => Analytic)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AnalyticResolver extends AnalyticResolverBase {
  constructor(
    protected readonly service: AnalyticService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
