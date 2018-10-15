import MediaManager from './components1/MediaManager.vue';
import MediaList from './components1/MediaList.vue';
import MediaForm from './components1/MediaForm.vue';

const locales = window.AsgardCMS.locales;

export default [
    {
        path: '/media/media',
        component: MediaManager,
        children: [
            {
                path: '',
                component: MediaList,
                name: 'admin.media.media.index',
            },
            {
                path: ':mediaId/edit',
                component: MediaForm,
                name: 'admin.media.media.edit',
                props: {
                    locales,
                },
            },
        ],
    },
];
