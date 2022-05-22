import { service } from "src/lib/core/services/service";
import { serviceProxy } from "src/lib/core/services/serviceProxy";
import { minutes } from "src/models/minutes";

export class minutesservice implements service<minutes>
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
    executor: serviceProxy<minutes>;
    servicemodel: minutes;
    servicemodels: minutes[];
    Delete(model: minutes): boolean {
        throw new Error("Method not implemented.");
    }
    Insert(model: minutes): boolean {
        throw new Error("Method not implemented.");
    }
    Update(model: minutes): boolean {
        throw new Error("Method not implemented.");
    }
    Get(model: minutes): minutes {
        throw new Error("Method not implemented.");
    }
    Gets(model: minutes): minutes[] {
        throw new Error("Method not implemented.");
    }

}