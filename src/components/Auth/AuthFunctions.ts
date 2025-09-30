import API from "@/services/API/API";

const removeAuthItemsFromLocalStorage = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
}

export function loginAzure() {
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    const azureLoginUrl = "login/azure"
    window.location.href = `${baseURL}/${azureLoginUrl}`
}

export function logout() {
    API.post('logout').then(() => {
        removeAuthItemsFromLocalStorage();
        location.reload();
    }).catch(() => {
        removeAuthItemsFromLocalStorage();
        location.reload();
    })
}

export async function validateToken() {
    return API.post('validate-token')
    .then((response: any) => {
        if(response.data?.role != localStorage.getItem("role")) {
            removeAuthItemsFromLocalStorage();
            location.reload();
        }
        return true;
    })
    .catch(() => {
        if(localStorage.getItem("jwt") || localStorage.getItem("email")){
            removeAuthItemsFromLocalStorage();
            location.reload();
        }
        else {
            removeAuthItemsFromLocalStorage();
            return false;
        }
	});
}