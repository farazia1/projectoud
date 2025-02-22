import { type SchemaTypeDefinition } from 'sanity'
import order from './order/orders'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [order],
}
