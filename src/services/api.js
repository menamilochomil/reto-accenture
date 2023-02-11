const url = 'https://jsonplaceholder.typicode.com/'

export const fetchGet = (info,route) => {
    return (
        fetch(`${url}${route}`)
        .then((response) => response.json)
        .then((data) => info(data))
    );
}

// Output: 
// {
//   id: 1,
//   title: '...',
//   body: '...',
//   userId: 1
// }