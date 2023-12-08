import { JCIDateFormatter, JCDateSplitter } from "jalali-components";

export class DateFormatterEnglish implements JCIDateFormatter
{
    get DateSplitter(): JCDateSplitter {
        return JCDateSplitter.hyphen
    }

}