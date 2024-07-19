import React from "react"

const BottleCard = ({ imgUrl, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe)
    }
  }

  return (
    <div
      className={` border-2 rounded-xl 
    ${
      bigShoeImg === imgUrl.bigShoe ? "border-gold" : "border-transparent"
    } cursor-pointer max-sm:flex-1
    `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center b bg-center bg-black-tint bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt="shoe Collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default BottleCard
