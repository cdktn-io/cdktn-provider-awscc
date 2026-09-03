# `ecrPublicRepository` Submodule <a name="`ecrPublicRepository` Submodule" id="@cdktn/provider-awscc.ecrPublicRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrPublicRepository <a name="EcrPublicRepository" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_public_repository awscc_ecr_public_repository}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer"></a>

```typescript
import { ecrPublicRepository } from '@cdktn/provider-awscc'

new ecrPublicRepository.EcrPublicRepository(scope: Construct, id: string, config?: EcrPublicRepositoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig">EcrPublicRepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig">EcrPublicRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putRepositoryCatalogData">putRepositoryCatalogData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetRepositoryCatalogData">resetRepositoryCatalogData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetRepositoryName">resetRepositoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetRepositoryPolicyText">resetRepositoryPolicyText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRepositoryCatalogData` <a name="putRepositoryCatalogData" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putRepositoryCatalogData"></a>

```typescript
public putRepositoryCatalogData(value: EcrPublicRepositoryRepositoryCatalogData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putRepositoryCatalogData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putTags"></a>

```typescript
public putTags(value: IResolvable | EcrPublicRepositoryTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>[]

---

##### `resetRepositoryCatalogData` <a name="resetRepositoryCatalogData" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetRepositoryCatalogData"></a>

```typescript
public resetRepositoryCatalogData(): void
```

##### `resetRepositoryName` <a name="resetRepositoryName" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetRepositoryName"></a>

```typescript
public resetRepositoryName(): void
```

##### `resetRepositoryPolicyText` <a name="resetRepositoryPolicyText" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetRepositoryPolicyText"></a>

```typescript
public resetRepositoryPolicyText(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EcrPublicRepository resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isConstruct"></a>

```typescript
import { ecrPublicRepository } from '@cdktn/provider-awscc'

ecrPublicRepository.EcrPublicRepository.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isTerraformElement"></a>

```typescript
import { ecrPublicRepository } from '@cdktn/provider-awscc'

ecrPublicRepository.EcrPublicRepository.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isTerraformResource"></a>

```typescript
import { ecrPublicRepository } from '@cdktn/provider-awscc'

ecrPublicRepository.EcrPublicRepository.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.generateConfigForImport"></a>

```typescript
import { ecrPublicRepository } from '@cdktn/provider-awscc'

ecrPublicRepository.EcrPublicRepository.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EcrPublicRepository resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcrPublicRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcrPublicRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_public_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EcrPublicRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryCatalogData">repositoryCatalogData</a></code> | <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference">EcrPublicRepositoryRepositoryCatalogDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList">EcrPublicRepositoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryCatalogDataInput">repositoryCatalogDataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryNameInput">repositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryPolicyTextInput">repositoryPolicyTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryPolicyText">repositoryPolicyText</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repositoryCatalogData`<sup>Required</sup> <a name="repositoryCatalogData" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryCatalogData"></a>

```typescript
public readonly repositoryCatalogData: EcrPublicRepositoryRepositoryCatalogDataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference">EcrPublicRepositoryRepositoryCatalogDataOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.tags"></a>

```typescript
public readonly tags: EcrPublicRepositoryTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList">EcrPublicRepositoryTagsList</a>

---

##### `repositoryCatalogDataInput`<sup>Optional</sup> <a name="repositoryCatalogDataInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryCatalogDataInput"></a>

```typescript
public readonly repositoryCatalogDataInput: IResolvable | EcrPublicRepositoryRepositoryCatalogData;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a>

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryNameInput"></a>

```typescript
public readonly repositoryNameInput: string;
```

- *Type:* string

---

##### `repositoryPolicyTextInput`<sup>Optional</sup> <a name="repositoryPolicyTextInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryPolicyTextInput"></a>

```typescript
public readonly repositoryPolicyTextInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | EcrPublicRepositoryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>[]

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `repositoryPolicyText`<sup>Required</sup> <a name="repositoryPolicyText" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryPolicyText"></a>

```typescript
public readonly repositoryPolicyText: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcrPublicRepositoryConfig <a name="EcrPublicRepositoryConfig" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.Initializer"></a>

```typescript
import { ecrPublicRepository } from '@cdktn/provider-awscc'

const ecrPublicRepositoryConfig: ecrPublicRepository.EcrPublicRepositoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.repositoryCatalogData">repositoryCatalogData</a></code> | <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a></code> | The details about the repository that are publicly visible in the Amazon ECR Public Gallery. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.repositoryName">repositoryName</a></code> | <code>string</code> | The name to use for the public repository. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.repositoryPolicyText">repositoryPolicyText</a></code> | <code>string</code> | The JSON repository policy text to apply to the public repository. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `repositoryCatalogData`<sup>Optional</sup> <a name="repositoryCatalogData" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.repositoryCatalogData"></a>

```typescript
public readonly repositoryCatalogData: EcrPublicRepositoryRepositoryCatalogData;
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a>

The details about the repository that are publicly visible in the Amazon ECR Public Gallery.

For more information, see [Amazon ECR Public repository catalog data](https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-catalog-data.html) in the *Amazon ECR Public User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_public_repository#repository_catalog_data EcrPublicRepository#repository_catalog_data}

---

##### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The name to use for the public repository.

The repository name may be specified on its own (such as ``nginx-web-app``) or it can be prepended with a namespace to group the repository into a category (such as ``project-a/nginx-web-app``). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
  If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_public_repository#repository_name EcrPublicRepository#repository_name}

---

##### `repositoryPolicyText`<sup>Optional</sup> <a name="repositoryPolicyText" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.repositoryPolicyText"></a>

```typescript
public readonly repositoryPolicyText: string;
```

- *Type:* string

The JSON repository policy text to apply to the public repository.

For more information, see [Amazon ECR Public repository policies](https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-policies.html) in the *Amazon ECR Public User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_public_repository#repository_policy_text EcrPublicRepository#repository_policy_text}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | EcrPublicRepositoryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_public_repository#tags EcrPublicRepository#tags}

---

### EcrPublicRepositoryRepositoryCatalogData <a name="EcrPublicRepositoryRepositoryCatalogData" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.Initializer"></a>

```typescript
import { ecrPublicRepository } from '@cdktn/provider-awscc'

const ecrPublicRepositoryRepositoryCatalogData: ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.aboutText">aboutText</a></code> | <code>string</code> | Provide a detailed description of the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.architectures">architectures</a></code> | <code>string[]</code> | Select the system architectures that the images in your repository are compatible with. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.operatingSystems">operatingSystems</a></code> | <code>string[]</code> | Select the operating systems that the images in your repository are compatible with. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.repositoryDescription">repositoryDescription</a></code> | <code>string</code> | The description of the public repository. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.usageText">usageText</a></code> | <code>string</code> | Provide detailed information about how to use the images in the repository. |

---

##### `aboutText`<sup>Optional</sup> <a name="aboutText" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.aboutText"></a>

```typescript
public readonly aboutText: string;
```

- *Type:* string

Provide a detailed description of the repository.

Identify what is included in the repository, any licensing details, or other relevant information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_public_repository#about_text EcrPublicRepository#about_text}

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.architectures"></a>

```typescript
public readonly architectures: string[];
```

- *Type:* string[]

Select the system architectures that the images in your repository are compatible with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_public_repository#architectures EcrPublicRepository#architectures}

---

##### `operatingSystems`<sup>Optional</sup> <a name="operatingSystems" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.operatingSystems"></a>

```typescript
public readonly operatingSystems: string[];
```

- *Type:* string[]

Select the operating systems that the images in your repository are compatible with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_public_repository#operating_systems EcrPublicRepository#operating_systems}

---

##### `repositoryDescription`<sup>Optional</sup> <a name="repositoryDescription" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.repositoryDescription"></a>

```typescript
public readonly repositoryDescription: string;
```

- *Type:* string

The description of the public repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_public_repository#repository_description EcrPublicRepository#repository_description}

---

##### `usageText`<sup>Optional</sup> <a name="usageText" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.usageText"></a>

```typescript
public readonly usageText: string;
```

- *Type:* string

Provide detailed information about how to use the images in the repository.

This provides context, support information, and additional usage details for users of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_public_repository#usage_text EcrPublicRepository#usage_text}

---

### EcrPublicRepositoryTags <a name="EcrPublicRepositoryTags" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags.Initializer"></a>

```typescript
import { ecrPublicRepository } from '@cdktn/provider-awscc'

const ecrPublicRepositoryTags: ecrPublicRepository.EcrPublicRepositoryTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags.property.key">key</a></code> | <code>string</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags.property.value">value</a></code> | <code>string</code> | A ``value`` acts as a descriptor within a tag category (key). |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

One part of a key-value pair that make up a tag.

A ``key`` is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_public_repository#key EcrPublicRepository#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A ``value`` acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_public_repository#value EcrPublicRepository#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EcrPublicRepositoryRepositoryCatalogDataOutputReference <a name="EcrPublicRepositoryRepositoryCatalogDataOutputReference" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.Initializer"></a>

```typescript
import { ecrPublicRepository } from '@cdktn/provider-awscc'

new ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetAboutText">resetAboutText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetArchitectures">resetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetOperatingSystems">resetOperatingSystems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetRepositoryDescription">resetRepositoryDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetUsageText">resetUsageText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAboutText` <a name="resetAboutText" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetAboutText"></a>

```typescript
public resetAboutText(): void
```

##### `resetArchitectures` <a name="resetArchitectures" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetArchitectures"></a>

```typescript
public resetArchitectures(): void
```

##### `resetOperatingSystems` <a name="resetOperatingSystems" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetOperatingSystems"></a>

```typescript
public resetOperatingSystems(): void
```

##### `resetRepositoryDescription` <a name="resetRepositoryDescription" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetRepositoryDescription"></a>

```typescript
public resetRepositoryDescription(): void
```

##### `resetUsageText` <a name="resetUsageText" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetUsageText"></a>

```typescript
public resetUsageText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.aboutTextInput">aboutTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.architecturesInput">architecturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.operatingSystemsInput">operatingSystemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.repositoryDescriptionInput">repositoryDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.usageTextInput">usageTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.aboutText">aboutText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.architectures">architectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.operatingSystems">operatingSystems</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.repositoryDescription">repositoryDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.usageText">usageText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aboutTextInput`<sup>Optional</sup> <a name="aboutTextInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.aboutTextInput"></a>

```typescript
public readonly aboutTextInput: string;
```

- *Type:* string

---

##### `architecturesInput`<sup>Optional</sup> <a name="architecturesInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.architecturesInput"></a>

```typescript
public readonly architecturesInput: string[];
```

- *Type:* string[]

---

##### `operatingSystemsInput`<sup>Optional</sup> <a name="operatingSystemsInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.operatingSystemsInput"></a>

```typescript
public readonly operatingSystemsInput: string[];
```

- *Type:* string[]

---

##### `repositoryDescriptionInput`<sup>Optional</sup> <a name="repositoryDescriptionInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.repositoryDescriptionInput"></a>

```typescript
public readonly repositoryDescriptionInput: string;
```

- *Type:* string

---

##### `usageTextInput`<sup>Optional</sup> <a name="usageTextInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.usageTextInput"></a>

```typescript
public readonly usageTextInput: string;
```

- *Type:* string

---

##### `aboutText`<sup>Required</sup> <a name="aboutText" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.aboutText"></a>

```typescript
public readonly aboutText: string;
```

- *Type:* string

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.architectures"></a>

```typescript
public readonly architectures: string[];
```

- *Type:* string[]

---

##### `operatingSystems`<sup>Required</sup> <a name="operatingSystems" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.operatingSystems"></a>

```typescript
public readonly operatingSystems: string[];
```

- *Type:* string[]

---

##### `repositoryDescription`<sup>Required</sup> <a name="repositoryDescription" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.repositoryDescription"></a>

```typescript
public readonly repositoryDescription: string;
```

- *Type:* string

---

##### `usageText`<sup>Required</sup> <a name="usageText" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.usageText"></a>

```typescript
public readonly usageText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrPublicRepositoryRepositoryCatalogData;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a>

---


### EcrPublicRepositoryTagsList <a name="EcrPublicRepositoryTagsList" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer"></a>

```typescript
import { ecrPublicRepository } from '@cdktn/provider-awscc'

new ecrPublicRepository.EcrPublicRepositoryTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.get"></a>

```typescript
public get(index: number): EcrPublicRepositoryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrPublicRepositoryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>[]

---


### EcrPublicRepositoryTagsOutputReference <a name="EcrPublicRepositoryTagsOutputReference" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer"></a>

```typescript
import { ecrPublicRepository } from '@cdktn/provider-awscc'

new ecrPublicRepository.EcrPublicRepositoryTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrPublicRepositoryTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>

---



