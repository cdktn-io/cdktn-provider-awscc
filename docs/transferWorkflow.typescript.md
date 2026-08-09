# `transferWorkflow` Submodule <a name="`transferWorkflow` Submodule" id="@cdktn/provider-awscc.transferWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferWorkflow <a name="TransferWorkflow" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow awscc_transfer_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflow(scope: Construct, id: string, config: TransferWorkflowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig">TransferWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig">TransferWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.putOnExceptionSteps">putOnExceptionSteps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.putSteps">putSteps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.resetOnExceptionSteps">resetOnExceptionSteps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOnExceptionSteps` <a name="putOnExceptionSteps" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.putOnExceptionSteps"></a>

```typescript
public putOnExceptionSteps(value: IResolvable | TransferWorkflowOnExceptionSteps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.putOnExceptionSteps.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>[]

---

##### `putSteps` <a name="putSteps" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.putSteps"></a>

```typescript
public putSteps(value: IResolvable | TransferWorkflowSteps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.putSteps.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.putTags"></a>

```typescript
public putTags(value: IResolvable | TransferWorkflowTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags">TransferWorkflowTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetOnExceptionSteps` <a name="resetOnExceptionSteps" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.resetOnExceptionSteps"></a>

```typescript
public resetOnExceptionSteps(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TransferWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.isConstruct"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

transferWorkflow.TransferWorkflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.isTerraformElement"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

transferWorkflow.TransferWorkflow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.isTerraformResource"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

transferWorkflow.TransferWorkflow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.generateConfigForImport"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

transferWorkflow.TransferWorkflow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TransferWorkflow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransferWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransferWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TransferWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.onExceptionSteps">onExceptionSteps</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList">TransferWorkflowOnExceptionStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.steps">steps</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList">TransferWorkflowStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList">TransferWorkflowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.workflowId">workflowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.onExceptionStepsInput">onExceptionStepsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.stepsInput">stepsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags">TransferWorkflowTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `onExceptionSteps`<sup>Required</sup> <a name="onExceptionSteps" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.onExceptionSteps"></a>

```typescript
public readonly onExceptionSteps: TransferWorkflowOnExceptionStepsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList">TransferWorkflowOnExceptionStepsList</a>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.steps"></a>

```typescript
public readonly steps: TransferWorkflowStepsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList">TransferWorkflowStepsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.tags"></a>

```typescript
public readonly tags: TransferWorkflowTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList">TransferWorkflowTagsList</a>

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.workflowId"></a>

```typescript
public readonly workflowId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `onExceptionStepsInput`<sup>Optional</sup> <a name="onExceptionStepsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.onExceptionStepsInput"></a>

```typescript
public readonly onExceptionStepsInput: IResolvable | TransferWorkflowOnExceptionSteps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>[]

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.stepsInput"></a>

```typescript
public readonly stepsInput: IResolvable | TransferWorkflowSteps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | TransferWorkflowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags">TransferWorkflowTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferWorkflowConfig <a name="TransferWorkflowConfig" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowConfig: transferWorkflow.TransferWorkflowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.steps">steps</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>[]</code> | Specifies the details for the steps that are in the specified workflow. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.description">description</a></code> | <code>string</code> | A textual description for the workflow. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.onExceptionSteps">onExceptionSteps</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>[]</code> | Specifies the steps (actions) to take if any errors are encountered during execution of the workflow. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags">TransferWorkflowTags</a>[]</code> | Key-value pairs that can be used to group and search for workflows. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.steps"></a>

```typescript
public readonly steps: IResolvable | TransferWorkflowSteps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>[]

Specifies the details for the steps that are in the specified workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#steps TransferWorkflow#steps}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A textual description for the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#description TransferWorkflow#description}

---

##### `onExceptionSteps`<sup>Optional</sup> <a name="onExceptionSteps" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.onExceptionSteps"></a>

```typescript
public readonly onExceptionSteps: IResolvable | TransferWorkflowOnExceptionSteps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>[]

Specifies the steps (actions) to take if any errors are encountered during execution of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#on_exception_steps TransferWorkflow#on_exception_steps}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | TransferWorkflowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags">TransferWorkflowTags</a>[]

Key-value pairs that can be used to group and search for workflows.

Tags are metadata attached to workflows for any purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}

---

### TransferWorkflowOnExceptionSteps <a name="TransferWorkflowOnExceptionSteps" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowOnExceptionSteps: transferWorkflow.TransferWorkflowOnExceptionSteps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.copyStepDetails">copyStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a></code> | Details for a step that performs a file copy. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.customStepDetails">customStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a></code> | Details for a step that invokes a lambda function. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.decryptStepDetails">decryptStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a></code> | Details for a step that performs a file decryption. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.deleteStepDetails">deleteStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a></code> | Details for a step that deletes the file. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.tagStepDetails">tagStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a></code> | Details for a step that creates one or more tags. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#type TransferWorkflow#type}. |

---

##### `copyStepDetails`<sup>Optional</sup> <a name="copyStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.copyStepDetails"></a>

```typescript
public readonly copyStepDetails: TransferWorkflowOnExceptionStepsCopyStepDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a>

Details for a step that performs a file copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#copy_step_details TransferWorkflow#copy_step_details}

---

##### `customStepDetails`<sup>Optional</sup> <a name="customStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.customStepDetails"></a>

```typescript
public readonly customStepDetails: TransferWorkflowOnExceptionStepsCustomStepDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a>

Details for a step that invokes a lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#custom_step_details TransferWorkflow#custom_step_details}

---

##### `decryptStepDetails`<sup>Optional</sup> <a name="decryptStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.decryptStepDetails"></a>

```typescript
public readonly decryptStepDetails: TransferWorkflowOnExceptionStepsDecryptStepDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a>

Details for a step that performs a file decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#decrypt_step_details TransferWorkflow#decrypt_step_details}

---

##### `deleteStepDetails`<sup>Optional</sup> <a name="deleteStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.deleteStepDetails"></a>

```typescript
public readonly deleteStepDetails: TransferWorkflowOnExceptionStepsDeleteStepDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a>

Details for a step that deletes the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#delete_step_details TransferWorkflow#delete_step_details}

---

##### `tagStepDetails`<sup>Optional</sup> <a name="tagStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.tagStepDetails"></a>

```typescript
public readonly tagStepDetails: TransferWorkflowOnExceptionStepsTagStepDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a>

Details for a step that creates one or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#tag_step_details TransferWorkflow#tag_step_details}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#type TransferWorkflow#type}.

---

### TransferWorkflowOnExceptionStepsCopyStepDetails <a name="TransferWorkflowOnExceptionStepsCopyStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowOnExceptionStepsCopyStepDetails: transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a></code> | Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.name">name</a></code> | <code>string</code> | The name of the step, used as an identifier. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.overwriteExisting">overwriteExisting</a></code> | <code>string</code> | A flag that indicates whether or not to overwrite an existing file of the same name. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | Specifies which file to use as input to the workflow step. |

---

##### `destinationFileLocation`<sup>Optional</sup> <a name="destinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.destinationFileLocation"></a>

```typescript
public readonly destinationFileLocation: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a>

Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the step, used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#name TransferWorkflow#name}

---

##### `overwriteExisting`<sup>Optional</sup> <a name="overwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.overwriteExisting"></a>

```typescript
public readonly overwriteExisting: string;
```

- *Type:* string

A flag that indicates whether or not to overwrite an existing file of the same name.

The default is FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

Specifies which file to use as input to the workflow step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}

---

### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation: transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | Specifies the details for a S3 file. |

---

##### `s3FileLocation`<sup>Optional</sup> <a name="s3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.property.s3FileLocation"></a>

```typescript
public readonly s3FileLocation: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

Specifies the details for a S3 file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation: transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.bucket">bucket</a></code> | <code>string</code> | Specifies the S3 bucket that contains the file. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.key">key</a></code> | <code>string</code> | The name assigned to the file when it was created in S3. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Specifies the S3 bucket that contains the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The name assigned to the file when it was created in S3.

You use the object key to retrieve the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#key TransferWorkflow#key}

---

### TransferWorkflowOnExceptionStepsCustomStepDetails <a name="TransferWorkflowOnExceptionStepsCustomStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowOnExceptionStepsCustomStepDetails: transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.name">name</a></code> | <code>string</code> | The name of the step, used as an identifier. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | Specifies which file to use as input to the workflow step. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.target">target</a></code> | <code>string</code> | The ARN for the lambda function that is being called. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | Timeout, in seconds, for the step. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the step, used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#name TransferWorkflow#name}

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

Specifies which file to use as input to the workflow step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

The ARN for the lambda function that is being called.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#target TransferWorkflow#target}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

Timeout, in seconds, for the step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}

