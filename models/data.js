module.exports = (sequelize, DataTypes) => {
    const Info = sequelize.define("Info", {
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        school: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        course_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        temperature: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }, 
    });
    return Info;
}