import { service } from "src/lib/core/services/service";
import { serviceProxy } from "src/lib/core/services/serviceProxy";
import { attendances } from "src/models/attendances";

export class attendanceservice implements service<attendances>
{
    PrepareForDelete(): void {
        throw new Error("Method not implemented.");
    }
    PrepareForInsert(): void {
        throw new Error("Method not implemented.");
    }
    PrepareForUpdate(): void {
        throw new Error("Method not implemented.");
    }
    PrepareForGet(): void {
        throw new Error("Method not implemented.");
    }
    AfterDelete(): void {
        throw new Error("Method not implemented.");
    }
    AfterInsert(): void {
        throw new Error("Method not implemented.");
    }
    AfterUpdate(): void {
        throw new Error("Method not implemented.");
    }
    AfterGet(): void {
        throw new Error("Method not implemented.");
    }
    executor: serviceProxy<attendances>;
    servicemodel: attendances;
    servicemodels: attendances[];

}