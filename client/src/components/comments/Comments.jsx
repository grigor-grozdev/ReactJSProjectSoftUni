import styles from "../comments/Comments.module.css";

export default function Comments() {
    return (
        <section className={styles.sectionComments}>

            <div className={styles.scrollableDiv}>

                <div className="pt-1 flex mt-4">
                    <div className="pl-2 ml-3 rounded-lg border-2 border-grey-700">
                        <div className="font-medium text-grey-800">John Doe</div>
                        <div className="text-gray-600">Posted on 2023-10-02 14:30</div>
                        <div className="mt-2 text-grey-800">This is a sample comment. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </div>
                    </div>
                </div>

                <div className="flex mt-4">
                    <div className="pl-2 ml-3 rounded-lg border-2 border-grey-600">
                        <div className="font-medium text-grey-800">Jane Smith</div>
                        <div className="text-gray-600">Posted on 2023-10-02 15:15</div>
                        <div className="mt-2 text-grey-800">Another sample comment. Sed quis velit auctor, bibendum dolor in,
                            accumsan tellus.
                        </div>
                    </div>
                </div>
                <div className="flex mt-4 snap-start ...">
                    <div className="pl-2 ml-3 rounded-lg border-2 border-grey-600">
                        <div className="font-medium text-grey-800">Jane Smith</div>
                        <div className="text-gray-600">Posted on 2023-10-02 15:15</div>
                        <div className="mt-2 text-grey-800">Another sample comment. Sed quis velit auctor, bibendum dolor in,
                            accumsan tellus.
                        </div>
                    </div>
                </div>
                <div className="flex mt-4 snap-start ...">
                    <div className="pl-2 ml-3 rounded-lg border-2 border-grey-600">
                        <div className="font-medium text-grey-800">Jane Smith</div>
                        <div className="text-gray-600">Posted on 2023-10-02 15:15</div>
                        <div className="mt-2 text-grey-800">Another sample comment. Sed quis velit auctor, bibendum dolor in,
                            accumsan tellus.
                        </div>
                    </div>
                </div>
            </div>


            <form className="mt-4">

                <div className="mb-4">
                    <label htmlFor="comment" className="block text-grey-800 font-medium">Comment</label>
                    <textarea id="comment" name="comment" className="border-2 border-grey-600 p-2 w-full rounded" required></textarea>
                </div>

                <button type="submit"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-800">Post
                    Comment
                </button>
            </form>
        </section>
    );
}