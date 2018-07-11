const ADD_FRIEND='ADD_FRIEND'
const SEND_MSG='SEND_MSG'
export default{
    //添加好友
    [ADD_FRIEND](state,name){
        state.friends.push(name);
        state.msgs[name]=[]
    },
    //发送消息
    [SEND_MSG](state,{msg,name}){
        let imsg={}
        imsg.flag=2
        imsg.msg=msg
        console.log(name,imsg)
        state.msgs[name].push(imsg)
    }
}