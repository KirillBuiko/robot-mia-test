import {ScheduleOptions} from "@/actions/interfaces/ScheduleOptions";

export const Configs = {
    EXPRESS_PORT: 35000,
    HOST: "http://127.0.0.1",
    REQUEST_PREFIX: "/api",
    SCHEDULE_OPTIONS: {
        slotDuration: 30 * 60 * 1000,
        dayEndHour: 18,
        dayStartHour: 7
    } as ScheduleOptions
}
