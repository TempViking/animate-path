interface IPoint {
    x: number;
    y: number;
}
interface IAlignedPoint extends IPoint {
    deg: number;
}
interface IAnimatePath {
    duration: number;
    points: IPoint[];
}
export default function ({ duration, points }: IAnimatePath, func: (p: IAlignedPoint) => void): Promise<void>;
export {};
