import { service } from "src/lib/core/services/service";
import { roles } from "src/models/roles";

export class roleservice implements service<roles>
{
    Delete(model: roles): boolean {
        throw new Error("Method not implemented.");
    }
    Inseert(model: roles): boolean {
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