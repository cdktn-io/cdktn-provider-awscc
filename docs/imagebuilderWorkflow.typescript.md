# `imagebuilderWorkflow` Submodule <a name="`imagebuilderWorkflow` Submodule" id="@cdktn/provider-awscc.imagebuilderWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderWorkflow <a name="ImagebuilderWorkflow" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_workflow awscc_imagebuilder_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.Initializer"></a>

```typescript
import { imagebuilderWorkflow } from '@cdktn/provider-awscc'

new imagebuilderWorkflow.ImagebuilderWorkflow(scope: Construct, id: string, config: ImagebuilderWorkflowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig">ImagebuilderWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig">ImagebuilderWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.resetChangeDescription">resetChangeDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.resetUri">resetUri</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetChangeDescription` <a name="resetChangeDescription" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.resetChangeDescription"></a>

```typescript
public resetChangeDescription(): void
```

##### `resetData` <a name="resetData" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.resetData"></a>

```typescript
public resetData(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUri` <a name="resetUri" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.resetUri"></a>

```typescript
public resetUri(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ImagebuilderWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.isConstruct"></a>

```typescript
import { imagebuilderWorkflow } from '@cdktn/provider-awscc'

imagebuilderWorkflow.ImagebuilderWorkflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.isTerraformElement"></a>

```typescript
import { imagebuilderWorkflow } from '@cdktn/provider-awscc'

imagebuilderWorkflow.ImagebuilderWorkflow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.isTerraformResource"></a>

```typescript
import { imagebuilderWorkflow } from '@cdktn/provider-awscc'

imagebuilderWorkflow.ImagebuilderWorkflow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.generateConfigForImport"></a>

```typescript
import { imagebuilderWorkflow } from '@cdktn/provider-awscc'

imagebuilderWorkflow.ImagebuilderWorkflow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ImagebuilderWorkflow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ImagebuilderWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ImagebuilderWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.latestVersion">latestVersion</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference">ImagebuilderWorkflowLatestVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.changeDescriptionInput">changeDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.changeDescription">changeDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.latestVersion"></a>

```typescript
public readonly latestVersion: ImagebuilderWorkflowLatestVersionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference">ImagebuilderWorkflowLatestVersionOutputReference</a>

---

##### `changeDescriptionInput`<sup>Optional</sup> <a name="changeDescriptionInput" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.changeDescriptionInput"></a>

```typescript
public readonly changeDescriptionInput: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `changeDescription`<sup>Required</sup> <a name="changeDescription" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.changeDescription"></a>

```typescript
public readonly changeDescription: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderWorkflowConfig <a name="ImagebuilderWorkflowConfig" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.Initializer"></a>

```typescript
import { imagebuilderWorkflow } from '@cdktn/provider-awscc'

const imagebuilderWorkflowConfig: imagebuilderWorkflow.ImagebuilderWorkflowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.name">name</a></code> | <code>string</code> | The name of the workflow. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.type">type</a></code> | <code>string</code> | The type of the workflow denotes whether the workflow is used to build, test, or distribute. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.version">version</a></code> | <code>string</code> | The version of the workflow. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.changeDescription">changeDescription</a></code> | <code>string</code> | The change description of the workflow. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.data">data</a></code> | <code>string</code> | The data of the workflow. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.description">description</a></code> | <code>string</code> | The description of the workflow. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The KMS key identifier used to encrypt the workflow. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | The tags associated with the workflow. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.uri">uri</a></code> | <code>string</code> | The uri of the workflow. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_workflow#name ImagebuilderWorkflow#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the workflow denotes whether the workflow is used to build, test, or distribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_workflow#type ImagebuilderWorkflow#type}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_workflow#version ImagebuilderWorkflow#version}

---

##### `changeDescription`<sup>Optional</sup> <a name="changeDescription" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.changeDescription"></a>

```typescript
public readonly changeDescription: string;
```

- *Type:* string

The change description of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_workflow#change_description ImagebuilderWorkflow#change_description}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

The data of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_workflow#data ImagebuilderWorkflow#data}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_workflow#description ImagebuilderWorkflow#description}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The KMS key identifier used to encrypt the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_workflow#kms_key_id ImagebuilderWorkflow#kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The tags associated with the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_workflow#tags ImagebuilderWorkflow#tags}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowConfig.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The uri of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_workflow#uri ImagebuilderWorkflow#uri}

---

### ImagebuilderWorkflowLatestVersion <a name="ImagebuilderWorkflowLatestVersion" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersion.Initializer"></a>

```typescript
import { imagebuilderWorkflow } from '@cdktn/provider-awscc'

const imagebuilderWorkflowLatestVersion: imagebuilderWorkflow.ImagebuilderWorkflowLatestVersion = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderWorkflowLatestVersionOutputReference <a name="ImagebuilderWorkflowLatestVersionOutputReference" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.Initializer"></a>

```typescript
import { imagebuilderWorkflow } from '@cdktn/provider-awscc'

new imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.property.major">major</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.property.minor">minor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.property.patch">patch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersion">ImagebuilderWorkflowLatestVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `major`<sup>Required</sup> <a name="major" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.property.major"></a>

```typescript
public readonly major: string;
```

- *Type:* string

---

##### `minor`<sup>Required</sup> <a name="minor" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.property.minor"></a>

```typescript
public readonly minor: string;
```

- *Type:* string

---

##### `patch`<sup>Required</sup> <a name="patch" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.property.patch"></a>

```typescript
public readonly patch: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderWorkflowLatestVersion;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderWorkflow.ImagebuilderWorkflowLatestVersion">ImagebuilderWorkflowLatestVersion</a>

---



