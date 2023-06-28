---
layout: base
permalink: /people/
eleventyNavigation:
  key: People
  order: 4
---

## People

### Lab Administration
{%- for person in LabPeople -%}

{% if person.labtitle %}

{% if "Director" in person.labtitle %}

<div class="labcore">
<img src="{{person.photo}}" alt="image of {{person.name}}" />
<h4 class="labname">{{person.name}}</h4>
<p>{{person.bio}} {{person.name}} can be reached at {{person.email}}.</p>
</div>
{% endif %}
{% endif %}
{% endfor %}


### Core Research Team

{%- for person in LabPeople -%}

{% if person.labtitle %}

{% if "Core Research" in person.labtitle %}
<div class="labcore">
<img src="{{person.photo}}" alt="image of {{person.name}}" />
<h4>{{person.name}}</h4>
<p>{{person.bio}} {{person.name}} can be reached at {{person.email}}.</p>
</div>
{% endif %}
{% endif %}
{% endfor %}


### Members
<table class="table">
{%- for person in LabPeople -%}

{% if person.status %}

{% if 'member' in person.status %}
<tr>
	<td>{{person.name}}</td>
	<td>{{person.email}}</td>
	<td>{% if person.website %}<a href="{{person.website}}">website</a>{% endif %}</td>
</tr>
{% endif %}
{% endif %}
{% endfor %}

</table>


### RAs
<table class="table">
{%- for person in LabPeople -%}

{% if person.status %}

{% if 'RA' in person.status %}
<tr>
	<td>{{person.name}}</td>
	<td>{{person.email}}</td>
	<td>{% if person.website %}<a href="{{person.website}}">website</a>{% endif %}</td>
</tr>
{% endif %}
{% endif %}
{% endfor %}

</table>


### Collaborators
<table class="table">
{%- for person in LabPeople -%}

{% if person.status %}

{% if 'collaborator' in person.status %}
<tr>
	<td>{{person.name}}</td>
	<td>{{person.affiliation}}</td>
	<td>{% if person.website %}<a href="{{person.website}}">website</a>{% endif %}</td>
</tr>
{% endif %}
{% endif %}
{% endfor %}

</table>


### Alumni
<table class="table">
{%- for person in LabPeople -%}

{% if person.status %}

{% if 'alumni' in person.status %}

<tr>
	<td>{{person.name}}</td>
	<td>{{person.affiliation}}</td>
	<td>{% if person.website %}<a href="{{person.website}}">website</a>{% endif %}</td>
<td>{% if person.institution %}{{person.institution}}{% endif %}</td>
</tr>
{% endif %}
{% endif %}
{% endfor %}

</table>