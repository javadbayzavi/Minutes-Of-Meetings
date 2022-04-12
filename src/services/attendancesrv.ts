import { service } from "src/lib/core/services/service";
import { attendances } from "src/models/attendances";

export class attendanceservice implements service<attendances>
{
    Insert(model: attendances): boolean {
        throw new Error("Method not implemented.");
    }
    Delete(model: attendances): boolean {
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
    
}