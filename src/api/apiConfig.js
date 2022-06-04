const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: '7a0b88db7180f41c902f8eeab23e61e0',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}
    `,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig

