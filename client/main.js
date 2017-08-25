import {Items} from '../imports/api/items.js'

Template.itemslist.helpers({
  items:function(){
    // Mongo.items.insert({name:"inline"})
    itemslist = Items.find({},{ sort: { addedAt: -1 } }).fetch();
    // console.log(itemslist)

    return itemslist;
  }
})

Template.itemslist.events({
  'click .remove_btn'(){
    Items.remove(this._id)
  },
  'click li'(){
    Items.update({_id:this._id},{$set:{checked:!this.checked}})
  }
})

Template.addform.events({
  'submit #addform'(event){
    event.preventDefault();

    const target = event.target
    const text = target.text.value;

    Items.insert({name:text,addedAt:new Date()})

    // Clear form
    target.text.value = '';
  }
})
