import { UCIDateFormatter, UCDateSplitter } from "universal-components";

export class DateFormatterEnglish implements UCIDateFormatter
{
    //Different calendar types use different splitters to split Year, month, and day from each other change this to match your calendar type
    get DateSplitter(): UCDateSplitter {
        return UCDateSplitter.hyphen
    }

}
