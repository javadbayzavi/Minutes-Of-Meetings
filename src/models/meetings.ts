import { basemodel } from "src/lib/core/models/basemodel";

/*
* This model hold the basic information about a meeting
*/
export class meetings extends basemodel
{
    meetdate : Date;
    strftime : string;
    endtime: string;
    type: number;
    meetnumber: string;

    constructor(meeting: any)
        {
           super(meeting && meeting.id || 0);
           this.meetdate = meeting && meeting.meetdate || Date.now().toString();
           this.strftime = meeting && meeting.strftime || "";
           this.endtime  = meeting && meeting.endtime || "";
           this.type = meeting && meeting.type || 0;
           this.meetnumber = meeting && meeting.meetnumber || "";
        }
}