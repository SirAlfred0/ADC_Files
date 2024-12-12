import { ADCIDateAdapter } from "@asadi/angular-date-components/core";
import * as moment from 'jalali-moment';

export class DateAdapterPersian implements ADCIDateAdapter
{
    startDayOfweek: number = 6;
    
    getMonthsOfYear(): string[] {
        const months: string[] = [
            'فروردین',
            'اردیبهشت',
            'خرداد',
            'تیر',
            'مرداد',
            'شهریور',
            'مهر',
            'آبان',
            'آذر',
            'دی',
            'بهمن',
            'اسفند'
        ];

        return months;
    }

    getWeeksOfMonth(year: number, month: number): string[]
    {
        const daysOfMonth = moment.from(`${year}/${month}/01`, 'fa', 'jYYYY/jM/jDD').jDaysInMonth();
        const firstWeekOfMonth = moment.from(`${year}/${month}/01`, 'fa', 'jYYYY/jM/jDD').jWeek();
        let lastWeekOfMonth = moment.from(`${year}/${month}/${daysOfMonth}`, 'fa', 'jYYYY/jM/jD').jWeek();


        let weeks: string[] = [];
        

        if(month === 12)
        {
            if(lastWeekOfMonth == 1)
            {
                const d = firstWeekOfMonth + (daysOfMonth + moment(`${year}/12/01`, 'jYYYY/jMM/jDD').locale('fa').jDay()) / 7;
                lastWeekOfMonth = Math.floor(d);
            }
        }

        for(let i = firstWeekOfMonth; i <= lastWeekOfMonth; i++)
        {
            weeks.push(i.toString());
        }

        return weeks;
    }

    getDateOfDay(year: number, weekOfYear: number, dayOfWeek: number): string 
    {
        const firstDayOfYear =  moment(`${year}/01/01`, 'jYYYY/jMM/jDD').locale('fa').jDay();
        const dateOfDay = moment(`${year}/01/01`, 'jYYYY/jMM/jDD').locale('fa').add(((weekOfYear - 1) * 7) - firstDayOfYear + dayOfWeek, 'days').format('jYYYY/jMM/jDD');
        return dateOfDay;
    }

    getDaysOfMonth(year: number, monthId: number): number 
    {
        const daysOfMonth = moment(`${year}/${monthId}/1`, 'jYYYY/jMM/jDD').locale('fa').daysInMonth();
        return daysOfMonth;
    }

    transformDate(year: number, month: number, day: number, hour: string = '00', minute: string = '00'): string 
    {
        return moment.from(`${year}/${month}/${day}T${hour}:${minute}:00`, 'fa', 'jYYYY/jMM/jDDTHH:mm:ss').format('YYYY-MM-DDTHH:mm:ss');
    }

    getCurrentMonth(): number {
        return moment().locale('fa').month() + 1;
    }

    getCurrentYear(): number {
        return moment().locale('fa').year();
    }

    getCurrentWeek(): number {
        return moment().locale('fa').week();
    }

    getWeeksOfYear(year: number): number {
        const daysOfMonth = moment.from(`${year}/$12/01`, 'fa', 'jYYYY/jMM/jDD').jDaysInMonth();
        const firstWeekOfMonth = moment.from(`${year}/12/01`, 'fa', 'jYYYY/jMM/jDD').jWeek();
        const d = firstWeekOfMonth + (daysOfMonth + moment(`${year}/12/01`, 'jYYYY/jMM/jDD').locale('fa').jDay()) / 7;

        return Math.floor(d);
    }

    getCurrentDay(): number
    {
        return moment().locale('fa').weekday();
    }

    today(): string
    {
        return moment().locale('en').format('YYYY-MM-DD');
    }

    getDayIndexOf(date: string): number {
        return moment(date, 'YYYY-MM-DD').locale('fa').weekday();
    }

    getWeekOf(date: string): number {
        return moment(date, 'YYYY-MM-DD').locale('fa').jWeek();
    }

    getMonthOf(date: string): number {
        return moment(date, 'YYYY-MM-DD').locale('fa').jMonth() + 1;
    }

    getYearOf(date: string): number {
        return moment(date, 'YYYY-MM-DD').locale('fa').jYear();
    }
}