---

### TransferWorkflowOnExceptionStepsDecryptStepDetails <a name="TransferWorkflowOnExceptionStepsDecryptStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowOnExceptionStepsDecryptStepDetails: transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a></code> | Specifies the location for the file being decrypted. Only applicable for the Decrypt type of workflow steps. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.name">name</a></code> | <code>string</code> | The name of the step, used as an identifier. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.overwriteExisting">overwriteExisting</a></code> | <code>string</code> | A flag that indicates whether or not to overwrite an existing file of the same name. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | Specifies which file to use as input to the workflow step. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.type">type</a></code> | <code>string</code> | Specifies which encryption method to use. |

---

##### `destinationFileLocation`<sup>Optional</sup> <a name="destinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.destinationFileLocation"></a>

```typescript
public readonly destinationFileLocation: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a>

Specifies the location for the file being decrypted. Only applicable for the Decrypt type of workflow steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the step, used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#name TransferWorkflow#name}

---

##### `overwriteExisting`<sup>Optional</sup> <a name="overwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.overwriteExisting"></a>

```typescript
public readonly overwriteExisting: string;
```

- *Type:* string

A flag that indicates whether or not to overwrite an existing file of the same name.

The default is FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

Specifies which file to use as input to the workflow step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Specifies which encryption method to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#type TransferWorkflow#type}

---

### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation: transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.property.efsFileLocation">efsFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | Specifies the details for an EFS file. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | Specifies the details for a S3 file. |

---

##### `efsFileLocation`<sup>Optional</sup> <a name="efsFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.property.efsFileLocation"></a>

```typescript
public readonly efsFileLocation: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

Specifies the details for an EFS file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}

---

##### `s3FileLocation`<sup>Optional</sup> <a name="s3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.property.s3FileLocation"></a>

```typescript
public readonly s3FileLocation: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

Specifies the details for a S3 file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation: transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | Specifies the EFS filesystem that contains the file. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.path">path</a></code> | <code>string</code> | The name assigned to the file when it was created in EFS. |

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

Specifies the EFS filesystem that contains the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The name assigned to the file when it was created in EFS.

You use the object path to retrieve the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#path TransferWorkflow#path}

---

### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation: transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.bucket">bucket</a></code> | <code>string</code> | Specifies the S3 bucket that contains the file. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.key">key</a></code> | <code>string</code> | The name assigned to the file when it was created in S3. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Specifies the S3 bucket that contains the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The name assigned to the file when it was created in S3.

You use the object key to retrieve the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#key TransferWorkflow#key}

---

### TransferWorkflowOnExceptionStepsDeleteStepDetails <a name="TransferWorkflowOnExceptionStepsDeleteStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowOnExceptionStepsDeleteStepDetails: transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.property.name">name</a></code> | <code>string</code> | The name of the step, used as an identifier. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | Specifies which file to use as input to the workflow step. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the step, used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#name TransferWorkflow#name}

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

Specifies which file to use as input to the workflow step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}

---

### TransferWorkflowOnExceptionStepsTagStepDetails <a name="TransferWorkflowOnExceptionStepsTagStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowOnExceptionStepsTagStepDetails: transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.name">name</a></code> | <code>string</code> | The name of the step, used as an identifier. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | Specifies which file to use as input to the workflow step. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>[]</code> | Array that contains from 1 to 10 key/value pairs. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the step, used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#name TransferWorkflow#name}

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

Specifies which file to use as input to the workflow step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.tags"></a>

```typescript
public readonly tags: IResolvable | TransferWorkflowOnExceptionStepsTagStepDetailsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>[]

