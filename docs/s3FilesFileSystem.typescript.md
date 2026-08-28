# `s3FilesFileSystem` Submodule <a name="`s3FilesFileSystem` Submodule" id="@cdktn/provider-awscc.s3FilesFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3FilesFileSystem <a name="S3FilesFileSystem" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system awscc_s3files_file_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer"></a>

```typescript
import { s3FilesFileSystem } from '@cdktn/provider-awscc'

new s3FilesFileSystem.S3FilesFileSystem(scope: Construct, id: string, config: S3FilesFileSystemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig">S3FilesFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig">S3FilesFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putSynchronizationConfiguration">putSynchronizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetAcceptBucketWarning">resetAcceptBucketWarning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetSynchronizationConfiguration">resetSynchronizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSynchronizationConfiguration` <a name="putSynchronizationConfiguration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putSynchronizationConfiguration"></a>

```typescript
public putSynchronizationConfiguration(value: S3FilesFileSystemSynchronizationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putSynchronizationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putTags"></a>

```typescript
public putTags(value: IResolvable | S3FilesFileSystemTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>[]

---

##### `resetAcceptBucketWarning` <a name="resetAcceptBucketWarning" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetAcceptBucketWarning"></a>

```typescript
public resetAcceptBucketWarning(): void
```

##### `resetClientToken` <a name="resetClientToken" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetClientToken"></a>

```typescript
public resetClientToken(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetSynchronizationConfiguration` <a name="resetSynchronizationConfiguration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetSynchronizationConfiguration"></a>

```typescript
public resetSynchronizationConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3FilesFileSystem resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isConstruct"></a>

```typescript
import { s3FilesFileSystem } from '@cdktn/provider-awscc'

s3FilesFileSystem.S3FilesFileSystem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformElement"></a>

```typescript
import { s3FilesFileSystem } from '@cdktn/provider-awscc'

s3FilesFileSystem.S3FilesFileSystem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformResource"></a>

```typescript
import { s3FilesFileSystem } from '@cdktn/provider-awscc'

s3FilesFileSystem.S3FilesFileSystem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport"></a>

```typescript
import { s3FilesFileSystem } from '@cdktn/provider-awscc'

s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a S3FilesFileSystem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3FilesFileSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3FilesFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3FilesFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fileSystemArn">fileSystemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.synchronizationConfiguration">synchronizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference">S3FilesFileSystemSynchronizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList">S3FilesFileSystemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.acceptBucketWarningInput">acceptBucketWarningInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.clientTokenInput">clientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.synchronizationConfigurationInput">synchronizationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.acceptBucketWarning">acceptBucketWarning</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `fileSystemArn`<sup>Required</sup> <a name="fileSystemArn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fileSystemArn"></a>

```typescript
public readonly fileSystemArn: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `synchronizationConfiguration`<sup>Required</sup> <a name="synchronizationConfiguration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.synchronizationConfiguration"></a>

```typescript
public readonly synchronizationConfiguration: S3FilesFileSystemSynchronizationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference">S3FilesFileSystemSynchronizationConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tags"></a>

```typescript
public readonly tags: S3FilesFileSystemTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList">S3FilesFileSystemTagsList</a>

---

##### `acceptBucketWarningInput`<sup>Optional</sup> <a name="acceptBucketWarningInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.acceptBucketWarningInput"></a>

```typescript
public readonly acceptBucketWarningInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.clientTokenInput"></a>

```typescript
public readonly clientTokenInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `synchronizationConfigurationInput`<sup>Optional</sup> <a name="synchronizationConfigurationInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.synchronizationConfigurationInput"></a>

```typescript
public readonly synchronizationConfigurationInput: IResolvable | S3FilesFileSystemSynchronizationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | S3FilesFileSystemTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>[]

---

##### `acceptBucketWarning`<sup>Required</sup> <a name="acceptBucketWarning" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.acceptBucketWarning"></a>

```typescript
public readonly acceptBucketWarning: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3FilesFileSystemConfig <a name="S3FilesFileSystemConfig" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.Initializer"></a>

```typescript
import { s3FilesFileSystem } from '@cdktn/provider-awscc'

const s3FilesFileSystemConfig: s3FilesFileSystem.S3FilesFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#bucket S3FilesFileSystem#bucket}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#role_arn S3FilesFileSystem#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.acceptBucketWarning">acceptBucketWarning</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#accept_bucket_warning S3FilesFileSystem#accept_bucket_warning}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.clientToken">clientToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#client_token S3FilesFileSystem#client_token}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#kms_key_id S3FilesFileSystem#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#prefix S3FilesFileSystem#prefix}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.synchronizationConfiguration">synchronizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#synchronization_configuration S3FilesFileSystem#synchronization_configuration}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#tags S3FilesFileSystem#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#bucket S3FilesFileSystem#bucket}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#role_arn S3FilesFileSystem#role_arn}.

---

##### `acceptBucketWarning`<sup>Optional</sup> <a name="acceptBucketWarning" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.acceptBucketWarning"></a>

```typescript
public readonly acceptBucketWarning: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#accept_bucket_warning S3FilesFileSystem#accept_bucket_warning}.

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#client_token S3FilesFileSystem#client_token}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#kms_key_id S3FilesFileSystem#kms_key_id}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#prefix S3FilesFileSystem#prefix}.

---

##### `synchronizationConfiguration`<sup>Optional</sup> <a name="synchronizationConfiguration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.synchronizationConfiguration"></a>

```typescript
public readonly synchronizationConfiguration: S3FilesFileSystemSynchronizationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#synchronization_configuration S3FilesFileSystem#synchronization_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | S3FilesFileSystemTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#tags S3FilesFileSystem#tags}.

---

### S3FilesFileSystemSynchronizationConfiguration <a name="S3FilesFileSystemSynchronizationConfiguration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration.Initializer"></a>

```typescript
import { s3FilesFileSystem } from '@cdktn/provider-awscc'

const s3FilesFileSystemSynchronizationConfiguration: s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration.property.expirationDataRules">expirationDataRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#expiration_data_rules S3FilesFileSystem#expiration_data_rules}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration.property.importDataRules">importDataRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#import_data_rules S3FilesFileSystem#import_data_rules}. |

---

##### `expirationDataRules`<sup>Optional</sup> <a name="expirationDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration.property.expirationDataRules"></a>

```typescript
public readonly expirationDataRules: IResolvable | S3FilesFileSystemSynchronizationConfigurationExpirationDataRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#expiration_data_rules S3FilesFileSystem#expiration_data_rules}.

---

##### `importDataRules`<sup>Optional</sup> <a name="importDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration.property.importDataRules"></a>

```typescript
public readonly importDataRules: IResolvable | S3FilesFileSystemSynchronizationConfigurationImportDataRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#import_data_rules S3FilesFileSystem#import_data_rules}.

---

### S3FilesFileSystemSynchronizationConfigurationExpirationDataRules <a name="S3FilesFileSystemSynchronizationConfigurationExpirationDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules.Initializer"></a>

```typescript
import { s3FilesFileSystem } from '@cdktn/provider-awscc'

const s3FilesFileSystemSynchronizationConfigurationExpirationDataRules: s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules.property.daysAfterLastAccess">daysAfterLastAccess</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#days_after_last_access S3FilesFileSystem#days_after_last_access}. |

---

##### `daysAfterLastAccess`<sup>Optional</sup> <a name="daysAfterLastAccess" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules.property.daysAfterLastAccess"></a>

```typescript
public readonly daysAfterLastAccess: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#days_after_last_access S3FilesFileSystem#days_after_last_access}.

---

### S3FilesFileSystemSynchronizationConfigurationImportDataRules <a name="S3FilesFileSystemSynchronizationConfigurationImportDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.Initializer"></a>

```typescript
import { s3FilesFileSystem } from '@cdktn/provider-awscc'

const s3FilesFileSystemSynchronizationConfigurationImportDataRules: s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#prefix S3FilesFileSystem#prefix}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.sizeLessThan">sizeLessThan</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#size_less_than S3FilesFileSystem#size_less_than}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.trigger">trigger</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#trigger S3FilesFileSystem#trigger}. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#prefix S3FilesFileSystem#prefix}.

---

##### `sizeLessThan`<sup>Optional</sup> <a name="sizeLessThan" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.sizeLessThan"></a>

```typescript
public readonly sizeLessThan: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#size_less_than S3FilesFileSystem#size_less_than}.

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.trigger"></a>

```typescript
public readonly trigger: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#trigger S3FilesFileSystem#trigger}.

---

### S3FilesFileSystemTags <a name="S3FilesFileSystemTags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags.Initializer"></a>

```typescript
import { s3FilesFileSystem } from '@cdktn/provider-awscc'

const s3FilesFileSystemTags: s3FilesFileSystem.S3FilesFileSystemTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#key S3FilesFileSystem#key}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#value S3FilesFileSystem#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#key S3FilesFileSystem#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_file_system#value S3FilesFileSystem#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList <a name="S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer"></a>

```typescript
import { s3FilesFileSystem } from '@cdktn/provider-awscc'

new s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.get"></a>

```typescript
public get(index: number): S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3FilesFileSystemSynchronizationConfigurationExpirationDataRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>[]

---


### S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference <a name="S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer"></a>

```typescript
import { s3FilesFileSystem } from '@cdktn/provider-awscc'

new s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resetDaysAfterLastAccess">resetDaysAfterLastAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysAfterLastAccess` <a name="resetDaysAfterLastAccess" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resetDaysAfterLastAccess"></a>

```typescript
public resetDaysAfterLastAccess(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.daysAfterLastAccessInput">daysAfterLastAccessInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.daysAfterLastAccess">daysAfterLastAccess</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysAfterLastAccessInput`<sup>Optional</sup> <a name="daysAfterLastAccessInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.daysAfterLastAccessInput"></a>

```typescript
public readonly daysAfterLastAccessInput: number;
```

- *Type:* number

---

##### `daysAfterLastAccess`<sup>Required</sup> <a name="daysAfterLastAccess" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.daysAfterLastAccess"></a>

```typescript
public readonly daysAfterLastAccess: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3FilesFileSystemSynchronizationConfigurationExpirationDataRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>

---


### S3FilesFileSystemSynchronizationConfigurationImportDataRulesList <a name="S3FilesFileSystemSynchronizationConfigurationImportDataRulesList" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer"></a>

```typescript
import { s3FilesFileSystem } from '@cdktn/provider-awscc'

new s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.get"></a>

```typescript
public get(index: number): S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3FilesFileSystemSynchronizationConfigurationImportDataRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>[]

---


### S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference <a name="S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer"></a>

```typescript
import { s3FilesFileSystem } from '@cdktn/provider-awscc'

new s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetSizeLessThan">resetSizeLessThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetTrigger">resetTrigger</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetSizeLessThan` <a name="resetSizeLessThan" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetSizeLessThan"></a>

```typescript
public resetSizeLessThan(): void
```

##### `resetTrigger` <a name="resetTrigger" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetTrigger"></a>

```typescript
public resetTrigger(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.sizeLessThanInput">sizeLessThanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.triggerInput">triggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.sizeLessThan">sizeLessThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.trigger">trigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `sizeLessThanInput`<sup>Optional</sup> <a name="sizeLessThanInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.sizeLessThanInput"></a>

```typescript
public readonly sizeLessThanInput: number;
```

- *Type:* number

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.triggerInput"></a>

```typescript
public readonly triggerInput: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `sizeLessThan`<sup>Required</sup> <a name="sizeLessThan" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.sizeLessThan"></a>

```typescript
public readonly sizeLessThan: number;
```

- *Type:* number

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.trigger"></a>

```typescript
public readonly trigger: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3FilesFileSystemSynchronizationConfigurationImportDataRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>

---


### S3FilesFileSystemSynchronizationConfigurationOutputReference <a name="S3FilesFileSystemSynchronizationConfigurationOutputReference" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer"></a>

```typescript
import { s3FilesFileSystem } from '@cdktn/provider-awscc'

new s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putExpirationDataRules">putExpirationDataRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putImportDataRules">putImportDataRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resetExpirationDataRules">resetExpirationDataRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resetImportDataRules">resetImportDataRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpirationDataRules` <a name="putExpirationDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putExpirationDataRules"></a>

```typescript
public putExpirationDataRules(value: IResolvable | S3FilesFileSystemSynchronizationConfigurationExpirationDataRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putExpirationDataRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>[]

---

##### `putImportDataRules` <a name="putImportDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putImportDataRules"></a>

```typescript
public putImportDataRules(value: IResolvable | S3FilesFileSystemSynchronizationConfigurationImportDataRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putImportDataRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>[]

---

##### `resetExpirationDataRules` <a name="resetExpirationDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resetExpirationDataRules"></a>

```typescript
public resetExpirationDataRules(): void
```

##### `resetImportDataRules` <a name="resetImportDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resetImportDataRules"></a>

```typescript
public resetImportDataRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.expirationDataRules">expirationDataRules</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList">S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.importDataRules">importDataRules</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList">S3FilesFileSystemSynchronizationConfigurationImportDataRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.latestVersionNumber">latestVersionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.expirationDataRulesInput">expirationDataRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.importDataRulesInput">importDataRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expirationDataRules`<sup>Required</sup> <a name="expirationDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.expirationDataRules"></a>

```typescript
public readonly expirationDataRules: S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList">S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList</a>

---

##### `importDataRules`<sup>Required</sup> <a name="importDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.importDataRules"></a>

```typescript
public readonly importDataRules: S3FilesFileSystemSynchronizationConfigurationImportDataRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList">S3FilesFileSystemSynchronizationConfigurationImportDataRulesList</a>

---

##### `latestVersionNumber`<sup>Required</sup> <a name="latestVersionNumber" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.latestVersionNumber"></a>

```typescript
public readonly latestVersionNumber: number;
```

- *Type:* number

---

##### `expirationDataRulesInput`<sup>Optional</sup> <a name="expirationDataRulesInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.expirationDataRulesInput"></a>

```typescript
public readonly expirationDataRulesInput: IResolvable | S3FilesFileSystemSynchronizationConfigurationExpirationDataRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>[]

---

##### `importDataRulesInput`<sup>Optional</sup> <a name="importDataRulesInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.importDataRulesInput"></a>

```typescript
public readonly importDataRulesInput: IResolvable | S3FilesFileSystemSynchronizationConfigurationImportDataRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3FilesFileSystemSynchronizationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a>

---


### S3FilesFileSystemTagsList <a name="S3FilesFileSystemTagsList" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer"></a>

```typescript
import { s3FilesFileSystem } from '@cdktn/provider-awscc'

new s3FilesFileSystem.S3FilesFileSystemTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.get"></a>

```typescript
public get(index: number): S3FilesFileSystemTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3FilesFileSystemTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>[]

---


### S3FilesFileSystemTagsOutputReference <a name="S3FilesFileSystemTagsOutputReference" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer"></a>

```typescript
import { s3FilesFileSystem } from '@cdktn/provider-awscc'

new s3FilesFileSystem.S3FilesFileSystemTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3FilesFileSystemTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>

---



