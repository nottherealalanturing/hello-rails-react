class API::V1::MessagesController < ApplicationController
    def index
        @message = Message.all[Random.new.rand(1..5)]

        render :json => @message
        
    end
end