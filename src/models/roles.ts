import { basemodel } from "src/lib/core/models/basemodel";

export class roles extends basemodel
{
    title: string;
    constructor(public role: any)
    {
        super(role && role.id || 0);
        this.title = role && role.title || "";
    }
}