Array that contains from 1 to 10 key/value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}

---

### TransferWorkflowOnExceptionStepsTagStepDetailsTags <a name="TransferWorkflowOnExceptionStepsTagStepDetailsTags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowOnExceptionStepsTagStepDetailsTags: transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.property.key">key</a></code> | <code>string</code> | The name assigned to the tag that you create. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.property.value">value</a></code> | <code>string</code> | The value that corresponds to the key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The name assigned to the tag that you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#key TransferWorkflow#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value that corresponds to the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#value TransferWorkflow#value}

---

### TransferWorkflowSteps <a name="TransferWorkflowSteps" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowSteps: transferWorkflow.TransferWorkflowSteps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.copyStepDetails">copyStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a></code> | Details for a step that performs a file copy. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.customStepDetails">customStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a></code> | Details for a step that invokes a lambda function. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.decryptStepDetails">decryptStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a></code> | Details for a step that performs a file decryption. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.deleteStepDetails">deleteStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a></code> | Details for a step that deletes the file. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.tagStepDetails">tagStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a></code> | Details for a step that creates one or more tags. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#type TransferWorkflow#type}. |

---

##### `copyStepDetails`<sup>Optional</sup> <a name="copyStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.copyStepDetails"></a>

```typescript
public readonly copyStepDetails: TransferWorkflowStepsCopyStepDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a>

Details for a step that performs a file copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#copy_step_details TransferWorkflow#copy_step_details}

---

##### `customStepDetails`<sup>Optional</sup> <a name="customStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.customStepDetails"></a>

```typescript
public readonly customStepDetails: TransferWorkflowStepsCustomStepDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a>

Details for a step that invokes a lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#custom_step_details TransferWorkflow#custom_step_details}

---

##### `decryptStepDetails`<sup>Optional</sup> <a name="decryptStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.decryptStepDetails"></a>

```typescript
public readonly decryptStepDetails: TransferWorkflowStepsDecryptStepDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a>

Details for a step that performs a file decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#decrypt_step_details TransferWorkflow#decrypt_step_details}

---

##### `deleteStepDetails`<sup>Optional</sup> <a name="deleteStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.deleteStepDetails"></a>

```typescript
public readonly deleteStepDetails: TransferWorkflowStepsDeleteStepDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a>

Details for a step that deletes the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#delete_step_details TransferWorkflow#delete_step_details}

---

##### `tagStepDetails`<sup>Optional</sup> <a name="tagStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.tagStepDetails"></a>

```typescript
public readonly tagStepDetails: TransferWorkflowStepsTagStepDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a>

Details for a step that creates one or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#tag_step_details TransferWorkflow#tag_step_details}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#type TransferWorkflow#type}.

---

### TransferWorkflowStepsCopyStepDetails <a name="TransferWorkflowStepsCopyStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowStepsCopyStepDetails: transferWorkflow.TransferWorkflowStepsCopyStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a></code> | Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.name">name</a></code> | <code>string</code> | The name of the step, used as an identifier. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.overwriteExisting">overwriteExisting</a></code> | <code>string</code> | A flag that indicates whether or not to overwrite an existing file of the same name. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | Specifies which file to use as input to the workflow step. |

---

##### `destinationFileLocation`<sup>Optional</sup> <a name="destinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.destinationFileLocation"></a>

```typescript
public readonly destinationFileLocation: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a>

Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the step, used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#name TransferWorkflow#name}

---

##### `overwriteExisting`<sup>Optional</sup> <a name="overwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.overwriteExisting"></a>

```typescript
public readonly overwriteExisting: string;
```

- *Type:* string

A flag that indicates whether or not to overwrite an existing file of the same name.

The default is FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

Specifies which file to use as input to the workflow step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}

---

### TransferWorkflowStepsCopyStepDetailsDestinationFileLocation <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowStepsCopyStepDetailsDestinationFileLocation: transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | Specifies the details for a S3 file. |

---

##### `s3FileLocation`<sup>Optional</sup> <a name="s3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.property.s3FileLocation"></a>

```typescript
public readonly s3FileLocation: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

Specifies the details for a S3 file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation: transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.bucket">bucket</a></code> | <code>string</code> | Specifies the S3 bucket that contains the file. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.key">key</a></code> | <code>string</code> | The name assigned to the file when it was created in S3. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Specifies the S3 bucket that contains the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The name assigned to the file when it was created in S3.

You use the object key to retrieve the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#key TransferWorkflow#key}

---

### TransferWorkflowStepsCustomStepDetails <a name="TransferWorkflowStepsCustomStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowStepsCustomStepDetails: transferWorkflow.TransferWorkflowStepsCustomStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.name">name</a></code> | <code>string</code> | The name of the step, used as an identifier. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | Specifies which file to use as input to the workflow step. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.target">target</a></code> | <code>string</code> | The ARN for the lambda function that is being called. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | Timeout, in seconds, for the step. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the step, used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#name TransferWorkflow#name}

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

Specifies which file to use as input to the workflow step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

The ARN for the lambda function that is being called.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#target TransferWorkflow#target}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

Timeout, in seconds, for the step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}

---

### TransferWorkflowStepsDecryptStepDetails <a name="TransferWorkflowStepsDecryptStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowStepsDecryptStepDetails: transferWorkflow.TransferWorkflowStepsDecryptStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a></code> | Specifies the location for the file being decrypted. Only applicable for the Decrypt type of workflow steps. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.name">name</a></code> | <code>string</code> | The name of the step, used as an identifier. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.overwriteExisting">overwriteExisting</a></code> | <code>string</code> | A flag that indicates whether or not to overwrite an existing file of the same name. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | Specifies which file to use as input to the workflow step. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.type">type</a></code> | <code>string</code> | Specifies which encryption method to use. |

---

##### `destinationFileLocation`<sup>Optional</sup> <a name="destinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.destinationFileLocation"></a>

```typescript
public readonly destinationFileLocation: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a>

