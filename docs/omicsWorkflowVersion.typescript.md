# `omicsWorkflowVersion` Submodule <a name="`omicsWorkflowVersion` Submodule" id="@cdktn/provider-awscc.omicsWorkflowVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsWorkflowVersion <a name="OmicsWorkflowVersion" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version awscc_omics_workflow_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer"></a>

```typescript
import { omicsWorkflowVersion } from '@cdktn/provider-awscc'

new omicsWorkflowVersion.OmicsWorkflowVersion(scope: Construct, id: string, config: OmicsWorkflowVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig">OmicsWorkflowVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig">OmicsWorkflowVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.putParameterTemplate">putParameterTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetAccelerators">resetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetDefinitionUri">resetDefinitionUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetMain">resetMain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetParameterTemplate">resetParameterTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetStorageCapacity">resetStorageCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetWorkflowBucketOwnerId">resetWorkflowBucketOwnerId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParameterTemplate` <a name="putParameterTemplate" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.putParameterTemplate"></a>

```typescript
public putParameterTemplate(value: IResolvable | {[ key: string ]: OmicsWorkflowVersionParameterTemplate}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.putParameterTemplate.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>}

---

##### `resetAccelerators` <a name="resetAccelerators" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetAccelerators"></a>

```typescript
public resetAccelerators(): void
```

##### `resetDefinitionUri` <a name="resetDefinitionUri" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetDefinitionUri"></a>

```typescript
public resetDefinitionUri(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEngine` <a name="resetEngine" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetEngine"></a>

```typescript
public resetEngine(): void
```

##### `resetMain` <a name="resetMain" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetMain"></a>

```typescript
public resetMain(): void
```

##### `resetParameterTemplate` <a name="resetParameterTemplate" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetParameterTemplate"></a>

```typescript
public resetParameterTemplate(): void
```

##### `resetStorageCapacity` <a name="resetStorageCapacity" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetStorageCapacity"></a>

```typescript
public resetStorageCapacity(): void
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetStorageType"></a>

```typescript
public resetStorageType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWorkflowBucketOwnerId` <a name="resetWorkflowBucketOwnerId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetWorkflowBucketOwnerId"></a>

```typescript
public resetWorkflowBucketOwnerId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OmicsWorkflowVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isConstruct"></a>

```typescript
import { omicsWorkflowVersion } from '@cdktn/provider-awscc'

omicsWorkflowVersion.OmicsWorkflowVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformElement"></a>

```typescript
import { omicsWorkflowVersion } from '@cdktn/provider-awscc'

omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformResource"></a>

```typescript
import { omicsWorkflowVersion } from '@cdktn/provider-awscc'

omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport"></a>

```typescript
import { omicsWorkflowVersion } from '@cdktn/provider-awscc'

omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OmicsWorkflowVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OmicsWorkflowVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OmicsWorkflowVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OmicsWorkflowVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.parameterTemplate">parameterTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap">OmicsWorkflowVersionParameterTemplateMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.acceleratorsInput">acceleratorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.definitionUriInput">definitionUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.mainInput">mainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.parameterTemplateInput">parameterTemplateInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageCapacityInput">storageCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.versionNameInput">versionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowBucketOwnerIdInput">workflowBucketOwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowIdInput">workflowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.accelerators">accelerators</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.definitionUri">definitionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.main">main</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageCapacity">storageCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.versionName">versionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowBucketOwnerId">workflowBucketOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowId">workflowId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parameterTemplate`<sup>Required</sup> <a name="parameterTemplate" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.parameterTemplate"></a>

```typescript
public readonly parameterTemplate: OmicsWorkflowVersionParameterTemplateMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap">OmicsWorkflowVersionParameterTemplateMap</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `acceleratorsInput`<sup>Optional</sup> <a name="acceleratorsInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.acceleratorsInput"></a>

```typescript
public readonly acceleratorsInput: string;
```

- *Type:* string

---

##### `definitionUriInput`<sup>Optional</sup> <a name="definitionUriInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.definitionUriInput"></a>

```typescript
public readonly definitionUriInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `mainInput`<sup>Optional</sup> <a name="mainInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.mainInput"></a>

```typescript
public readonly mainInput: string;
```

- *Type:* string

---

##### `parameterTemplateInput`<sup>Optional</sup> <a name="parameterTemplateInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.parameterTemplateInput"></a>

```typescript
public readonly parameterTemplateInput: IResolvable | {[ key: string ]: OmicsWorkflowVersionParameterTemplate};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>}

---

##### `storageCapacityInput`<sup>Optional</sup> <a name="storageCapacityInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageCapacityInput"></a>

```typescript
public readonly storageCapacityInput: number;
```

- *Type:* number

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `versionNameInput`<sup>Optional</sup> <a name="versionNameInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.versionNameInput"></a>

```typescript
public readonly versionNameInput: string;
```

- *Type:* string

---

##### `workflowBucketOwnerIdInput`<sup>Optional</sup> <a name="workflowBucketOwnerIdInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowBucketOwnerIdInput"></a>

```typescript
public readonly workflowBucketOwnerIdInput: string;
```

- *Type:* string

---

##### `workflowIdInput`<sup>Optional</sup> <a name="workflowIdInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowIdInput"></a>

```typescript
public readonly workflowIdInput: string;
```

- *Type:* string

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.accelerators"></a>

```typescript
public readonly accelerators: string;
```

- *Type:* string

---

##### `definitionUri`<sup>Required</sup> <a name="definitionUri" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.definitionUri"></a>

```typescript
public readonly definitionUri: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `main`<sup>Required</sup> <a name="main" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.main"></a>

```typescript
public readonly main: string;
```

- *Type:* string

---

##### `storageCapacity`<sup>Required</sup> <a name="storageCapacity" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageCapacity"></a>

```typescript
public readonly storageCapacity: number;
```

- *Type:* number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

---

##### `workflowBucketOwnerId`<sup>Required</sup> <a name="workflowBucketOwnerId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowBucketOwnerId"></a>

```typescript
public readonly workflowBucketOwnerId: string;
```

- *Type:* string

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowId"></a>

```typescript
public readonly workflowId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsWorkflowVersionConfig <a name="OmicsWorkflowVersionConfig" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.Initializer"></a>

```typescript
import { omicsWorkflowVersion } from '@cdktn/provider-awscc'

const omicsWorkflowVersionConfig: omicsWorkflowVersion.OmicsWorkflowVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.versionName">versionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#version_name OmicsWorkflowVersion#version_name}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.workflowId">workflowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#workflow_id OmicsWorkflowVersion#workflow_id}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.accelerators">accelerators</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#accelerators OmicsWorkflowVersion#accelerators}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.definitionUri">definitionUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#definition_uri OmicsWorkflowVersion#definition_uri}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#description OmicsWorkflowVersion#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#engine OmicsWorkflowVersion#engine}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.main">main</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#main OmicsWorkflowVersion#main}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.parameterTemplate">parameterTemplate</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#parameter_template OmicsWorkflowVersion#parameter_template}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.storageCapacity">storageCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#storage_capacity OmicsWorkflowVersion#storage_capacity}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.storageType">storageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#storage_type OmicsWorkflowVersion#storage_type}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A map of resource tags. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.workflowBucketOwnerId">workflowBucketOwnerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#workflow_bucket_owner_id OmicsWorkflowVersion#workflow_bucket_owner_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#version_name OmicsWorkflowVersion#version_name}.

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.workflowId"></a>

```typescript
public readonly workflowId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#workflow_id OmicsWorkflowVersion#workflow_id}.

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.accelerators"></a>

```typescript
public readonly accelerators: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#accelerators OmicsWorkflowVersion#accelerators}.

---

##### `definitionUri`<sup>Optional</sup> <a name="definitionUri" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.definitionUri"></a>

```typescript
public readonly definitionUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#definition_uri OmicsWorkflowVersion#definition_uri}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#description OmicsWorkflowVersion#description}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#engine OmicsWorkflowVersion#engine}.

---

##### `main`<sup>Optional</sup> <a name="main" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.main"></a>

```typescript
public readonly main: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#main OmicsWorkflowVersion#main}.

---

##### `parameterTemplate`<sup>Optional</sup> <a name="parameterTemplate" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.parameterTemplate"></a>

```typescript
public readonly parameterTemplate: IResolvable | {[ key: string ]: OmicsWorkflowVersionParameterTemplate};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#parameter_template OmicsWorkflowVersion#parameter_template}.

---

##### `storageCapacity`<sup>Optional</sup> <a name="storageCapacity" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.storageCapacity"></a>

```typescript
public readonly storageCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#storage_capacity OmicsWorkflowVersion#storage_capacity}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#storage_type OmicsWorkflowVersion#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of resource tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#tags OmicsWorkflowVersion#tags}

---

##### `workflowBucketOwnerId`<sup>Optional</sup> <a name="workflowBucketOwnerId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.workflowBucketOwnerId"></a>

```typescript
public readonly workflowBucketOwnerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#workflow_bucket_owner_id OmicsWorkflowVersion#workflow_bucket_owner_id}.

---

### OmicsWorkflowVersionParameterTemplate <a name="OmicsWorkflowVersionParameterTemplate" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate.Initializer"></a>

```typescript
import { omicsWorkflowVersion } from '@cdktn/provider-awscc'

const omicsWorkflowVersionParameterTemplate: omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#description OmicsWorkflowVersion#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate.property.optional">optional</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#optional OmicsWorkflowVersion#optional}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#description OmicsWorkflowVersion#description}.

---

##### `optional`<sup>Optional</sup> <a name="optional" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate.property.optional"></a>

```typescript
public readonly optional: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#optional OmicsWorkflowVersion#optional}.

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsWorkflowVersionParameterTemplateMap <a name="OmicsWorkflowVersionParameterTemplateMap" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.Initializer"></a>

```typescript
import { omicsWorkflowVersion } from '@cdktn/provider-awscc'

new omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.get"></a>

```typescript
public get(key: string): OmicsWorkflowVersionParameterTemplateOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: OmicsWorkflowVersionParameterTemplate};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>}

---


### OmicsWorkflowVersionParameterTemplateOutputReference <a name="OmicsWorkflowVersionParameterTemplateOutputReference" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer"></a>

```typescript
import { omicsWorkflowVersion } from '@cdktn/provider-awscc'

new omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resetOptional">resetOptional</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetOptional` <a name="resetOptional" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resetOptional"></a>

```typescript
public resetOptional(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.optionalInput">optionalInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.optional">optional</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `optionalInput`<sup>Optional</sup> <a name="optionalInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.optionalInput"></a>

```typescript
public readonly optionalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `optional`<sup>Required</sup> <a name="optional" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.optional"></a>

```typescript
public readonly optional: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OmicsWorkflowVersionParameterTemplate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>

---



