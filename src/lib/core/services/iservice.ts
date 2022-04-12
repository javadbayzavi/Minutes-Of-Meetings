import { Injectable } from "@angular/core";


export interface iservice<Type> extends ioperationpreparable
{
    executor: iserviceproxy<Type>;
    servicemodel: Type;
    servicemodels: Type[];

    Delete(model:Type) : boolean;
    Insert(model:Type): boolean;
    Update(model:Type): boolean;
    Get(model:Type): Type;
    Gets(model:Type): Type[];
}