import ResultCode from "@/types/ResultCode";

export interface ResponseObject<K>{
    code: ResultCode;
    result?: K;
}
