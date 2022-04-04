function show_contact_information(){
    // Ochrona przed scrappingiem maila.
    var data = 'a2Qua296YmlhbEBzdHVkZW50LnV3LmVkdS5wbA==';
    var el = document.getElementById("mail_item");
    el.innerText = atob(data);
    el.setAttribute('href', 'mailto:'+ atob(data))
    document.getElementById('button_show').style.display ="none";
  }
