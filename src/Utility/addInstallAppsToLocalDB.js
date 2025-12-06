const getInstallApps = () => {

    const storeInstallAppsSTR = localStorage.getItem('installedApps')
    if(storeInstallAppsSTR){
        const storedInstalldata = JSON.parse(storeInstallAppsSTR);
        return storedInstalldata;
    }

    else{
        return [];
    }

}

const addInstallToLocalDB = (id) => {

    const storedInstallData = getInstallApps();
    
    if(storedInstallData.includes(id)){

        alert("This item is already Exist");

    }

    else {
        storedInstallData.push(id);
        // console.log(storeBookData);
        const installData = JSON.stringify(storedInstallData);
        localStorage.setItem("installedApps",installData)
    }

}

export { addInstallToLocalDB, getInstallApps};