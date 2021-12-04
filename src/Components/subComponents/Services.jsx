import React from 'react'

const Services = () => {
    return (
        <div className="mt-5">
            <div className="container mt-3">
                <center><h1 className="text-center" style={{color:"#1C85E8", width:"9em",fontWeight:"bolder"}}>Best services we provided.</h1></center>
                <p className="text-center text-scondary">We hope for your best services and solution.</p>
                <div className="row mt-5 mb-5">
                    <div className="col-lg-4 col-md-12 col-sm-12 mt-3">
                        <div className="card pt-5 shadow">
                            <svg width="69" className="card-img-top" height="82" viewBox="0 0 69 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="animated zoomInDown" d="M29.8625 70.3259H38.9874V75.6678H29.8625V70.3259ZM18.7071 59.6133H50.1184C49.9135 60.6612 49.5124 61.6423 48.9441 62.4853C48.2695 63.3605 47.4278 64.0354 46.488 64.4548C45.5482 64.8741 44.5371 65.0259 43.5377 64.8978H25.2878C24.2921 65.0236 23.2853 64.8706 22.3497 64.4512C21.4142 64.0319 20.5767 63.3582 19.9058 62.4853C19.3295 61.6444 18.92 60.6633 18.7071 59.6133ZM11.5882 46.2011C10.9848 46.2011 10.4061 46.4825 9.9794 46.9834C9.55273 47.4843 9.31304 48.1637 9.31304 48.8721C9.31304 49.5804 9.55273 50.2598 9.9794 50.7607C10.4061 51.2616 10.9848 51.543 11.5882 51.543H23.0127C23.6161 51.543 24.1948 51.2616 24.6214 50.7607C25.0481 50.2598 25.2878 49.5804 25.2878 48.8721C25.2878 48.1637 25.0481 47.4843 24.6214 46.9834C24.1948 46.4825 23.6161 46.2011 23.0127 46.2011H11.5882ZM34.4127 43.3291H36.6145L39.0608 43.645V46.0001H34.4127V43.3291ZM11.5882 36.8097C11.2679 36.7707 10.9443 36.8112 10.6382 36.9284C10.3321 37.0456 10.0504 37.237 9.81126 37.4901C9.57216 37.7433 9.381 38.0525 9.25015 38.3979C9.11931 38.7432 9.0517 39.117 9.0517 39.495C9.0517 39.873 9.11931 40.2467 9.25015 40.5921C9.381 40.9375 9.57216 41.2467 9.81126 41.4999C10.0504 41.753 10.3321 41.9444 10.6382 42.0616C10.9443 42.1788 11.2679 42.2192 11.5882 42.1803H18.438C18.7582 42.2192 19.0819 42.1788 19.388 42.0616C19.6941 41.9444 19.9758 41.753 20.2149 41.4999C20.454 41.2467 20.6451 40.9375 20.776 40.5921C20.9068 40.2467 20.9744 39.873 20.9744 39.495C20.9744 39.117 20.9068 38.7432 20.776 38.3979C20.6451 38.0525 20.454 37.7433 20.2149 37.4901C19.9758 37.237 19.6941 37.0456 19.388 36.9284C19.0819 36.8112 18.7582 36.7707 18.438 36.8097H11.5882ZM54.9622 30.1466V40.2274L37.0793 37.9585H32.1865V32.5017H37.0793L54.9622 30.1466ZM11.5882 27.447C11.2894 27.447 10.9935 27.516 10.7175 27.6503C10.4415 27.7845 10.1907 27.9812 9.9794 28.2293C9.76814 28.4773 9.60055 28.7717 9.48622 29.0958C9.37188 29.4198 9.31304 29.7672 9.31304 30.1179C9.31304 30.4687 9.37188 30.816 9.48622 31.1401C9.60055 31.4641 9.76814 31.7586 9.9794 32.0066C10.1907 32.2546 10.4415 32.4513 10.7175 32.5856C10.9935 32.7198 11.2894 32.7889 11.5882 32.7889H20.7376C21.0363 32.7889 21.3322 32.7198 21.6082 32.5856C21.8842 32.4513 22.135 32.2546 22.3463 32.0066C22.5576 31.7586 22.7252 31.4641 22.8395 31.1401C22.9538 30.816 23.0127 30.4687 23.0127 30.1179C23.0127 29.7672 22.9538 29.4198 22.8395 29.0958C22.7252 28.7717 22.5576 28.4773 22.3463 28.2293C22.135 27.9812 21.8842 27.7845 21.6082 27.6503C21.3322 27.516 21.0363 27.447 20.7376 27.447H11.5882ZM54.742 24.776L36.6145 27.1598H32.1376C30.9305 27.1672 29.7743 27.7315 28.9184 28.7309C28.0626 29.7303 27.5757 31.0846 27.5629 32.5017V37.9585C27.5675 38.8909 27.78 39.8057 28.1791 40.6118C28.5782 41.418 29.1502 42.0875 29.838 42.5537V46.0001C29.8696 47.4048 30.364 48.7403 31.2172 49.7259C32.0704 50.7114 33.2159 51.2702 34.4127 51.2845H38.9874C40.1945 51.2695 41.3481 50.6979 42.1994 49.6932C43.0506 48.6884 43.5313 47.331 43.5377 45.9139V44.162L54.742 45.6267C55.3539 45.7071 55.9733 45.6359 56.5603 45.4178C57.1473 45.1997 57.6888 44.8395 58.1498 44.3604C58.6109 43.8814 58.9813 43.2942 59.237 42.6367C59.4928 41.9792 59.6283 41.266 59.6347 40.5433V29.8594C59.6283 29.1367 59.4928 28.4235 59.237 27.766C58.9813 27.1085 58.6109 26.5213 58.1498 26.0423C57.6888 25.5633 57.1473 25.2031 56.5603 24.9849C55.9733 24.7668 55.3539 24.6957 54.742 24.776ZM9.28857 14.0347H13.8633V16.7057C13.543 16.6668 13.2194 16.7072 12.9133 16.8244C12.6072 16.9416 12.3255 17.133 12.0864 17.3861C11.8473 17.6393 11.6561 17.9485 11.5253 18.2939C11.3944 18.6393 11.3268 19.013 11.3268 19.391C11.3268 19.769 11.3944 20.1428 11.5253 20.4881C11.6561 20.8335 11.8473 21.1427 12.0864 21.3959C12.3255 21.649 12.6072 21.8404 12.9133 21.9576C13.2194 22.0748 13.543 22.1153 13.8633 22.0763H18.438C18.7582 22.1153 19.0819 22.0748 19.388 21.9576C19.6941 21.8404 19.9758 21.649 20.2149 21.3959C20.454 21.1427 20.6451 20.8335 20.776 20.4881C20.9068 20.1428 20.9744 19.769 20.9744 19.391C20.9744 19.013 20.9068 18.6393 20.776 18.2939C20.6451 17.9485 20.454 17.6393 20.2149 17.3861C19.9758 17.133 19.6941 16.9416 19.388 16.8244C19.0819 16.7072 18.7582 16.6668 18.438 16.7057V14.0347H50.4119V16.7057C50.0917 16.6668 49.768 16.7072 49.462 16.8244C49.1559 16.9416 48.8741 17.133 48.635 17.3861C48.3959 17.6393 48.2048 17.9485 48.0739 18.2939C47.9431 18.6393 47.8755 19.013 47.8755 19.391C47.8755 19.769 47.9431 20.1428 48.0739 20.4881C48.2048 20.8335 48.3959 21.1427 48.635 21.3959C48.8741 21.649 49.1559 21.8404 49.462 21.9576C49.768 22.0748 50.0917 22.1153 50.4119 22.0763H54.9866C55.3069 22.1153 55.6305 22.0748 55.9366 21.9576C56.2427 21.8404 56.5244 21.649 56.7635 21.3959C57.0026 21.1427 57.1938 20.8335 57.3246 20.4881C57.4555 20.1428 57.5231 19.769 57.5231 19.391C57.5231 19.013 57.4555 18.6393 57.3246 18.2939C57.1938 17.9485 57.0026 17.6393 56.7635 17.3861C56.5244 17.133 56.2427 16.9416 55.9366 16.8244C55.6305 16.7072 55.3069 16.6668 54.9866 16.7057V14.0347H59.5369C60.1383 14.027 60.735 14.1608 61.2917 14.4283C61.8483 14.6958 62.3537 15.0916 62.7778 15.5922C63.202 16.0929 63.5364 16.6883 63.7613 17.3432C63.9862 17.9981 64.097 18.6993 64.0871 19.4054V48.9008C64.0937 49.6044 63.9804 50.3025 63.7541 50.9541C63.5277 51.6057 63.1928 52.1977 62.769 52.6952C62.3451 53.1928 61.8409 53.586 61.2859 53.8517C60.7309 54.1175 60.1362 54.2504 59.5369 54.2427H9.28857C8.68921 54.2504 8.09457 54.1175 7.53955 53.8517C6.98453 53.586 6.48031 53.1928 6.05647 52.6952C5.63263 52.1977 5.29771 51.6057 5.07136 50.9541C4.84501 50.3025 4.73178 49.6044 4.73834 48.9008V19.4054C4.72849 18.6993 4.83928 17.9981 5.06416 17.3432C5.28904 16.6883 5.62344 16.0929 6.04761 15.5922C6.47179 15.0916 6.97713 14.6958 7.53379 14.4283C8.09044 14.1608 8.68712 14.027 9.28857 14.0347ZM48.1124 5.99313H50.4119V8.69281H48.1124V5.99313ZM11.5882 5.99313H13.8633V8.69281H11.5882V5.99313ZM11.5882 0.622498C10.3788 0.637443 9.22261 1.20808 8.36743 2.21204C7.51225 3.21601 7.02619 4.57339 7.01345 5.99313V9.06617C5.06034 9.66155 3.32967 10.9982 2.09081 12.8682C0.851947 14.7381 0.174404 17.0364 0.163635 19.4054V48.9008C0.176487 51.7373 1.14199 54.4533 2.85047 56.459C4.55895 58.4648 6.87245 59.5983 9.28857 59.6133H14.059C14.358 61.9714 15.2044 64.1873 16.5053 66.0179C17.6229 67.461 18.9988 68.5957 20.5342 69.3405C22.0695 70.0854 23.7264 70.4219 25.3856 70.3259V75.6678H23.1105C22.5447 75.7366 22.0206 76.0492 21.6397 76.5452C21.2587 77.0411 21.0478 77.6853 21.0478 78.3531C21.0478 79.021 21.2587 79.6651 21.6397 80.1611C22.0206 80.6571 22.5447 80.9697 23.1105 81.0385H45.9351C46.5009 80.9697 47.025 80.6571 47.406 80.1611C47.7869 79.6651 47.9978 79.021 47.9978 78.3531C47.9978 77.6853 47.7869 77.0411 47.406 76.5452C47.025 76.0492 46.5009 75.7366 45.9351 75.6678H43.6355V70.3259C45.2981 70.4182 46.9575 70.0801 48.4964 69.3356C50.0352 68.5911 51.4158 67.4585 52.5403 66.0179C53.8412 64.1873 54.6876 61.9714 54.9866 59.6133H59.7326C62.1146 59.5388 64.3784 58.3791 66.0449 56.3797C67.7114 54.3803 68.65 51.6981 68.6618 48.9008V19.4054C68.6554 16.5666 67.6919 13.8462 65.9821 11.8388C64.2722 9.83147 61.955 8.70039 59.5369 8.69281H54.9866V5.99313C54.9739 4.57339 54.4879 3.21601 53.6327 2.21204C52.7775 1.20808 51.6213 0.637443 50.4119 0.622498H48.1124C46.903 0.637443 45.7468 1.20808 44.8916 2.21204C44.0365 3.21601 43.5504 4.57339 43.5377 5.99313V8.69281H18.438V5.99313C18.4252 4.57339 17.9392 3.21601 17.084 2.21204C16.2288 1.20808 15.0726 0.637443 13.8633 0.622498H11.5882Z" fill="#1C85E8"/>
                            </svg>
                            <div className="card-body">
                                <h3 className="card-title text-center" style={{fontWeight:"bolder"}}>Open Source Development.</h3>
                                <p className="pb-3 card-text text-center text-secondary" style={{marginBottom:"2.5em"}}>
                                If the path is beautiful, lets not ask where it leads, 
                                        Our region are simple, and Kind, each of us has within 
                                        the power and ability to disrupt.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 mt-3" >
                        <div className="card pt-5 shadow mds">
                            <svg width="69" className="card-img-top" height="82" viewBox="0 0 69 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="animated bounceIn" d="M29.8625 70.3259H38.9874V75.6678H29.8625V70.3259ZM18.7071 59.6133H50.1184C49.9135 60.6612 49.5124 61.6423 48.9441 62.4853C48.2695 63.3605 47.4278 64.0354 46.488 64.4548C45.5482 64.8741 44.5371 65.0259 43.5377 64.8978H25.2878C24.2921 65.0236 23.2853 64.8706 22.3497 64.4512C21.4142 64.0319 20.5767 63.3582 19.9058 62.4853C19.3295 61.6444 18.92 60.6633 18.7071 59.6133ZM11.5882 46.2011C10.9848 46.2011 10.4061 46.4825 9.9794 46.9834C9.55273 47.4843 9.31304 48.1637 9.31304 48.8721C9.31304 49.5804 9.55273 50.2598 9.9794 50.7607C10.4061 51.2616 10.9848 51.543 11.5882 51.543H23.0127C23.6161 51.543 24.1948 51.2616 24.6214 50.7607C25.0481 50.2598 25.2878 49.5804 25.2878 48.8721C25.2878 48.1637 25.0481 47.4843 24.6214 46.9834C24.1948 46.4825 23.6161 46.2011 23.0127 46.2011H11.5882ZM34.4127 43.3291H36.6145L39.0608 43.645V46.0001H34.4127V43.3291ZM11.5882 36.8097C11.2679 36.7707 10.9443 36.8112 10.6382 36.9284C10.3321 37.0456 10.0504 37.237 9.81126 37.4901C9.57216 37.7433 9.381 38.0525 9.25015 38.3979C9.11931 38.7432 9.0517 39.117 9.0517 39.495C9.0517 39.873 9.11931 40.2467 9.25015 40.5921C9.381 40.9375 9.57216 41.2467 9.81126 41.4999C10.0504 41.753 10.3321 41.9444 10.6382 42.0616C10.9443 42.1788 11.2679 42.2192 11.5882 42.1803H18.438C18.7582 42.2192 19.0819 42.1788 19.388 42.0616C19.6941 41.9444 19.9758 41.753 20.2149 41.4999C20.454 41.2467 20.6451 40.9375 20.776 40.5921C20.9068 40.2467 20.9744 39.873 20.9744 39.495C20.9744 39.117 20.9068 38.7432 20.776 38.3979C20.6451 38.0525 20.454 37.7433 20.2149 37.4901C19.9758 37.237 19.6941 37.0456 19.388 36.9284C19.0819 36.8112 18.7582 36.7707 18.438 36.8097H11.5882ZM54.9622 30.1466V40.2274L37.0793 37.9585H32.1865V32.5017H37.0793L54.9622 30.1466ZM11.5882 27.447C11.2894 27.447 10.9935 27.516 10.7175 27.6503C10.4415 27.7845 10.1907 27.9812 9.9794 28.2293C9.76814 28.4773 9.60055 28.7717 9.48622 29.0958C9.37188 29.4198 9.31304 29.7672 9.31304 30.1179C9.31304 30.4687 9.37188 30.816 9.48622 31.1401C9.60055 31.4641 9.76814 31.7586 9.9794 32.0066C10.1907 32.2546 10.4415 32.4513 10.7175 32.5856C10.9935 32.7198 11.2894 32.7889 11.5882 32.7889H20.7376C21.0363 32.7889 21.3322 32.7198 21.6082 32.5856C21.8842 32.4513 22.135 32.2546 22.3463 32.0066C22.5576 31.7586 22.7252 31.4641 22.8395 31.1401C22.9538 30.816 23.0127 30.4687 23.0127 30.1179C23.0127 29.7672 22.9538 29.4198 22.8395 29.0958C22.7252 28.7717 22.5576 28.4773 22.3463 28.2293C22.135 27.9812 21.8842 27.7845 21.6082 27.6503C21.3322 27.516 21.0363 27.447 20.7376 27.447H11.5882ZM54.742 24.776L36.6145 27.1598H32.1376C30.9305 27.1672 29.7743 27.7315 28.9184 28.7309C28.0626 29.7303 27.5757 31.0846 27.5629 32.5017V37.9585C27.5675 38.8909 27.78 39.8057 28.1791 40.6118C28.5782 41.418 29.1502 42.0875 29.838 42.5537V46.0001C29.8696 47.4048 30.364 48.7403 31.2172 49.7259C32.0704 50.7114 33.2159 51.2702 34.4127 51.2845H38.9874C40.1945 51.2695 41.3481 50.6979 42.1994 49.6932C43.0506 48.6884 43.5313 47.331 43.5377 45.9139V44.162L54.742 45.6267C55.3539 45.7071 55.9733 45.6359 56.5603 45.4178C57.1473 45.1997 57.6888 44.8395 58.1498 44.3604C58.6109 43.8814 58.9813 43.2942 59.237 42.6367C59.4928 41.9792 59.6283 41.266 59.6347 40.5433V29.8594C59.6283 29.1367 59.4928 28.4235 59.237 27.766C58.9813 27.1085 58.6109 26.5213 58.1498 26.0423C57.6888 25.5633 57.1473 25.2031 56.5603 24.9849C55.9733 24.7668 55.3539 24.6957 54.742 24.776ZM9.28857 14.0347H13.8633V16.7057C13.543 16.6668 13.2194 16.7072 12.9133 16.8244C12.6072 16.9416 12.3255 17.133 12.0864 17.3861C11.8473 17.6393 11.6561 17.9485 11.5253 18.2939C11.3944 18.6393 11.3268 19.013 11.3268 19.391C11.3268 19.769 11.3944 20.1428 11.5253 20.4881C11.6561 20.8335 11.8473 21.1427 12.0864 21.3959C12.3255 21.649 12.6072 21.8404 12.9133 21.9576C13.2194 22.0748 13.543 22.1153 13.8633 22.0763H18.438C18.7582 22.1153 19.0819 22.0748 19.388 21.9576C19.6941 21.8404 19.9758 21.649 20.2149 21.3959C20.454 21.1427 20.6451 20.8335 20.776 20.4881C20.9068 20.1428 20.9744 19.769 20.9744 19.391C20.9744 19.013 20.9068 18.6393 20.776 18.2939C20.6451 17.9485 20.454 17.6393 20.2149 17.3861C19.9758 17.133 19.6941 16.9416 19.388 16.8244C19.0819 16.7072 18.7582 16.6668 18.438 16.7057V14.0347H50.4119V16.7057C50.0917 16.6668 49.768 16.7072 49.462 16.8244C49.1559 16.9416 48.8741 17.133 48.635 17.3861C48.3959 17.6393 48.2048 17.9485 48.0739 18.2939C47.9431 18.6393 47.8755 19.013 47.8755 19.391C47.8755 19.769 47.9431 20.1428 48.0739 20.4881C48.2048 20.8335 48.3959 21.1427 48.635 21.3959C48.8741 21.649 49.1559 21.8404 49.462 21.9576C49.768 22.0748 50.0917 22.1153 50.4119 22.0763H54.9866C55.3069 22.1153 55.6305 22.0748 55.9366 21.9576C56.2427 21.8404 56.5244 21.649 56.7635 21.3959C57.0026 21.1427 57.1938 20.8335 57.3246 20.4881C57.4555 20.1428 57.5231 19.769 57.5231 19.391C57.5231 19.013 57.4555 18.6393 57.3246 18.2939C57.1938 17.9485 57.0026 17.6393 56.7635 17.3861C56.5244 17.133 56.2427 16.9416 55.9366 16.8244C55.6305 16.7072 55.3069 16.6668 54.9866 16.7057V14.0347H59.5369C60.1383 14.027 60.735 14.1608 61.2917 14.4283C61.8483 14.6958 62.3537 15.0916 62.7778 15.5922C63.202 16.0929 63.5364 16.6883 63.7613 17.3432C63.9862 17.9981 64.097 18.6993 64.0871 19.4054V48.9008C64.0937 49.6044 63.9804 50.3025 63.7541 50.9541C63.5277 51.6057 63.1928 52.1977 62.769 52.6952C62.3451 53.1928 61.8409 53.586 61.2859 53.8517C60.7309 54.1175 60.1362 54.2504 59.5369 54.2427H9.28857C8.68921 54.2504 8.09457 54.1175 7.53955 53.8517C6.98453 53.586 6.48031 53.1928 6.05647 52.6952C5.63263 52.1977 5.29771 51.6057 5.07136 50.9541C4.84501 50.3025 4.73178 49.6044 4.73834 48.9008V19.4054C4.72849 18.6993 4.83928 17.9981 5.06416 17.3432C5.28904 16.6883 5.62344 16.0929 6.04761 15.5922C6.47179 15.0916 6.97713 14.6958 7.53379 14.4283C8.09044 14.1608 8.68712 14.027 9.28857 14.0347ZM48.1124 5.99313H50.4119V8.69281H48.1124V5.99313ZM11.5882 5.99313H13.8633V8.69281H11.5882V5.99313ZM11.5882 0.622498C10.3788 0.637443 9.22261 1.20808 8.36743 2.21204C7.51225 3.21601 7.02619 4.57339 7.01345 5.99313V9.06617C5.06034 9.66155 3.32967 10.9982 2.09081 12.8682C0.851947 14.7381 0.174404 17.0364 0.163635 19.4054V48.9008C0.176487 51.7373 1.14199 54.4533 2.85047 56.459C4.55895 58.4648 6.87245 59.5983 9.28857 59.6133H14.059C14.358 61.9714 15.2044 64.1873 16.5053 66.0179C17.6229 67.461 18.9988 68.5957 20.5342 69.3405C22.0695 70.0854 23.7264 70.4219 25.3856 70.3259V75.6678H23.1105C22.5447 75.7366 22.0206 76.0492 21.6397 76.5452C21.2587 77.0411 21.0478 77.6853 21.0478 78.3531C21.0478 79.021 21.2587 79.6651 21.6397 80.1611C22.0206 80.6571 22.5447 80.9697 23.1105 81.0385H45.9351C46.5009 80.9697 47.025 80.6571 47.406 80.1611C47.7869 79.6651 47.9978 79.021 47.9978 78.3531C47.9978 77.6853 47.7869 77.0411 47.406 76.5452C47.025 76.0492 46.5009 75.7366 45.9351 75.6678H43.6355V70.3259C45.2981 70.4182 46.9575 70.0801 48.4964 69.3356C50.0352 68.5911 51.4158 67.4585 52.5403 66.0179C53.8412 64.1873 54.6876 61.9714 54.9866 59.6133H59.7326C62.1146 59.5388 64.3784 58.3791 66.0449 56.3797C67.7114 54.3803 68.65 51.6981 68.6618 48.9008V19.4054C68.6554 16.5666 67.6919 13.8462 65.9821 11.8388C64.2722 9.83147 61.955 8.70039 59.5369 8.69281H54.9866V5.99313C54.9739 4.57339 54.4879 3.21601 53.6327 2.21204C52.7775 1.20808 51.6213 0.637443 50.4119 0.622498H48.1124C46.903 0.637443 45.7468 1.20808 44.8916 2.21204C44.0365 3.21601 43.5504 4.57339 43.5377 5.99313V8.69281H18.438V5.99313C18.4252 4.57339 17.9392 3.21601 17.084 2.21204C16.2288 1.20808 15.0726 0.637443 13.8633 0.622498H11.5882Z" fill="#1C85E8"/>
                            </svg>
                            <div className="card-body">
                                <h3 className="card-title text-center" style={{fontWeight:"bolder"}}>Open Source Development.</h3>
                                <p className="pb-3 card-text text-center text-secondary" style={{marginBottom:"2.5em"}}>
                                If the path is beautiful, lets not ask where it leads, 
                                        Our region are simple, and Kind, each of us has within 
                                        the power and ability to disrupt.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 mt-3">
                        <div className="card pt-5 shadow">
                        <svg width="69" className="card-img-top" height="82" viewBox="0 0 69 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="animated tada" d="M29.8625 70.3259H38.9874V75.6678H29.8625V70.3259ZM18.7071 59.6133H50.1184C49.9135 60.6612 49.5124 61.6423 48.9441 62.4853C48.2695 63.3605 47.4278 64.0354 46.488 64.4548C45.5482 64.8741 44.5371 65.0259 43.5377 64.8978H25.2878C24.2921 65.0236 23.2853 64.8706 22.3497 64.4512C21.4142 64.0319 20.5767 63.3582 19.9058 62.4853C19.3295 61.6444 18.92 60.6633 18.7071 59.6133ZM11.5882 46.2011C10.9848 46.2011 10.4061 46.4825 9.9794 46.9834C9.55273 47.4843 9.31304 48.1637 9.31304 48.8721C9.31304 49.5804 9.55273 50.2598 9.9794 50.7607C10.4061 51.2616 10.9848 51.543 11.5882 51.543H23.0127C23.6161 51.543 24.1948 51.2616 24.6214 50.7607C25.0481 50.2598 25.2878 49.5804 25.2878 48.8721C25.2878 48.1637 25.0481 47.4843 24.6214 46.9834C24.1948 46.4825 23.6161 46.2011 23.0127 46.2011H11.5882ZM34.4127 43.3291H36.6145L39.0608 43.645V46.0001H34.4127V43.3291ZM11.5882 36.8097C11.2679 36.7707 10.9443 36.8112 10.6382 36.9284C10.3321 37.0456 10.0504 37.237 9.81126 37.4901C9.57216 37.7433 9.381 38.0525 9.25015 38.3979C9.11931 38.7432 9.0517 39.117 9.0517 39.495C9.0517 39.873 9.11931 40.2467 9.25015 40.5921C9.381 40.9375 9.57216 41.2467 9.81126 41.4999C10.0504 41.753 10.3321 41.9444 10.6382 42.0616C10.9443 42.1788 11.2679 42.2192 11.5882 42.1803H18.438C18.7582 42.2192 19.0819 42.1788 19.388 42.0616C19.6941 41.9444 19.9758 41.753 20.2149 41.4999C20.454 41.2467 20.6451 40.9375 20.776 40.5921C20.9068 40.2467 20.9744 39.873 20.9744 39.495C20.9744 39.117 20.9068 38.7432 20.776 38.3979C20.6451 38.0525 20.454 37.7433 20.2149 37.4901C19.9758 37.237 19.6941 37.0456 19.388 36.9284C19.0819 36.8112 18.7582 36.7707 18.438 36.8097H11.5882ZM54.9622 30.1466V40.2274L37.0793 37.9585H32.1865V32.5017H37.0793L54.9622 30.1466ZM11.5882 27.447C11.2894 27.447 10.9935 27.516 10.7175 27.6503C10.4415 27.7845 10.1907 27.9812 9.9794 28.2293C9.76814 28.4773 9.60055 28.7717 9.48622 29.0958C9.37188 29.4198 9.31304 29.7672 9.31304 30.1179C9.31304 30.4687 9.37188 30.816 9.48622 31.1401C9.60055 31.4641 9.76814 31.7586 9.9794 32.0066C10.1907 32.2546 10.4415 32.4513 10.7175 32.5856C10.9935 32.7198 11.2894 32.7889 11.5882 32.7889H20.7376C21.0363 32.7889 21.3322 32.7198 21.6082 32.5856C21.8842 32.4513 22.135 32.2546 22.3463 32.0066C22.5576 31.7586 22.7252 31.4641 22.8395 31.1401C22.9538 30.816 23.0127 30.4687 23.0127 30.1179C23.0127 29.7672 22.9538 29.4198 22.8395 29.0958C22.7252 28.7717 22.5576 28.4773 22.3463 28.2293C22.135 27.9812 21.8842 27.7845 21.6082 27.6503C21.3322 27.516 21.0363 27.447 20.7376 27.447H11.5882ZM54.742 24.776L36.6145 27.1598H32.1376C30.9305 27.1672 29.7743 27.7315 28.9184 28.7309C28.0626 29.7303 27.5757 31.0846 27.5629 32.5017V37.9585C27.5675 38.8909 27.78 39.8057 28.1791 40.6118C28.5782 41.418 29.1502 42.0875 29.838 42.5537V46.0001C29.8696 47.4048 30.364 48.7403 31.2172 49.7259C32.0704 50.7114 33.2159 51.2702 34.4127 51.2845H38.9874C40.1945 51.2695 41.3481 50.6979 42.1994 49.6932C43.0506 48.6884 43.5313 47.331 43.5377 45.9139V44.162L54.742 45.6267C55.3539 45.7071 55.9733 45.6359 56.5603 45.4178C57.1473 45.1997 57.6888 44.8395 58.1498 44.3604C58.6109 43.8814 58.9813 43.2942 59.237 42.6367C59.4928 41.9792 59.6283 41.266 59.6347 40.5433V29.8594C59.6283 29.1367 59.4928 28.4235 59.237 27.766C58.9813 27.1085 58.6109 26.5213 58.1498 26.0423C57.6888 25.5633 57.1473 25.2031 56.5603 24.9849C55.9733 24.7668 55.3539 24.6957 54.742 24.776ZM9.28857 14.0347H13.8633V16.7057C13.543 16.6668 13.2194 16.7072 12.9133 16.8244C12.6072 16.9416 12.3255 17.133 12.0864 17.3861C11.8473 17.6393 11.6561 17.9485 11.5253 18.2939C11.3944 18.6393 11.3268 19.013 11.3268 19.391C11.3268 19.769 11.3944 20.1428 11.5253 20.4881C11.6561 20.8335 11.8473 21.1427 12.0864 21.3959C12.3255 21.649 12.6072 21.8404 12.9133 21.9576C13.2194 22.0748 13.543 22.1153 13.8633 22.0763H18.438C18.7582 22.1153 19.0819 22.0748 19.388 21.9576C19.6941 21.8404 19.9758 21.649 20.2149 21.3959C20.454 21.1427 20.6451 20.8335 20.776 20.4881C20.9068 20.1428 20.9744 19.769 20.9744 19.391C20.9744 19.013 20.9068 18.6393 20.776 18.2939C20.6451 17.9485 20.454 17.6393 20.2149 17.3861C19.9758 17.133 19.6941 16.9416 19.388 16.8244C19.0819 16.7072 18.7582 16.6668 18.438 16.7057V14.0347H50.4119V16.7057C50.0917 16.6668 49.768 16.7072 49.462 16.8244C49.1559 16.9416 48.8741 17.133 48.635 17.3861C48.3959 17.6393 48.2048 17.9485 48.0739 18.2939C47.9431 18.6393 47.8755 19.013 47.8755 19.391C47.8755 19.769 47.9431 20.1428 48.0739 20.4881C48.2048 20.8335 48.3959 21.1427 48.635 21.3959C48.8741 21.649 49.1559 21.8404 49.462 21.9576C49.768 22.0748 50.0917 22.1153 50.4119 22.0763H54.9866C55.3069 22.1153 55.6305 22.0748 55.9366 21.9576C56.2427 21.8404 56.5244 21.649 56.7635 21.3959C57.0026 21.1427 57.1938 20.8335 57.3246 20.4881C57.4555 20.1428 57.5231 19.769 57.5231 19.391C57.5231 19.013 57.4555 18.6393 57.3246 18.2939C57.1938 17.9485 57.0026 17.6393 56.7635 17.3861C56.5244 17.133 56.2427 16.9416 55.9366 16.8244C55.6305 16.7072 55.3069 16.6668 54.9866 16.7057V14.0347H59.5369C60.1383 14.027 60.735 14.1608 61.2917 14.4283C61.8483 14.6958 62.3537 15.0916 62.7778 15.5922C63.202 16.0929 63.5364 16.6883 63.7613 17.3432C63.9862 17.9981 64.097 18.6993 64.0871 19.4054V48.9008C64.0937 49.6044 63.9804 50.3025 63.7541 50.9541C63.5277 51.6057 63.1928 52.1977 62.769 52.6952C62.3451 53.1928 61.8409 53.586 61.2859 53.8517C60.7309 54.1175 60.1362 54.2504 59.5369 54.2427H9.28857C8.68921 54.2504 8.09457 54.1175 7.53955 53.8517C6.98453 53.586 6.48031 53.1928 6.05647 52.6952C5.63263 52.1977 5.29771 51.6057 5.07136 50.9541C4.84501 50.3025 4.73178 49.6044 4.73834 48.9008V19.4054C4.72849 18.6993 4.83928 17.9981 5.06416 17.3432C5.28904 16.6883 5.62344 16.0929 6.04761 15.5922C6.47179 15.0916 6.97713 14.6958 7.53379 14.4283C8.09044 14.1608 8.68712 14.027 9.28857 14.0347ZM48.1124 5.99313H50.4119V8.69281H48.1124V5.99313ZM11.5882 5.99313H13.8633V8.69281H11.5882V5.99313ZM11.5882 0.622498C10.3788 0.637443 9.22261 1.20808 8.36743 2.21204C7.51225 3.21601 7.02619 4.57339 7.01345 5.99313V9.06617C5.06034 9.66155 3.32967 10.9982 2.09081 12.8682C0.851947 14.7381 0.174404 17.0364 0.163635 19.4054V48.9008C0.176487 51.7373 1.14199 54.4533 2.85047 56.459C4.55895 58.4648 6.87245 59.5983 9.28857 59.6133H14.059C14.358 61.9714 15.2044 64.1873 16.5053 66.0179C17.6229 67.461 18.9988 68.5957 20.5342 69.3405C22.0695 70.0854 23.7264 70.4219 25.3856 70.3259V75.6678H23.1105C22.5447 75.7366 22.0206 76.0492 21.6397 76.5452C21.2587 77.0411 21.0478 77.6853 21.0478 78.3531C21.0478 79.021 21.2587 79.6651 21.6397 80.1611C22.0206 80.6571 22.5447 80.9697 23.1105 81.0385H45.9351C46.5009 80.9697 47.025 80.6571 47.406 80.1611C47.7869 79.6651 47.9978 79.021 47.9978 78.3531C47.9978 77.6853 47.7869 77.0411 47.406 76.5452C47.025 76.0492 46.5009 75.7366 45.9351 75.6678H43.6355V70.3259C45.2981 70.4182 46.9575 70.0801 48.4964 69.3356C50.0352 68.5911 51.4158 67.4585 52.5403 66.0179C53.8412 64.1873 54.6876 61.9714 54.9866 59.6133H59.7326C62.1146 59.5388 64.3784 58.3791 66.0449 56.3797C67.7114 54.3803 68.65 51.6981 68.6618 48.9008V19.4054C68.6554 16.5666 67.6919 13.8462 65.9821 11.8388C64.2722 9.83147 61.955 8.70039 59.5369 8.69281H54.9866V5.99313C54.9739 4.57339 54.4879 3.21601 53.6327 2.21204C52.7775 1.20808 51.6213 0.637443 50.4119 0.622498H48.1124C46.903 0.637443 45.7468 1.20808 44.8916 2.21204C44.0365 3.21601 43.5504 4.57339 43.5377 5.99313V8.69281H18.438V5.99313C18.4252 4.57339 17.9392 3.21601 17.084 2.21204C16.2288 1.20808 15.0726 0.637443 13.8633 0.622498H11.5882Z" fill="#1C85E8"/>
                        </svg>
                            <div className="card-body">
                                <h3 className="card-title text-center" style={{fontWeight:"bolder"}}>Open Source Development.</h3>
                                <p className="pb-3 card-text text-center text-secondary" style={{marginBottom:"2.5em"}}>
                                If the path is beautiful, lets not ask where it leads, 
                                        Our region are simple, and Kind, each of us has within 
                                        the power and ability to disrupt.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container p-5 shadow-lg">
                <div className="conatiner p-3 pl-5">
                    <h1 className="display-3" style={{fontWeight:"bolder",width:"75%"}}>
                        Best servicing creative agency.
                    </h1>
                    <p className="text-secondary">
                        We believe in the power of recognition and empowerment leading to great employee engagement. 
                        And employee engagement is critical to guest engagement. 
                        Employee empowerment and recognition are the core of our culture and how we achieve outstanding customer service.
                    </p>
                </div>
                <div className="float-end">
                    <button className="btn btn-outline-primary">
                        <h4>HIRE US</h4>
                    </button>
                </div> <br />
            </div>
        </div>
    )
}

export default Services
