import { basemodel } from "src/lib/core/models/basemodel";
import { category } from "./category";
import { meetings } from "./meetings";
import { user } from "./user";
/*
* This model hold the basic information about a meeting
*/
export class minutes extends basemodel
{
    meeting : meetings;
    cat : category;
    title: string;
    dudate: string;
    correspondance: user[];
    counter: number = 0;
    
    constructor(public mnt: any)
        {
           super(mnt && mnt.id ||  0);
           this.meeting = mnt && mnt.meeting ||  null;
           this.cat = mnt && mnt.cat ||  null;
           this.title  = mnt && mnt.title ||  "0";
           this.dudate = mnt && mnt.dudate ||  Date.now().toString();
           this.correspondance = mnt && mnt.correspondance ||  null;
           this.counter = mnt && mnt.counter ||  0;
        }
/**
 * class accessors */        

}