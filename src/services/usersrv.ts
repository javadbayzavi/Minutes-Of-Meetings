import { service } from "src/lib/core/services/service";
import { user } from "src/models/user";

export class userservice implements service<user>
{
    Delete(model: user): boolean {
        throw new Error("Method not implemented.");
    }
    Inseert(model: user): boolean {
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