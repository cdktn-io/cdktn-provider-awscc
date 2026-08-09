# `workspacesinstancesVolume` Submodule <a name="`workspacesinstancesVolume` Submodule" id="@cdktn/provider-awscc.workspacesinstancesVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesinstancesVolume <a name="WorkspacesinstancesVolume" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesinstances_volume awscc_workspacesinstances_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer"></a>

```typescript
import { workspacesinstancesVolume } from '@cdktn/provider-awscc'

new workspacesinstancesVolume.WorkspacesinstancesVolume(scope: Construct, id: string, config: WorkspacesinstancesVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig">WorkspacesinstancesVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig">WorkspacesinstancesVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.putTagSpecifications">putTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetSizeInGb">resetSizeInGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetTagSpecifications">resetTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTagSpecifications` <a name="putTagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.putTagSpecifications"></a>

```typescript
public putTagSpecifications(value: IResolvable | WorkspacesinstancesVolumeTagSpecifications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.putTagSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>[]

---

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetSizeInGb` <a name="resetSizeInGb" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetSizeInGb"></a>

```typescript
public resetSizeInGb(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetTagSpecifications` <a name="resetTagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetTagSpecifications"></a>

```typescript
public resetTagSpecifications(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesinstancesVolume resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isConstruct"></a>

```typescript
import { workspacesinstancesVolume } from '@cdktn/provider-awscc'

workspacesinstancesVolume.WorkspacesinstancesVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isTerraformElement"></a>

```typescript
import { workspacesinstancesVolume } from '@cdktn/provider-awscc'

workspacesinstancesVolume.WorkspacesinstancesVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isTerraformResource"></a>

```typescript
import { workspacesinstancesVolume } from '@cdktn/provider-awscc'

workspacesinstancesVolume.WorkspacesinstancesVolume.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.generateConfigForImport"></a>

```typescript
import { workspacesinstancesVolume } from '@cdktn/provider-awscc'

workspacesinstancesVolume.WorkspacesinstancesVolume.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WorkspacesinstancesVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspacesinstancesVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspacesinstancesVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesinstances_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesinstancesVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList">WorkspacesinstancesVolumeTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.sizeInGbInput">sizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.tagSpecificationsInput">tagSpecificationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.encrypted">encrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.sizeInGb">sizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tagSpecifications`<sup>Required</sup> <a name="tagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: WorkspacesinstancesVolumeTagSpecificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList">WorkspacesinstancesVolumeTagSpecificationsList</a>

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `sizeInGbInput`<sup>Optional</sup> <a name="sizeInGbInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.sizeInGbInput"></a>

```typescript
public readonly sizeInGbInput: number;
```

- *Type:* number

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `tagSpecificationsInput`<sup>Optional</sup> <a name="tagSpecificationsInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.tagSpecificationsInput"></a>

```typescript
public readonly tagSpecificationsInput: IResolvable | WorkspacesinstancesVolumeTagSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>[]

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.sizeInGb"></a>

```typescript
public readonly sizeInGb: number;
```

- *Type:* number

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesinstancesVolumeConfig <a name="WorkspacesinstancesVolumeConfig" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.Initializer"></a>

```typescript
import { workspacesinstancesVolume } from '@cdktn/provider-awscc'

const workspacesinstancesVolumeConfig: workspacesinstancesVolume.WorkspacesinstancesVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | The Availability Zone in which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.encrypted">encrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the volume should be encrypted. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.iops">iops</a></code> | <code>number</code> | The number of I/O operations per second (IOPS). |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.sizeInGb">sizeInGb</a></code> | <code>number</code> | The size of the volume, in GiBs. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.snapshotId">snapshotId</a></code> | <code>string</code> | The snapshot from which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.tagSpecifications">tagSpecifications</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>[]</code> | The tags passed to EBS volume. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.throughput">throughput</a></code> | <code>number</code> | The throughput to provision for a volume, with a maximum of 1,000 MiB/s. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.volumeType">volumeType</a></code> | <code>string</code> | The volume type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

