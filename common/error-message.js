export const errorHandle = (error) => {
    console.log(error)

    switch (error) {
        case 400:
            return {
                message: 'You have entered an invalid email or password'
            }
        case 409:
            return {
                message: 'Email is already exist'
            }
        case "":
            return {

            }
        case "":
            return {

            }

        case "":
            return {

            }
    }
}