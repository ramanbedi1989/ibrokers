class WelcomeController < ApplicationController
  def index
  	@slider_categories = [
  		{image: 'assets/carousel-image.png',title: 'Welcome to Ibrokers' , description: "Our website has changed, but our commitment to you never will.", url: '#'},
  		{image: 'assets/carousel-image.png',title: 'Welcome to Ibrokers' , description: 'Our website has changed, but our commitment to you never will.', url: '#'},
  		{image: 'assets/carousel-image.png',title: 'Welcome to Ibrokers' , description: 'Our website has changed, but our commitment to you never will.', url: '#'},
  		{image: 'assets/carousel-image.png',title: 'Welcome to Ibrokers' , description: 'Our website has changed, but our commitment to you never will.', url: '#'}
  	]
  end
end
