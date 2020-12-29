# __BoliviAround__
BoliviAround is the website of a travel agency organizing travels in Bolivia. 
The aim is to create an online space for them to make clients discover their travels' offers, and eventually to contact the travel agency.
Different experiences, with locations displayed, are described to the user - focusing on adventure, party or food interests. 
To highlight the efficency of the travel agency, testimonies from users are also presented.

## __UX__

This website is for users to discover Bolivia and his wonders while inspiring users to travel with the agency BoliviAround.

*__External users goals__*

As a user, I want to: 
1. understand why Bolivia could be my next travel destination
2. discover what travels' offers this agency proposes, especially regarding my own interests 
3. read customers' testimonies and feedbacks regarding the agency performance/efficency
4. contact the agency directly to discuss about my project and eventually get a customized offer
5. easily navigate through BoliviAround website
6. easily follow BoliviAround’s social networks if I am interested

*__Internal users goals__*

As a site owner, I want to:
1. convince users that Bolivia is the best place for their next holidays
2. describe my current offers and what points of interests we are focusing in (adventures, parties or foods)
3. increase users' confidence by sharing my clients' feedbacks
4. permit the users to directly contact me so as I can contact them back and discuss their projects 
5. build a list of customers/interested users

*__User experiences__*

*As a customer, I want to navigate easily throught BoliviAround*

A navigation on the top right of the screen synthesis the main sections of the website : Why Bolivia, What to do, What they say, Contact.
Clicking on the title of the website "BoliviAround" will bring back the user to the BoliviAround website.

*As a customer, I want to easily follow BoliviAround’s social networks if I am interested*

The customer can click into one of the social network icons inside the footer of each pages. Clicking on one of the icon will load another page in the customer browser leading directly to each social network concerned.

*As a customer, I want to be able to understand quickly the goals of the web*

In Why Bolivia section, I can quickly understand the aim of the website by reading the description.

*As a customer, I want to discover what travels' offers this agency proposes, especially regarding my own interests*

The What to do section provides detailled informations toward activities BoliviAround proposes.
These activities are listed by interests (food, party, adventure) to simplify the navigation. 
For each activity selected, a map is displayed for the activity to be easily located and for the user to easily interact with the website.

*As a customer, I want to read customers' testimonies and feedbacks regarding the agency performance/efficency*

The What they say section displays customers' feedbacks and testimonies of 
their own experience with BoliviAround.

*As a customer, I want to contact the agency directly to discuss about my project and eventually get a customized offer*

A contact form appears in the Contact section, allowing the customer to join BoliviAround after sending his name/surname/email and,
if he wants, his own current project of travel.
The email has to be provided under the format "x@x.x" otherwise, it won't be accepted and submitted.
A submit button is at the end of the form. By clicking on it, the customer submits her/his information.

*I especially tested twice the following features to be sure they work properly :*

* Responsive versions of the website
* Website tested throught Microsoft Edge and Chrome browsers
* Logo text in navigation bar to be sure it brings the customer back to BoliviAround website (i.e. index.html)
* Why Bolivia, What to do, What they say and Contact in navigation bar to make sure links work properly and brings to the correct
sections of the page
* Social Media icons in Footer to be sure they were correct links and open in another page
* Contact Us link inside the Why Bolivia section to be sure the link works properly
* Buttons (food/party/adventure and for each activity) in the What to do Section to ensure
they were displaying the correct activity's description
* Map locations to be sure they exactly situate the specific activity concerned 
* Emails sent to solzinhalgd@gmail.com mailbox when a user tries to contact BoliviAround using the contact form

## __Wireframes__

I used Balsamic to build my wireframe prior to the website coding. 

The idea was to get an idea of what sections I would build and what design I would roughly 
create. Wireframes were built regarding desktop, tablet and phone versions:

* [Balsamic Wireframes (desktop, tablet, phone)](documentation/wireframes/ms2_wireframe.pdf)

While I was building the project, I decided to add a section where customers share their feedbacks/testimonies
regarding BoliviAround - which is the reason why this section doesn't appear in the initial wireframes.

## __Features__

1. __Existing Features__

