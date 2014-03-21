class WelcomeController < ApplicationController
  def index
  	@slider_categories = [
  		{image: 'assets/carousel-image.png',title: 'Adviser Net' , description: "Our website has changed, but our commitment to you never will.", url: '#'},
  		{image: 'assets/carousel-image.png',title: 'acc cover + extra' , description: 'Our website has changed, but our commitment to you never will.', url: '#'},
  		{image: 'assets/carousel-image.png',title: 'business and house insurance quote' , description: 'Our website has changed, but our commitment to you never will.', url: '#'},
  		{image: 'assets/carousel-image.png',title: 'win a trip to fiji' , description: 'Our website has changed, but our commitment to you never will.', url: '#'}
  	]
  end
end
