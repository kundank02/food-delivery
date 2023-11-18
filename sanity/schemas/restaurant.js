import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Restaurant Image',
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: 'Latitude of Restaurant',
    }),
    defineField({
      name: 'long',
      type: 'number',
      title: 'Longitude of Restaurant',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Address of Restaurant',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter a rating from (1-5 stars)',
      validation: (Rule) => Rule.required()
      .min(1)
      .max(5)
      .error('Rating must be between 1 and 5'),
    }),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Category',      
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    })
  ],
})
