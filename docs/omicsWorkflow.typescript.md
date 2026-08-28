# `omicsWorkflow` Submodule <a name="`omicsWorkflow` Submodule" id="@cdktn/provider-awscc.omicsWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsWorkflow <a name="OmicsWorkflow" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow awscc_omics_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer"></a>

```typescript
import { omicsWorkflow } from '@cdktn/provider-awscc'

new omicsWorkflow.OmicsWorkflow(scope: Construct, id: string, config?: OmicsWorkflowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig">OmicsWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig">OmicsWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.putParameterTemplate">putParameterTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetAccelerators">resetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetDefinitionUri">resetDefinitionUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetMain">resetMain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetParameterTemplate">resetParameterTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetStorageCapacity">resetStorageCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParameterTemplate` <a name="putParameterTemplate" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.putParameterTemplate"></a>

```typescript
public putParameterTemplate(value: IResolvable | {[ key: string ]: OmicsWorkflowParameterTemplate}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.putParameterTemplate.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate">OmicsWorkflowParameterTemplate</a>}

---

##### `resetAccelerators` <a name="resetAccelerators" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetAccelerators"></a>

```typescript
public resetAccelerators(): void
```

##### `resetDefinitionUri` <a name="resetDefinitionUri" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetDefinitionUri"></a>

```typescript
public resetDefinitionUri(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEngine` <a name="resetEngine" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetEngine"></a>

```typescript
public resetEngine(): void
```

##### `resetMain` <a name="resetMain" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetMain"></a>

```typescript
public resetMain(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParameterTemplate` <a name="resetParameterTemplate" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetParameterTemplate"></a>

```typescript
public resetParameterTemplate(): void
```

##### `resetStorageCapacity` <a name="resetStorageCapacity" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetStorageCapacity"></a>

```typescript
public resetStorageCapacity(): void
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetStorageType"></a>

```typescript
public resetStorageType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OmicsWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.isConstruct"></a>

```typescript
import { omicsWorkflow } from '@cdktn/provider-awscc'

omicsWorkflow.OmicsWorkflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.isTerraformElement"></a>

```typescript
import { omicsWorkflow } from '@cdktn/provider-awscc'

omicsWorkflow.OmicsWorkflow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.isTerraformResource"></a>

```typescript
import { omicsWorkflow } from '@cdktn/provider-awscc'

omicsWorkflow.OmicsWorkflow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.generateConfigForImport"></a>

```typescript
import { omicsWorkflow } from '@cdktn/provider-awscc'

omicsWorkflow.OmicsWorkflow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OmicsWorkflow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OmicsWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OmicsWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OmicsWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.parameterTemplate">parameterTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap">OmicsWorkflowParameterTemplateMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.workflowId">workflowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.acceleratorsInput">acceleratorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.definitionUriInput">definitionUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.mainInput">mainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.parameterTemplateInput">parameterTemplateInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate">OmicsWorkflowParameterTemplate</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.storageCapacityInput">storageCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.accelerators">accelerators</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.definitionUri">definitionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.main">main</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.storageCapacity">storageCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parameterTemplate`<sup>Required</sup> <a name="parameterTemplate" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.parameterTemplate"></a>

```typescript
public readonly parameterTemplate: OmicsWorkflowParameterTemplateMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap">OmicsWorkflowParameterTemplateMap</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.workflowId"></a>

```typescript
public readonly workflowId: string;
```

- *Type:* string

---

##### `acceleratorsInput`<sup>Optional</sup> <a name="acceleratorsInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.acceleratorsInput"></a>

```typescript
public readonly acceleratorsInput: string;
```

- *Type:* string

---

##### `definitionUriInput`<sup>Optional</sup> <a name="definitionUriInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.definitionUriInput"></a>

```typescript
public readonly definitionUriInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `mainInput`<sup>Optional</sup> <a name="mainInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.mainInput"></a>

```typescript
public readonly mainInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parameterTemplateInput`<sup>Optional</sup> <a name="parameterTemplateInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.parameterTemplateInput"></a>

```typescript
public readonly parameterTemplateInput: IResolvable | {[ key: string ]: OmicsWorkflowParameterTemplate};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate">OmicsWorkflowParameterTemplate</a>}

---

##### `storageCapacityInput`<sup>Optional</sup> <a name="storageCapacityInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.storageCapacityInput"></a>

```typescript
public readonly storageCapacityInput: number;
```

- *Type:* number

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.accelerators"></a>

```typescript
public readonly accelerators: string;
```

- *Type:* string

---

##### `definitionUri`<sup>Required</sup> <a name="definitionUri" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.definitionUri"></a>

```typescript
public readonly definitionUri: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `main`<sup>Required</sup> <a name="main" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.main"></a>

```typescript
public readonly main: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storageCapacity`<sup>Required</sup> <a name="storageCapacity" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.storageCapacity"></a>

```typescript
public readonly storageCapacity: number;
```

- *Type:* number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsWorkflowConfig <a name="OmicsWorkflowConfig" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.Initializer"></a>

```typescript
import { omicsWorkflow } from '@cdktn/provider-awscc'

const omicsWorkflowConfig: omicsWorkflow.OmicsWorkflowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.accelerators">accelerators</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#accelerators OmicsWorkflow#accelerators}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.definitionUri">definitionUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#definition_uri OmicsWorkflow#definition_uri}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#description OmicsWorkflow#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#engine OmicsWorkflow#engine}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.main">main</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#main OmicsWorkflow#main}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#name OmicsWorkflow#name}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.parameterTemplate">parameterTemplate</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate">OmicsWorkflowParameterTemplate</a>}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#parameter_template OmicsWorkflow#parameter_template}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.storageCapacity">storageCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#storage_capacity OmicsWorkflow#storage_capacity}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.storageType">storageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#storage_type OmicsWorkflow#storage_type}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A map of resource tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.accelerators"></a>

```typescript
public readonly accelerators: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#accelerators OmicsWorkflow#accelerators}.

---

##### `definitionUri`<sup>Optional</sup> <a name="definitionUri" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.definitionUri"></a>

```typescript
public readonly definitionUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#definition_uri OmicsWorkflow#definition_uri}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#description OmicsWorkflow#description}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#engine OmicsWorkflow#engine}.

---

##### `main`<sup>Optional</sup> <a name="main" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.main"></a>

```typescript
public readonly main: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#main OmicsWorkflow#main}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#name OmicsWorkflow#name}.

---

##### `parameterTemplate`<sup>Optional</sup> <a name="parameterTemplate" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.parameterTemplate"></a>

```typescript
public readonly parameterTemplate: IResolvable | {[ key: string ]: OmicsWorkflowParameterTemplate};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate">OmicsWorkflowParameterTemplate</a>}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#parameter_template OmicsWorkflow#parameter_template}.

---

##### `storageCapacity`<sup>Optional</sup> <a name="storageCapacity" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.storageCapacity"></a>

```typescript
public readonly storageCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#storage_capacity OmicsWorkflow#storage_capacity}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#storage_type OmicsWorkflow#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of resource tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#tags OmicsWorkflow#tags}

---

### OmicsWorkflowParameterTemplate <a name="OmicsWorkflowParameterTemplate" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate.Initializer"></a>

```typescript
import { omicsWorkflow } from '@cdktn/provider-awscc'

const omicsWorkflowParameterTemplate: omicsWorkflow.OmicsWorkflowParameterTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#description OmicsWorkflow#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate.property.optional">optional</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#optional OmicsWorkflow#optional}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#description OmicsWorkflow#description}.

---

##### `optional`<sup>Optional</sup> <a name="optional" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate.property.optional"></a>

```typescript
public readonly optional: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_workflow#optional OmicsWorkflow#optional}.

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsWorkflowParameterTemplateMap <a name="OmicsWorkflowParameterTemplateMap" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.Initializer"></a>

```typescript
import { omicsWorkflow } from '@cdktn/provider-awscc'

new omicsWorkflow.OmicsWorkflowParameterTemplateMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.get"></a>

```typescript
public get(key: string): OmicsWorkflowParameterTemplateOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate">OmicsWorkflowParameterTemplate</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: OmicsWorkflowParameterTemplate};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate">OmicsWorkflowParameterTemplate</a>}

---


### OmicsWorkflowParameterTemplateOutputReference <a name="OmicsWorkflowParameterTemplateOutputReference" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.Initializer"></a>

```typescript
import { omicsWorkflow } from '@cdktn/provider-awscc'

new omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.resetOptional">resetOptional</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetOptional` <a name="resetOptional" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.resetOptional"></a>

```typescript
public resetOptional(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.optionalInput">optionalInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.optional">optional</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate">OmicsWorkflowParameterTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `optionalInput`<sup>Optional</sup> <a name="optionalInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.optionalInput"></a>

```typescript
public readonly optionalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `optional`<sup>Required</sup> <a name="optional" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.optional"></a>

```typescript
public readonly optional: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OmicsWorkflowParameterTemplate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate">OmicsWorkflowParameterTemplate</a>

---



