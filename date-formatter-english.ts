import { ADCIDateFormatter, ADCDateSplitter } from "@angular-date-components/scheduler";

export class DateFormatterEnglish implements ADCIDateFormatter
{
    //Different calendar types use different splitters to split Year, month, and day from each other change this to match your calendar type
    get DateSplitter(): ADCDateSplitter {
        return ADCDateSplitter.hyphen
    }

}
