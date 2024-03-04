import { useState } from "react"

const ProjectDescription = ({ description }: { description: String }) => {
    const [expand, setExpand] = useState(false)

    return (
        <p className="mt-4 text-sm text-gray-200 transition-all">
            {description.length > 50 && !expand ? (
                <>
                    {description.substring(0, 50) + "..."}
                    <button
                        className="ml-2 font-semibold underline"
                        onClick={() => setExpand(true)}
                    >
                        more!
                    </button>
                </>
            ) : (
                <>
                    {description}
                    <button
                        className="ml-2 font-semibold underline"
                        onClick={() => setExpand(false)}
                    >
                        less!
                    </button>
                </>
            )}
        </p>
    )
}

export default ProjectDescription
