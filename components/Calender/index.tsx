import { useMemo, useState } from "react";
import { StyledProps } from "_";
import { StyledCalender, ItemContainer, ItemContainer2 } from "./styles";

type Props = StyledProps<{
  justMinute?: boolean;
}>;

function CalenderComponent({
  className,
  justMinute = false,
}: Props): React.ReactElement {
  const [date, setDate] = useState({ day: 29, month: 9, hour: 19, minute: 1 });
  const [pervDate, setPervDate] = useState({
    day: 29,
    month: 2,
    hour: 19,
    minute: 0,
  });
  const [nextDate, setNextDate] = useState({
    day: 29,
    month: 2,
    hour: 19,
    minute: 0,
  });

  const DAYS = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const HOURS = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  const MINUTES = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  const MONTHS = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const addZero = (data: string | number) => {
    if (String(data).length === 1) return "0" + data;
    return data;
  };

  const calcPervDay = (
    index: number,
    data: Array<number>
  ): { value: string; index: number } => {
    if (index === 0) {
      if (date.month === 0) return { value: "29", index: 28 };
      else if (date.month > 6) return { value: "30", index: 29 };
      else
        return { value: String(data[data.length - 1]), index: data.length - 1 };
    }
    return { value: String(data[index - 1]), index: index - 1 };
  };

  const calcPervMinute = (
    index: number,
    data: Array<number>
  ): { value: string; index: number } => {
    if (justMinute) {
      if (index === 1)
        return { value: String(data[data.length - 1]), index: data.length - 1 };
    } else {
      if (index === 0)
        return { value: String(data[data.length - 1]), index: data.length - 1 };
    }

    return { value: String(data[index - 1]), index: index - 1 };
  };

  const calcPerv = (
    day: number,
    data: any
  ): { value: string; index: number } => {
    if (day === 0)
      return { value: data[data.length - 1], index: data.length - 1 };

    return { value: data[day - 1], index: day - 1 };
  };

  const calcNextMinute = (
    index: number,
    data: Array<number>
  ): { value: string; index: number } => {
    if (index === data.length - 1) {
      if (justMinute) return { value: String(data[1]), index: 1 };
      else return { value: String(data[0]), index: 0 };
    }

    return { value: String(data[index + 1]), index: index + 1 };
  };

  const calcNext = (
    day: number,
    data: any
  ): { value: string; index: number } => {
    if (data === DAYS) {
      if (date.month > 5 && date.month < 11) {
        if (date.day === 29) return { value: "1", index: 0 };
      } else if (date.month === 11) {
        if (date.day === 28) return { value: "1", index: 0 };
      }
    }

    if (day === data.length - 1) {
      return { value: data[0], index: 0 };
    }

    return { value: data[day + 1], index: day + 1 };
  };

  useMemo(() => {
    let pervDay = calcPervDay(date.day, DAYS).index;
    let pervMonth =
      date.day === 0 ? calcPerv(date.month, MONTHS).index : date.month;
    let pervHour = calcPerv(date.hour, HOURS).index;
    let pervMinute = calcPervMinute(date.minute, MINUTES).index;

    setPervDate({
      day: pervDay,
      month: pervMonth,
      hour: pervHour,
      minute: pervMinute,
    });
  }, [date]);

  useMemo(() => {
    let nextDay = calcNext(date.day, DAYS).index;
    let nextMonth =
      date.day === DAYS.length - 1
        ? calcNext(date.month, MONTHS).index
        : date.month;

    if (date.month === 11 && date.day === 28) {
      nextMonth = calcNext(date.month, MONTHS).index;
    } else if (date.month > 5 && date.month < 11 && date.day === 29) {
      nextMonth = calcNext(date.month, MONTHS).index;
    }

    let nextHour = calcNext(date.hour, HOURS).index;
    let nextMinute = calcNextMinute(date.minute, MINUTES).index;

    setNextDate({
      day: nextDay,
      month: nextMonth,
      hour: nextHour,
      minute: nextMinute,
    });
  }, [date]);

  const ITEMS = [
    { data: pervDate, className: "perv" },
    { data: date, className: "" },
    { data: nextDate, className: "next" },
  ];

  return (
    <div className={className}>
      {ITEMS.map((item, index) => (
        <ItemContainer key={index} className={item.className}>
          {justMinute ? (
            <>
              <ItemContainer2
                justMinute={justMinute}
                tabIndex={index + 1}
                onClick={() => {
                  setDate({
                    day: date.day,
                    month: date.month,
                    hour: date.hour,
                    minute: item.data.minute,
                  });
                }}
              >
                تا
                <span className="minute">{MINUTES[item.data.minute]}</span>
                دقیقه
              </ItemContainer2>
            </>
          ) : (
            <>
              <ItemContainer2
                tabIndex={index}
                onClick={() => {
                  setDate({
                    day: item.data.day,
                    month: item.data.month,
                    hour: date.hour,
                    minute: date.minute,
                  });
                }}
                className="month"
              >
                {addZero(DAYS[item.data.day])} {MONTHS[item.data.month]}
              </ItemContainer2>
              <ItemContainer2
                tabIndex={index + 1}
                onClick={() => {
                  setDate({
                    day: date.day,
                    month: date.month,
                    hour: date.hour,
                    minute: item.data.minute,
                  });
                }}
              >
                {addZero(MINUTES[item.data.minute])}
              </ItemContainer2>
              <ItemContainer2
                tabIndex={index + 2}
                onClick={() => {
                  setDate({
                    day: date.day,
                    month: date.month,
                    hour: item.data.hour,
                    minute: date.minute,
                  });
                }}
              >
                {item.className === "" ? (
                  <span className="two-dots">:</span>
                ) : null}

                {addZero(HOURS[item.data.hour])}
              </ItemContainer2>
            </>
          )}
        </ItemContainer>
      ))}
    </div>
  );
}

export default StyledCalender.withComponent(CalenderComponent);
