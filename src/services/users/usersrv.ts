import { service } from "src/lib/core/services/service";
import { user } from "src/models/user";

export class userservice implements service<user>
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
    servicemodel: user;
    servicemodels: user[];
    Delete(model: user): boolean {
        throw new Error("Method not implemented.");
    }
    Insert(model: user): boolean {
        throw new Error("Method not implemented.");
    }
    Update(model: user): boolean {
        throw new Error("Method not implemented.");
    }
    Get(model: user): user {
        throw new Error("Method not implemented.");
    }
    Gets(model: user): user[] {
        throw new Error("Method not implemented.");
    }
  
}