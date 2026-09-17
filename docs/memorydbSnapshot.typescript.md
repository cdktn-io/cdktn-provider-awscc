# `memorydbSnapshot` Submodule <a name="`memorydbSnapshot` Submodule" id="@cdktn/provider-awscc.memorydbSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MemorydbSnapshot <a name="MemorydbSnapshot" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/memorydb_snapshot awscc_memorydb_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.Initializer"></a>

```typescript
import { memorydbSnapshot } from '@cdktn/provider-awscc'

new memorydbSnapshot.MemorydbSnapshot(scope: Construct, id: string, config: MemorydbSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig">MemorydbSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig">MemorydbSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.putTags"></a>

```typescript
public putTags(value: IResolvable | MemorydbSnapshotTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTags">MemorydbSnapshotTags</a>[]

---

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MemorydbSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.isConstruct"></a>

```typescript
import { memorydbSnapshot } from '@cdktn/provider-awscc'

memorydbSnapshot.MemorydbSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.isTerraformElement"></a>

```typescript
import { memorydbSnapshot } from '@cdktn/provider-awscc'

memorydbSnapshot.MemorydbSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.isTerraformResource"></a>

```typescript
import { memorydbSnapshot } from '@cdktn/provider-awscc'

memorydbSnapshot.MemorydbSnapshot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.generateConfigForImport"></a>

```typescript
import { memorydbSnapshot } from '@cdktn/provider-awscc'

memorydbSnapshot.MemorydbSnapshot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MemorydbSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MemorydbSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MemorydbSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/memorydb_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MemorydbSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.clusterConfiguration">clusterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference">MemorydbSnapshotClusterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.dataTiering">dataTiering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList">MemorydbSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.snapshotNameInput">snapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTags">MemorydbSnapshotTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.snapshotName">snapshotName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `clusterConfiguration`<sup>Required</sup> <a name="clusterConfiguration" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.clusterConfiguration"></a>

```typescript
public readonly clusterConfiguration: MemorydbSnapshotClusterConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference">MemorydbSnapshotClusterConfigurationOutputReference</a>

---

##### `dataTiering`<sup>Required</sup> <a name="dataTiering" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.dataTiering"></a>

```typescript
public readonly dataTiering: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.tags"></a>

```typescript
public readonly tags: MemorydbSnapshotTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList">MemorydbSnapshotTagsList</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.snapshotNameInput"></a>

```typescript
public readonly snapshotNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | MemorydbSnapshotTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTags">MemorydbSnapshotTags</a>[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MemorydbSnapshotClusterConfiguration <a name="MemorydbSnapshotClusterConfiguration" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfiguration.Initializer"></a>

```typescript
import { memorydbSnapshot } from '@cdktn/provider-awscc'

const memorydbSnapshotClusterConfiguration: memorydbSnapshot.MemorydbSnapshotClusterConfiguration = { ... }
```


### MemorydbSnapshotConfig <a name="MemorydbSnapshotConfig" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.Initializer"></a>

```typescript
import { memorydbSnapshot } from '@cdktn/provider-awscc'

const memorydbSnapshotConfig: memorydbSnapshot.MemorydbSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.clusterName">clusterName</a></code> | <code>string</code> | The name of the cluster from which the snapshot was taken. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.snapshotName">snapshotName</a></code> | <code>string</code> | The name of the snapshot. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The ID of the KMS key used to encrypt the snapshot. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTags">MemorydbSnapshotTags</a>[]</code> | A list of tags to be added to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The name of the cluster from which the snapshot was taken.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/memorydb_snapshot#cluster_name MemorydbSnapshot#cluster_name}

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

The name of the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/memorydb_snapshot#snapshot_name MemorydbSnapshot#snapshot_name}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The ID of the KMS key used to encrypt the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/memorydb_snapshot#kms_key_id MemorydbSnapshot#kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | MemorydbSnapshotTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTags">MemorydbSnapshotTags</a>[]

A list of tags to be added to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/memorydb_snapshot#tags MemorydbSnapshot#tags}

---

### MemorydbSnapshotTags <a name="MemorydbSnapshotTags" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTags.Initializer"></a>

```typescript
import { memorydbSnapshot } from '@cdktn/provider-awscc'

const memorydbSnapshotTags: memorydbSnapshot.MemorydbSnapshotTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/memorydb_snapshot#key MemorydbSnapshot#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/memorydb_snapshot#value MemorydbSnapshot#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MemorydbSnapshotClusterConfigurationOutputReference <a name="MemorydbSnapshotClusterConfigurationOutputReference" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.Initializer"></a>

```typescript
import { memorydbSnapshot } from '@cdktn/provider-awscc'

new memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.numShards">numShards</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.parameterGroupName">parameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.snapshotWindow">snapshotWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.subnetGroupName">subnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfiguration">MemorydbSnapshotClusterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `numShards`<sup>Required</sup> <a name="numShards" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.numShards"></a>

```typescript
public readonly numShards: number;
```

- *Type:* number

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.parameterGroupName"></a>

```typescript
public readonly parameterGroupName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="snapshotRetentionLimit" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.snapshotRetentionLimit"></a>

```typescript
public readonly snapshotRetentionLimit: number;
```

- *Type:* number

---

##### `snapshotWindow`<sup>Required</sup> <a name="snapshotWindow" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.snapshotWindow"></a>

```typescript
public readonly snapshotWindow: string;
```

- *Type:* string

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MemorydbSnapshotClusterConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotClusterConfiguration">MemorydbSnapshotClusterConfiguration</a>

---


### MemorydbSnapshotTagsList <a name="MemorydbSnapshotTagsList" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.Initializer"></a>

```typescript
import { memorydbSnapshot } from '@cdktn/provider-awscc'

new memorydbSnapshot.MemorydbSnapshotTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.get"></a>

```typescript
public get(index: number): MemorydbSnapshotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTags">MemorydbSnapshotTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MemorydbSnapshotTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTags">MemorydbSnapshotTags</a>[]

---


### MemorydbSnapshotTagsOutputReference <a name="MemorydbSnapshotTagsOutputReference" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.Initializer"></a>

```typescript
import { memorydbSnapshot } from '@cdktn/provider-awscc'

new memorydbSnapshot.MemorydbSnapshotTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTags">MemorydbSnapshotTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MemorydbSnapshotTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbSnapshot.MemorydbSnapshotTags">MemorydbSnapshotTags</a>

---



