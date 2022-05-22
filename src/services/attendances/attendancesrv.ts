import { service } from "src/lib/core/services/service";
import { serviceProxy } from "src/lib/core/services/serviceProxy";
import { attendances } from "src/models/attendances";

export interface attendanceservice extends service<attendances>
{

}