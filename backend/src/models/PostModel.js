const { Model, DataTypes } = require('sequelize')

class Post extends Model {
  static init(sequelize) {
    super.init({
      author: DataTypes.STRING,
      place: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
      like: DataTypes.NUMBER,
      hashtags: DataTypes.STRING,
      urlImageSmall: {
        type: DataTypes.VIRTUAL,
        get() {
          return this.get('image').split('.')[0] + '@1x.' + this.get('image').split('.')[1]
        }
      },
      urlImageMedium: {
        type: DataTypes.VIRTUAL,
        get() {
          return this.get('image').split('.')[0] + '@2x.' + this.get('image').split('.')[1]
        }
      },
      urlImageBig: {
        type: DataTypes.VIRTUAL,
        get() {
          return this.get('image').split('.')[0] + '@3x.' + this.get('image').split('.')[1]
        }
      }
    }, {
      sequelize,
      tableName: 'Post',
    })
  }
}

module.exports = Post