Specifies the location for the file being decrypted. Only applicable for the Decrypt type of workflow steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the step, used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#name TransferWorkflow#name}

---

##### `overwriteExisting`<sup>Optional</sup> <a name="overwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.overwriteExisting"></a>

```typescript
public readonly overwriteExisting: string;
```

- *Type:* string

A flag that indicates whether or not to overwrite an existing file of the same name.

The default is FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

Specifies which file to use as input to the workflow step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Specifies which encryption method to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#type TransferWorkflow#type}

---

### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowStepsDecryptStepDetailsDestinationFileLocation: transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.property.efsFileLocation">efsFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | Specifies the details for an EFS file. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | Specifies the details for a S3 file. |

---

##### `efsFileLocation`<sup>Optional</sup> <a name="efsFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.property.efsFileLocation"></a>

```typescript
public readonly efsFileLocation: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

Specifies the details for an EFS file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}

---

##### `s3FileLocation`<sup>Optional</sup> <a name="s3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.property.s3FileLocation"></a>

```typescript
public readonly s3FileLocation: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

Specifies the details for a S3 file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation: transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | Specifies the EFS filesystem that contains the file. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.path">path</a></code> | <code>string</code> | The name assigned to the file when it was created in EFS. |

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

Specifies the EFS filesystem that contains the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The name assigned to the file when it was created in EFS.

You use the object path to retrieve the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#path TransferWorkflow#path}

---

### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation: transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.bucket">bucket</a></code> | <code>string</code> | Specifies the S3 bucket that contains the file. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.key">key</a></code> | <code>string</code> | The name assigned to the file when it was created in S3. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Specifies the S3 bucket that contains the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The name assigned to the file when it was created in S3.

You use the object key to retrieve the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#key TransferWorkflow#key}

---

### TransferWorkflowStepsDeleteStepDetails <a name="TransferWorkflowStepsDeleteStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowStepsDeleteStepDetails: transferWorkflow.TransferWorkflowStepsDeleteStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.property.name">name</a></code> | <code>string</code> | The name of the step, used as an identifier. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | Specifies which file to use as input to the workflow step. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the step, used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#name TransferWorkflow#name}

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

Specifies which file to use as input to the workflow step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}

---

### TransferWorkflowStepsTagStepDetails <a name="TransferWorkflowStepsTagStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowStepsTagStepDetails: transferWorkflow.TransferWorkflowStepsTagStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.name">name</a></code> | <code>string</code> | The name of the step, used as an identifier. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | Specifies which file to use as input to the workflow step. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>[]</code> | Array that contains from 1 to 10 key/value pairs. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the step, used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#name TransferWorkflow#name}

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

Specifies which file to use as input to the workflow step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.tags"></a>

```typescript
public readonly tags: IResolvable | TransferWorkflowStepsTagStepDetailsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>[]

Array that contains from 1 to 10 key/value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}

---

### TransferWorkflowStepsTagStepDetailsTags <a name="TransferWorkflowStepsTagStepDetailsTags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowStepsTagStepDetailsTags: transferWorkflow.TransferWorkflowStepsTagStepDetailsTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.property.key">key</a></code> | <code>string</code> | The name assigned to the tag that you create. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.property.value">value</a></code> | <code>string</code> | The value that corresponds to the key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The name assigned to the tag that you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#key TransferWorkflow#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value that corresponds to the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#value TransferWorkflow#value}

---

### TransferWorkflowTags <a name="TransferWorkflowTags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

const transferWorkflowTags: transferWorkflow.TransferWorkflowTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags.property.key">key</a></code> | <code>string</code> | The name assigned to the tag that you create. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags.property.value">value</a></code> | <code>string</code> | Contains one or more values that you assigned to the key name you create. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The name assigned to the tag that you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#key TransferWorkflow#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Contains one or more values that you assigned to the key name you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#value TransferWorkflow#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation">putS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation">resetS3FileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3FileLocation` <a name="putS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation"></a>

```typescript
public putS3FileLocation(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `resetS3FileLocation` <a name="resetS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation"></a>

```typescript
public resetS3FileLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput">s3FileLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3FileLocation`<sup>Required</sup> <a name="s3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation"></a>

```typescript
public readonly s3FileLocation: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference</a>

---

##### `s3FileLocationInput`<sup>Optional</sup> <a name="s3FileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput"></a>

```typescript
public readonly s3FileLocationInput: IResolvable | TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a>

---


### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---


### TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.putDestinationFileLocation">putDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetDestinationFileLocation">resetDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetOverwriteExisting">resetOverwriteExisting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationFileLocation` <a name="putDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.putDestinationFileLocation"></a>

