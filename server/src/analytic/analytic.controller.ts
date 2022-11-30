import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnalyticService } from "./analytic.service";
import { AnalyticControllerBase } from "./base/analytic.controller.base";

@swagger.ApiTags("analytics")
@common.Controller("analytics")
export class AnalyticController extends AnalyticControllerBase {
  constructor(
    protected readonly service: AnalyticService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
