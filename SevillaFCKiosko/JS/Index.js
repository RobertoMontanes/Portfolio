const url = 'https://www.numier.com/kiosco/api/business?name=sevillafcespt00101';

axios.get(url)
    .then(response => {

        const { 
            nameShow, 
            description, 
            address, 
            email, 
            phone, 
            presentationText, 
            takeawaytime, 
            deliveryTime, 
            horariosText, 
            logo, 
            videoBackground, 
            imageBackground
        } = response.data.data;

        
        document.getElementById('businessName').textContent = nameShow; 
        document.getElementById('businessLogo').src = logo; 
        document.getElementById('businessDescription').textContent = description; 
        document.getElementById('businessAddress').textContent = address;
        document.getElementById('businessEmail').textContent = email; 
        document.getElementById('businessPhone').textContent = phone; 
        document.getElementById('businessPresentationText').textContent = presentationText;
        document.getElementById('businessTakeawayTime').textContent = takeawaytime; 
        document.getElementById('businessDeliveryTime').textContent = deliveryTime; 
        document.getElementById('businessHorariosText').textContent = horariosText; 
        document.getElementById('businessVideoBackground').src = videoBackground; 
        document.getElementById('businessImageBackground').src = imageBackground; 

    })
    .catch(error => {
        console.error('Hubo un problema con Axios:', error);
    });

