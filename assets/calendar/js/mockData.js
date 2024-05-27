const ym0 = moment().format('YYYY-MM');
const ym1 = moment().subtract(1, 'month').format('YYYY-MM');
const ym2 = moment().add(1, 'month').format('YYYY-MM');
export const mockData = [
    {
        time: ym0 + '-13T21:00:00 Z',
        cls: 'bg-orange-alt',
        desc: 'Rapat Paripurna ..'
    },
    {
        time: ym0 + '-13T22:00:00 Z',
        cls: 'bg-green-alt',
        desc: 'Menghadiri Acara ..'
    },
    {
        time: ym0 + '-18T21:00:00 Z',
        cls: 'bg-red-alt',
        desc: 'Rapat Percepatan ..' 
    },
    {
        time: ym0 + '-18T22:00:00 Z',
        cls: 'bg-cyan-alt',
        desc: 'Rapat Pembahasan ..'
    },
    {
        time: ym0 + '-18T23:00:00 Z',
        cls: 'bg-purple-alt',
        desc: 'Kegiatan Bimtek ..'
    },
    {
        time: ym0 + '-18T23:30:00 Z',
        cls: 'bg-sky-blue-alt',
        desc: 'Event Jalan Santai ..'
    },
    {
        time: ym0 + '-19T19:00:00 Z',
        cls: 'bg-orange-alt',
        desc: 'Menghadiri Acara ..'
    },
    {
        time: ym1 + '-02T20:00:00 Z',
        cls: 'bg-orange-alt',
        desc: 'Menghadiri Acara ..'
    },
    {
        time: ym1 + '-03T21:00:00 Z',
        cls: 'bg-sky-blue-alt',
        desc: 'Rapat Pembahasan ..'
    },
    {
        time: ym1 + '-03T18:00:00 Z',
        cls: 'bg-orange-alt',
        desc: 'Rapat Percepatan ..'
    },
    {
        time: ym2 + '-02T19:00:00 Z',
        cls: 'bg-purple-alt',
        desc: 'Rapat Percepatan ..'
    }
];