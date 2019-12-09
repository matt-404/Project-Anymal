class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy]
  before_action :authorize_request, except: %i[index show index_by_user]

  # GET /categories
  def index
    @categories = Category.all

    render json: @categories, include: :user
  end

  # GET /users/:user_id/categories
  def index_by_user
    @user = User.find(params[:user_id])
    categories = @user.categories
    render json: categories, include: :user, status: :ok
  end

  # GET /categories/1
  def show
    render json: @category, include: :user
  end

  # POST /categories
  def create
    @category = Category.new(category_params)

    if @category.save
      render json: @category, status: :created, include: :user
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # /users/:user_id/categories
  def create_by_user
    user = User.find(params[:user_id])
    category = user.categories.new(category_params)
    if category.save
      render json: category, include: :user, status: :created
    else
      render json: category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /categories/1
  def update
    if @category.update(category_params)
      render json: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /categories/1
  def destroy
    @category.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def category_params
      params.require(:category).permit(:title, :user_id)
    end
end
