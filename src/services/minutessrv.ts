import { service } from "src/lib/core/services/service";
import { minutes } from "src/models/minutes";

export class minutesservice implements service<minutes>
{
    Delete(model: minutes): boolean {
        throw new Error("Method not implemented.");
    }
    Inseert(model: minutes): boolean {
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