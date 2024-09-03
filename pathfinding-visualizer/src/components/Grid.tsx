import { usePathfinding } from "../hooks/usePathfinding"
import { twMerge } from 'tailwind-merge';
import { MAX_COLS, MAX_ROWS } from "../utils/constants";

export const Grid = () => {
    const { grid } = usePathfinding();

    return (
        <div className={twMerge(
            // base classes
            "flex flex-col items-center justify-center border-sky-300",
            // grid height
            `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${MAX_ROWS * 15}px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]]`,
            // grid widht
            `lg:min-w-[${MAX_COLS * 17}px] md:min-w-[${MAX_COLS * 15}px] xs:min-w-[${MAX_COLS * 8}px] min-w-[${MAX_COLS * 7}px]]`,
        )}>
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {row.map((tile, tileIndex) => (
                        <div className="bg-white h-2 w-2 border" />
                    ))}
                </div>
            ))}
        </div>
    )
}