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

        alert("This app is already installed on your device");

    }

    else {
        storedInstallData.push(id);
        // console.log(storeBookData);
        const installData = JSON.stringify(storedInstallData);
        localStorage.setItem("installedApps",installData)
    }

}

const removeInstallAppsFromLocalDB = (id) => {
    const storedInstallData = getInstallApps();

    const updatedData = storedInstallData.filter(appId => Number(appId) !== Number(id));

    localStorage.setItem("installedApps", JSON.stringify(updatedData));
};



export { addInstallToLocalDB, getInstallApps, removeInstallAppsFromLocalDB };