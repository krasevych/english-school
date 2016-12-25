interface HotModule extends NodeModule {
    hot?: {accept: (path: string, callback: () => void) => void};
}