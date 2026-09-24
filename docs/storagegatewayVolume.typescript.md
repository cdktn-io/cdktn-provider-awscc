# `storagegatewayVolume` Submodule <a name="`storagegatewayVolume` Submodule" id="@cdktn/provider-awscc.storagegatewayVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayVolume <a name="StoragegatewayVolume" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume awscc_storagegateway_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer"></a>

```typescript
import { storagegatewayVolume } from '@cdktn/provider-awscc'

new storagegatewayVolume.StoragegatewayVolume(scope: Construct, id: string, config: StoragegatewayVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig">StoragegatewayVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig">StoragegatewayVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetKmsEncrypted">resetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetSourceVolumeArn">resetSourceVolumeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.putTags"></a>

```typescript
public putTags(value: IResolvable | StoragegatewayVolumeTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>[]

---

##### `resetKmsEncrypted` <a name="resetKmsEncrypted" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetKmsEncrypted"></a>

```typescript
public resetKmsEncrypted(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetSourceVolumeArn` <a name="resetSourceVolumeArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetSourceVolumeArn"></a>

```typescript
public resetSourceVolumeArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StoragegatewayVolume resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isConstruct"></a>

```typescript
import { storagegatewayVolume } from '@cdktn/provider-awscc'

storagegatewayVolume.StoragegatewayVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformElement"></a>

```typescript
import { storagegatewayVolume } from '@cdktn/provider-awscc'

storagegatewayVolume.StoragegatewayVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformResource"></a>

```typescript
import { storagegatewayVolume } from '@cdktn/provider-awscc'

storagegatewayVolume.StoragegatewayVolume.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport"></a>

```typescript
import { storagegatewayVolume } from '@cdktn/provider-awscc'

storagegatewayVolume.StoragegatewayVolume.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StoragegatewayVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StoragegatewayVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StoragegatewayVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StoragegatewayVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList">StoragegatewayVolumeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeArn">volumeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeAttachmentStatus">volumeAttachmentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeStatus">volumeStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeUsedInBytes">volumeUsedInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.gatewayArnInput">gatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsEncryptedInput">kmsEncryptedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.sourceVolumeArnInput">sourceVolumeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetNameInput">targetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeSizeInBytesInput">volumeSizeInBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.gatewayArn">gatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsEncrypted">kmsEncrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.sourceVolumeArn">sourceVolumeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetName">targetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeSizeInBytes">volumeSizeInBytes</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tags"></a>

```typescript
public readonly tags: StoragegatewayVolumeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList">StoragegatewayVolumeTagsList</a>

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `volumeArn`<sup>Required</sup> <a name="volumeArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeArn"></a>

```typescript
public readonly volumeArn: string;
```

- *Type:* string

---

##### `volumeAttachmentStatus`<sup>Required</sup> <a name="volumeAttachmentStatus" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeAttachmentStatus"></a>

```typescript
public readonly volumeAttachmentStatus: string;
```

- *Type:* string

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `volumeStatus`<sup>Required</sup> <a name="volumeStatus" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeStatus"></a>

```typescript
public readonly volumeStatus: string;
```

- *Type:* string

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `volumeUsedInBytes`<sup>Required</sup> <a name="volumeUsedInBytes" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeUsedInBytes"></a>

```typescript
public readonly volumeUsedInBytes: number;
```

- *Type:* number

---

##### `gatewayArnInput`<sup>Optional</sup> <a name="gatewayArnInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.gatewayArnInput"></a>

```typescript
public readonly gatewayArnInput: string;
```

- *Type:* string

---

##### `kmsEncryptedInput`<sup>Optional</sup> <a name="kmsEncryptedInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsEncryptedInput"></a>

```typescript
public readonly kmsEncryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `sourceVolumeArnInput`<sup>Optional</sup> <a name="sourceVolumeArnInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.sourceVolumeArnInput"></a>

```typescript
public readonly sourceVolumeArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | StoragegatewayVolumeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>[]

---

##### `targetNameInput`<sup>Optional</sup> <a name="targetNameInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetNameInput"></a>

```typescript
public readonly targetNameInput: string;
```

- *Type:* string

---

##### `volumeSizeInBytesInput`<sup>Optional</sup> <a name="volumeSizeInBytesInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeSizeInBytesInput"></a>

```typescript
public readonly volumeSizeInBytesInput: number;
```

- *Type:* number

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.gatewayArn"></a>

```typescript
public readonly gatewayArn: string;
```

- *Type:* string

---

##### `kmsEncrypted`<sup>Required</sup> <a name="kmsEncrypted" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsEncrypted"></a>

```typescript
public readonly kmsEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `sourceVolumeArn`<sup>Required</sup> <a name="sourceVolumeArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.sourceVolumeArn"></a>

```typescript
public readonly sourceVolumeArn: string;
```

- *Type:* string

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetName"></a>

```typescript
public readonly targetName: string;
```

- *Type:* string

---

##### `volumeSizeInBytes`<sup>Required</sup> <a name="volumeSizeInBytes" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeSizeInBytes"></a>

```typescript
public readonly volumeSizeInBytes: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayVolumeConfig <a name="StoragegatewayVolumeConfig" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.Initializer"></a>

```typescript
import { storagegatewayVolume } from '@cdktn/provider-awscc'

const storagegatewayVolumeConfig: storagegatewayVolume.StoragegatewayVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.gatewayArn">gatewayArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the gateway on which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.targetName">targetName</a></code> | <code>string</code> | The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.volumeSizeInBytes">volumeSizeInBytes</a></code> | <code>number</code> | The size of the volume in bytes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.kmsEncrypted">kmsEncrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.snapshotId">snapshotId</a></code> | <code>string</code> | The snapshot ID of the snapshot to restore as the new cached volume (e.g., snap-1122aabb). |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.sourceVolumeArn">sourceVolumeArn</a></code> | <code>string</code> | The ARN of an existing volume from which to create the new volume. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>[]</code> | A list of up to 50 tags to assign to the volume. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.gatewayArn"></a>

```typescript
public readonly gatewayArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the gateway on which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#gateway_arn StoragegatewayVolume#gateway_arn}

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#network_interface_id StoragegatewayVolume#network_interface_id}

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.targetName"></a>

```typescript
public readonly targetName: string;
```

- *Type:* string

The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#target_name StoragegatewayVolume#target_name}

---

##### `volumeSizeInBytes`<sup>Required</sup> <a name="volumeSizeInBytes" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.volumeSizeInBytes"></a>

```typescript
public readonly volumeSizeInBytes: number;
```

- *Type:* number

The size of the volume in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#volume_size_in_bytes StoragegatewayVolume#volume_size_in_bytes}

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="kmsEncrypted" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.kmsEncrypted"></a>

```typescript
public readonly kmsEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#kms_encrypted StoragegatewayVolume#kms_encrypted}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#kms_key StoragegatewayVolume#kms_key}

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

The snapshot ID of the snapshot to restore as the new cached volume (e.g., snap-1122aabb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#snapshot_id StoragegatewayVolume#snapshot_id}

---

##### `sourceVolumeArn`<sup>Optional</sup> <a name="sourceVolumeArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.sourceVolumeArn"></a>

```typescript
public readonly sourceVolumeArn: string;
```

- *Type:* string

The ARN of an existing volume from which to create the new volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#source_volume_arn StoragegatewayVolume#source_volume_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | StoragegatewayVolumeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>[]

A list of up to 50 tags to assign to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#tags StoragegatewayVolume#tags}

---

### StoragegatewayVolumeTags <a name="StoragegatewayVolumeTags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags.Initializer"></a>

```typescript
import { storagegatewayVolume } from '@cdktn/provider-awscc'

const storagegatewayVolumeTags: storagegatewayVolume.StoragegatewayVolumeTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#key StoragegatewayVolume#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#value StoragegatewayVolume#value}

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayVolumeTagsList <a name="StoragegatewayVolumeTagsList" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer"></a>

```typescript
import { storagegatewayVolume } from '@cdktn/provider-awscc'

new storagegatewayVolume.StoragegatewayVolumeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.get"></a>

```typescript
public get(index: number): StoragegatewayVolumeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StoragegatewayVolumeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>[]

---


### StoragegatewayVolumeTagsOutputReference <a name="StoragegatewayVolumeTagsOutputReference" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer"></a>

```typescript
import { storagegatewayVolume } from '@cdktn/provider-awscc'

new storagegatewayVolume.StoragegatewayVolumeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StoragegatewayVolumeTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>

---



