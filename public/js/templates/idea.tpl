<h2 class="detailHeading"><%= ideaName %></h2>
<ul class="detailList">
	<% if (ideaDescription.length) { %>
		<li class="detailList__item">
			<p class="idea"><%= ideaDescription %></p>
		</li>
	<% } %>
  <p class="ranking"><%= ranking.join(', ') %></p>
</ul>
