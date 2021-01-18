({
    handleClick : function(cmp, evt, hlp) {
        let cmpEvent =  cmp.getEvent("flash");
        cmpEvent.setParams({"checkans" : "false"});
        cmpEvent.fire();
    },
    handleEvent : function(cmp, evt, hlp){
        let event = evt.getParam("checkans");
        cmp.set("v.trueval", event);
    }
})