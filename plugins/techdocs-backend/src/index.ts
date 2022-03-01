/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The Backstage backend plugin that renders technical documentation for your components
 *
 * @packageDocumentation
 */

export { createRouter } from './service';
export type {
  RouterOptions,
  RecommendedDeploymentOptions,
  OutOfTheBoxDeploymentOptions,
  DocsBuildStrategy,
  ShouldBuildParameters,
} from './service';

export { DefaultTechDocsCollator } from './search';
export type { TechDocsCollatorOptions } from './search';

/**
 * @deprecated Use directly from @backstage/techdocs-common
 */
export type { TechDocsDocument } from '@backstage/techdocs-common';

export * from '@backstage/techdocs-common';
