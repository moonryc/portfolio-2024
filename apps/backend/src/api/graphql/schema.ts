
import * as ResolversObj from "./modules"
import { buildSchema, NonEmptyArray } from 'type-graphql';
import { printSchemaWithDirectives } from '@graphql-tools/utils';
import { lexicographicSortSchema } from 'graphql/utilities';
import { outputFile } from 'type-graphql/dist/helpers/filesystem';

const resolvers = Object.values(ResolversObj)


export const buildBackendSchema = () => buildSchema({
    resolvers: resolvers as NonEmptyArray<(typeof resolvers)[0]>,
    dateScalarMode: "isoDate",
  })



const defaultOuputPath = "./apps/backend/src/api/graphql/generated/schema.graphql"
export const emitSchema = async (outputPath = defaultOuputPath) =>{
  const schema = await buildBackendSchema()
  const schemaFileContent = printSchemaWithDirectives(lexicographicSortSchema(schema))
  await outputFile(outputPath, schemaFileContent)
  return outputPath
}
