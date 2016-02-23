Template.clickers.helpers({
  clickers: function(){
    let cursorBonusId   = Template.instance().cursorBonusId;
    let ownedCursor = Belongings.findOne({userId: Meteor.userId(), belongingId: cursorBonusId});
    if(ownedCursor !== "undefined"){
      let userCursors;
      let returnArr       = [];
      for (let i = 0; i < userCursors; i++) {
        returnArr.push({});
      };
      return returnArr;
    }
  }
});

Template.clickers.onCreated(function(){
  //JJT | Do we really need this here?
  this.cursorBonusId = Bonus.findOne({name: 'Cursor'})._id;
})
