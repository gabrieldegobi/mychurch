export type IUser = {
    uuid: string
    name: string
    email: string
    role: "admin" | "leader" | "member"
    createAt: Date
}