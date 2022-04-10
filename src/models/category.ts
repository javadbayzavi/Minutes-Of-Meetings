/*
* This model define the classification of minutes of meeting
*/
export class category
{
    id: string;
    title: string;

    constructor(public idd: string, public ttl: string)
    {
        this.id = idd;
        this.title = ttl;
    }
}