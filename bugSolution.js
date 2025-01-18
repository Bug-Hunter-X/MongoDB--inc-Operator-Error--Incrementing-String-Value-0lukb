```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id": 1}, {"$inc": {"count": 1}});
//If count is string type use this to convert to number, then increment
db.collection('myCollection').updateOne({"_id": 1}, {"$inc": {"count": 1}},{upsert: true,arrayFilters:[{$and:[{count:{$type:'string'}},{count:{$ne:''}}]}]});
```