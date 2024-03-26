const Blog = () => {

    const blogs = [
        { id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen", image: "./src/assets/blog1.svg" },
        { id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", image: "./src/assets/blog2.svg" },
        { id: 3, title: "Revamping the Membership Model with Triathlon Australia", image: "./src/assets/blog3.svg" },
    ]

    return (
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="faq">

            <div className="text-center md:w-1/2 mx-auto">
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">Caring is the new marketing</h2>
                <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">
                    The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
                </p>
            </div>

            {/* all blogs */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
                {
                    blogs.map(blog => <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
                        <img src={blog.image} alt="" className="hover:scale-95 transition-all duration-300" />
                        <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
                            <h3 className="mb-3 text-neutralGrey font-semibold">{blog.title}</h3>
                            <div>
                                <a href="/" className="font-bold text-brandPrimary hover:text-neutral-700">
                                    Read more
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 6 4" fill="none" className="inline-block ml-2">
                                        <path d="M4.02324 3.24222L5.12263 2.14283C5.25301 2.01245 5.25301 1.80106 5.12263 1.67068L4.02324 0.571289M5.02484 1.90676L0.350708 1.90676" stroke="#4CAF4F" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
}

export default Blog;