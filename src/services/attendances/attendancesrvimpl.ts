import { attendances } from "src/models/attendances";
import { attendanceservice } from "./attendancesrv";

export class attendancesrvimpl implements attendanceservice{
    Delete(model: attendances): boolean {
        throw new Error("Method not implemented.");
    }
    Insert(model: attendances): boolean {
        throw new Error("Method not implemented.");
    }
    Update(model: attendances): boolean {
        throw new Error("Method not implemented.");
    }
    Get(model: attendances): attendances {
        throw new Error("Method not implemented.");
    }
    Gets(model: attendances): attendances[] {
        throw new Error("Method not implemented.");
    }
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
    servicemodel: attendances;
    servicemodels: attendances[];
}