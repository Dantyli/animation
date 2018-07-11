export default{
    addFriend({commit,state},name){
        //添加朋友
        commit('ADD_FRIEND',name);
    },
    sendMsg({commit,state},msg,name){
        //发送消息
        commit('SEND_MSG',msg,name)
    }
}