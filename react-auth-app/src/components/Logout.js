export const Logout = async (e) => {

    e.preventDefault();

    const url = 'http://localhost:3000/users/sign_out'

    const token = localStorage.getItem('token')

    try {

      const response = await fetch(url, { method: "DELETE", headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json'
      },


    })

      if(!response.ok) {
        throw new Error(response.message)
      }
      const fetchedData = await response.json()

      fetchedData.message === 'Logged out.' && localStorage.clear()

      console.log(fetchedData.message)

    }
    catch (error) {

      console.log(error.message)
    }


  }
