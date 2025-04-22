import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface IQueryBarItemImageProps {
  image: string;
  description?: string;
  margin?: string;
  borderColor?: string;
  badgeColor?: string;
  className?: string;
}

export const QueryBarItemImage: FC<IQueryBarItemImageProps> = ({
  image,
  description,
  margin,
  borderColor = "border-carbon-50",
  badgeColor,
  className,
}) => {
  const containerClasses = twMerge(
    "relative",
    "flex items-center justify-center",
    margin && `m-[${margin}]`
  );

  const imageClasses = twMerge(
    "w-6 h-6",
    "rounded",
    "border",
    borderColor,
    "overflow-hidden",
    "flex-none",
    className
  );

  const badgeClasses = twMerge(
    "absolute -top-1 -right-1",
    "w-2.5 h-2.5",
    "rounded-full",
    "border border-white",
    badgeColor && `bg-[${badgeColor}]`
  );

  return (
    <div className={containerClasses}>
      <div className={imageClasses}>
        <img
          src={image}
          alt={description}
          className="w-full h-full object-cover"
        />
      </div>
      {badgeColor && <div className={badgeClasses} />}
    </div>
  );
};

QueryBarItemImage.displayName = "QueryBarItemImage";
