<h2 class="detailHeading"><%= name %></h2>
<p class="location"><%= location %></p>
<ul class="detailList">
	<% if (date.length) { %>
		<li class="detailList__item">
			<p class="date"><%= date %></p>
		</li>
	<% } %>
	<% if (rating) { %>
		<li class="detailList__item">
			<p class="detailList__category">Rating: <strong><%= rating %></strong></p>
		</li>
	<% } %>
	<% if (sides.length) { %>
		<li class="detailList__item">
			<p class="detailList__category">Sides: <strong><%= sides.join(', ') %></strong></p>
		</li>
	<% } %>
	<% if (comments.length) { %>
		<li class="detailList__item">
			<p class="detailList__category">Comments: <%= comments %></p>
		</li>
	<% } %>
</ul>
