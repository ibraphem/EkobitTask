/* function for age difference */
            var minAge = 14;
            var maxAge = 25;
            var today = new Date()
            
        function _calcAge(birthDate, givenDate) {
            givenDate = new Date(today);
            var dt1 = document.getElementById('dob').value;
            var birthDate = new Date(dt1);
            var years = (givenDate.getFullYear() - birthDate.getFullYear());
    
            if (givenDate.getMonth() < birthDate.getMonth() ||
            givenDate.getMonth() == birthDate.getMonth() && givenDate.getDate() < birthDate.getDate()) {
                years--;
            }
    
            return years;
        }
            
        function _setAge() {

            var age = _calcAge();

            if (age < minAge) {
                alert("You are not allowed to use this site. The minimum age is 14!");
                return false;
                
            }
            
            if (age > maxAge) {
                alert("You are not allowed to use this site. The maximum age is 25!");
                return false;
                
            }
        }
            
            /* Form Validation */
            
        function frmValidate()
            {
            	
            	if(document.frmCtnt.fname.value=="" || document.frmCtnt.fname.value==null || document.frmCtnt.fname.value=="Enter Your Full Name")
            	{
            		alert("Your first name can't be blank");
            		document.frmCtnt.fname.focus();
            		return false;
            	}
                
                
            	if(document.frmCtnt.lname.value=="" || document.frmCtnt.lname.value==null || document.frmCtnt.lname.value=="Enter Your last name")
            	{
            		alert("Your last name can't be blank");
            		document.frmCtnt.lname.focus();
            		return false;
            	}

            	
            	if(document.frmCtnt.mobile.value=="" || document.frmCtnt.mobile.value==null || document.frmCtnt.mobile.value=="Enter Your Contact Number")
            	{
            		alert("Your phone number can't be blank");
            		document.frmCtnt.mobile.focus();
            		return false;
            	} else if (isNaN(document.frmCtnt.mobile.value)) {
            		alert("Phone number contains illegal character");	
            		document.frmCtnt.mobile.focus();
            		  return false;
            	} 	
            	
            	if(isNaN(document.frmCtnt.mobile.value))
            	{
            		alert("Please enter valid phone number");
            		document.frmCtnt.mobile.focus();
            		return false;
            	}
                
               	if(document.frmCtnt.dob.value=="" || document.frmCtnt.dob.value==null || document.frmCtnt.dob.value=="Enter Your date of birth")
            	{
            		alert("Your date of birth can't be blank");
            		document.frmCtnt.dob.focus();
            		return false;
            	}
                
                if (_setAge(document.frmCtnt.dob.value)==false){
            		document.frmCtnt.dob.focus();
            		return false;
            	}
                
            	if(document.frmCtnt.address.value=="" || document.frmCtnt.address.value==null)
            	{
            		alert("Your address can't be blank");
            		document.frmCtnt.address.focus();
            		return false;
            	}
                
                
            	return true;
            }
            
            
        function getFormReponseSubmit(getFormResponseDiv)
            {
                
            if(frmValidate()==true)
            {
           
            URL="?fname="+document.frmCtnt.fname.value+"&lname="+document.frmCtnt.lname.value+"&mobile="+document.frmCtnt.mobile.value+"&dob="+document.frmCtnt.dob.value+"&address="+document.frmCtnt.address.value;
            if (window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
            xmlhttp.onreadystatechange=function(){if (xmlhttp.readyState==4 && xmlhttp.status==200){	
            	document.getElementById("getFormResponseDiv").innerHTML=xmlhttp.responseText;
            }else{
            	document.frmCtnt.fname.value="";
            	document.frmCtnt.lname.value="";
            	document.frmCtnt.mobile.value="";
                document.frmCtnt.dob.value="";
            	document.frmCtnt.address.value="";
            	document.getElementById("getFormResponseDiv").innerHTML="<br/>&nbsp;Waiting.........<br/>";
            
            }}
            xmlhttp.open("POST","http://localhost/ekobitTask/save_data.php"+URL,true);
            xmlhttp.send();
            }}