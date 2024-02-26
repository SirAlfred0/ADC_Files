import { ADCIDateFormatter, ADCDateSplitter } from "@asadi/angular-date-components/core";

export class DateFormatterPersian implements ADCIDateFormatter
{
    get DateSplitter(): ADCDateSplitter {
        return ADCDateSplitter.slash
    }

}
