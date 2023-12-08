import { ADCIDateAdapter } from "@angular-date-components/scheduler";
import * as moment from 'jalali-moment';


export class DateAdapterEnglish implements ADCIDateAdapter
{
    
    getDaysOfWeek(): string[] 
    {
        const days: string[] = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
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
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];

        return months;
    }

    getWeeksOfMonth(year: number, month: number): string[]
    {
        const daysOfMonth = moment.from(`${year}-${month}-01`, 'en', 'YYYY-MM-DD').daysInMonth();
        const firstWeekOfMonth = moment.from(`${year}-${month}-01`, 'en', 'YYYY-MM-DD').week();
        let lastWeekOfMonth = moment.from(`${year}-${month}-${daysOfMonth}`, 'en', 'YYYY-MM-DD').week();


        let weeks: string[] = [];
        

        if(month === 12)
        {
            if(lastWeekOfMonth == 1)
            {
                const d = firstWeekOfMonth + (daysOfMonth + moment(`${year}-12-01`, 'YYYY-MM-DD').locale('en').day()) / 7;
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
        const firstDayOfYear =  moment(`${year}-01-01`, 'YYYY-MM-DD').locale('en').day();
        const dateOfDay = moment(`${year}-01-01`, 'YYYY-MM-DD').locale('en').add(((weekOfYear - 1) * 7) - firstDayOfYear + dayOfWeek, 'days').format('YYYY-MM-DD');
        return dateOfDay;
    }

    getDaysOfMonth(year: number, monthId: number): number 
    {
        const daysOfMonth = moment(`${year}-${monthId}-1`, 'YYYY-MM-DD').locale('en').daysInMonth();
        return daysOfMonth;
    }

    transformDate(year: number, month: number, day: number, hour: string = '00', minute: string = '00'): string 
    {
        return moment.from(`${year}-${month}-${day}T${hour}:${minute}:00`, 'en', 'YYYY-MM-DDTHH:mm:ss').format('YYYY-MM-DDTHH:mm:ss');
    }

    getCurrentMonth(): number {
        return moment().locale('en').month() + 1;
    }

    getCurrentYear(): number {
        return moment().locale('en').year();
    }

    getCurrentWeek(): number {
        return moment().locale('en').week();
    }

    getWeeksOfYear(year: number): number {
        const daysOfMonth = moment.from(`${year}-12-01`, 'en', 'YYYY-MM-DD').daysInMonth();
        const firstWeekOfMonth = moment.from(`${year}-12-01`, 'en', 'YYYY-MM-DD').week();
        const d = firstWeekOfMonth + (daysOfMonth + moment(`${year}-12-01`, 'YYYY-MM-DD').locale('en').day()) / 7;

        return Math.floor(d);
    }

    getCurrentDay(): number
    {
        return moment().locale('en').weekday();
    }

    today(): string
    {
        return moment().locale('en').format('YYYY-MM-DD');
    }
}
