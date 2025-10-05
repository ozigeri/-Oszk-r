declare module 'lenis' {
    export default class Lenis {
    constructor(options?: any);
    raf(time: number): void;
    on(event: string, callback: (e?: any) => void): void;
    destroy(): void;
    }
}
