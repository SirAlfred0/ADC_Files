import { UCIDateAdapter } from "universal-components";
import * as moment from 'jalali-moment';

export class DateAdapterPersian implements UCIDateAdapter
{
    
    getDaysOfWeek(): string[] 
    {
        const days: string[] = [
            'شنبه',
            'یک شنبه',
            'دوشنبه',
            'سه شنبه',
            'چهار شنبه',
            'پنج شنبه',
            'جمعه'
        ];
        return days;
    }

    getHoursOfDay(): string[] {
        const hours: string[] = [
            '00:00',
           '01:00',
           '02:00',
           '03:00',
           '04:00',
           '05:00',
            '06:00',
           '07:00',
           '08:00',
           '09:00',
           '10:00',
           '11:00',
            '12:00',
           '13:00',
           '14:00',
           '15:00',
           '16:00',
           '17:00',
            '18:00',
           '19:00',
           '20:00',
           '21:00',
           '22:00',
           '23:00',
        ]

        return hours;
    }

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
}
