class WelcomeController < ApplicationController
  skip_before_action :authenticate_user!
  def index
  	@slider_categories = [
  		{image: 'assets/carousel-image.png',title: 'Adviser Net' , description: "Our website has changed, but our commitment to you never will.", url: '#'},
  		{image: 'assets/carousel-image.png',title: 'acc cover + extra' , description: 'Our website has changed, but our commitment to you never will.', url: '#'},
  		{image: 'assets/carousel-image.png',title: 'business and house insurance quote' , description: 'Our website has changed, but our commitment to you never will.', url: '#'},
  		{image: 'assets/carousel-image.png',title: 'win a trip to fiji' , description: 'Our website has changed, but our commitment to you never will.', url: '#'}
  	]
  end

  def about_us
  	@page_title = "Ibrokers - About Us"
  end

  def why_ibrokers
  	@page_title = "Ibrokers - Why Us"
  end

end
