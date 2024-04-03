const enum ResultCode{
    OK = 0,
    FAIL = 1,

    EMAIL_OR_PHONE_IS_BUSY = 150,
    DATA_IS_INCOMPLETE = 151,
    NAME_IS_BUSY = 152,
    WRONG_LOGIN_OR_PASSWORD = 160,

    SLOT_NOT_FREE = 200,
    SLOT_EXPIRED = 201,
    SLOT_NOT_FOUND = 202,
}

export const ResultCodeDescription = {
    [ResultCode.OK]: "OK",
    [ResultCode.FAIL]: "Fail",

    [ResultCode.EMAIL_OR_PHONE_IS_BUSY]: "Email or phone is busy",
    [ResultCode.DATA_IS_INCOMPLETE]: "Data is incomplete",
    [ResultCode.NAME_IS_BUSY]: "Name is busy",
    [ResultCode.WRONG_LOGIN_OR_PASSWORD]: "Wrong login or password",

    [ResultCode.SLOT_NOT_FREE]: "Slot is not free",
    [ResultCode.SLOT_EXPIRED]: "Slot is expired",
    [ResultCode.SLOT_NOT_FOUND]: "Slot not found",
}

export default ResultCode;
