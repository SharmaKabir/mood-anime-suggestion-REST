import Button from "./Button";

export default function ContentList() {
    return (
        <>
        <div className="card bg-slate-100/5 mt-3 center-container card-compact bg-base-100 w-96 shadow-xl">
        <figure className=" aspect-[16/9]">
            <iframe className="w-full h-full" width="1044" height="587" src="https://www.youtube.com/embed/gTD8b5Yxuuo" title="Build a Full Stack CRUD App using React Tailwind Node PostgreSQL | Best practice &amp; Industry standard" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </figure>
        <div className="card-body text-left">
            <h2 className="card-title font-bold cursor-pointer">Anime Title!</h2>
            <p className="text-lg font-thin">
                2009  ·   64 ep   · ⭐9.09  · 🏆top 3
            </p>
            <div className="flex space-x-2">
                <div className="badge badge-secondary badge-outline">secondary</div>
                <div className="badge badge-secondary badge-outline">secondary</div>

            </div>
             <p className="mt-3 font-thin">Descriptiom DescriptiomDescriptiomDescriptiomDescriptiomm</p>
            
            <div className="flex justify-between">
                <Button text={"⬅️ Back"}/>
                <Button text={"🙈 Hide"}/>
                <Button text={"Next ➡️"}/>
            </div>
        </div>
        </div>
        </>
    )
}