The Availability Zone in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesinstances_volume#availability_zone WorkspacesinstancesVolume#availability_zone}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the volume should be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesinstances_volume#encrypted WorkspacesinstancesVolume#encrypted}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

The number of I/O operations per second (IOPS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesinstances_volume#iops WorkspacesinstancesVolume#iops}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesinstances_volume#kms_key_id WorkspacesinstancesVolume#kms_key_id}

---

##### `sizeInGb`<sup>Optional</sup> <a name="sizeInGb" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.sizeInGb"></a>

```typescript
public readonly sizeInGb: number;
```

- *Type:* number

The size of the volume, in GiBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesinstances_volume#size_in_gb WorkspacesinstancesVolume#size_in_gb}

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

The snapshot from which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesinstances_volume#snapshot_id WorkspacesinstancesVolume#snapshot_id}

---

##### `tagSpecifications`<sup>Optional</sup> <a name="tagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: IResolvable | WorkspacesinstancesVolumeTagSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>[]

The tags passed to EBS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesinstances_volume#tag_specifications WorkspacesinstancesVolume#tag_specifications}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

The throughput to provision for a volume, with a maximum of 1,000 MiB/s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesinstances_volume#throughput WorkspacesinstancesVolume#throughput}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

The volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesinstances_volume#volume_type WorkspacesinstancesVolume#volume_type}

---

### WorkspacesinstancesVolumeTagSpecifications <a name="WorkspacesinstancesVolumeTagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications.Initializer"></a>

```typescript
import { workspacesinstancesVolume } from '@cdktn/provider-awscc'

const workspacesinstancesVolumeTagSpecifications: workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesinstances_volume#resource_type WorkspacesinstancesVolume#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>[]</code> | The tags to apply to the resource. |

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesinstances_volume#resource_type WorkspacesinstancesVolume#resource_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications.property.tags"></a>

```typescript
public readonly tags: IResolvable | WorkspacesinstancesVolumeTagSpecificationsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>[]

The tags to apply to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesinstances_volume#tags WorkspacesinstancesVolume#tags}

---

### WorkspacesinstancesVolumeTagSpecificationsTags <a name="WorkspacesinstancesVolumeTagSpecificationsTags" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags.Initializer"></a>

```typescript
import { workspacesinstancesVolume } from '@cdktn/provider-awscc'

const workspacesinstancesVolumeTagSpecificationsTags: workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesinstances_volume#key WorkspacesinstancesVolume#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesinstances_volume#value WorkspacesinstancesVolume#value}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesinstancesVolumeTagSpecificationsList <a name="WorkspacesinstancesVolumeTagSpecificationsList" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer"></a>

```typescript
import { workspacesinstancesVolume } from '@cdktn/provider-awscc'

new workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.get"></a>

```typescript
public get(index: number): WorkspacesinstancesVolumeTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesVolumeTagSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>[]

---


### WorkspacesinstancesVolumeTagSpecificationsOutputReference <a name="WorkspacesinstancesVolumeTagSpecificationsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesVolume } from '@cdktn/provider-awscc'

new workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | WorkspacesinstancesVolumeTagSpecificationsTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>[]

---

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList">WorkspacesinstancesVolumeTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.tags"></a>

```typescript
public readonly tags: WorkspacesinstancesVolumeTagSpecificationsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList">WorkspacesinstancesVolumeTagSpecificationsTagsList</a>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | WorkspacesinstancesVolumeTagSpecificationsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesVolumeTagSpecifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>

---


### WorkspacesinstancesVolumeTagSpecificationsTagsList <a name="WorkspacesinstancesVolumeTagSpecificationsTagsList" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer"></a>

```typescript
import { workspacesinstancesVolume } from '@cdktn/provider-awscc'

new workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.get"></a>

```typescript
public get(index: number): WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesVolumeTagSpecificationsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>[]

---


### WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference <a name="WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesVolume } from '@cdktn/provider-awscc'

new workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesVolumeTagSpecificationsTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>

---



