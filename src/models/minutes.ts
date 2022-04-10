import { category } from "./category";
import { meetings } from "./meetings";
import { user } from "./user";
/*
* This model hold the basic information about a meeting
*/
export class minutes
{
    id: string;
    meeting : meetings;
    cat : category;
    title: string;
    dudate: string;
    correspondance: user[];
    counter: number = 0;
    
    constructor(public iid: string, public mmeetdate: Date, public startttime: string
        , public eendtime: string, public ttype: number, public mmeetnumber: string)
        {
           this.id = iid;
           this.meetdate = mmeetdate;
           this.strftime = startttime;
           this.endtime  = eendtime;
           this.type = ttype;
           this.meetnumber = mmeetnumber;
        }
/**
 * class accessors */        
    private _description: string;
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
}