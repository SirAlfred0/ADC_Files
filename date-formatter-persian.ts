import { JCIDateFormatter, JCDateSplitter } from "jalali-components";

export class DateFormatterPersian implements JCIDateFormatter
{
    get DateSplitter(): JCDateSplitter {
        return JCDateSplitter.slash
    }

}