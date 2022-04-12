import { service } from "src/lib/core/services/service";
import { meetings } from "src/models/meetings";

export class meetingservice implements service<meetings>
{
    Delete(model: meetings): boolean {
        return true;
    }
    Insert(model: meetings): boolean {
        return true;
    }
    Update(model: meetings): boolean {
        return true;
    }
    Get(model: meetings): meetings {
        return model;
    }
    Gets(model: meetings): meetings[] {
        return []
        ;
    }
    
}