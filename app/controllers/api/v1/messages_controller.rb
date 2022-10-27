class API::V1::MessagesController < ApplicationController
  def index
    @message = Message.find(rand(1..5))

    render json: @message
  end
end
