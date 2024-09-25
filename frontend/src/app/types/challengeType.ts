export default interface Challenge{
    id?: number,
    userId: number,
    accountId:number,
    virtualAccountId?:number | undefined,
    savedAmount:number,
    targetAmount:number,
    savingCycle: number,
    startDate: string, 
    endDate: string | null, 
    challengeName: string, 
    challengeStatus: string,
    challengeDescription: string, 
}