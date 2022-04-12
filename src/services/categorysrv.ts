import { service } from "src/lib/core/services/service";
import { category } from "src/models/category";

export class categoryservice implements service<category>
{
    Delete(model: category): boolean {
        return true;
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