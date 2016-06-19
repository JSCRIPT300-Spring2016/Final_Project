this["JST"] = this["JST"] || {};

this["JST"]["ciderTableItem"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<td><span class="cider">' +
((__t = ( maker + " " + name )) == null ? '' : __t) +
'</span></td>\n<td><span class="abv">' +
((__t = ( abv )) == null ? '' : __t) +
'</span></td>\n<td><span class="tags">' +
((__t = ( tags )) == null ? '' : __t) +
'</span></td>\n<td><span class="rating">' +
((__t = ( rating )) == null ? '' : __t) +
'</span></td>\n<td><a class="btn btn-primary btn-small showReviews" href="/' +
((__t = ( cidername )) == null ? '' : __t) +
'/reviews">+</a><a class="btn btn-primary btn-small hideReviews" href="" style="display:none">-</a></td>\n';

}
return __p
};

this["JST"]["reviewTableHeader"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr>\n  <th>Review</th>\n  <th>Rating</th>\n</tr>\n  <tr>\n    <td><textarea class="form-control review-input" rows=3></textarea></td>\n    <td>\n      <select class="form-control rating-input">\n      <option>1</option>\n      <option>2</option>\n      <option>3</option>\n      <option>4</option>\n      <option>5</option>\n      </select>\n    </td>\n    <td><button type="submit" class="btn-primary addReview">Add</button></td>\n  </tr>';

}
return __p
};

this["JST"]["reviewTableItem"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td><span class="text"><%= review ></span></td>\n<td><span class="rating"><%= rating ></span></td>\n';

}
return __p
};