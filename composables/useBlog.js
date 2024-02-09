export const useBlogs = () => useState("blogs", async () => {
    const blogs = await $fetch('http://localhost:1337/api/blogs?populate=*')
});

export const useBlog = () => useState("blog", async () => {
    const blog = await $fetch('http://localhost:1337/api/blogs?populate=*/${blogId}')
})