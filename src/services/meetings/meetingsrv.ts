import { service } from "src/lib/core/services/service";
import { meetings } from "src/models/meetings";

export class meetingservice implements service<meetings>
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
    servicemodel: meetings;
    servicemodels: meetings[];
    Delete(model: meetings): boolean {
        throw new Error("Method not implemented.");
    }
    Insert(model: meetings): boolean {
        throw new Error("Method not implemented.");
    }
    Update(model: meetings): boolean {
        throw new Error("Method not implemented.");
    }
    Get(model: meetings): meetings {
        throw new Error("Method not implemented.");
    }
    Gets(model: meetings): meetings[] {
        throw new Error("Method not implemented.");
    }

    
}