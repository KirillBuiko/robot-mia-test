export class GetScheduleDto {
    date: string;
    time_from?: "string";
    time_to?: "string";
    is_free?: boolean;
    doctor_id?: "string";
    patient_id?: "string";
}
