let newMap = new Map();
newMap.set('Key1', 'От машины');
newMap.set('Key2', 'От дома');
newMap.set('Key3', 'От гаража');
newMap.set('Key4', 'От работы');

for (let name of newMap.keys()){
  console.log('Ключи',name )
}

for (let who of newMap.values()){
  console.log('Назначения', who)
}