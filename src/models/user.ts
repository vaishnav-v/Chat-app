export interface UserChatPreview {
    userName:string;
    userId:number;
    email:string;
    phoneNumber:number;
    countryCode:number;
    unreadMessageCount:number;
    pinned:boolean;
    activeProfileImageUrl:string | null;
}