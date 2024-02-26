import { ADCIDateFormatter, ADCDateSplitter } from "@asadi/angular-date-components/core";

export class DateFormatterPersian implements ADCIDateFormatter
{
    //Different calendar types use different splitters to split Year, month, and day from each other change this to match your calendar type
    get DateSplitter(): ADCDateSplitter {
        return ADCDateSplitter.slash
    }

}