*__Navigation__* : 
* I use the simple and clear navigation code suggests in __[Bootstrap](https://getbootstrap.com/)__. 
All sections are presented to ease the user experience and direct to relevant links when clicked.
* I then used __Javascript__ to make the navbar collapses in responsive version after clicking on a nav-link. 

*__What to do__* : 
In this section, I used :
* __[JQuery](https://jquery.com/)__ to make different sections appear after clicking on the relevant buttons.
* __[Google Maps Platform](https://developers.google.com/maps/documentation/javascript/overview?hl=fr)__ and __Javascript__
so as a map displays directly the location of the activity described.

*__Form__* : 

* I use a simple form template provided by __[Bootstrap](https://getbootstrap.com/)__ in the Contact us section.`
* This form was then connected, using __Javascript__, to __[EmailJS](https://www.emailjs.com/)__.
__[EmailJS](https://www.emailjs.com/)__ itself connects to a mailbox (solzinhalgd@gmail.com) and send an email to this emailaddress
whenever a user tries to contact BoliviAround.`


2. __Features left to implement__

*__Pricing__* : I would like to add a *Pricing* section where, according to:

* the different offers selected (which he would be able to mix, i.e. Salar d'Uyuni with partying in Diesel Nacional, etc.), 
* the lenght of the holidays, 
* the type of travel he wants to have (backpacker, average or luxurious) :
An average price would be directly displayed in the screen. 

It would allow the user to have a rough idea of what price he could expect to pay for the activities and experiences he is looking to get.

## __Technologies used__

* __HTML__:
The project uses HTML to create the content of the website and his structure. 
* __CSS__: 
The project uses CSS for the design of the website 
* __Javascript__:
The project uses Javascript to add interactivity with the user - especially to connect with API (Google Maps, EmailJS).
* __[JQuery](https://jquery.com/)__:
The project uses JQuery to manipulate the DOM.
* __[Bootstrap](https://getbootstrap.com/)__:
The project uses Bootstrap in the overall design. Grid, navbar, form, and many other features described in the Features' section were coded from Bootstrap interface.
* __[Fontawesome](https://fontawesome.com/)__:
The project uses Fontawesome in the footer to refer to 2 social networks (Youtube, Instagram)
* __[Hover.css](https://ianlunn.github.io/Hover/)__:
The project uses Hover.css to produce the zoom effect while hovering on the footer's icons.
* __[Googlefonts](https://fonts.google.com/)__:
The project uses GoogleFonts to choose the two fonts family used for the design of this website (Padauk and Montserrat)
* __[Google Maps Platform](https://developers.google.com/maps/documentation/javascript/overview?hl=fr)__
The project uses Google Maps Platform to permit the user to access directly to the locations of the activities described in the What to do Section.
* __[EmailJS](https://www.emailjs.com/)__:
The project uses EmailJS to connect the contact form to a mailbox (solzinhalgd@gmail.com) so as an email is sent to this mailbox whenever a user tries to contact BoliviAround.

## __Tools used__

* [Bootstrap](https://getbootstrap.com/)
* [Google Maps Platform](https://developers.google.com/maps/documentation/javascript/overview?hl=fr)
* [EmailJS](https://www.emailjs.com/)
* [W3C HTML Validator](https://validator.w3.org/)
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

## __Testing__

### 1. __Tests W3C Validators__

*__W3C HTML Validator__* - I run my codes through the validator :

* index.html : no erros identified

*__W3C CSS Validator__*

* css.style : no errors identified

### 2. __Test UX__

Details of the full test performed (with screenshots) on this project can be found [here](documentation/test/fulltest.pdf).

## __Deployment__

My website was deployed as bellow :

* From my GitHub account I went to my repository Boliviaround
* I clicked on the settings icon
* From the GitHub Pages section, I selected 'Master branch' in the dropdown
* My project is then deployed there : [BoliviAround](https://valentinelgd.github.io/Boliviaround/)

## __Credit__
*Content* All texts were written by myself to fit with this website's goals.

*Images* 
* Personal pictures: [form](assets/img/form.jpg), [testimony1](assets/img/testimony1.jpg) and [testimony3](assets/img/testimony3.jpg)
* [Pixabay](https://pixabay.com/fr/): All other images used in this website

*Acknowledgements*

Thank you to my mentor, Aaron, who gave me advices and support this project.

Eventually I received help for my code by reading answers from questions on the websites:

* [W3schools.com](https://www.w3schools.com/)
* [MdBootstrap](https://mdbootstrap.com/) - especially : to make the navbar collapses in responsive version after clicking on a nav-link, I used the code from this [post](https://mdbootstrap.com/support/general/auto-close-navbar-when-click-on-link-responsive-mode/)
* [Stack Overflow](https://stackoverflow.com/) - especially : to customize my map, I followed the code guidelines from the following [post](https://stackoverflow.com/questions/28499141/how-to-change-google-map-center-by-clicking-a-button/28500306)
* [Web-eau](https://www.web-eau.net/) : especially : to customize my images with CSS effects (zoom, color), I followed the code guidelines from the following [post](https://www.web-eau.net/blog/15-effets-css3-pour-vos-images)


