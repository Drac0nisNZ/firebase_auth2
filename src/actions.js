const errDiv = document.getElementById('err')
const loadWrapper = document.getElementById('loadWrapper')
const empty =document.getElementById('emptyWrapper')

const signin = (email, password) => {
    firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then( res => {
            firebaseApp
                .database()
                .ref(`users/${res.user.errDiv}`)
                .on('value', data => {
                    let user = data.val()
                    user && localStorage.setItem('abcuser', JSON.stringify(user))
                })

                if(errDiv) {
                    errDiv.innerHTML = ""
                }
        })

        .catch(err => {
            console.warn(err.message)
            if(errDiv) {
                errDiv.innerHTML = err.message
            }
        })
}

const signup = (email, password, name) => {
    firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
            firebaseApp
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(res => {
                    firebaseApp
                        .database()
                        .ref(`user/${res.user.uid}`)
                        .set({
                            email,
                            name,
                            id: res.user.id
                        })
                        .then(() => {
                            firebaseApp
                                .database()
                                .ref(`user/${res.user.id}`)
                                ,on('value', data => {
                                    let user = {...data.val(), id: res.user.uid }
                                    user && localStorage.setItem('abcuser', JSON.stringify(user))
                                })
                        })
                        .catch(err => {
                            console.warn(err)
                        })
                })
        })
}