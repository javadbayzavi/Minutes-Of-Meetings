import { basemodel } from "src/lib/core/models/basemodel"
import { roles } from "./roles";
import { user } from "./user"

export class attendances extends basemodel
{
    user: user;
    role: roles;
    constructor(attend: any)
    {
        super(attend && attend.id || 0);
        this.user = attend && attend.user || null;
        this.role = attend && attend.role || null;
    }
}