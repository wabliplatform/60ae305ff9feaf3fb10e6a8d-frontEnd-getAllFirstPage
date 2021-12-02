let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';window.onload = () => {apiUserApi.getAlluser((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subTableElements =document.getElementById("iaw2r").getElementsByTagName("TD");  data.forEach((item,i) => {
    if(subTableElements.length > i)
      {
        try { subTableElements[i].querySelector('[annotationname = userName]').textContent = data[i].userName ; } catch (e) { console.log(e) };try { subTableElements[i].querySelector('[annotationname = userEmail]').textContent = data[i].userEmail ; } catch (e) { console.log(e) };try { if(subTableElements[i].getAttribute('annotationname') === "userEmail") subTableElements[i].textContent = data[i].userEmail ; } catch (e) { console.log(e) };try { if(subTableElements[i].getAttribute('annotationname') === "userName") subTableElements[i].textContent = data[i].userName ; } catch (e) { console.log(e) };
      }
    });
    [...subTableElements].forEach((element,index) => {if(index > data.length) subTableElements[index].remove()})}});};