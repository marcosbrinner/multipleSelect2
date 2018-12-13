multipleSelect2
Is a free plugin to multselect itens in a form, it fakes a multselect.
Check  examples and how to use it on here 

https://marcosbrinner.github.io/multipleSelect2/


You can find more documentation o this plugin page.

<b>Usage</b>



This is the simple usage of the plugin
```javascript
 var mySelect = $("#teste1").multipleSelect2({
 	data: myDataArray
 });
```
![](https://imageshack.com/a/img921/7885/DmlKo9.png)

By defaul it expects that the data array  conatians tow filds per line

**["Text":"That contais my visible string", "Value":"some-value"]**

that is gonna be the return value
If you want you can use the **template(data)** function to  personalize its view
Then if you  wanto to retrive its selected itens just call 

<b>Getting selected itens</b>
```javascript
 mySelect.getItens();
```
by default it's going to  return a array  of selected itens Value,
If you  want  to  perosnalizte the the return use the **selectionTemplate(data)** function

<b>Using templates</b>
Personalizing the view template
```javascript
 var mySelect = $("#teste1").multipleSelect2({
 	data: myDataArray,
	template: function(data){
		var html ="";
		        html += "<div style='float:left'>";
                	html +=	"<div><img src='"+data.Photo+"' ></div>";
                	html += "<div>"+data.Name+"</div>";
		        html += "</div>";
		        return html;
	}
 });
```
![](https://imageshack.com/a/img921/2593/MXwPZR.png)

Personalizing the return  template
```javascript
 var mySelect = $("#teste1").multipleSelect2({
 	data: myDataArray,
	selectionTemplate: function(data){
		return data.Email +" "+ data.Adress;
	}
 });
```

You can personlize the plugin as  you want, displying images, and  whatever you want, remind to  return the html value
