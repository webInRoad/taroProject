interface IUser {
  access_token:string,
  [propName:string]:any
}
interface ITopicInfo {
  id:string,
  author_id:string,
  content:string,
  title:string,
  good:boolean,
  author:any,
  reply_count:number
}
interface IReply {
  id:string,
  content:string,
  is_uped:boolean,
  [propName:string]:any
}
interface IGetTopicInfo {
  (params:any):void
}
interface IReplyContent {
  (params:any):void
}
export interface IDetailProps{
  user:IUser,
  admireState:boolean,
  addReply:boolean,
  topicInfo:ITopicInfo,
  replies:Array<IReply>,
  replyContent:IReplyContent,
  getTopicInfo:IGetTopicInfo
}
export interface IDetailState {
  showReplyContent:boolean,
  currentReply:any
}