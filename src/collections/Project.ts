import type { CollectionConfig } from 'payload';

import { PROJECT_FILTER_CATEGORIES } from '@/lib/utils';

const filterCategoryOptions = PROJECT_FILTER_CATEGORIES.filter(
    (category) => category !== 'Все',
).map((category) => category);

export const Project: CollectionConfig = {
    slug: 'projects',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'year', 'filterCategory', 'showOnHome'],
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            unique: true,
            required: true,
            index: true,
        },
        {
            name: 'category',
            type: 'text',
            required: true,
            label: 'Направление',
        },
        {
            name: 'filterCategory',
            type: 'select',
            required: true,
            label: 'Категория для фильтра',
            options: filterCategoryOptions,
        },
        {
            name: 'year',
            type: 'text',
            required: true,
        },
        {
            name: 'locationValue',
            type: 'text',
            required: true,
            label: 'Локация',
        },
        {
            name: 'coverImage',
            type: 'group',
            required: true,
            label: 'Обложка',
            fields: [
                {
                  name: 'src',
                  type: 'text',
                  required: true,
                  label: 'Ссылка на изображение',
                  admin: { description: 'Прямая ссылка с Яндекс Диска' },
                },
                {
                  name: 'alt',
                  type: 'text',
                  required: true,
                  label: 'Alt-текст',
                },
              ],
        },
        {
            name: 'status',
            type: 'text',
            label: 'Статус объекта',
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Описание',
        },
        {
            name: 'technicalParameters',
            type: 'textarea',
            label: 'Технические параметры',
        },
        {
            name: 'coverCaptionLeft',
            type: 'text',
            label: 'Подпись под обложкой (слева)',
        },
        {
            name: 'gallery',
            type: 'array',
            label: 'Галерея',
            fields: [
                {
                  name: 'src',
                  type: 'text',
                  required: true,
                  label: 'Ссылка на изображение',
                },
                {
                  name: 'alt',
                  type: 'text',
                  required: true,
                  label: 'Alt-текст',
                },
            ],
        },
        {
            name: 'showOnHome',
            type: 'checkbox',
            label: 'Показывать на главной',
            defaultValue: false,
        },
    ],
};
