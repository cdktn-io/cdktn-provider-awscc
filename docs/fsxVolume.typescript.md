# `fsxVolume` Submodule <a name="`fsxVolume` Submodule" id="@cdktn/provider-awscc.fsxVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxVolume <a name="FsxVolume" id="@cdktn/provider-awscc.fsxVolume.FsxVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume awscc_fsx_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

new fsxVolume.FsxVolume(scope: Construct, id: string, config: FsxVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig">FsxVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig">FsxVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration">putOntapConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration">putOpenZfsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOntapConfiguration">resetOntapConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOpenZfsConfiguration">resetOpenZfsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOntapConfiguration` <a name="putOntapConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration"></a>

```typescript
public putOntapConfiguration(value: FsxVolumeOntapConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a>

---

##### `putOpenZfsConfiguration` <a name="putOpenZfsConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration"></a>

```typescript
public putOpenZfsConfiguration(value: FsxVolumeOpenZfsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putTags"></a>

```typescript
public putTags(value: IResolvable | FsxVolumeTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>[]

---

##### `resetBackupId` <a name="resetBackupId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetBackupId"></a>

```typescript
public resetBackupId(): void
```

##### `resetOntapConfiguration` <a name="resetOntapConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOntapConfiguration"></a>

```typescript
public resetOntapConfiguration(): void
```

##### `resetOpenZfsConfiguration` <a name="resetOpenZfsConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOpenZfsConfiguration"></a>

```typescript
public resetOpenZfsConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FsxVolume resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isConstruct"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

fsxVolume.FsxVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformElement"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

fsxVolume.FsxVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformResource"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

fsxVolume.FsxVolume.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

fsxVolume.FsxVolume.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FsxVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FsxVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FsxVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FsxVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.ontapConfiguration">ontapConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference">FsxVolumeOntapConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.openZfsConfiguration">openZfsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference">FsxVolumeOpenZfsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList">FsxVolumeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.backupIdInput">backupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.ontapConfigurationInput">ontapConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.openZfsConfigurationInput">openZfsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.backupId">backupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ontapConfiguration`<sup>Required</sup> <a name="ontapConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.ontapConfiguration"></a>

```typescript
public readonly ontapConfiguration: FsxVolumeOntapConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference">FsxVolumeOntapConfigurationOutputReference</a>

---

##### `openZfsConfiguration`<sup>Required</sup> <a name="openZfsConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.openZfsConfiguration"></a>

```typescript
public readonly openZfsConfiguration: FsxVolumeOpenZfsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference">FsxVolumeOpenZfsConfigurationOutputReference</a>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tags"></a>

```typescript
public readonly tags: FsxVolumeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList">FsxVolumeTagsList</a>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.backupIdInput"></a>

```typescript
public readonly backupIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ontapConfigurationInput`<sup>Optional</sup> <a name="ontapConfigurationInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.ontapConfigurationInput"></a>

```typescript
public readonly ontapConfigurationInput: IResolvable | FsxVolumeOntapConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a>

---

##### `openZfsConfigurationInput`<sup>Optional</sup> <a name="openZfsConfigurationInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.openZfsConfigurationInput"></a>

```typescript
public readonly openZfsConfigurationInput: IResolvable | FsxVolumeOpenZfsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | FsxVolumeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>[]

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxVolumeConfig <a name="FsxVolumeConfig" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

const fsxVolumeConfig: fsxVolume.FsxVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.name">name</a></code> | <code>string</code> | The name of the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.backupId">backupId</a></code> | <code>string</code> | Specifies the ID of the volume backup to use to create a new volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.ontapConfiguration">ontapConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a></code> | The configuration of an Amazon FSx for NetApp ONTAP volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.openZfsConfiguration">openZfsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a></code> | The configuration of an Amazon FSx for OpenZFS volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>[]</code> | One or more tags. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.volumeType">volumeType</a></code> | <code>string</code> | The type of the volume. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#name FsxVolume#name}

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

Specifies the ID of the volume backup to use to create a new volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#backup_id FsxVolume#backup_id}

---

##### `ontapConfiguration`<sup>Optional</sup> <a name="ontapConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.ontapConfiguration"></a>

```typescript
public readonly ontapConfiguration: FsxVolumeOntapConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a>

The configuration of an Amazon FSx for NetApp ONTAP volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#ontap_configuration FsxVolume#ontap_configuration}

---

##### `openZfsConfiguration`<sup>Optional</sup> <a name="openZfsConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.openZfsConfiguration"></a>

```typescript
public readonly openZfsConfiguration: FsxVolumeOpenZfsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a>

The configuration of an Amazon FSx for OpenZFS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#open_zfs_configuration FsxVolume#open_zfs_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | FsxVolumeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#tags FsxVolume#tags}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

The type of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#volume_type FsxVolume#volume_type}

---

### FsxVolumeOntapConfiguration <a name="FsxVolumeOntapConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

const fsxVolumeOntapConfiguration: fsxVolume.FsxVolumeOntapConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.aggregateConfiguration">aggregateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a></code> | Used to specify the configuration options for an FSx for ONTAP volume's storage aggregate or aggregates. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.copyTagsToBackups">copyTagsToBackups</a></code> | <code>string</code> | A boolean flag indicating whether tags for the volume should be copied to backups. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.junctionPath">junctionPath</a></code> | <code>string</code> | Specifies the location in the SVM's namespace where the volume is mounted. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.ontapVolumeType">ontapVolumeType</a></code> | <code>string</code> | Specifies the type of volume you are creating. Valid values are the following: RW or DP. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.securityStyle">securityStyle</a></code> | <code>string</code> | Specifies the security style for the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.sizeInBytes">sizeInBytes</a></code> | <code>string</code> | Specifies the configured size of the volume, in bytes. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.sizeInMegabytes">sizeInMegabytes</a></code> | <code>string</code> | Use SizeInBytes instead. Specifies the size of the volume, in megabytes (MB), that you are creating. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.snaplockConfiguration">snaplockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a></code> | The SnapLock configuration object for an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.snapshotPolicy">snapshotPolicy</a></code> | <code>string</code> | Specifies the snapshot policy for the volume. There are three built-in snapshot policies: default, default-1weekly, none. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.storageEfficiencyEnabled">storageEfficiencyEnabled</a></code> | <code>string</code> | Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume, or set to false to disable them. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.storageVirtualMachineId">storageVirtualMachineId</a></code> | <code>string</code> | Specifies the ONTAP SVM in which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.tieringPolicy">tieringPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a></code> | Describes the data tiering policy for an ONTAP volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.volumeStyle">volumeStyle</a></code> | <code>string</code> | Use to specify the style of an ONTAP volume. |

---

##### `aggregateConfiguration`<sup>Optional</sup> <a name="aggregateConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.aggregateConfiguration"></a>

```typescript
public readonly aggregateConfiguration: FsxVolumeOntapConfigurationAggregateConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a>

Used to specify the configuration options for an FSx for ONTAP volume's storage aggregate or aggregates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#aggregate_configuration FsxVolume#aggregate_configuration}

---

##### `copyTagsToBackups`<sup>Optional</sup> <a name="copyTagsToBackups" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.copyTagsToBackups"></a>

```typescript
public readonly copyTagsToBackups: string;
```

- *Type:* string

A boolean flag indicating whether tags for the volume should be copied to backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#copy_tags_to_backups FsxVolume#copy_tags_to_backups}

---

##### `junctionPath`<sup>Optional</sup> <a name="junctionPath" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.junctionPath"></a>

```typescript
public readonly junctionPath: string;
```

- *Type:* string

Specifies the location in the SVM's namespace where the volume is mounted.

This parameter is required. The JunctionPath must have a leading forward slash, such as /vol3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#junction_path FsxVolume#junction_path}

---

##### `ontapVolumeType`<sup>Optional</sup> <a name="ontapVolumeType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.ontapVolumeType"></a>

```typescript
public readonly ontapVolumeType: string;
```

- *Type:* string

Specifies the type of volume you are creating. Valid values are the following: RW or DP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#ontap_volume_type FsxVolume#ontap_volume_type}

---

##### `securityStyle`<sup>Optional</sup> <a name="securityStyle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.securityStyle"></a>

```typescript
public readonly securityStyle: string;
```

- *Type:* string

Specifies the security style for the volume.

If a volume's security style is not specified, it is automatically set to the root volume's security style.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#security_style FsxVolume#security_style}

---

##### `sizeInBytes`<sup>Optional</sup> <a name="sizeInBytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.sizeInBytes"></a>

```typescript
public readonly sizeInBytes: string;
```

- *Type:* string

Specifies the configured size of the volume, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#size_in_bytes FsxVolume#size_in_bytes}

---

##### `sizeInMegabytes`<sup>Optional</sup> <a name="sizeInMegabytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.sizeInMegabytes"></a>

```typescript
public readonly sizeInMegabytes: string;
```

- *Type:* string

Use SizeInBytes instead. Specifies the size of the volume, in megabytes (MB), that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#size_in_megabytes FsxVolume#size_in_megabytes}

---

##### `snaplockConfiguration`<sup>Optional</sup> <a name="snaplockConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.snaplockConfiguration"></a>

```typescript
public readonly snaplockConfiguration: FsxVolumeOntapConfigurationSnaplockConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a>

The SnapLock configuration object for an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snaplock_configuration FsxVolume#snaplock_configuration}

---

##### `snapshotPolicy`<sup>Optional</sup> <a name="snapshotPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.snapshotPolicy"></a>

```typescript
public readonly snapshotPolicy: string;
```

- *Type:* string

Specifies the snapshot policy for the volume. There are three built-in snapshot policies: default, default-1weekly, none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snapshot_policy FsxVolume#snapshot_policy}

---

##### `storageEfficiencyEnabled`<sup>Optional</sup> <a name="storageEfficiencyEnabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.storageEfficiencyEnabled"></a>

```typescript
public readonly storageEfficiencyEnabled: string;
```

- *Type:* string

Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume, or set to false to disable them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_efficiency_enabled FsxVolume#storage_efficiency_enabled}

---

##### `storageVirtualMachineId`<sup>Optional</sup> <a name="storageVirtualMachineId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.storageVirtualMachineId"></a>

```typescript
public readonly storageVirtualMachineId: string;
```

- *Type:* string

Specifies the ONTAP SVM in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_virtual_machine_id FsxVolume#storage_virtual_machine_id}

---

##### `tieringPolicy`<sup>Optional</sup> <a name="tieringPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.tieringPolicy"></a>

```typescript
public readonly tieringPolicy: FsxVolumeOntapConfigurationTieringPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a>

Describes the data tiering policy for an ONTAP volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#tiering_policy FsxVolume#tiering_policy}

---

##### `volumeStyle`<sup>Optional</sup> <a name="volumeStyle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.volumeStyle"></a>

```typescript
public readonly volumeStyle: string;
```

- *Type:* string

Use to specify the style of an ONTAP volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#volume_style FsxVolume#volume_style}

---

### FsxVolumeOntapConfigurationAggregateConfiguration <a name="FsxVolumeOntapConfigurationAggregateConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

const fsxVolumeOntapConfigurationAggregateConfiguration: fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration.property.aggregates">aggregates</a></code> | <code>string[]</code> | The list of aggregates that this volume resides on. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration.property.constituentsPerAggregate">constituentsPerAggregate</a></code> | <code>number</code> | Used to explicitly set the number of constituents within the FlexGroup per storage aggregate. |

---

##### `aggregates`<sup>Optional</sup> <a name="aggregates" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration.property.aggregates"></a>

```typescript
public readonly aggregates: string[];
```

- *Type:* string[]

The list of aggregates that this volume resides on.

Aggregates are storage pools which make up your primary storage tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#aggregates FsxVolume#aggregates}

---

##### `constituentsPerAggregate`<sup>Optional</sup> <a name="constituentsPerAggregate" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration.property.constituentsPerAggregate"></a>

```typescript
public readonly constituentsPerAggregate: number;
```

- *Type:* number

Used to explicitly set the number of constituents within the FlexGroup per storage aggregate.

This field is optional when creating a FlexGroup volume. If unspecified, the default value will be 8. This field cannot be provided when creating a FlexVol volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#constituents_per_aggregate FsxVolume#constituents_per_aggregate}

---

### FsxVolumeOntapConfigurationSnaplockConfiguration <a name="FsxVolumeOntapConfigurationSnaplockConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

const fsxVolumeOntapConfigurationSnaplockConfiguration: fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.auditLogVolume">auditLogVolume</a></code> | <code>string</code> | Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.autocommitPeriod">autocommitPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a></code> | The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.privilegedDelete">privilegedDelete</a></code> | <code>string</code> | Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock Enterprise volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.retentionPeriod">retentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a></code> | Specifies the retention period of an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.snaplockType">snaplockType</a></code> | <code>string</code> | Specifies the retention mode of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.volumeAppendModeEnabled">volumeAppendModeEnabled</a></code> | <code>string</code> | Enables or disables volume-append mode on an FSx for ONTAP SnapLock volume. |

---

##### `auditLogVolume`<sup>Optional</sup> <a name="auditLogVolume" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.auditLogVolume"></a>

```typescript
public readonly auditLogVolume: string;
```

- *Type:* string

Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#audit_log_volume FsxVolume#audit_log_volume}

---

##### `autocommitPeriod`<sup>Optional</sup> <a name="autocommitPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.autocommitPeriod"></a>

```typescript
public readonly autocommitPeriod: FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a>

The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#autocommit_period FsxVolume#autocommit_period}

---

##### `privilegedDelete`<sup>Optional</sup> <a name="privilegedDelete" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.privilegedDelete"></a>

```typescript
public readonly privilegedDelete: string;
```

- *Type:* string

Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock Enterprise volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#privileged_delete FsxVolume#privileged_delete}

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a>

Specifies the retention period of an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#retention_period FsxVolume#retention_period}

---

##### `snaplockType`<sup>Optional</sup> <a name="snaplockType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.snaplockType"></a>

```typescript
public readonly snaplockType: string;
```

- *Type:* string

Specifies the retention mode of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snaplock_type FsxVolume#snaplock_type}

---

##### `volumeAppendModeEnabled`<sup>Optional</sup> <a name="volumeAppendModeEnabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.volumeAppendModeEnabled"></a>

```typescript
public readonly volumeAppendModeEnabled: string;
```

- *Type:* string

Enables or disables volume-append mode on an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#volume_append_mode_enabled FsxVolume#volume_append_mode_enabled}

---

### FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod <a name="FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

const fsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod: fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.property.type">type</a></code> | <code>string</code> | Defines the type of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.property.value">value</a></code> | <code>number</code> | Defines the amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Defines the type of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.

Setting this value to NONE disables autocommit. The default value is NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Defines the amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

const fsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod: fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.defaultRetention">defaultRetention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a></code> | The retention period assigned to a write once, read many (WORM) file by default if an explicit retention period is not set for an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.maximumRetention">maximumRetention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a></code> | The longest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.minimumRetention">minimumRetention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a></code> | The shortest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume. |

---

##### `defaultRetention`<sup>Optional</sup> <a name="defaultRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.defaultRetention"></a>

```typescript
public readonly defaultRetention: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a>

The retention period assigned to a write once, read many (WORM) file by default if an explicit retention period is not set for an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#default_retention FsxVolume#default_retention}

---

##### `maximumRetention`<sup>Optional</sup> <a name="maximumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.maximumRetention"></a>

```typescript
public readonly maximumRetention: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a>

The longest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#maximum_retention FsxVolume#maximum_retention}

---

##### `minimumRetention`<sup>Optional</sup> <a name="minimumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.minimumRetention"></a>

```typescript
public readonly minimumRetention: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a>

The shortest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#minimum_retention FsxVolume#minimum_retention}

---

### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

const fsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention: fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.property.type">type</a></code> | <code>string</code> | Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.property.value">value</a></code> | <code>number</code> | Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume.

Set it to one of the valid types. If you set it to INFINITE, the files are retained forever. If you set it to UNSPECIFIED, the files are retained until you set an explicit retention period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume.

You can't set a value for INFINITE or UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

const fsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention: fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.property.type">type</a></code> | <code>string</code> | Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.property.value">value</a></code> | <code>number</code> | Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume.

Set it to one of the valid types. If you set it to INFINITE, the files are retained forever. If you set it to UNSPECIFIED, the files are retained until you set an explicit retention period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume.

You can't set a value for INFINITE or UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

const fsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention: fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.property.type">type</a></code> | <code>string</code> | Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.property.value">value</a></code> | <code>number</code> | Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume.

Set it to one of the valid types. If you set it to INFINITE, the files are retained forever. If you set it to UNSPECIFIED, the files are retained until you set an explicit retention period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume.

You can't set a value for INFINITE or UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

### FsxVolumeOntapConfigurationTieringPolicy <a name="FsxVolumeOntapConfigurationTieringPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

const fsxVolumeOntapConfigurationTieringPolicy: fsxVolume.FsxVolumeOntapConfigurationTieringPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy.property.coolingPeriod">coolingPeriod</a></code> | <code>number</code> | Specifies the number of days that user data in a volume must remain inactive before it is considered "cold" and moved to the capacity pool. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy.property.name">name</a></code> | <code>string</code> | Specifies the tiering policy used to transition data. Default value is SNAPSHOT_ONLY. |

---

##### `coolingPeriod`<sup>Optional</sup> <a name="coolingPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy.property.coolingPeriod"></a>

```typescript
public readonly coolingPeriod: number;
```

- *Type:* number

Specifies the number of days that user data in a volume must remain inactive before it is considered "cold" and moved to the capacity pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#cooling_period FsxVolume#cooling_period}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the tiering policy used to transition data. Default value is SNAPSHOT_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#name FsxVolume#name}

---

### FsxVolumeOpenZfsConfiguration <a name="FsxVolumeOpenZfsConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

const fsxVolumeOpenZfsConfiguration: fsxVolume.FsxVolumeOpenZfsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.copyTagsToSnapshots">copyTagsToSnapshots</a></code> | <code>boolean \| cdktn.IResolvable</code> | A Boolean value indicating whether tags for the volume should be copied to snapshots. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.dataCompressionType">dataCompressionType</a></code> | <code>string</code> | Specifies the method used to compress the data on the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.nfsExports">nfsExports</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>[]</code> | The configuration object for mounting a Network File System (NFS) file system. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.options">options</a></code> | <code>string[]</code> | The configuration object for mounting a Network File System (NFS) file system. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.originSnapshot">originSnapshot</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a></code> | The configuration of an Amazon FSx for OpenZFS volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.parentVolumeId">parentVolumeId</a></code> | <code>string</code> | The ID of the volume to use as the parent volume of the volume that you are creating. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.readOnly">readOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | A Boolean value indicating whether the volume is read-only. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.recordSizeKiB">recordSizeKiB</a></code> | <code>number</code> | Specifies the suggested block size for a volume in a ZFS dataset, in kibibytes (KiB). |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.storageCapacityQuotaGiB">storageCapacityQuotaGiB</a></code> | <code>number</code> | Sets the maximum storage size in gibibytes (GiB) for the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.storageCapacityReservationGiB">storageCapacityReservationGiB</a></code> | <code>number</code> | Specifies the amount of storage in gibibytes (GiB) to reserve from the parent volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.userAndGroupQuotas">userAndGroupQuotas</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>[]</code> | Configures how much storage users and groups can use on the volume. |

---

##### `copyTagsToSnapshots`<sup>Optional</sup> <a name="copyTagsToSnapshots" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.copyTagsToSnapshots"></a>

```typescript
public readonly copyTagsToSnapshots: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A Boolean value indicating whether tags for the volume should be copied to snapshots.

This value defaults to false. If this value is set to true, and you do not specify any tags, all tags for the original volume are copied over to snapshots. If this value is set to true, and you do specify one or more tags, only the specified tags for the original volume are copied over to snapshots. If you specify one or more tags when creating a new snapshot, no tags are copied over from the original volume, regardless of this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#copy_tags_to_snapshots FsxVolume#copy_tags_to_snapshots}

---

##### `dataCompressionType`<sup>Optional</sup> <a name="dataCompressionType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.dataCompressionType"></a>

```typescript
public readonly dataCompressionType: string;
```

- *Type:* string

Specifies the method used to compress the data on the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#data_compression_type FsxVolume#data_compression_type}

---

##### `nfsExports`<sup>Optional</sup> <a name="nfsExports" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.nfsExports"></a>

```typescript
public readonly nfsExports: IResolvable | FsxVolumeOpenZfsConfigurationNfsExports[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>[]

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#nfs_exports FsxVolume#nfs_exports}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#options FsxVolume#options}

---

##### `originSnapshot`<sup>Optional</sup> <a name="originSnapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.originSnapshot"></a>

```typescript
public readonly originSnapshot: FsxVolumeOpenZfsConfigurationOriginSnapshot;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a>

The configuration of an Amazon FSx for OpenZFS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#origin_snapshot FsxVolume#origin_snapshot}

---

##### `parentVolumeId`<sup>Optional</sup> <a name="parentVolumeId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.parentVolumeId"></a>

```typescript
public readonly parentVolumeId: string;
```

- *Type:* string

The ID of the volume to use as the parent volume of the volume that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#parent_volume_id FsxVolume#parent_volume_id}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A Boolean value indicating whether the volume is read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#read_only FsxVolume#read_only}

---

##### `recordSizeKiB`<sup>Optional</sup> <a name="recordSizeKiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.recordSizeKiB"></a>

```typescript
public readonly recordSizeKiB: number;
```

- *Type:* number

Specifies the suggested block size for a volume in a ZFS dataset, in kibibytes (KiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#record_size_ki_b FsxVolume#record_size_ki_b}

---

##### `storageCapacityQuotaGiB`<sup>Optional</sup> <a name="storageCapacityQuotaGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.storageCapacityQuotaGiB"></a>

```typescript
public readonly storageCapacityQuotaGiB: number;
```

- *Type:* number

Sets the maximum storage size in gibibytes (GiB) for the volume.

You can specify a quota that is larger than the storage on the parent volume. A volume quota limits the amount of storage that the volume can consume to the configured amount, but does not guarantee the space will be available on the parent volume. To guarantee quota space, you must also set StorageCapacityReservationGiB. To not specify a storage capacity quota, set this to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_capacity_quota_gi_b FsxVolume#storage_capacity_quota_gi_b}

---

##### `storageCapacityReservationGiB`<sup>Optional</sup> <a name="storageCapacityReservationGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.storageCapacityReservationGiB"></a>

```typescript
public readonly storageCapacityReservationGiB: number;
```

- *Type:* number

Specifies the amount of storage in gibibytes (GiB) to reserve from the parent volume.

Setting StorageCapacityReservationGiB guarantees that the specified amount of storage space on the parent volume will always be available for the volume. You can't reserve more storage than the parent volume has. To not specify a storage capacity reservation, set this to 0 or -1. For more information, see Volume properties in the Amazon FSx for OpenZFS User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_capacity_reservation_gi_b FsxVolume#storage_capacity_reservation_gi_b}

---

##### `userAndGroupQuotas`<sup>Optional</sup> <a name="userAndGroupQuotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.userAndGroupQuotas"></a>

```typescript
public readonly userAndGroupQuotas: IResolvable | FsxVolumeOpenZfsConfigurationUserAndGroupQuotas[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>[]

Configures how much storage users and groups can use on the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#user_and_group_quotas FsxVolume#user_and_group_quotas}

---

### FsxVolumeOpenZfsConfigurationNfsExports <a name="FsxVolumeOpenZfsConfigurationNfsExports" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

const fsxVolumeOpenZfsConfigurationNfsExports: fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports.property.clientConfigurations">clientConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>[]</code> | The configuration object for mounting a Network File System (NFS) file system. |

---

##### `clientConfigurations`<sup>Optional</sup> <a name="clientConfigurations" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports.property.clientConfigurations"></a>

```typescript
public readonly clientConfigurations: IResolvable | FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>[]

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#client_configurations FsxVolume#client_configurations}

---

### FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations <a name="FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

const fsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations: fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.property.clients">clients</a></code> | <code>string</code> | A value that specifies who can mount the file system. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.property.options">options</a></code> | <code>string[]</code> | The configuration object for mounting a Network File System (NFS) file system. |

---

##### `clients`<sup>Optional</sup> <a name="clients" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.property.clients"></a>

```typescript
public readonly clients: string;
```

- *Type:* string

A value that specifies who can mount the file system.

You can provide a wildcard character (*), an IP address (0.0.0.0), or a CIDR address (192.0.2.0/24). By default, Amazon FSx uses the wildcard character when specifying the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#clients FsxVolume#clients}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#options FsxVolume#options}

---

### FsxVolumeOpenZfsConfigurationOriginSnapshot <a name="FsxVolumeOpenZfsConfigurationOriginSnapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

const fsxVolumeOpenZfsConfigurationOriginSnapshot: fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot.property.copyStrategy">copyStrategy</a></code> | <code>string</code> | The configuration object for mounting a Network File System (NFS) file system. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot.property.snapshotArn">snapshotArn</a></code> | <code>string</code> | Specifies the snapshot to use when creating an OpenZFS volume from a snapshot. |

---

##### `copyStrategy`<sup>Optional</sup> <a name="copyStrategy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot.property.copyStrategy"></a>

```typescript
public readonly copyStrategy: string;
```

- *Type:* string

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#copy_strategy FsxVolume#copy_strategy}

---

##### `snapshotArn`<sup>Optional</sup> <a name="snapshotArn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot.property.snapshotArn"></a>

```typescript
public readonly snapshotArn: string;
```

- *Type:* string

Specifies the snapshot to use when creating an OpenZFS volume from a snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snapshot_arn FsxVolume#snapshot_arn}

---

### FsxVolumeOpenZfsConfigurationUserAndGroupQuotas <a name="FsxVolumeOpenZfsConfigurationUserAndGroupQuotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

const fsxVolumeOpenZfsConfigurationUserAndGroupQuotas: fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.id">id</a></code> | <code>number</code> | The ID of the user or group that the quota applies to. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.storageCapacityQuotaGiB">storageCapacityQuotaGiB</a></code> | <code>number</code> | The user or group's storage quota, in gibibytes (GiB). |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.type">type</a></code> | <code>string</code> | Specifies whether the quota applies to a user or group. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

The ID of the user or group that the quota applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#id FsxVolume#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storageCapacityQuotaGiB`<sup>Optional</sup> <a name="storageCapacityQuotaGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.storageCapacityQuotaGiB"></a>

```typescript
public readonly storageCapacityQuotaGiB: number;
```

- *Type:* number

The user or group's storage quota, in gibibytes (GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_capacity_quota_gi_b FsxVolume#storage_capacity_quota_gi_b}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Specifies whether the quota applies to a user or group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

### FsxVolumeTags <a name="FsxVolumeTags" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTags.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

const fsxVolumeTags: fsxVolume.FsxVolumeTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags.property.key">key</a></code> | <code>string</code> | A value that specifies the TagKey, the name of the tag. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags.property.value">value</a></code> | <code>string</code> | A value that specifies the TagValue, the value assigned to the corresponding tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A value that specifies the TagKey, the name of the tag.

Tag keys must be unique for the resource to which they are attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#key FsxVolume#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A value that specifies the TagValue, the value assigned to the corresponding tag key.

Tag values can be null and don't have to be unique in a tag set. For example, you can have a key-value pair in a tag set of finances : April and also of payroll : April.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

## Classes <a name="Classes" id="Classes"></a>

### FsxVolumeOntapConfigurationAggregateConfigurationOutputReference <a name="FsxVolumeOntapConfigurationAggregateConfigurationOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

new fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resetAggregates">resetAggregates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resetConstituentsPerAggregate">resetConstituentsPerAggregate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregates` <a name="resetAggregates" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resetAggregates"></a>

```typescript
public resetAggregates(): void
```

##### `resetConstituentsPerAggregate` <a name="resetConstituentsPerAggregate" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resetConstituentsPerAggregate"></a>

```typescript
public resetConstituentsPerAggregate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregatesInput">aggregatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregateInput">constituentsPerAggregateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregates">aggregates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregate">constituentsPerAggregate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregatesInput`<sup>Optional</sup> <a name="aggregatesInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregatesInput"></a>

```typescript
public readonly aggregatesInput: string[];
```

- *Type:* string[]

---

##### `constituentsPerAggregateInput`<sup>Optional</sup> <a name="constituentsPerAggregateInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregateInput"></a>

```typescript
public readonly constituentsPerAggregateInput: number;
```

- *Type:* number

---

##### `aggregates`<sup>Required</sup> <a name="aggregates" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregates"></a>

```typescript
public readonly aggregates: string[];
```

- *Type:* string[]

---

##### `constituentsPerAggregate`<sup>Required</sup> <a name="constituentsPerAggregate" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregate"></a>

```typescript
public readonly constituentsPerAggregate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxVolumeOntapConfigurationAggregateConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a>

---


### FsxVolumeOntapConfigurationOutputReference <a name="FsxVolumeOntapConfigurationOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

new fsxVolume.FsxVolumeOntapConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putAggregateConfiguration">putAggregateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putSnaplockConfiguration">putSnaplockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putTieringPolicy">putTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetAggregateConfiguration">resetAggregateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetCopyTagsToBackups">resetCopyTagsToBackups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetJunctionPath">resetJunctionPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetOntapVolumeType">resetOntapVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSecurityStyle">resetSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSizeInBytes">resetSizeInBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSizeInMegabytes">resetSizeInMegabytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSnaplockConfiguration">resetSnaplockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSnapshotPolicy">resetSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetStorageEfficiencyEnabled">resetStorageEfficiencyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetStorageVirtualMachineId">resetStorageVirtualMachineId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetTieringPolicy">resetTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetVolumeStyle">resetVolumeStyle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAggregateConfiguration` <a name="putAggregateConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putAggregateConfiguration"></a>

```typescript
public putAggregateConfiguration(value: FsxVolumeOntapConfigurationAggregateConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putAggregateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a>

---

##### `putSnaplockConfiguration` <a name="putSnaplockConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putSnaplockConfiguration"></a>

```typescript
public putSnaplockConfiguration(value: FsxVolumeOntapConfigurationSnaplockConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putSnaplockConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a>

---

##### `putTieringPolicy` <a name="putTieringPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putTieringPolicy"></a>

```typescript
public putTieringPolicy(value: FsxVolumeOntapConfigurationTieringPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putTieringPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a>

---

##### `resetAggregateConfiguration` <a name="resetAggregateConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetAggregateConfiguration"></a>

```typescript
public resetAggregateConfiguration(): void
```

##### `resetCopyTagsToBackups` <a name="resetCopyTagsToBackups" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetCopyTagsToBackups"></a>

```typescript
public resetCopyTagsToBackups(): void
```

##### `resetJunctionPath` <a name="resetJunctionPath" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetJunctionPath"></a>

```typescript
public resetJunctionPath(): void
```

##### `resetOntapVolumeType` <a name="resetOntapVolumeType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetOntapVolumeType"></a>

```typescript
public resetOntapVolumeType(): void
```

##### `resetSecurityStyle` <a name="resetSecurityStyle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSecurityStyle"></a>

```typescript
public resetSecurityStyle(): void
```

##### `resetSizeInBytes` <a name="resetSizeInBytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSizeInBytes"></a>

```typescript
public resetSizeInBytes(): void
```

##### `resetSizeInMegabytes` <a name="resetSizeInMegabytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSizeInMegabytes"></a>

```typescript
public resetSizeInMegabytes(): void
```

##### `resetSnaplockConfiguration` <a name="resetSnaplockConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSnaplockConfiguration"></a>

```typescript
public resetSnaplockConfiguration(): void
```

##### `resetSnapshotPolicy` <a name="resetSnapshotPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSnapshotPolicy"></a>

```typescript
public resetSnapshotPolicy(): void
```

##### `resetStorageEfficiencyEnabled` <a name="resetStorageEfficiencyEnabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetStorageEfficiencyEnabled"></a>

```typescript
public resetStorageEfficiencyEnabled(): void
```

##### `resetStorageVirtualMachineId` <a name="resetStorageVirtualMachineId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetStorageVirtualMachineId"></a>

```typescript
public resetStorageVirtualMachineId(): void
```

##### `resetTieringPolicy` <a name="resetTieringPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetTieringPolicy"></a>

```typescript
public resetTieringPolicy(): void
```

##### `resetVolumeStyle` <a name="resetVolumeStyle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetVolumeStyle"></a>

```typescript
public resetVolumeStyle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.aggregateConfiguration">aggregateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference">FsxVolumeOntapConfigurationAggregateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snaplockConfiguration">snaplockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.tieringPolicy">tieringPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference">FsxVolumeOntapConfigurationTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.aggregateConfigurationInput">aggregateConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackupsInput">copyTagsToBackupsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.junctionPathInput">junctionPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.ontapVolumeTypeInput">ontapVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.securityStyleInput">securityStyleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInBytesInput">sizeInBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytesInput">sizeInMegabytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snaplockConfigurationInput">snaplockConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snapshotPolicyInput">snapshotPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabledInput">storageEfficiencyEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineIdInput">storageVirtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.tieringPolicyInput">tieringPolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.volumeStyleInput">volumeStyleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackups">copyTagsToBackups</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.junctionPath">junctionPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.ontapVolumeType">ontapVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.securityStyle">securityStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInBytes">sizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytes">sizeInMegabytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snapshotPolicy">snapshotPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabled">storageEfficiencyEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineId">storageVirtualMachineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.volumeStyle">volumeStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregateConfiguration`<sup>Required</sup> <a name="aggregateConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.aggregateConfiguration"></a>

```typescript
public readonly aggregateConfiguration: FsxVolumeOntapConfigurationAggregateConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference">FsxVolumeOntapConfigurationAggregateConfigurationOutputReference</a>

---

##### `snaplockConfiguration`<sup>Required</sup> <a name="snaplockConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snaplockConfiguration"></a>

```typescript
public readonly snaplockConfiguration: FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference</a>

---

##### `tieringPolicy`<sup>Required</sup> <a name="tieringPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.tieringPolicy"></a>

```typescript
public readonly tieringPolicy: FsxVolumeOntapConfigurationTieringPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference">FsxVolumeOntapConfigurationTieringPolicyOutputReference</a>

---

##### `aggregateConfigurationInput`<sup>Optional</sup> <a name="aggregateConfigurationInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.aggregateConfigurationInput"></a>

```typescript
public readonly aggregateConfigurationInput: IResolvable | FsxVolumeOntapConfigurationAggregateConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a>

---

##### `copyTagsToBackupsInput`<sup>Optional</sup> <a name="copyTagsToBackupsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackupsInput"></a>

```typescript
public readonly copyTagsToBackupsInput: string;
```

- *Type:* string

---

##### `junctionPathInput`<sup>Optional</sup> <a name="junctionPathInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.junctionPathInput"></a>

```typescript
public readonly junctionPathInput: string;
```

- *Type:* string

---

##### `ontapVolumeTypeInput`<sup>Optional</sup> <a name="ontapVolumeTypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.ontapVolumeTypeInput"></a>

```typescript
public readonly ontapVolumeTypeInput: string;
```

- *Type:* string

---

##### `securityStyleInput`<sup>Optional</sup> <a name="securityStyleInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.securityStyleInput"></a>

```typescript
public readonly securityStyleInput: string;
```

- *Type:* string

---

##### `sizeInBytesInput`<sup>Optional</sup> <a name="sizeInBytesInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInBytesInput"></a>

```typescript
public readonly sizeInBytesInput: string;
```

- *Type:* string

---

##### `sizeInMegabytesInput`<sup>Optional</sup> <a name="sizeInMegabytesInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytesInput"></a>

```typescript
public readonly sizeInMegabytesInput: string;
```

- *Type:* string

---

##### `snaplockConfigurationInput`<sup>Optional</sup> <a name="snaplockConfigurationInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snaplockConfigurationInput"></a>

```typescript
public readonly snaplockConfigurationInput: IResolvable | FsxVolumeOntapConfigurationSnaplockConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a>

---

##### `snapshotPolicyInput`<sup>Optional</sup> <a name="snapshotPolicyInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snapshotPolicyInput"></a>

```typescript
public readonly snapshotPolicyInput: string;
```

- *Type:* string

---

##### `storageEfficiencyEnabledInput`<sup>Optional</sup> <a name="storageEfficiencyEnabledInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabledInput"></a>

```typescript
public readonly storageEfficiencyEnabledInput: string;
```

- *Type:* string

---

##### `storageVirtualMachineIdInput`<sup>Optional</sup> <a name="storageVirtualMachineIdInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineIdInput"></a>

```typescript
public readonly storageVirtualMachineIdInput: string;
```

- *Type:* string

---

##### `tieringPolicyInput`<sup>Optional</sup> <a name="tieringPolicyInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.tieringPolicyInput"></a>

```typescript
public readonly tieringPolicyInput: IResolvable | FsxVolumeOntapConfigurationTieringPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a>

---

##### `volumeStyleInput`<sup>Optional</sup> <a name="volumeStyleInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.volumeStyleInput"></a>

```typescript
public readonly volumeStyleInput: string;
```

- *Type:* string

---

##### `copyTagsToBackups`<sup>Required</sup> <a name="copyTagsToBackups" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackups"></a>

```typescript
public readonly copyTagsToBackups: string;
```

- *Type:* string

---

##### `junctionPath`<sup>Required</sup> <a name="junctionPath" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.junctionPath"></a>

```typescript
public readonly junctionPath: string;
```

- *Type:* string

---

##### `ontapVolumeType`<sup>Required</sup> <a name="ontapVolumeType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.ontapVolumeType"></a>

```typescript
public readonly ontapVolumeType: string;
```

- *Type:* string

---

##### `securityStyle`<sup>Required</sup> <a name="securityStyle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.securityStyle"></a>

```typescript
public readonly securityStyle: string;
```

- *Type:* string

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInBytes"></a>

```typescript
public readonly sizeInBytes: string;
```

- *Type:* string

---

##### `sizeInMegabytes`<sup>Required</sup> <a name="sizeInMegabytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytes"></a>

```typescript
public readonly sizeInMegabytes: string;
```

- *Type:* string

---

##### `snapshotPolicy`<sup>Required</sup> <a name="snapshotPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snapshotPolicy"></a>

```typescript
public readonly snapshotPolicy: string;
```

- *Type:* string

---

##### `storageEfficiencyEnabled`<sup>Required</sup> <a name="storageEfficiencyEnabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabled"></a>

```typescript
public readonly storageEfficiencyEnabled: string;
```

- *Type:* string

---

##### `storageVirtualMachineId`<sup>Required</sup> <a name="storageVirtualMachineId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineId"></a>

```typescript
public readonly storageVirtualMachineId: string;
```

- *Type:* string

---

##### `volumeStyle`<sup>Required</sup> <a name="volumeStyle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.volumeStyle"></a>

```typescript
public readonly volumeStyle: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxVolumeOntapConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a>

---


### FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

new fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a>

---


### FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

new fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putAutocommitPeriod">putAutocommitPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putRetentionPeriod">putRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetAuditLogVolume">resetAuditLogVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetAutocommitPeriod">resetAutocommitPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetPrivilegedDelete">resetPrivilegedDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetRetentionPeriod">resetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetSnaplockType">resetSnaplockType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetVolumeAppendModeEnabled">resetVolumeAppendModeEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutocommitPeriod` <a name="putAutocommitPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putAutocommitPeriod"></a>

```typescript
public putAutocommitPeriod(value: FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putAutocommitPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a>

---

##### `putRetentionPeriod` <a name="putRetentionPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putRetentionPeriod"></a>

```typescript
public putRetentionPeriod(value: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putRetentionPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a>

---

##### `resetAuditLogVolume` <a name="resetAuditLogVolume" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetAuditLogVolume"></a>

```typescript
public resetAuditLogVolume(): void
```

##### `resetAutocommitPeriod` <a name="resetAutocommitPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetAutocommitPeriod"></a>

```typescript
public resetAutocommitPeriod(): void
```

##### `resetPrivilegedDelete` <a name="resetPrivilegedDelete" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetPrivilegedDelete"></a>

```typescript
public resetPrivilegedDelete(): void
```

##### `resetRetentionPeriod` <a name="resetRetentionPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetRetentionPeriod"></a>

```typescript
public resetRetentionPeriod(): void
```

##### `resetSnaplockType` <a name="resetSnaplockType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetSnaplockType"></a>

```typescript
public resetSnaplockType(): void
```

##### `resetVolumeAppendModeEnabled` <a name="resetVolumeAppendModeEnabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetVolumeAppendModeEnabled"></a>

```typescript
public resetVolumeAppendModeEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriod">autocommitPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriod">retentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolumeInput">auditLogVolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriodInput">autocommitPeriodInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDeleteInput">privilegedDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockTypeInput">snaplockTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabledInput">volumeAppendModeEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolume">auditLogVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDelete">privilegedDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockType">snaplockType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabled">volumeAppendModeEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autocommitPeriod`<sup>Required</sup> <a name="autocommitPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriod"></a>

```typescript
public readonly autocommitPeriod: FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference</a>

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference</a>

---

##### `auditLogVolumeInput`<sup>Optional</sup> <a name="auditLogVolumeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolumeInput"></a>

```typescript
public readonly auditLogVolumeInput: string;
```

- *Type:* string

---

##### `autocommitPeriodInput`<sup>Optional</sup> <a name="autocommitPeriodInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriodInput"></a>

```typescript
public readonly autocommitPeriodInput: IResolvable | FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a>

---

##### `privilegedDeleteInput`<sup>Optional</sup> <a name="privilegedDeleteInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDeleteInput"></a>

```typescript
public readonly privilegedDeleteInput: string;
```

- *Type:* string

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriodInput"></a>

```typescript
public readonly retentionPeriodInput: IResolvable | FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a>

---

##### `snaplockTypeInput`<sup>Optional</sup> <a name="snaplockTypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockTypeInput"></a>

```typescript
public readonly snaplockTypeInput: string;
```

- *Type:* string

---

##### `volumeAppendModeEnabledInput`<sup>Optional</sup> <a name="volumeAppendModeEnabledInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabledInput"></a>

```typescript
public readonly volumeAppendModeEnabledInput: string;
```

- *Type:* string

---

##### `auditLogVolume`<sup>Required</sup> <a name="auditLogVolume" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolume"></a>

```typescript
public readonly auditLogVolume: string;
```

- *Type:* string

---

##### `privilegedDelete`<sup>Required</sup> <a name="privilegedDelete" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDelete"></a>

```typescript
public readonly privilegedDelete: string;
```

- *Type:* string

---

##### `snaplockType`<sup>Required</sup> <a name="snaplockType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockType"></a>

```typescript
public readonly snaplockType: string;
```

- *Type:* string

---

##### `volumeAppendModeEnabled`<sup>Required</sup> <a name="volumeAppendModeEnabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabled"></a>

```typescript
public readonly volumeAppendModeEnabled: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxVolumeOntapConfigurationSnaplockConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a>

---


### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

new fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a>

---


### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

new fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a>

---


### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

new fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a>

---


### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

new fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putDefaultRetention">putDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMaximumRetention">putMaximumRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMinimumRetention">putMinimumRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetDefaultRetention">resetDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetMaximumRetention">resetMaximumRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetMinimumRetention">resetMinimumRetention</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultRetention` <a name="putDefaultRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putDefaultRetention"></a>

```typescript
public putDefaultRetention(value: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putDefaultRetention.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a>

---

##### `putMaximumRetention` <a name="putMaximumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMaximumRetention"></a>

```typescript
public putMaximumRetention(value: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMaximumRetention.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a>

---

##### `putMinimumRetention` <a name="putMinimumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMinimumRetention"></a>

```typescript
public putMinimumRetention(value: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMinimumRetention.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a>

---

##### `resetDefaultRetention` <a name="resetDefaultRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetDefaultRetention"></a>

```typescript
public resetDefaultRetention(): void
```

##### `resetMaximumRetention` <a name="resetMaximumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetMaximumRetention"></a>

```typescript
public resetMaximumRetention(): void
```

##### `resetMinimumRetention` <a name="resetMinimumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetMinimumRetention"></a>

```typescript
public resetMinimumRetention(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetention">defaultRetention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetention">maximumRetention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetention">minimumRetention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetentionInput">defaultRetentionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetentionInput">maximumRetentionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetentionInput">minimumRetentionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultRetention`<sup>Required</sup> <a name="defaultRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetention"></a>

```typescript
public readonly defaultRetention: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference</a>

---

##### `maximumRetention`<sup>Required</sup> <a name="maximumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetention"></a>

```typescript
public readonly maximumRetention: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference</a>

---

##### `minimumRetention`<sup>Required</sup> <a name="minimumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetention"></a>

```typescript
public readonly minimumRetention: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference</a>

---

##### `defaultRetentionInput`<sup>Optional</sup> <a name="defaultRetentionInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetentionInput"></a>

```typescript
public readonly defaultRetentionInput: IResolvable | FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a>

---

##### `maximumRetentionInput`<sup>Optional</sup> <a name="maximumRetentionInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetentionInput"></a>

```typescript
public readonly maximumRetentionInput: IResolvable | FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a>

---

##### `minimumRetentionInput`<sup>Optional</sup> <a name="minimumRetentionInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetentionInput"></a>

```typescript
public readonly minimumRetentionInput: IResolvable | FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a>

---


### FsxVolumeOntapConfigurationTieringPolicyOutputReference <a name="FsxVolumeOntapConfigurationTieringPolicyOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

new fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resetCoolingPeriod">resetCoolingPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCoolingPeriod` <a name="resetCoolingPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resetCoolingPeriod"></a>

```typescript
public resetCoolingPeriod(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriodInput">coolingPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriod">coolingPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coolingPeriodInput`<sup>Optional</sup> <a name="coolingPeriodInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriodInput"></a>

```typescript
public readonly coolingPeriodInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `coolingPeriod`<sup>Required</sup> <a name="coolingPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriod"></a>

```typescript
public readonly coolingPeriod: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxVolumeOntapConfigurationTieringPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a>

---


### FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList <a name="FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

new fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get"></a>

```typescript
public get(index: number): FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>[]

---


### FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference <a name="FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

new fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resetClients">resetClients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resetOptions">resetOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClients` <a name="resetClients" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resetClients"></a>

```typescript
public resetClients(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resetOptions"></a>

```typescript
public resetOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clientsInput">clientsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.optionsInput">optionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clients">clients</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.options">options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientsInput`<sup>Optional</sup> <a name="clientsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clientsInput"></a>

```typescript
public readonly clientsInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: string[];
```

- *Type:* string[]

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clients"></a>

```typescript
public readonly clients: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>

---


### FsxVolumeOpenZfsConfigurationNfsExportsList <a name="FsxVolumeOpenZfsConfigurationNfsExportsList" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

new fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.get"></a>

```typescript
public get(index: number): FsxVolumeOpenZfsConfigurationNfsExportsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxVolumeOpenZfsConfigurationNfsExports[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>[]

---


### FsxVolumeOpenZfsConfigurationNfsExportsOutputReference <a name="FsxVolumeOpenZfsConfigurationNfsExportsOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

new fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.putClientConfigurations">putClientConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resetClientConfigurations">resetClientConfigurations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientConfigurations` <a name="putClientConfigurations" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.putClientConfigurations"></a>

```typescript
public putClientConfigurations(value: IResolvable | FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.putClientConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>[]

---

##### `resetClientConfigurations` <a name="resetClientConfigurations" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resetClientConfigurations"></a>

```typescript
public resetClientConfigurations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurations">clientConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurationsInput">clientConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientConfigurations`<sup>Required</sup> <a name="clientConfigurations" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurations"></a>

```typescript
public readonly clientConfigurations: FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList</a>

---

##### `clientConfigurationsInput`<sup>Optional</sup> <a name="clientConfigurationsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurationsInput"></a>

```typescript
public readonly clientConfigurationsInput: IResolvable | FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxVolumeOpenZfsConfigurationNfsExports;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>

---


### FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference <a name="FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

new fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resetCopyStrategy">resetCopyStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resetSnapshotArn">resetSnapshotArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCopyStrategy` <a name="resetCopyStrategy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resetCopyStrategy"></a>

```typescript
public resetCopyStrategy(): void
```

##### `resetSnapshotArn` <a name="resetSnapshotArn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resetSnapshotArn"></a>

```typescript
public resetSnapshotArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategyInput">copyStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArnInput">snapshotArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategy">copyStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArn">snapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `copyStrategyInput`<sup>Optional</sup> <a name="copyStrategyInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategyInput"></a>

```typescript
public readonly copyStrategyInput: string;
```

- *Type:* string

---

##### `snapshotArnInput`<sup>Optional</sup> <a name="snapshotArnInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArnInput"></a>

```typescript
public readonly snapshotArnInput: string;
```

- *Type:* string

---

##### `copyStrategy`<sup>Required</sup> <a name="copyStrategy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategy"></a>

```typescript
public readonly copyStrategy: string;
```

- *Type:* string

---

##### `snapshotArn`<sup>Required</sup> <a name="snapshotArn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArn"></a>

```typescript
public readonly snapshotArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxVolumeOpenZfsConfigurationOriginSnapshot;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a>

---


### FsxVolumeOpenZfsConfigurationOutputReference <a name="FsxVolumeOpenZfsConfigurationOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

new fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putNfsExports">putNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putOriginSnapshot">putOriginSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putUserAndGroupQuotas">putUserAndGroupQuotas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetCopyTagsToSnapshots">resetCopyTagsToSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetDataCompressionType">resetDataCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetNfsExports">resetNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetOriginSnapshot">resetOriginSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetParentVolumeId">resetParentVolumeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetRecordSizeKiB">resetRecordSizeKiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetStorageCapacityQuotaGiB">resetStorageCapacityQuotaGiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetStorageCapacityReservationGiB">resetStorageCapacityReservationGiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetUserAndGroupQuotas">resetUserAndGroupQuotas</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNfsExports` <a name="putNfsExports" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putNfsExports"></a>

```typescript
public putNfsExports(value: IResolvable | FsxVolumeOpenZfsConfigurationNfsExports[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putNfsExports.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>[]

---

##### `putOriginSnapshot` <a name="putOriginSnapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putOriginSnapshot"></a>

```typescript
public putOriginSnapshot(value: FsxVolumeOpenZfsConfigurationOriginSnapshot): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putOriginSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a>

---

##### `putUserAndGroupQuotas` <a name="putUserAndGroupQuotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putUserAndGroupQuotas"></a>

```typescript
public putUserAndGroupQuotas(value: IResolvable | FsxVolumeOpenZfsConfigurationUserAndGroupQuotas[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putUserAndGroupQuotas.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>[]

---

##### `resetCopyTagsToSnapshots` <a name="resetCopyTagsToSnapshots" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetCopyTagsToSnapshots"></a>

```typescript
public resetCopyTagsToSnapshots(): void
```

##### `resetDataCompressionType` <a name="resetDataCompressionType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetDataCompressionType"></a>

```typescript
public resetDataCompressionType(): void
```

##### `resetNfsExports` <a name="resetNfsExports" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetNfsExports"></a>

```typescript
public resetNfsExports(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetOriginSnapshot` <a name="resetOriginSnapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetOriginSnapshot"></a>

```typescript
public resetOriginSnapshot(): void
```

##### `resetParentVolumeId` <a name="resetParentVolumeId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetParentVolumeId"></a>

```typescript
public resetParentVolumeId(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetRecordSizeKiB` <a name="resetRecordSizeKiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetRecordSizeKiB"></a>

```typescript
public resetRecordSizeKiB(): void
```

##### `resetStorageCapacityQuotaGiB` <a name="resetStorageCapacityQuotaGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetStorageCapacityQuotaGiB"></a>

```typescript
public resetStorageCapacityQuotaGiB(): void
```

##### `resetStorageCapacityReservationGiB` <a name="resetStorageCapacityReservationGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetStorageCapacityReservationGiB"></a>

```typescript
public resetStorageCapacityReservationGiB(): void
```

##### `resetUserAndGroupQuotas` <a name="resetUserAndGroupQuotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetUserAndGroupQuotas"></a>

```typescript
public resetUserAndGroupQuotas(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.nfsExports">nfsExports</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList">FsxVolumeOpenZfsConfigurationNfsExportsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshot">originSnapshot</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference">FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotas">userAndGroupQuotas</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList">FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshotsInput">copyTagsToSnapshotsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionTypeInput">dataCompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.nfsExportsInput">nfsExportsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.optionsInput">optionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshotInput">originSnapshotInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeIdInput">parentVolumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiBInput">recordSizeKiBInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiBInput">storageCapacityQuotaGiBInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiBInput">storageCapacityReservationGiBInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotasInput">userAndGroupQuotasInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshots">copyTagsToSnapshots</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionType">dataCompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.options">options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeId">parentVolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiB">recordSizeKiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiB">storageCapacityQuotaGiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiB">storageCapacityReservationGiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nfsExports`<sup>Required</sup> <a name="nfsExports" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.nfsExports"></a>

```typescript
public readonly nfsExports: FsxVolumeOpenZfsConfigurationNfsExportsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList">FsxVolumeOpenZfsConfigurationNfsExportsList</a>

---

##### `originSnapshot`<sup>Required</sup> <a name="originSnapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshot"></a>

```typescript
public readonly originSnapshot: FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference">FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference</a>

---

##### `userAndGroupQuotas`<sup>Required</sup> <a name="userAndGroupQuotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotas"></a>

```typescript
public readonly userAndGroupQuotas: FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList;
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList">FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList</a>

---

##### `copyTagsToSnapshotsInput`<sup>Optional</sup> <a name="copyTagsToSnapshotsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshotsInput"></a>

```typescript
public readonly copyTagsToSnapshotsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dataCompressionTypeInput`<sup>Optional</sup> <a name="dataCompressionTypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionTypeInput"></a>

```typescript
public readonly dataCompressionTypeInput: string;
```

- *Type:* string

---

##### `nfsExportsInput`<sup>Optional</sup> <a name="nfsExportsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.nfsExportsInput"></a>

```typescript
public readonly nfsExportsInput: IResolvable | FsxVolumeOpenZfsConfigurationNfsExports[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>[]

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: string[];
```

- *Type:* string[]

---

##### `originSnapshotInput`<sup>Optional</sup> <a name="originSnapshotInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshotInput"></a>

```typescript
public readonly originSnapshotInput: IResolvable | FsxVolumeOpenZfsConfigurationOriginSnapshot;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a>

---

##### `parentVolumeIdInput`<sup>Optional</sup> <a name="parentVolumeIdInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeIdInput"></a>

```typescript
public readonly parentVolumeIdInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `recordSizeKiBInput`<sup>Optional</sup> <a name="recordSizeKiBInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiBInput"></a>

```typescript
public readonly recordSizeKiBInput: number;
```

- *Type:* number

---

##### `storageCapacityQuotaGiBInput`<sup>Optional</sup> <a name="storageCapacityQuotaGiBInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiBInput"></a>

```typescript
public readonly storageCapacityQuotaGiBInput: number;
```

- *Type:* number

---

##### `storageCapacityReservationGiBInput`<sup>Optional</sup> <a name="storageCapacityReservationGiBInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiBInput"></a>

```typescript
public readonly storageCapacityReservationGiBInput: number;
```

- *Type:* number

---

##### `userAndGroupQuotasInput`<sup>Optional</sup> <a name="userAndGroupQuotasInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotasInput"></a>

```typescript
public readonly userAndGroupQuotasInput: IResolvable | FsxVolumeOpenZfsConfigurationUserAndGroupQuotas[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>[]

---

##### `copyTagsToSnapshots`<sup>Required</sup> <a name="copyTagsToSnapshots" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshots"></a>

```typescript
public readonly copyTagsToSnapshots: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dataCompressionType`<sup>Required</sup> <a name="dataCompressionType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionType"></a>

```typescript
public readonly dataCompressionType: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

---

##### `parentVolumeId`<sup>Required</sup> <a name="parentVolumeId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeId"></a>

```typescript
public readonly parentVolumeId: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `recordSizeKiB`<sup>Required</sup> <a name="recordSizeKiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiB"></a>

```typescript
public readonly recordSizeKiB: number;
```

- *Type:* number

---

##### `storageCapacityQuotaGiB`<sup>Required</sup> <a name="storageCapacityQuotaGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiB"></a>

```typescript
public readonly storageCapacityQuotaGiB: number;
```

- *Type:* number

---

##### `storageCapacityReservationGiB`<sup>Required</sup> <a name="storageCapacityReservationGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiB"></a>

```typescript
public readonly storageCapacityReservationGiB: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxVolumeOpenZfsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a>

---


### FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList <a name="FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

new fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get"></a>

```typescript
public get(index: number): FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxVolumeOpenZfsConfigurationUserAndGroupQuotas[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>[]

---


### FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference <a name="FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

new fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetStorageCapacityQuotaGiB">resetStorageCapacityQuotaGiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStorageCapacityQuotaGiB` <a name="resetStorageCapacityQuotaGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetStorageCapacityQuotaGiB"></a>

```typescript
public resetStorageCapacityQuotaGiB(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.idInput">idInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiBInput">storageCapacityQuotaGiBInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiB">storageCapacityQuotaGiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.idInput"></a>

```typescript
public readonly idInput: number;
```

- *Type:* number

---

##### `storageCapacityQuotaGiBInput`<sup>Optional</sup> <a name="storageCapacityQuotaGiBInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiBInput"></a>

```typescript
public readonly storageCapacityQuotaGiBInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `storageCapacityQuotaGiB`<sup>Required</sup> <a name="storageCapacityQuotaGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiB"></a>

```typescript
public readonly storageCapacityQuotaGiB: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxVolumeOpenZfsConfigurationUserAndGroupQuotas;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>

---


### FsxVolumeTagsList <a name="FsxVolumeTagsList" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

new fsxVolume.FsxVolumeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.get"></a>

```typescript
public get(index: number): FsxVolumeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxVolumeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>[]

---


### FsxVolumeTagsOutputReference <a name="FsxVolumeTagsOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer"></a>

```typescript
import { fsxVolume } from '@cdktn/provider-awscc'

new fsxVolume.FsxVolumeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxVolumeTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>

---



