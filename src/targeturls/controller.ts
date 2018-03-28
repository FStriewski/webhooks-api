import {Body, JsonController, Post} from "routing-controllers";
import {Target} from "./entities";

@JsonController()
export default class TargetController {

  @Post('/targets')
  createHook(
    @Body() body: Target
  ) {
    return Target.create(body).save()
  }

}