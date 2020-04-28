let Picture =[
    {
        id: 0,
        filename: "./pictures/resize/840-0.jpg",
        title: "Moon",
        text: "A photo of the Moon itself, taken in Starhill village."
    },
    {
        id: 1,
        filename: "./pictures/resize/840-1.jpg",
        title: "Glacier on Iceland",
        text: "Dark grey tones, no life, not a welcoming place. Yes, this is Iceland. Ohh... wait!. There are some brave tourists risking their own health for the sake of this picture."
    },
    {
        id: 2,
        filename: "./pictures/resize/840-2.jpg",
        title: "BIG set of sushi",
        text: 'A bunch of tasty makis and nigiris. For those who appreciate it. Wasabi is a "must try" option along with the soy sauce.'
    },
    {
        id: 3,
        filename: "./pictures/resize/840-3.jpg",
        title: "Half Dome, Yosemite",
        text: "Maybe this is the most known rock on the Earth. It worth to see once, but maybe not at weekend because of the big crowd."
    },
    {
        id: 4,
        filename: "./pictures/resize/840-4.jpg",
        title: "Coyote in Arizona",
        text: "No, that's not the hockey team. Only a solo coyote maybe not even in Arizona but another state."
    },
    {
        id: 5,
        filename: "./pictures/resize/840-5.jpg",
        title: "White House Ruins",
        text: 'Some old ruins of the native inhabitants of this continent. Why are they called "white" when they are definately red?'
    },
    {
        id: 6,
        filename: "./pictures/resize/840-6.jpg",
        title: "Red Canyon",
        text: "Those beautiful canyons in the south of Utah! Just take a scenic byway, drive slow and enjoy."
    }]

    Picture.push(
        {
            id:7,
            filename: "./pictures/resize/840-7.jpg",
            title: "Time Square",
            text: "It doesn't matter what time is on the Time, the mass is guaranted."
        }
    )

let choose = 0; //initialize

choose=Math.floor(Math.random()*8)

console.log(`choose: ${choose}`);


$('#photoview').attr('src', Picture[choose].filename)
$('#photo-title').text(Picture[choose].title)
$('#photo-text').text(Picture[choose].text)
/*original html: <img id="photoview" class='photo' src="./pictures/resize/840-1.jpg" alt="" srcset=""> */