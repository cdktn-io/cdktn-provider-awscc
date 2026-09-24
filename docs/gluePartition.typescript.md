# `gluePartition` Submodule <a name="`gluePartition` Submodule" id="@cdktn/provider-awscc.gluePartition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GluePartition <a name="GluePartition" id="@cdktn/provider-awscc.gluePartition.GluePartition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition awscc_glue_partition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

new gluePartition.GluePartition(scope: Construct, id: string, config: GluePartitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig">GluePartitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig">GluePartitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.putPartitionInput">putPartitionInput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.gluePartition.GluePartition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gluePartition.GluePartition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.gluePartition.GluePartition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gluePartition.GluePartition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.gluePartition.GluePartition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.gluePartition.GluePartition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.gluePartition.GluePartition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.gluePartition.GluePartition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.gluePartition.GluePartition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.gluePartition.GluePartition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.gluePartition.GluePartition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gluePartition.GluePartition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.gluePartition.GluePartition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.gluePartition.GluePartition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gluePartition.GluePartition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gluePartition.GluePartition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPartitionInput` <a name="putPartitionInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.putPartitionInput"></a>

```typescript
public putPartitionInput(value: GluePartitionPartitionInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartition.putPartitionInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GluePartition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.gluePartition.GluePartition.isConstruct"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

gluePartition.GluePartition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gluePartition.GluePartition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformElement"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

gluePartition.GluePartition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformResource"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

gluePartition.GluePartition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

gluePartition.GluePartition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GluePartition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GluePartition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GluePartition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GluePartition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.identifierPartitionInputValues">identifierPartitionInputValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.partitionInput">partitionInput</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference">GluePartitionPartitionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.partitionInputInput">partitionInputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identifierPartitionInputValues`<sup>Required</sup> <a name="identifierPartitionInputValues" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.identifierPartitionInputValues"></a>

```typescript
public readonly identifierPartitionInputValues: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Required</sup> <a name="partitionInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.partitionInput"></a>

```typescript
public readonly partitionInput: GluePartitionPartitionInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference">GluePartitionPartitionInputOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `partitionInputInput`<sup>Optional</sup> <a name="partitionInputInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.partitionInputInput"></a>

```typescript
public readonly partitionInputInput: IResolvable | GluePartitionPartitionInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GluePartitionConfig <a name="GluePartitionConfig" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.Initializer"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

const gluePartitionConfig: gluePartition.GluePartitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.catalogId">catalogId</a></code> | <code>string</code> | The name of the catalog database in which to create the partition. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.databaseName">databaseName</a></code> | <code>string</code> | The AWS account ID of the catalog in which the partion is to be created. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.partitionInput">partitionInput</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a></code> | The structure used to create and update a partition. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.tableName">tableName</a></code> | <code>string</code> | The name of the metadata table in which the partition is to be created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

The name of the catalog database in which to create the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#catalog_id GluePartition#catalog_id}

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The AWS account ID of the catalog in which the partion is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#database_name GluePartition#database_name}

---

##### `partitionInput`<sup>Required</sup> <a name="partitionInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.partitionInput"></a>

```typescript
public readonly partitionInput: GluePartitionPartitionInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a>

The structure used to create and update a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#partition_input GluePartition#partition_input}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The name of the metadata table in which the partition is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#table_name GluePartition#table_name}

---

### GluePartitionPartitionInput <a name="GluePartitionPartitionInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.Initializer"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

const gluePartitionPartitionInput: gluePartition.GluePartitionPartitionInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.values">values</a></code> | <code>string[]</code> | The values of the partition. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.parameters">parameters</a></code> | <code>string</code> | Key-value pairs defining partition parameters. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.storageDescriptor">storageDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a></code> | Provides information about the physical location where the partition is stored. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The values of the partition.

Although this parameter is not required by the SDK, you must specify this parameter for a valid input. The values for the keys for the new partition must be passed as an array of String objects that must be ordered in the same order as the partition keys appearing in the Amazon S3 prefix. Otherwise AWS Glue will add the values to the wrong keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#values GluePartition#values}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Key-value pairs defining partition parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#parameters GluePartition#parameters}

---

##### `storageDescriptor`<sup>Optional</sup> <a name="storageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.storageDescriptor"></a>

```typescript
public readonly storageDescriptor: GluePartitionPartitionInputStorageDescriptor;
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a>

Provides information about the physical location where the partition is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#storage_descriptor GluePartition#storage_descriptor}

---

### GluePartitionPartitionInputStorageDescriptor <a name="GluePartitionPartitionInputStorageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.Initializer"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

const gluePartitionPartitionInputStorageDescriptor: gluePartition.GluePartitionPartitionInputStorageDescriptor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.bucketColumns">bucketColumns</a></code> | <code>string[]</code> | A list of reducer grouping columns, clustering columns, and bucketing columns in the table. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.columns">columns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>[]</code> | A list of the Columns in the table. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.compressed">compressed</a></code> | <code>boolean \| cdktn.IResolvable</code> | True if the data in the table is compressed, or False if not. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.inputFormat">inputFormat</a></code> | <code>string</code> | The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.location">location</a></code> | <code>string</code> | The physical location of the table. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.numberOfBuckets">numberOfBuckets</a></code> | <code>number</code> | The number of buckets. You must specify this property if the partition contains any dimension columns. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.outputFormat">outputFormat</a></code> | <code>string</code> | The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.parameters">parameters</a></code> | <code>string</code> | The user-supplied properties in key-value form. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.schemaReference">schemaReference</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a></code> | An object that references a schema stored in the AWS Glue Schema Registry. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.serdeInfo">serdeInfo</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a></code> | The serialization/deserialization (SerDe) information. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.skewedInfo">skewedInfo</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a></code> | The information about values that appear frequently in a column (skewed values). |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.sortColumns">sortColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>[]</code> | A list specifying the sort order of each bucket in the table. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.storedAsSubDirectories">storedAsSubDirectories</a></code> | <code>boolean \| cdktn.IResolvable</code> | True if the table data is stored in subdirectories, or False if not. |

---

##### `bucketColumns`<sup>Optional</sup> <a name="bucketColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.bucketColumns"></a>

```typescript
public readonly bucketColumns: string[];
```

- *Type:* string[]

A list of reducer grouping columns, clustering columns, and bucketing columns in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#bucket_columns GluePartition#bucket_columns}

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.columns"></a>

```typescript
public readonly columns: IResolvable | GluePartitionPartitionInputStorageDescriptorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>[]

A list of the Columns in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#columns GluePartition#columns}

---

##### `compressed`<sup>Optional</sup> <a name="compressed" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.compressed"></a>

```typescript
public readonly compressed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

True if the data in the table is compressed, or False if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#compressed GluePartition#compressed}

---

##### `inputFormat`<sup>Optional</sup> <a name="inputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.inputFormat"></a>

```typescript
public readonly inputFormat: string;
```

- *Type:* string

The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#input_format GluePartition#input_format}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The physical location of the table.

By default, this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#location GluePartition#location}

---

##### `numberOfBuckets`<sup>Optional</sup> <a name="numberOfBuckets" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.numberOfBuckets"></a>

```typescript
public readonly numberOfBuckets: number;
```

- *Type:* number

The number of buckets. You must specify this property if the partition contains any dimension columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#number_of_buckets GluePartition#number_of_buckets}

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#output_format GluePartition#output_format}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

The user-supplied properties in key-value form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#parameters GluePartition#parameters}

---

##### `schemaReference`<sup>Optional</sup> <a name="schemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.schemaReference"></a>

```typescript
public readonly schemaReference: GluePartitionPartitionInputStorageDescriptorSchemaReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a>

An object that references a schema stored in the AWS Glue Schema Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_reference GluePartition#schema_reference}

---

##### `serdeInfo`<sup>Optional</sup> <a name="serdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.serdeInfo"></a>

```typescript
public readonly serdeInfo: GluePartitionPartitionInputStorageDescriptorSerdeInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a>

The serialization/deserialization (SerDe) information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#serde_info GluePartition#serde_info}

---

##### `skewedInfo`<sup>Optional</sup> <a name="skewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.skewedInfo"></a>

```typescript
public readonly skewedInfo: GluePartitionPartitionInputStorageDescriptorSkewedInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a>

The information about values that appear frequently in a column (skewed values).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_info GluePartition#skewed_info}

---

##### `sortColumns`<sup>Optional</sup> <a name="sortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.sortColumns"></a>

```typescript
public readonly sortColumns: IResolvable | GluePartitionPartitionInputStorageDescriptorSortColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>[]

A list specifying the sort order of each bucket in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#sort_columns GluePartition#sort_columns}

---

##### `storedAsSubDirectories`<sup>Optional</sup> <a name="storedAsSubDirectories" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.storedAsSubDirectories"></a>

```typescript
public readonly storedAsSubDirectories: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

True if the table data is stored in subdirectories, or False if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#stored_as_sub_directories GluePartition#stored_as_sub_directories}

---

### GluePartitionPartitionInputStorageDescriptorColumns <a name="GluePartitionPartitionInputStorageDescriptorColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.Initializer"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

const gluePartitionPartitionInputStorageDescriptorColumns: gluePartition.GluePartitionPartitionInputStorageDescriptorColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.comment">comment</a></code> | <code>string</code> | A free-form text comment. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.name">name</a></code> | <code>string</code> | The name of the Column. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.type">type</a></code> | <code>string</code> | The data type of the Column. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

A free-form text comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#comment GluePartition#comment}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#name GluePartition#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The data type of the Column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#type GluePartition#type}

---

### GluePartitionPartitionInputStorageDescriptorSchemaReference <a name="GluePartitionPartitionInputStorageDescriptorSchemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.Initializer"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

const gluePartitionPartitionInputStorageDescriptorSchemaReference: gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaId">schemaId</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a></code> | A structure that contains schema identity fields. Either this or the SchemaVersionId has to be provided. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaVersionId">schemaVersionId</a></code> | <code>string</code> | The unique ID assigned to a version of the schema. Either this or the SchemaId has to be provided. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaVersionNumber">schemaVersionNumber</a></code> | <code>number</code> | The version number of the schema. |

---

##### `schemaId`<sup>Optional</sup> <a name="schemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaId"></a>

```typescript
public readonly schemaId: GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId;
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a>

A structure that contains schema identity fields. Either this or the SchemaVersionId has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_id GluePartition#schema_id}

---

##### `schemaVersionId`<sup>Optional</sup> <a name="schemaVersionId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaVersionId"></a>

```typescript
public readonly schemaVersionId: string;
```

- *Type:* string

The unique ID assigned to a version of the schema. Either this or the SchemaId has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_version_id GluePartition#schema_version_id}

---

##### `schemaVersionNumber`<sup>Optional</sup> <a name="schemaVersionNumber" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaVersionNumber"></a>

```typescript
public readonly schemaVersionNumber: number;
```

- *Type:* number

The version number of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_version_number GluePartition#schema_version_number}

---

### GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId <a name="GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.Initializer"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

const gluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId: gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.registryName">registryName</a></code> | <code>string</code> | The name of the schema registry that contains the schema. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.schemaArn">schemaArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.schemaName">schemaName</a></code> | <code>string</code> | The name of the schema. One of SchemaArn or SchemaName has to be provided. |

---

##### `registryName`<sup>Optional</sup> <a name="registryName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

The name of the schema registry that contains the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#registry_name GluePartition#registry_name}

---

##### `schemaArn`<sup>Optional</sup> <a name="schemaArn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.schemaArn"></a>

```typescript
public readonly schemaArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_arn GluePartition#schema_arn}

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The name of the schema. One of SchemaArn or SchemaName has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_name GluePartition#schema_name}

---

### GluePartitionPartitionInputStorageDescriptorSerdeInfo <a name="GluePartitionPartitionInputStorageDescriptorSerdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.Initializer"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

const gluePartitionPartitionInputStorageDescriptorSerdeInfo: gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.name">name</a></code> | <code>string</code> | Name of the SerDe. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.parameters">parameters</a></code> | <code>string</code> | These key-value pairs define initialization parameters for the SerDe. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.serializationLibrary">serializationLibrary</a></code> | <code>string</code> | Usually the class that implements the SerDe. An example is org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#name GluePartition#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

These key-value pairs define initialization parameters for the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#parameters GluePartition#parameters}

---

##### `serializationLibrary`<sup>Optional</sup> <a name="serializationLibrary" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.serializationLibrary"></a>

```typescript
public readonly serializationLibrary: string;
```

- *Type:* string

Usually the class that implements the SerDe. An example is org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#serialization_library GluePartition#serialization_library}

---

### GluePartitionPartitionInputStorageDescriptorSkewedInfo <a name="GluePartitionPartitionInputStorageDescriptorSkewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.Initializer"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

const gluePartitionPartitionInputStorageDescriptorSkewedInfo: gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnNames">skewedColumnNames</a></code> | <code>string[]</code> | A list of values that appear so frequently as to be considered skewed. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps">skewedColumnValueLocationMaps</a></code> | <code>string</code> | A mapping of skewed values to the columns that contain them. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnValues">skewedColumnValues</a></code> | <code>string[]</code> | A list of names of columns that contain skewed values. |

---

##### `skewedColumnNames`<sup>Optional</sup> <a name="skewedColumnNames" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnNames"></a>

```typescript
public readonly skewedColumnNames: string[];
```

- *Type:* string[]

A list of values that appear so frequently as to be considered skewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_column_names GluePartition#skewed_column_names}

---

##### `skewedColumnValueLocationMaps`<sup>Optional</sup> <a name="skewedColumnValueLocationMaps" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps"></a>

```typescript
public readonly skewedColumnValueLocationMaps: string;
```

- *Type:* string

A mapping of skewed values to the columns that contain them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_column_value_location_maps GluePartition#skewed_column_value_location_maps}

---

##### `skewedColumnValues`<sup>Optional</sup> <a name="skewedColumnValues" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnValues"></a>

```typescript
public readonly skewedColumnValues: string[];
```

- *Type:* string[]

A list of names of columns that contain skewed values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_column_values GluePartition#skewed_column_values}

---

### GluePartitionPartitionInputStorageDescriptorSortColumns <a name="GluePartitionPartitionInputStorageDescriptorSortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.Initializer"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

const gluePartitionPartitionInputStorageDescriptorSortColumns: gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.property.column">column</a></code> | <code>string</code> | The name of the column. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.property.sortOrder">sortOrder</a></code> | <code>number</code> | Indicates that the column is sorted in ascending order (== 1), or in descending order (==0). |

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

The name of the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#column GluePartition#column}

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.property.sortOrder"></a>

```typescript
public readonly sortOrder: number;
```

- *Type:* number

Indicates that the column is sorted in ascending order (== 1), or in descending order (==0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#sort_order GluePartition#sort_order}

---

## Classes <a name="Classes" id="Classes"></a>

### GluePartitionPartitionInputOutputReference <a name="GluePartitionPartitionInputOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

new gluePartition.GluePartitionPartitionInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor">putStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resetStorageDescriptor">resetStorageDescriptor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStorageDescriptor` <a name="putStorageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor"></a>

```typescript
public putStorageDescriptor(value: GluePartitionPartitionInputStorageDescriptor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a>

---

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetStorageDescriptor` <a name="resetStorageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resetStorageDescriptor"></a>

```typescript
public resetStorageDescriptor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.storageDescriptor">storageDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference">GluePartitionPartitionInputStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.storageDescriptorInput">storageDescriptorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageDescriptor`<sup>Required</sup> <a name="storageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.storageDescriptor"></a>

```typescript
public readonly storageDescriptor: GluePartitionPartitionInputStorageDescriptorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference">GluePartitionPartitionInputStorageDescriptorOutputReference</a>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `storageDescriptorInput`<sup>Optional</sup> <a name="storageDescriptorInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.storageDescriptorInput"></a>

```typescript
public readonly storageDescriptorInput: IResolvable | GluePartitionPartitionInputStorageDescriptor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GluePartitionPartitionInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a>

---


### GluePartitionPartitionInputStorageDescriptorColumnsList <a name="GluePartitionPartitionInputStorageDescriptorColumnsList" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

new gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.get"></a>

```typescript
public get(index: number): GluePartitionPartitionInputStorageDescriptorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GluePartitionPartitionInputStorageDescriptorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>[]

---


### GluePartitionPartitionInputStorageDescriptorColumnsOutputReference <a name="GluePartitionPartitionInputStorageDescriptorColumnsOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

new gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GluePartitionPartitionInputStorageDescriptorColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>

---


### GluePartitionPartitionInputStorageDescriptorOutputReference <a name="GluePartitionPartitionInputStorageDescriptorOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

new gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putColumns">putColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSchemaReference">putSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSerdeInfo">putSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSkewedInfo">putSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSortColumns">putSortColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetBucketColumns">resetBucketColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetColumns">resetColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetCompressed">resetCompressed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetInputFormat">resetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetNumberOfBuckets">resetNumberOfBuckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetOutputFormat">resetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSchemaReference">resetSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSerdeInfo">resetSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSkewedInfo">resetSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSortColumns">resetSortColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetStoredAsSubDirectories">resetStoredAsSubDirectories</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumns` <a name="putColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putColumns"></a>

```typescript
public putColumns(value: IResolvable | GluePartitionPartitionInputStorageDescriptorColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>[]

---

##### `putSchemaReference` <a name="putSchemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSchemaReference"></a>

```typescript
public putSchemaReference(value: GluePartitionPartitionInputStorageDescriptorSchemaReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSchemaReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a>

---

##### `putSerdeInfo` <a name="putSerdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSerdeInfo"></a>

```typescript
public putSerdeInfo(value: GluePartitionPartitionInputStorageDescriptorSerdeInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSerdeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a>

---

##### `putSkewedInfo` <a name="putSkewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSkewedInfo"></a>

```typescript
public putSkewedInfo(value: GluePartitionPartitionInputStorageDescriptorSkewedInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSkewedInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a>

---

##### `putSortColumns` <a name="putSortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSortColumns"></a>

```typescript
public putSortColumns(value: IResolvable | GluePartitionPartitionInputStorageDescriptorSortColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSortColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>[]

---

##### `resetBucketColumns` <a name="resetBucketColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetBucketColumns"></a>

```typescript
public resetBucketColumns(): void
```

##### `resetColumns` <a name="resetColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetColumns"></a>

```typescript
public resetColumns(): void
```

##### `resetCompressed` <a name="resetCompressed" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetCompressed"></a>

```typescript
public resetCompressed(): void
```

##### `resetInputFormat` <a name="resetInputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetInputFormat"></a>

```typescript
public resetInputFormat(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetNumberOfBuckets` <a name="resetNumberOfBuckets" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetNumberOfBuckets"></a>

```typescript
public resetNumberOfBuckets(): void
```

##### `resetOutputFormat` <a name="resetOutputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetOutputFormat"></a>

```typescript
public resetOutputFormat(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetSchemaReference` <a name="resetSchemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSchemaReference"></a>

```typescript
public resetSchemaReference(): void
```

##### `resetSerdeInfo` <a name="resetSerdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSerdeInfo"></a>

```typescript
public resetSerdeInfo(): void
```

##### `resetSkewedInfo` <a name="resetSkewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSkewedInfo"></a>

```typescript
public resetSkewedInfo(): void
```

##### `resetSortColumns` <a name="resetSortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSortColumns"></a>

```typescript
public resetSortColumns(): void
```

##### `resetStoredAsSubDirectories` <a name="resetStoredAsSubDirectories" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetStoredAsSubDirectories"></a>

```typescript
public resetStoredAsSubDirectories(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList">GluePartitionPartitionInputStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReference">schemaReference</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference">GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfo">serdeInfo</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference">GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfo">skewedInfo</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference">GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumns">sortColumns</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList">GluePartitionPartitionInputStorageDescriptorSortColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumnsInput">bucketColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.columnsInput">columnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.compressedInput">compressedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormatInput">inputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBucketsInput">numberOfBucketsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormatInput">outputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReferenceInput">schemaReferenceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfoInput">serdeInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfoInput">skewedInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumnsInput">sortColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput">storedAsSubDirectoriesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumns">bucketColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.compressed">compressed</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormat">inputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBuckets">numberOfBuckets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormat">outputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectories">storedAsSubDirectories</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.columns"></a>

```typescript
public readonly columns: GluePartitionPartitionInputStorageDescriptorColumnsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList">GluePartitionPartitionInputStorageDescriptorColumnsList</a>

---

##### `schemaReference`<sup>Required</sup> <a name="schemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReference"></a>

```typescript
public readonly schemaReference: GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference">GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference</a>

---

##### `serdeInfo`<sup>Required</sup> <a name="serdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfo"></a>

```typescript
public readonly serdeInfo: GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference">GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference</a>

---

##### `skewedInfo`<sup>Required</sup> <a name="skewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfo"></a>

```typescript
public readonly skewedInfo: GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference">GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference</a>

---

##### `sortColumns`<sup>Required</sup> <a name="sortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumns"></a>

```typescript
public readonly sortColumns: GluePartitionPartitionInputStorageDescriptorSortColumnsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList">GluePartitionPartitionInputStorageDescriptorSortColumnsList</a>

---

##### `bucketColumnsInput`<sup>Optional</sup> <a name="bucketColumnsInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumnsInput"></a>

```typescript
public readonly bucketColumnsInput: string[];
```

- *Type:* string[]

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.columnsInput"></a>

```typescript
public readonly columnsInput: IResolvable | GluePartitionPartitionInputStorageDescriptorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>[]

---

##### `compressedInput`<sup>Optional</sup> <a name="compressedInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.compressedInput"></a>

```typescript
public readonly compressedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inputFormatInput`<sup>Optional</sup> <a name="inputFormatInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormatInput"></a>

```typescript
public readonly inputFormatInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `numberOfBucketsInput`<sup>Optional</sup> <a name="numberOfBucketsInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBucketsInput"></a>

```typescript
public readonly numberOfBucketsInput: number;
```

- *Type:* number

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormatInput"></a>

```typescript
public readonly outputFormatInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `schemaReferenceInput`<sup>Optional</sup> <a name="schemaReferenceInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReferenceInput"></a>

```typescript
public readonly schemaReferenceInput: IResolvable | GluePartitionPartitionInputStorageDescriptorSchemaReference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a>

---

##### `serdeInfoInput`<sup>Optional</sup> <a name="serdeInfoInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfoInput"></a>

```typescript
public readonly serdeInfoInput: IResolvable | GluePartitionPartitionInputStorageDescriptorSerdeInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a>

---

##### `skewedInfoInput`<sup>Optional</sup> <a name="skewedInfoInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfoInput"></a>

```typescript
public readonly skewedInfoInput: IResolvable | GluePartitionPartitionInputStorageDescriptorSkewedInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a>

---

##### `sortColumnsInput`<sup>Optional</sup> <a name="sortColumnsInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumnsInput"></a>

```typescript
public readonly sortColumnsInput: IResolvable | GluePartitionPartitionInputStorageDescriptorSortColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>[]

---

##### `storedAsSubDirectoriesInput`<sup>Optional</sup> <a name="storedAsSubDirectoriesInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput"></a>

```typescript
public readonly storedAsSubDirectoriesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bucketColumns`<sup>Required</sup> <a name="bucketColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumns"></a>

```typescript
public readonly bucketColumns: string[];
```

- *Type:* string[]

---

##### `compressed`<sup>Required</sup> <a name="compressed" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.compressed"></a>

```typescript
public readonly compressed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inputFormat`<sup>Required</sup> <a name="inputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormat"></a>

```typescript
public readonly inputFormat: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `numberOfBuckets`<sup>Required</sup> <a name="numberOfBuckets" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBuckets"></a>

```typescript
public readonly numberOfBuckets: number;
```

- *Type:* number

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `storedAsSubDirectories`<sup>Required</sup> <a name="storedAsSubDirectories" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectories"></a>

```typescript
public readonly storedAsSubDirectories: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GluePartitionPartitionInputStorageDescriptor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a>

---


### GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

new gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId">putSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaId">resetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId">resetSchemaVersionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionNumber">resetSchemaVersionNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchemaId` <a name="putSchemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId"></a>

```typescript
public putSchemaId(value: GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a>

---

##### `resetSchemaId` <a name="resetSchemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaId"></a>

```typescript
public resetSchemaId(): void
```

##### `resetSchemaVersionId` <a name="resetSchemaVersionId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId"></a>

```typescript
public resetSchemaVersionId(): void
```

##### `resetSchemaVersionNumber` <a name="resetSchemaVersionNumber" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionNumber"></a>

```typescript
public resetSchemaVersionNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaId">schemaId</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput">schemaIdInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput">schemaVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput">schemaVersionNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId">schemaVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber">schemaVersionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaId"></a>

```typescript
public readonly schemaId: GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference</a>

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput"></a>

```typescript
public readonly schemaIdInput: IResolvable | GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a>

---

##### `schemaVersionIdInput`<sup>Optional</sup> <a name="schemaVersionIdInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput"></a>

```typescript
public readonly schemaVersionIdInput: string;
```

- *Type:* string

---

##### `schemaVersionNumberInput`<sup>Optional</sup> <a name="schemaVersionNumberInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput"></a>

```typescript
public readonly schemaVersionNumberInput: number;
```

- *Type:* number

---

##### `schemaVersionId`<sup>Required</sup> <a name="schemaVersionId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId"></a>

```typescript
public readonly schemaVersionId: string;
```

- *Type:* string

---

##### `schemaVersionNumber`<sup>Required</sup> <a name="schemaVersionNumber" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber"></a>

```typescript
public readonly schemaVersionNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GluePartitionPartitionInputStorageDescriptorSchemaReference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a>

---


### GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

new gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName">resetRegistryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn">resetSchemaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegistryName` <a name="resetRegistryName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName"></a>

```typescript
public resetRegistryName(): void
```

##### `resetSchemaArn` <a name="resetSchemaArn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn"></a>

```typescript
public resetSchemaArn(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput">registryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput">schemaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName">registryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn">schemaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `registryNameInput`<sup>Optional</sup> <a name="registryNameInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput"></a>

```typescript
public readonly registryNameInput: string;
```

- *Type:* string

---

##### `schemaArnInput`<sup>Optional</sup> <a name="schemaArnInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput"></a>

```typescript
public readonly schemaArnInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

---

##### `schemaArn`<sup>Required</sup> <a name="schemaArn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn"></a>

```typescript
public readonly schemaArn: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a>

---


### GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

new gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetSerializationLibrary">resetSerializationLibrary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetSerializationLibrary` <a name="resetSerializationLibrary" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetSerializationLibrary"></a>

```typescript
public resetSerializationLibrary(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibraryInput">serializationLibraryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary">serializationLibrary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `serializationLibraryInput`<sup>Optional</sup> <a name="serializationLibraryInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibraryInput"></a>

```typescript
public readonly serializationLibraryInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `serializationLibrary`<sup>Required</sup> <a name="serializationLibrary" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary"></a>

```typescript
public readonly serializationLibrary: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GluePartitionPartitionInputStorageDescriptorSerdeInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a>

---


### GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

new gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames">resetSkewedColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps">resetSkewedColumnValueLocationMaps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues">resetSkewedColumnValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSkewedColumnNames` <a name="resetSkewedColumnNames" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames"></a>

```typescript
public resetSkewedColumnNames(): void
```

##### `resetSkewedColumnValueLocationMaps` <a name="resetSkewedColumnValueLocationMaps" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps"></a>

```typescript
public resetSkewedColumnValueLocationMaps(): void
```

##### `resetSkewedColumnValues` <a name="resetSkewedColumnValues" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues"></a>

```typescript
public resetSkewedColumnValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput">skewedColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput">skewedColumnValueLocationMapsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput">skewedColumnValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames">skewedColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps">skewedColumnValueLocationMaps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues">skewedColumnValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `skewedColumnNamesInput`<sup>Optional</sup> <a name="skewedColumnNamesInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput"></a>

```typescript
public readonly skewedColumnNamesInput: string[];
```

- *Type:* string[]

---

##### `skewedColumnValueLocationMapsInput`<sup>Optional</sup> <a name="skewedColumnValueLocationMapsInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput"></a>

```typescript
public readonly skewedColumnValueLocationMapsInput: string;
```

- *Type:* string

---

##### `skewedColumnValuesInput`<sup>Optional</sup> <a name="skewedColumnValuesInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput"></a>

```typescript
public readonly skewedColumnValuesInput: string[];
```

- *Type:* string[]

---

##### `skewedColumnNames`<sup>Required</sup> <a name="skewedColumnNames" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames"></a>

```typescript
public readonly skewedColumnNames: string[];
```

- *Type:* string[]

---

##### `skewedColumnValueLocationMaps`<sup>Required</sup> <a name="skewedColumnValueLocationMaps" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps"></a>

```typescript
public readonly skewedColumnValueLocationMaps: string;
```

- *Type:* string

---

##### `skewedColumnValues`<sup>Required</sup> <a name="skewedColumnValues" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues"></a>

```typescript
public readonly skewedColumnValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GluePartitionPartitionInputStorageDescriptorSkewedInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a>

---


### GluePartitionPartitionInputStorageDescriptorSortColumnsList <a name="GluePartitionPartitionInputStorageDescriptorSortColumnsList" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

new gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.get"></a>

```typescript
public get(index: number): GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GluePartitionPartitionInputStorageDescriptorSortColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>[]

---


### GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer"></a>

```typescript
import { gluePartition } from '@cdktn/provider-awscc'

new gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resetColumn">resetColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resetSortOrder">resetSortOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumn` <a name="resetColumn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resetColumn"></a>

```typescript
public resetColumn(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.columnInput">columnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrderInput">sortOrderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.column">column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrder">sortOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: number;
```

- *Type:* number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrder"></a>

```typescript
public readonly sortOrder: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GluePartitionPartitionInputStorageDescriptorSortColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>

---



