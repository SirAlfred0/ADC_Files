import { ADCIDateFormatter, ADCDateSplitter } from "@asadi/angular-date-components/core";

export class DateFormatterEnglish implements ADCIDateFormatter
{
    get DateSplitter(): ADCDateSplitter {
        return ADCDateSplitter.hyphen
    }

}
