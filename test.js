//Data
var test_data = [
      { "Item Name": "Test Event One",
      "ItemStatus": "In Progress"
      },
      { "Item Name": "Test Event Two",
      "ItemStatus": "To Do"
      },
      { "Item Name": "Test Event Three",
      "ItemStatus": "To Do"
      },
      { "Item Name": "Test Event Four",
      "ItemStatus": "Complete"
      },
      { "Item Name": "Test Event Five",
      "ItemStatus": "In Progress"
      },
      { "Item Name": "Test Event Six",
      "ItemStatus": "In Progress"
      },
      { "Item Name": "Test Event Seven",
      "ItemStatus": "Complete"
      }
 ]
  
// get count
var counts = {};
$.each(test_data,function(i,e) {
   counts[this.ItemStatus] = (counts[this.ItemStatus] || 0) + 1;
});

console.log(counts)

$("ul li").each(function(){
   $(this).html(counts[$(this).attr("id")] || 0)
   console.log($(this).attr("id"))
})
