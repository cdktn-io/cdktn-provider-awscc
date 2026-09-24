# `sagemakerCodeRepository` Submodule <a name="`sagemakerCodeRepository` Submodule" id="@cdktn/provider-awscc.sagemakerCodeRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerCodeRepository <a name="SagemakerCodeRepository" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository awscc_sagemaker_code_repository}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer"></a>

```typescript
import { sagemakerCodeRepository } from '@cdktn/provider-awscc'

new sagemakerCodeRepository.SagemakerCodeRepository(scope: Construct, id: string, config: SagemakerCodeRepositoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig">SagemakerCodeRepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig">SagemakerCodeRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.putGitConfig">putGitConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.resetCodeRepositoryName">resetCodeRepositoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGitConfig` <a name="putGitConfig" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.putGitConfig"></a>

```typescript
public putGitConfig(value: SagemakerCodeRepositoryGitConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.putGitConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.putTags"></a>

```typescript
public putTags(value: IResolvable | SagemakerCodeRepositoryTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags">SagemakerCodeRepositoryTags</a>[]

---

##### `resetCodeRepositoryName` <a name="resetCodeRepositoryName" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.resetCodeRepositoryName"></a>

```typescript
public resetCodeRepositoryName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerCodeRepository resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.isConstruct"></a>

```typescript
import { sagemakerCodeRepository } from '@cdktn/provider-awscc'

sagemakerCodeRepository.SagemakerCodeRepository.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.isTerraformElement"></a>

```typescript
import { sagemakerCodeRepository } from '@cdktn/provider-awscc'

sagemakerCodeRepository.SagemakerCodeRepository.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.isTerraformResource"></a>

```typescript
import { sagemakerCodeRepository } from '@cdktn/provider-awscc'

sagemakerCodeRepository.SagemakerCodeRepository.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.generateConfigForImport"></a>

```typescript
import { sagemakerCodeRepository } from '@cdktn/provider-awscc'

sagemakerCodeRepository.SagemakerCodeRepository.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerCodeRepository resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerCodeRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerCodeRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerCodeRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.codeRepositoryArn">codeRepositoryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.gitConfig">gitConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference">SagemakerCodeRepositoryGitConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList">SagemakerCodeRepositoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.codeRepositoryNameInput">codeRepositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.gitConfigInput">gitConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags">SagemakerCodeRepositoryTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.codeRepositoryName">codeRepositoryName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `codeRepositoryArn`<sup>Required</sup> <a name="codeRepositoryArn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.codeRepositoryArn"></a>

```typescript
public readonly codeRepositoryArn: string;
```

- *Type:* string

---

##### `gitConfig`<sup>Required</sup> <a name="gitConfig" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.gitConfig"></a>

```typescript
public readonly gitConfig: SagemakerCodeRepositoryGitConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference">SagemakerCodeRepositoryGitConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.tags"></a>

```typescript
public readonly tags: SagemakerCodeRepositoryTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList">SagemakerCodeRepositoryTagsList</a>

---

##### `codeRepositoryNameInput`<sup>Optional</sup> <a name="codeRepositoryNameInput" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.codeRepositoryNameInput"></a>

```typescript
public readonly codeRepositoryNameInput: string;
```

- *Type:* string

---

##### `gitConfigInput`<sup>Optional</sup> <a name="gitConfigInput" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.gitConfigInput"></a>

```typescript
public readonly gitConfigInput: IResolvable | SagemakerCodeRepositoryGitConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SagemakerCodeRepositoryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags">SagemakerCodeRepositoryTags</a>[]

---

##### `codeRepositoryName`<sup>Required</sup> <a name="codeRepositoryName" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.codeRepositoryName"></a>

```typescript
public readonly codeRepositoryName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerCodeRepositoryConfig <a name="SagemakerCodeRepositoryConfig" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.Initializer"></a>

```typescript
import { sagemakerCodeRepository } from '@cdktn/provider-awscc'

const sagemakerCodeRepositoryConfig: sagemakerCodeRepository.SagemakerCodeRepositoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.gitConfig">gitConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a></code> | Configuration details for the Git repository, including the URL where it is located and the ARN of the AWS Secrets Manager secret that contains the credentials used to access the repository. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.codeRepositoryName">codeRepositoryName</a></code> | <code>string</code> | The name of the Git repository. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags">SagemakerCodeRepositoryTags</a>[]</code> | An array of key-value pairs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `gitConfig`<sup>Required</sup> <a name="gitConfig" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.gitConfig"></a>

```typescript
public readonly gitConfig: SagemakerCodeRepositoryGitConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a>

Configuration details for the Git repository, including the URL where it is located and the ARN of the AWS Secrets Manager secret that contains the credentials used to access the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#git_config SagemakerCodeRepository#git_config}

---

##### `codeRepositoryName`<sup>Optional</sup> <a name="codeRepositoryName" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.codeRepositoryName"></a>

```typescript
public readonly codeRepositoryName: string;
```

- *Type:* string

The name of the Git repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#code_repository_name SagemakerCodeRepository#code_repository_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SagemakerCodeRepositoryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags">SagemakerCodeRepositoryTags</a>[]

An array of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#tags SagemakerCodeRepository#tags}

---

### SagemakerCodeRepositoryGitConfig <a name="SagemakerCodeRepositoryGitConfig" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.Initializer"></a>

```typescript
import { sagemakerCodeRepository } from '@cdktn/provider-awscc'

const sagemakerCodeRepositoryGitConfig: sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | The URL where the Git repository is located. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.property.branch">branch</a></code> | <code>string</code> | The default branch for the Git repository. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.property.secretArn">secretArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the credentials used to access the git repository. |

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

The URL where the Git repository is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#repository_url SagemakerCodeRepository#repository_url}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

The default branch for the Git repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#branch SagemakerCodeRepository#branch}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the credentials used to access the git repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#secret_arn SagemakerCodeRepository#secret_arn}

---

### SagemakerCodeRepositoryTags <a name="SagemakerCodeRepositoryTags" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags.Initializer"></a>

```typescript
import { sagemakerCodeRepository } from '@cdktn/provider-awscc'

const sagemakerCodeRepositoryTags: sagemakerCodeRepository.SagemakerCodeRepositoryTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#key SagemakerCodeRepository#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#value SagemakerCodeRepository#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerCodeRepositoryGitConfigOutputReference <a name="SagemakerCodeRepositoryGitConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerCodeRepository } from '@cdktn/provider-awscc'

new sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.repositoryUrlInput">repositoryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `repositoryUrlInput`<sup>Optional</sup> <a name="repositoryUrlInput" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.repositoryUrlInput"></a>

```typescript
public readonly repositoryUrlInput: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerCodeRepositoryGitConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a>

---


### SagemakerCodeRepositoryTagsList <a name="SagemakerCodeRepositoryTagsList" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.Initializer"></a>

```typescript
import { sagemakerCodeRepository } from '@cdktn/provider-awscc'

new sagemakerCodeRepository.SagemakerCodeRepositoryTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.get"></a>

```typescript
public get(index: number): SagemakerCodeRepositoryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags">SagemakerCodeRepositoryTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerCodeRepositoryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags">SagemakerCodeRepositoryTags</a>[]

---


### SagemakerCodeRepositoryTagsOutputReference <a name="SagemakerCodeRepositoryTagsOutputReference" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.Initializer"></a>

```typescript
import { sagemakerCodeRepository } from '@cdktn/provider-awscc'

new sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags">SagemakerCodeRepositoryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerCodeRepositoryTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags">SagemakerCodeRepositoryTags</a>

---



