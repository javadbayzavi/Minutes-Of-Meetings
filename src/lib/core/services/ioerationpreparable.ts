interface ioperationpreparable
{
        PrepareForDelete(): void;
        PrepareForInsert(): void;
        PrepareForUpdate(): void;
        PrepareForGet(): void;

        AfterDelete(): void;
        AfterInsert(): void;
        AfterUpdate(): void;
        AfterGet(): void;
}