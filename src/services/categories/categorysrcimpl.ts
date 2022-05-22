import { category } from "src/models/category";
import { categoryservice } from "./categorysrv";

export class categorysrvimpl implements categoryservice{
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
    servicemodel: category;
    servicemodels: category[];
    Delete(model: category): boolean {
        throw new Error("Method not implemented.");
    }
    Insert(model: category): boolean {
        throw new Error("Method not implemented.");
    }
    Update(model: category): boolean {
        throw new Error("Method not implemented.");
    }
    Get(model: category): category {
        throw new Error("Method not implemented.");
    }
    Gets(model: category): category[] {
        throw new Error("Method not implemented.");
    }

}