import { service } from "src/lib/core/services/service";
import { serviceProxy } from "src/lib/core/services/serviceProxy";
import { roles } from "src/models/roles";

export class roleservice implements service<roles>
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
    executor: serviceProxy<roles>;
    servicemodel: roles;
    servicemodels: roles[];
    Delete(model: roles): boolean {
        throw new Error("Method not implemented.");
    }
    Insert(model: roles): boolean {
        throw new Error("Method not implemented.");
    }
    Update(model: roles): boolean {
        throw new Error("Method not implemented.");
    }
    Get(model: roles): roles {
        throw new Error("Method not implemented.");
    }
    Gets(model: roles): roles[] {
        throw new Error("Method not implemented.");
    }
 
}