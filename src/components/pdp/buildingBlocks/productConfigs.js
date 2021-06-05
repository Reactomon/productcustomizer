const detailedProductDescription = [
    '2.3GHz 8-core 9th-generation Intel Core i9 processor, Turbo Boost up to 4.8GHz',
    '16GB 2666MHz DDR4 memory',
    'AMD Radeon Pro 5500M with 4GB of GDDR6 memory',
    '8TB SSD storage',
    '16-inch Retina display with True Tone',
    'Four Thunderbolt 3 ports',
    'Touch Bar and Touch ID',
    'Backlit Magic Keyboard - US English'
];

const processorVariants = [
    {
        variant: 'A',
        description: "2.3GHz 8-core 9th-generation Intel Core i9 processor, Turbo Boost up to 4.8GHz",
        additionalAmountRequired: 0,
        selected: true
    },
    {
        variant: 'B',
        description: "2.4GHz 8-core 9th-generation Intel Core i9 processor, Turbo Boost up to 5.0GHz",
        additionalAmountRequired: 20000,
        sign: '+'
    },
];

const memoryVariants = [
    {
        variant: 'A',
        description: "16GB 2666MHz DDR4 memory",
        additionalAmountRequired: 0,
        selected: true
    },
    {
        variant: 'B',
        description: "32GB 2666MHz DDR4 memory",
        additionalAmountRequired: 40000,
        sign: '+'
    },
    {
        variant: 'C',
        description: "64GB 2666MHz DDR4 memory",
        additionalAmountRequired: 80000,
        sign: '+'
    },
];

const graphicsVariants = [
    {
        variant: 'A',
        description: "AMD Radeon Pro 5500M with 4GB of GDDR6 memory",
        additionalAmountRequired: 0,
        selected: true
    },
    {
        variant: 'B',
        description: "AMD Radeon Pro 5500M with 8GB of GDDR6 memory",
        additionalAmountRequired: 10000,
        sign: '+'
    },
    {
        variant: 'C',
        description: "AMD Radeon Pro 5600M with 8GB of HBM2 memory",
        additionalAmountRequired: 70000,
        sign: '+'
    },
];

const storageVariants = [
    {
        variant: 'A',
        description: "1TB SSD storage",
        additionalAmountRequired: 0,
        selected: true
    },
    {
        variant: 'B',
        description: "2TB SSD storage",
        additionalAmountRequired: 40000,
        sign: '+'
    },
    {
        variant: 'C',
        description: "4TB SSD storage",
        additionalAmountRequired: 100000,
        sign: '+'
    },
    {
        variant: 'D',
        description: "8TB SSD storage",
        additionalAmountRequired: 220000,
        sign: '+'
    },
];

const finalCutOptions = [
    {
        variant: 'A',
        description: "None",
        additionalAmountRequired: 0,
        selected: true
    },
    {
        variant: 'B',
        description: "Final Cut Pro",
        additionalAmountRequired: 24900,
        sign: '+'
    },
];

const logicProOptions = [
    {
        variant: 'A',
        description: "None",
        additionalAmountRequired: 0,
        selected: true
    },
    {
        variant: 'B',
        description: "Logic Pro",
        additionalAmountRequired: 15500,
        sign: '+'
    },
];

const modalData = {
    graphics: {
        heading: 'Graphics',
        description: 'Three high-performance graphics options are available for this MacBook Pro. The standard option is an AMD Radeon Pro 5500M featuring 24 compute units paired with 4GB of GDDR6 memory. This discrete GPU delivers fast graphics performance, accelerating tasks like video editing, 3D workflows and game development. For seamless editing of projects that involve large 3D assets or high-resolution images, you can double the amount of VRAM by opting for the AMD Radeon Pro 5500M with 8GB of GDDR6 memory. Upgrade to the AMD Radeon Pro 5600M for desktop-class graphics, enabling your portable 16-inch MacBook Pro to handle demanding pro applications and graphics-intensive workloads with exceptional ease. Featuring 40 compute units and 8GB of High Bandwidth Memory (HBM2), with 394GB/s of memory bandwidth, this powerful GPU delivers performance that’s up to 75% faster than the AMD Radeon Pro 5500M. In addition to AMD Radeon Pro 5000M series graphics, this MacBook Pro includes integrated Intel UHD Graphics 630, a great energy-saving feature for low-intensity graphics workloads.'
    },
    processors: {
        heading: 'Processor',
        description: 'This MacBook Pro comes as standard with an 8-core Intel Core i9 processor. It features Turbo Boost, Hyper-Threading, support for fast 2666MHz DDR4 memory, a 16MB L3 performance cache and Intel UHD Graphics 630. The i9 processor also features Thermal Velocity Boost, which enables the CPU to opportunistically turbo to super-high clock frequencies when workloads and system thermals allow. At 2.3GHz with Turbo Boost speeds up to 4.8GHz, it’s designed to handle everything from compiling code to rendering CPU-intensive 3D graphics — all with substantially accelerated compute performance. You can upgrade to a 2.4GHz 8-core Intel Core i9 processor with Turbo Boost speeds up to 5.0GHz for even better performance.'
    },
    memory: {
        heading: 'Memory',
        description: 'The 16-inch MacBook Pro comes standard with 16GB of high-performance 2666MHz memory and can be expanded to 32GB or 64GB, using 2666MHz Double Data Rate 4 (DDR4) synchronous dynamic random-access memory (SDRAM). The more memory your Mac has, the more apps you can run simultaneously and the better they will perform. If you’re planning to run multiple professional applications like Final Cut Pro X, it’s a good idea to max out your memory. Note: MacBook Pro memory is not user accessible. If you think you may need more memory in the future, consider upgrading at the time of purchase.'
    },
    storage: {
        heading: 'Storage',
        description: 'This MacBook Pro comes as standard with 1TB of fast SSD storage.¹ Apple flash storage delivers noticeable speed from the moment you start up your Mac all the way to data-intensive tasks. For maximum capacity, you can configure this MacBook Pro with up to 8TB of storage, giving you abundant space for your documents, photos, music, videos and apps. Keep in mind that MacBook Pro storage is not user accessible. If you think you may need more storage capacity in the future, consider upgrading at the time of purchase.'
    }
}


export {
    detailedProductDescription,
    processorVariants,
    memoryVariants,
    graphicsVariants,
    storageVariants,
    finalCutOptions,
    logicProOptions,
    modalData
}
