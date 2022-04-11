import { basemodel } from "src/lib/core/models/basemodel";

/*
* This model define the classification of minutes of meeting
*/
export class category extends basemodel
{
    title: string;

    constructor(cat: any)
    {
        super(cat && cat.id || 0);
        this.title = cat && cat.title || "";
    }
}