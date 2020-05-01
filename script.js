// Array of pictures
let Picture =[
    {
        filename: "./pictures/resize/720-0.jpg",
        thumbfile: "./pictures/resize/128-0.jpg",
        title: "Moon",
        text: "A photo of the Moon itself, taken in Starhill village."
    },
    {
        filename: "./pictures/resize/720-1.jpg",
        thumbfile: "./pictures/resize/128-1.jpg",
        title: "Glacier on Iceland",
        text: "Dark grey tones, no life, not a welcoming place. Yes, this is Iceland. Ohh... wait! There are some brave tourists risking their own health for the sake of this picture."
    },
    {
        filename: "./pictures/resize/720-3.jpg",
        thumbfile: "./pictures/resize/128-3.jpg",
        title: "Half Dome, Yosemite",
        text: "Maybe this is the most known rock on the Earth. It worth to see once, but maybe not at weekend because of the big crowd."
    },
    {
        filename: "./pictures/resize/720-4.jpg",
        thumbfile: "./pictures/resize/128-4.jpg",
        title: "Coyote in Arizona",
        text: "No, that's not the hockey team. Only a solo coyote maybe not even in Arizona but another state."
    },
    {
        filename: "./pictures/resize/720-5.jpg",
        thumbfile: "./pictures/resize/128-5.jpg",
        title: "White House Ruins",
        text: 'Some old ruins of the native inhabitants of this continent. Why are they called "white" when they are definately red?'
    },
    {
        filename: "./pictures/resize/720-6.jpg",
        thumbfile: "./pictures/resize/128-6.jpg",
        title: "Red Canyon",
        text: "Those beautiful canyons in the south of Utah! Just take a scenic byway, drive slow and enjoy."
    },
    {
        filename: "./pictures/resize/720-7.jpg",
        thumbfile: "./pictures/resize/128-7.jpg",
        title: "Time Square",
        text: "It doesn't matter what time is on the Time, the mass is guaranted."
    },
    {
        filename: "./pictures/resize/720-8.jpg",
        thumbfile: "./pictures/resize/128-8.jpg",
        title: "King Jan III's Palace, Wilanów",
        text: "A nice royal baroque place in the outskirts of Warsaw."
    }
]

Picture.push(
    {
        filename: "./pictures/resize/720-9.jpg",
        thumbfile: "./pictures/resize/128-9.jpg",
        title: "Seljalandsfoss",
        text: "Maybe the best waterfall in Iceland. You can walk around, and feel all sides of the water falling down so heavy."
    }
    )

//load a photo to the big photo viewer div, and do the other stuff 
let loadPhoto = (photoNumber) =>{
    if (photoNumber<0) {
        photoNumber=Picture.length-1         
    } 
    if (photoNumber>=Picture.length) {
        photoNumber=0        
    }

    $('#photoview').attr('src', Picture[photoNumber].filename)
    $('#photo-title').text(Picture[photoNumber].title)
    $('#photo-text').text(Picture[photoNumber].text) 
    $(`#pic-${choose}`).removeClass('selected')
    choose=photoNumber     
    $(`#pic-${choose}`).addClass('selected')
}

let choose = 0; //initialize starting photo
loadPhoto(choose);

// initialize thumbnail photographs
Picture.forEach((item,index) =>{
    $('#navigation-section').append(`<div id="pic-${index}" class="thumb-pic">
        <p class="thumbnail-title">${item.title}</p>
        <img id="thumbnail-${index}" class="thumbnail-image" src="${item.thumbfile}" data-number="${index}" alt="${item.title}">
    </div>`)
     
})



$(`#pic-${choose}`).toggleClass('selected')

/*
event handling for the two arrows images
*/
$('#left-arrow').click(() => {
    loadPhoto(choose-1)
})

$('#right-arrow').click(() => {
    loadPhoto(choose+1)
})

// event handling for arrow keys
document.onkeydown = function() {
    switch (window.event.keyCode) {
        case 37:
            loadPhoto(choose-1) // left arrow key
            break;
        case 39:
            loadPhoto(choose+1) //right arrow key
            break;
    }
}

//event handling for click on thumbnail pictures
$(".thumb-pic").click((event)=>{    
    let newPhoto=parseInt($(event.target).attr('data-number'));
    loadPhoto(newPhoto);
})


//event handling for click on mobile alert text
$(".close-button").click(()=>{ 
    $(".close-button, .mobile-alert").css("visibility","hidden")
})