```typescript
public putDestinationFileLocation(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.putDestinationFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a>

---

##### `resetDestinationFileLocation` <a name="resetDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetDestinationFileLocation"></a>

```typescript
public resetDestinationFileLocation(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOverwriteExisting` <a name="resetOverwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetOverwriteExisting"></a>

```typescript
public resetOverwriteExisting(): void
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetSourceFileLocation"></a>

```typescript
public resetSourceFileLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.destinationFileLocationInput">destinationFileLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.overwriteExistingInput">overwriteExistingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.overwriteExisting">overwriteExisting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationFileLocation`<sup>Required</sup> <a name="destinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.destinationFileLocation"></a>

```typescript
public readonly destinationFileLocation: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference</a>

---

##### `destinationFileLocationInput`<sup>Optional</sup> <a name="destinationFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.destinationFileLocationInput"></a>

```typescript
public readonly destinationFileLocationInput: IResolvable | TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `overwriteExistingInput`<sup>Optional</sup> <a name="overwriteExistingInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.overwriteExistingInput"></a>

```typescript
public readonly overwriteExistingInput: string;
```

- *Type:* string

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```typescript
public readonly sourceFileLocationInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `overwriteExisting`<sup>Required</sup> <a name="overwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.overwriteExisting"></a>

```typescript
public readonly overwriteExisting: string;
```

- *Type:* string

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowOnExceptionStepsCopyStepDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a>

---


### TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetSourceFileLocation"></a>

```typescript
public resetSourceFileLocation(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```typescript
public readonly sourceFileLocationInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowOnExceptionStepsCustomStepDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a>

---


### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId"></a>

```typescript
public resetFileSystemId(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput"></a>

```typescript
public readonly fileSystemIdInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---


### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation">putEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation">putS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation">resetEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation">resetS3FileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEfsFileLocation` <a name="putEfsFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation"></a>

```typescript
public putEfsFileLocation(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `putS3FileLocation` <a name="putS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation"></a>

```typescript
public putS3FileLocation(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `resetEfsFileLocation` <a name="resetEfsFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation"></a>

```typescript
public resetEfsFileLocation(): void
```

##### `resetS3FileLocation` <a name="resetS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation"></a>

```typescript
public resetS3FileLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation">efsFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput">efsFileLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput">s3FileLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `efsFileLocation`<sup>Required</sup> <a name="efsFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation"></a>

```typescript
public readonly efsFileLocation: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a>

---

##### `s3FileLocation`<sup>Required</sup> <a name="s3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation"></a>

```typescript
public readonly s3FileLocation: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference</a>

---

##### `efsFileLocationInput`<sup>Optional</sup> <a name="efsFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput"></a>

```typescript
public readonly efsFileLocationInput: IResolvable | TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `s3FileLocationInput`<sup>Optional</sup> <a name="s3FileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput"></a>

```typescript
public readonly s3FileLocationInput: IResolvable | TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a>

---


### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---


### TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.putDestinationFileLocation">putDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetDestinationFileLocation">resetDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetOverwriteExisting">resetOverwriteExisting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationFileLocation` <a name="putDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.putDestinationFileLocation"></a>

```typescript
public putDestinationFileLocation(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.putDestinationFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a>

---

##### `resetDestinationFileLocation` <a name="resetDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetDestinationFileLocation"></a>

```typescript
public resetDestinationFileLocation(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOverwriteExisting` <a name="resetOverwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetOverwriteExisting"></a>

```typescript
public resetOverwriteExisting(): void
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetSourceFileLocation"></a>

```typescript
public resetSourceFileLocation(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.destinationFileLocationInput">destinationFileLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.overwriteExistingInput">overwriteExistingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.overwriteExisting">overwriteExisting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationFileLocation`<sup>Required</sup> <a name="destinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.destinationFileLocation"></a>

```typescript
public readonly destinationFileLocation: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference</a>

---

##### `destinationFileLocationInput`<sup>Optional</sup> <a name="destinationFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.destinationFileLocationInput"></a>

```typescript
public readonly destinationFileLocationInput: IResolvable | TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `overwriteExistingInput`<sup>Optional</sup> <a name="overwriteExistingInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.overwriteExistingInput"></a>

```typescript
public readonly overwriteExistingInput: string;
```

- *Type:* string

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```typescript
public readonly sourceFileLocationInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `overwriteExisting`<sup>Required</sup> <a name="overwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.overwriteExisting"></a>

```typescript
public readonly overwriteExisting: string;
```

- *Type:* string

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowOnExceptionStepsDecryptStepDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a>

---


### TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resetSourceFileLocation"></a>

```typescript
public resetSourceFileLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```typescript
public readonly sourceFileLocationInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowOnExceptionStepsDeleteStepDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a>

---


### TransferWorkflowOnExceptionStepsList <a name="TransferWorkflowOnExceptionStepsList" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowOnExceptionStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.get"></a>

```typescript
public get(index: number): TransferWorkflowOnExceptionStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowOnExceptionSteps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>[]

---


### TransferWorkflowOnExceptionStepsOutputReference <a name="TransferWorkflowOnExceptionStepsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCopyStepDetails">putCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCustomStepDetails">putCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDecryptStepDetails">putDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDeleteStepDetails">putDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putTagStepDetails">putTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetCopyStepDetails">resetCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetCustomStepDetails">resetCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetDecryptStepDetails">resetDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetDeleteStepDetails">resetDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetTagStepDetails">resetTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCopyStepDetails` <a name="putCopyStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCopyStepDetails"></a>

```typescript
public putCopyStepDetails(value: TransferWorkflowOnExceptionStepsCopyStepDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCopyStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a>

---

##### `putCustomStepDetails` <a name="putCustomStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCustomStepDetails"></a>

```typescript
public putCustomStepDetails(value: TransferWorkflowOnExceptionStepsCustomStepDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCustomStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a>

---

##### `putDecryptStepDetails` <a name="putDecryptStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDecryptStepDetails"></a>

```typescript
public putDecryptStepDetails(value: TransferWorkflowOnExceptionStepsDecryptStepDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDecryptStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a>

---

##### `putDeleteStepDetails` <a name="putDeleteStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDeleteStepDetails"></a>

```typescript
public putDeleteStepDetails(value: TransferWorkflowOnExceptionStepsDeleteStepDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDeleteStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a>

---

##### `putTagStepDetails` <a name="putTagStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putTagStepDetails"></a>

```typescript
public putTagStepDetails(value: TransferWorkflowOnExceptionStepsTagStepDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putTagStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a>

---

##### `resetCopyStepDetails` <a name="resetCopyStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetCopyStepDetails"></a>

```typescript
public resetCopyStepDetails(): void
```

##### `resetCustomStepDetails` <a name="resetCustomStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetCustomStepDetails"></a>

```typescript
public resetCustomStepDetails(): void
```

##### `resetDecryptStepDetails` <a name="resetDecryptStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetDecryptStepDetails"></a>

```typescript
public resetDecryptStepDetails(): void
```

##### `resetDeleteStepDetails` <a name="resetDeleteStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetDeleteStepDetails"></a>

```typescript
public resetDeleteStepDetails(): void
```

##### `resetTagStepDetails` <a name="resetTagStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetTagStepDetails"></a>

```typescript
public resetTagStepDetails(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.copyStepDetails">copyStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.customStepDetails">customStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference">TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.decryptStepDetails">decryptStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.deleteStepDetails">deleteStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference">TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.tagStepDetails">tagStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference">TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.copyStepDetailsInput">copyStepDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.customStepDetailsInput">customStepDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.decryptStepDetailsInput">decryptStepDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.deleteStepDetailsInput">deleteStepDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.tagStepDetailsInput">tagStepDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `copyStepDetails`<sup>Required</sup> <a name="copyStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.copyStepDetails"></a>

```typescript
public readonly copyStepDetails: TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference</a>

---

##### `customStepDetails`<sup>Required</sup> <a name="customStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.customStepDetails"></a>

```typescript
public readonly customStepDetails: TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference">TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference</a>

---

##### `decryptStepDetails`<sup>Required</sup> <a name="decryptStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.decryptStepDetails"></a>

```typescript
public readonly decryptStepDetails: TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference</a>

---

##### `deleteStepDetails`<sup>Required</sup> <a name="deleteStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.deleteStepDetails"></a>

```typescript
public readonly deleteStepDetails: TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference">TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference</a>

---

##### `tagStepDetails`<sup>Required</sup> <a name="tagStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.tagStepDetails"></a>

```typescript
public readonly tagStepDetails: TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference">TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference</a>

---

##### `copyStepDetailsInput`<sup>Optional</sup> <a name="copyStepDetailsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.copyStepDetailsInput"></a>

```typescript
public readonly copyStepDetailsInput: IResolvable | TransferWorkflowOnExceptionStepsCopyStepDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a>

---

##### `customStepDetailsInput`<sup>Optional</sup> <a name="customStepDetailsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.customStepDetailsInput"></a>

```typescript
public readonly customStepDetailsInput: IResolvable | TransferWorkflowOnExceptionStepsCustomStepDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a>

---

##### `decryptStepDetailsInput`<sup>Optional</sup> <a name="decryptStepDetailsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.decryptStepDetailsInput"></a>

```typescript
public readonly decryptStepDetailsInput: IResolvable | TransferWorkflowOnExceptionStepsDecryptStepDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a>

---

##### `deleteStepDetailsInput`<sup>Optional</sup> <a name="deleteStepDetailsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.deleteStepDetailsInput"></a>

```typescript
public readonly deleteStepDetailsInput: IResolvable | TransferWorkflowOnExceptionStepsDeleteStepDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a>

---

##### `tagStepDetailsInput`<sup>Optional</sup> <a name="tagStepDetailsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.tagStepDetailsInput"></a>

```typescript
public readonly tagStepDetailsInput: IResolvable | TransferWorkflowOnExceptionStepsTagStepDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowOnExceptionSteps;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>

---


### TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | TransferWorkflowOnExceptionStepsTagStepDetailsTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>[]

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetSourceFileLocation"></a>

```typescript
public resetSourceFileLocation(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList">TransferWorkflowOnExceptionStepsTagStepDetailsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.tags"></a>

```typescript
public readonly tags: TransferWorkflowOnExceptionStepsTagStepDetailsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList">TransferWorkflowOnExceptionStepsTagStepDetailsTagsList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```typescript
public readonly sourceFileLocationInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | TransferWorkflowOnExceptionStepsTagStepDetailsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowOnExceptionStepsTagStepDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a>

---


### TransferWorkflowOnExceptionStepsTagStepDetailsTagsList <a name="TransferWorkflowOnExceptionStepsTagStepDetailsTagsList" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.get"></a>

```typescript
public get(index: number): TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowOnExceptionStepsTagStepDetailsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>[]

---


### TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference <a name="TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowOnExceptionStepsTagStepDetailsTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>

---


### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation">putS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation">resetS3FileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3FileLocation` <a name="putS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation"></a>

```typescript
public putS3FileLocation(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `resetS3FileLocation` <a name="resetS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation"></a>

```typescript
public resetS3FileLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput">s3FileLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3FileLocation`<sup>Required</sup> <a name="s3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation"></a>

```typescript
public readonly s3FileLocation: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference</a>

---

##### `s3FileLocationInput`<sup>Optional</sup> <a name="s3FileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput"></a>

```typescript
public readonly s3FileLocationInput: IResolvable | TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowStepsCopyStepDetailsDestinationFileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a>

---


### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---


### TransferWorkflowStepsCopyStepDetailsOutputReference <a name="TransferWorkflowStepsCopyStepDetailsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.putDestinationFileLocation">putDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetDestinationFileLocation">resetDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetOverwriteExisting">resetOverwriteExisting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationFileLocation` <a name="putDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.putDestinationFileLocation"></a>

```typescript
public putDestinationFileLocation(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.putDestinationFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a>

---

##### `resetDestinationFileLocation` <a name="resetDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetDestinationFileLocation"></a>

```typescript
public resetDestinationFileLocation(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOverwriteExisting` <a name="resetOverwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetOverwriteExisting"></a>

```typescript
public resetOverwriteExisting(): void
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetSourceFileLocation"></a>

```typescript
public resetSourceFileLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.destinationFileLocationInput">destinationFileLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.overwriteExistingInput">overwriteExistingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.overwriteExisting">overwriteExisting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationFileLocation`<sup>Required</sup> <a name="destinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.destinationFileLocation"></a>

```typescript
public readonly destinationFileLocation: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference</a>

---

##### `destinationFileLocationInput`<sup>Optional</sup> <a name="destinationFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.destinationFileLocationInput"></a>

```typescript
public readonly destinationFileLocationInput: IResolvable | TransferWorkflowStepsCopyStepDetailsDestinationFileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `overwriteExistingInput`<sup>Optional</sup> <a name="overwriteExistingInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.overwriteExistingInput"></a>

```typescript
public readonly overwriteExistingInput: string;
```

- *Type:* string

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```typescript
public readonly sourceFileLocationInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `overwriteExisting`<sup>Required</sup> <a name="overwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.overwriteExisting"></a>

```typescript
public readonly overwriteExisting: string;
```

- *Type:* string

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowStepsCopyStepDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a>

---


### TransferWorkflowStepsCustomStepDetailsOutputReference <a name="TransferWorkflowStepsCustomStepDetailsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetSourceFileLocation"></a>

```typescript
public resetSourceFileLocation(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```typescript
public readonly sourceFileLocationInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowStepsCustomStepDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a>

---


### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId"></a>

```typescript
public resetFileSystemId(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput"></a>

```typescript
public readonly fileSystemIdInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---


### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation">putEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation">putS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation">resetEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation">resetS3FileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEfsFileLocation` <a name="putEfsFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation"></a>

```typescript
public putEfsFileLocation(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `putS3FileLocation` <a name="putS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation"></a>

```typescript
public putS3FileLocation(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `resetEfsFileLocation` <a name="resetEfsFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation"></a>

```typescript
public resetEfsFileLocation(): void
```

##### `resetS3FileLocation` <a name="resetS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation"></a>

```typescript
public resetS3FileLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation">efsFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput">efsFileLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput">s3FileLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `efsFileLocation`<sup>Required</sup> <a name="efsFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation"></a>

```typescript
public readonly efsFileLocation: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a>

---

##### `s3FileLocation`<sup>Required</sup> <a name="s3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation"></a>

```typescript
public readonly s3FileLocation: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference</a>

---

##### `efsFileLocationInput`<sup>Optional</sup> <a name="efsFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput"></a>

```typescript
public readonly efsFileLocationInput: IResolvable | TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `s3FileLocationInput`<sup>Optional</sup> <a name="s3FileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput"></a>

```typescript
public readonly s3FileLocationInput: IResolvable | TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a>

---


### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---


### TransferWorkflowStepsDecryptStepDetailsOutputReference <a name="TransferWorkflowStepsDecryptStepDetailsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.putDestinationFileLocation">putDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetDestinationFileLocation">resetDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetOverwriteExisting">resetOverwriteExisting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationFileLocation` <a name="putDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.putDestinationFileLocation"></a>

```typescript
public putDestinationFileLocation(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.putDestinationFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a>

---

##### `resetDestinationFileLocation` <a name="resetDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetDestinationFileLocation"></a>

```typescript
public resetDestinationFileLocation(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOverwriteExisting` <a name="resetOverwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetOverwriteExisting"></a>

```typescript
public resetOverwriteExisting(): void
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetSourceFileLocation"></a>

```typescript
public resetSourceFileLocation(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.destinationFileLocationInput">destinationFileLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.overwriteExistingInput">overwriteExistingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.overwriteExisting">overwriteExisting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationFileLocation`<sup>Required</sup> <a name="destinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.destinationFileLocation"></a>

```typescript
public readonly destinationFileLocation: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference</a>

---

##### `destinationFileLocationInput`<sup>Optional</sup> <a name="destinationFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.destinationFileLocationInput"></a>

```typescript
public readonly destinationFileLocationInput: IResolvable | TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `overwriteExistingInput`<sup>Optional</sup> <a name="overwriteExistingInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.overwriteExistingInput"></a>

```typescript
public readonly overwriteExistingInput: string;
```

- *Type:* string

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```typescript
public readonly sourceFileLocationInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `overwriteExisting`<sup>Required</sup> <a name="overwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.overwriteExisting"></a>

```typescript
public readonly overwriteExisting: string;
```

- *Type:* string

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowStepsDecryptStepDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a>

---


### TransferWorkflowStepsDeleteStepDetailsOutputReference <a name="TransferWorkflowStepsDeleteStepDetailsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resetSourceFileLocation"></a>

```typescript
public resetSourceFileLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```typescript
public readonly sourceFileLocationInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowStepsDeleteStepDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a>

---


### TransferWorkflowStepsList <a name="TransferWorkflowStepsList" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.get"></a>

```typescript
public get(index: number): TransferWorkflowStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowSteps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>[]

---


### TransferWorkflowStepsOutputReference <a name="TransferWorkflowStepsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putCopyStepDetails">putCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putCustomStepDetails">putCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putDecryptStepDetails">putDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putDeleteStepDetails">putDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putTagStepDetails">putTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetCopyStepDetails">resetCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetCustomStepDetails">resetCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetDecryptStepDetails">resetDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetDeleteStepDetails">resetDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetTagStepDetails">resetTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCopyStepDetails` <a name="putCopyStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putCopyStepDetails"></a>

```typescript
public putCopyStepDetails(value: TransferWorkflowStepsCopyStepDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putCopyStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a>

---

##### `putCustomStepDetails` <a name="putCustomStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putCustomStepDetails"></a>

```typescript
public putCustomStepDetails(value: TransferWorkflowStepsCustomStepDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putCustomStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a>

---

##### `putDecryptStepDetails` <a name="putDecryptStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putDecryptStepDetails"></a>

```typescript
public putDecryptStepDetails(value: TransferWorkflowStepsDecryptStepDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putDecryptStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a>

---

##### `putDeleteStepDetails` <a name="putDeleteStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putDeleteStepDetails"></a>

```typescript
public putDeleteStepDetails(value: TransferWorkflowStepsDeleteStepDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putDeleteStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a>

---

##### `putTagStepDetails` <a name="putTagStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putTagStepDetails"></a>

```typescript
public putTagStepDetails(value: TransferWorkflowStepsTagStepDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putTagStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a>

---

##### `resetCopyStepDetails` <a name="resetCopyStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetCopyStepDetails"></a>

```typescript
public resetCopyStepDetails(): void
```

##### `resetCustomStepDetails` <a name="resetCustomStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetCustomStepDetails"></a>

```typescript
public resetCustomStepDetails(): void
```

##### `resetDecryptStepDetails` <a name="resetDecryptStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetDecryptStepDetails"></a>

```typescript
public resetDecryptStepDetails(): void
```

##### `resetDeleteStepDetails` <a name="resetDeleteStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetDeleteStepDetails"></a>

```typescript
public resetDeleteStepDetails(): void
```

##### `resetTagStepDetails` <a name="resetTagStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetTagStepDetails"></a>

```typescript
public resetTagStepDetails(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.copyStepDetails">copyStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference">TransferWorkflowStepsCopyStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.customStepDetails">customStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference">TransferWorkflowStepsCustomStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.decryptStepDetails">decryptStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference">TransferWorkflowStepsDecryptStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.deleteStepDetails">deleteStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference">TransferWorkflowStepsDeleteStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.tagStepDetails">tagStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference">TransferWorkflowStepsTagStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.copyStepDetailsInput">copyStepDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.customStepDetailsInput">customStepDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.decryptStepDetailsInput">decryptStepDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.deleteStepDetailsInput">deleteStepDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.tagStepDetailsInput">tagStepDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `copyStepDetails`<sup>Required</sup> <a name="copyStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.copyStepDetails"></a>

```typescript
public readonly copyStepDetails: TransferWorkflowStepsCopyStepDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference">TransferWorkflowStepsCopyStepDetailsOutputReference</a>

---

##### `customStepDetails`<sup>Required</sup> <a name="customStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.customStepDetails"></a>

```typescript
public readonly customStepDetails: TransferWorkflowStepsCustomStepDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference">TransferWorkflowStepsCustomStepDetailsOutputReference</a>

---

##### `decryptStepDetails`<sup>Required</sup> <a name="decryptStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.decryptStepDetails"></a>

```typescript
public readonly decryptStepDetails: TransferWorkflowStepsDecryptStepDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference">TransferWorkflowStepsDecryptStepDetailsOutputReference</a>

---

##### `deleteStepDetails`<sup>Required</sup> <a name="deleteStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.deleteStepDetails"></a>

```typescript
public readonly deleteStepDetails: TransferWorkflowStepsDeleteStepDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference">TransferWorkflowStepsDeleteStepDetailsOutputReference</a>

---

##### `tagStepDetails`<sup>Required</sup> <a name="tagStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.tagStepDetails"></a>

```typescript
public readonly tagStepDetails: TransferWorkflowStepsTagStepDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference">TransferWorkflowStepsTagStepDetailsOutputReference</a>

---

##### `copyStepDetailsInput`<sup>Optional</sup> <a name="copyStepDetailsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.copyStepDetailsInput"></a>

```typescript
public readonly copyStepDetailsInput: IResolvable | TransferWorkflowStepsCopyStepDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a>

---

##### `customStepDetailsInput`<sup>Optional</sup> <a name="customStepDetailsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.customStepDetailsInput"></a>

```typescript
public readonly customStepDetailsInput: IResolvable | TransferWorkflowStepsCustomStepDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a>

---

##### `decryptStepDetailsInput`<sup>Optional</sup> <a name="decryptStepDetailsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.decryptStepDetailsInput"></a>

```typescript
public readonly decryptStepDetailsInput: IResolvable | TransferWorkflowStepsDecryptStepDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a>

---

##### `deleteStepDetailsInput`<sup>Optional</sup> <a name="deleteStepDetailsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.deleteStepDetailsInput"></a>

```typescript
public readonly deleteStepDetailsInput: IResolvable | TransferWorkflowStepsDeleteStepDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a>

---

##### `tagStepDetailsInput`<sup>Optional</sup> <a name="tagStepDetailsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.tagStepDetailsInput"></a>

```typescript
public readonly tagStepDetailsInput: IResolvable | TransferWorkflowStepsTagStepDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowSteps;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>

---


### TransferWorkflowStepsTagStepDetailsOutputReference <a name="TransferWorkflowStepsTagStepDetailsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | TransferWorkflowStepsTagStepDetailsTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>[]

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetSourceFileLocation"></a>

```typescript
public resetSourceFileLocation(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList">TransferWorkflowStepsTagStepDetailsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.tags"></a>

```typescript
public readonly tags: TransferWorkflowStepsTagStepDetailsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList">TransferWorkflowStepsTagStepDetailsTagsList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```typescript
public readonly sourceFileLocationInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | TransferWorkflowStepsTagStepDetailsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowStepsTagStepDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a>

---


### TransferWorkflowStepsTagStepDetailsTagsList <a name="TransferWorkflowStepsTagStepDetailsTagsList" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.get"></a>

```typescript
public get(index: number): TransferWorkflowStepsTagStepDetailsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowStepsTagStepDetailsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>[]

---


### TransferWorkflowStepsTagStepDetailsTagsOutputReference <a name="TransferWorkflowStepsTagStepDetailsTagsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowStepsTagStepDetailsTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>

---


### TransferWorkflowTagsList <a name="TransferWorkflowTagsList" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.get"></a>

```typescript
public get(index: number): TransferWorkflowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags">TransferWorkflowTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags">TransferWorkflowTags</a>[]

---


### TransferWorkflowTagsOutputReference <a name="TransferWorkflowTagsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktn/provider-awscc'

new transferWorkflow.TransferWorkflowTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags">TransferWorkflowTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags">TransferWorkflowTags</a>

---



