const docId = 'KV0Sp-tiTy';
const tableIdOrName = 'grid-t2OSQ2Vk0_';
const token = '039a0976-b443-4ba4-8f13-316b42221ca8';
const url = `https://coda.io/apis/v1/docs/${docId}/tables/${tableIdOrName}/rows`;
const titleId = 'c-_i-jYDQwcI';
const contentId = 'c-KXeQpajm7X';
const imageId = 'c-qYHMUxTLvx';
const dateId = 'c-2AuxUxBNP-';
const creatorId = 'c-ifEromxtYQ';

const getData = () => {
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
        .then(response => response.json())
        .then(data => {
            return craeteBlog(data.items);
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
}

const craeteBlog = (blogContent) => {
    for (let i = 0; i < blogContent.length; i++) {
        const container = document.querySelector('.container');
        const post = document.createElement('div');
        post.classList.add('row', 'mt-3');
        const title = blogContent[i].values[`${titleId}`];
        const content = blogContent[i].values[`${contentId}`];
        const image = blogContent[i].values[`${imageId}`];
        const date = blogContent[i].values[`${dateId}`];
        const creator = blogContent[i].values[`${creatorId}`];
        if (i % 2 !== 0) {
            post.innerHTML = `
            <div class="col position-relative p-4">
                <span class="tag bg-secondary text-white rounded-pill position-absolute">post tag</span>
                <img src="${image}"
                    class="img img-fluid m-auto d-block" width="500">
            </div>
            <div class="content col d-flex flex-column justify-content-center p-4">
                <div class="content-info">
                    <i class="far fa-calendar-minus"></i>
                    <span class="underline-effect"> ${date} </span>
                    <i class="fas fa-edit ms-2"></i>
                    <span class="underline-effect"> ${creator} </span>
                </div>
                <div class="title mt-4 mb-2">
                    <span class="h2 underline-effect"> ${title} </span>
                </div>
                <div class="description">
                    <p> ${content} </p>
                </div>
            </div>
            `
            container.appendChild(post);
        } else {
            post.innerHTML = `
            <div class="content col d-flex flex-column justify-content-center p-4">
                <div class="content-info">
                    <i class="far fa-calendar-minus"></i>
                    <span class="underline-effect"> ${date} </span>
                    <i class="fas fa-edit ms-2"></i>
                    <span class="underline-effect"> ${creator} </span>
                </div>
                <div class="title mt-4 mb-2">
                    <span class="h2 underline-effect"> ${title} </span>
                </div>
                <div class="description">
                    <p> ${content} </p>
                </div>
            </div>
            <div class="col position-relative p-4">
                <span class="tag bg-secondary text-white rounded-pill position-absolute">post tag</span>
                <img src="${image}"
                    class="img img-fluid m-auto d-block" width="500">
            </div>
            `
            container.appendChild(post);
        }



        console.log(post);
    }
}

getData();
