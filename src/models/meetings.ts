/*
* This model hold the basic information about a meeting
*/
export class meetings
{
    id: string;
    meetdate : Date;
    strftime : string;
    endtime: string;
    type: number;
    meetnumber: string;

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
}