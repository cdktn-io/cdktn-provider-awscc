# `ssmResourceDataSync` Submodule <a name="`ssmResourceDataSync` Submodule" id="@cdktn/provider-awscc.ssmResourceDataSync"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmResourceDataSync <a name="SsmResourceDataSync" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync awscc_ssm_resource_data_sync}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer"></a>

```typescript
import { ssmResourceDataSync } from '@cdktn/provider-awscc'

new ssmResourceDataSync.SsmResourceDataSync(scope: Construct, id: string, config: SsmResourceDataSyncConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig">SsmResourceDataSyncConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig">SsmResourceDataSyncConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putS3Destination">putS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putSyncSource">putSyncSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketPrefix">resetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketRegion">resetBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetS3Destination">resetS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncFormat">resetSyncFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncSource">resetSyncSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncType">resetSyncType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putS3Destination` <a name="putS3Destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putS3Destination"></a>

```typescript
public putS3Destination(value: SsmResourceDataSyncS3Destination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putS3Destination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

---

##### `putSyncSource` <a name="putSyncSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putSyncSource"></a>

```typescript
public putSyncSource(value: SsmResourceDataSyncSyncSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putSyncSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a>

---

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetBucketPrefix` <a name="resetBucketPrefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketPrefix"></a>

```typescript
public resetBucketPrefix(): void
```

##### `resetBucketRegion` <a name="resetBucketRegion" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketRegion"></a>

```typescript
public resetBucketRegion(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetS3Destination` <a name="resetS3Destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetS3Destination"></a>

```typescript
public resetS3Destination(): void
```

##### `resetSyncFormat` <a name="resetSyncFormat" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncFormat"></a>

```typescript
public resetSyncFormat(): void
```

##### `resetSyncSource` <a name="resetSyncSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncSource"></a>

```typescript
public resetSyncSource(): void
```

##### `resetSyncType` <a name="resetSyncType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncType"></a>

```typescript
public resetSyncType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmResourceDataSync resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isConstruct"></a>

```typescript
import { ssmResourceDataSync } from '@cdktn/provider-awscc'

ssmResourceDataSync.SsmResourceDataSync.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement"></a>

```typescript
import { ssmResourceDataSync } from '@cdktn/provider-awscc'

ssmResourceDataSync.SsmResourceDataSync.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource"></a>

```typescript
import { ssmResourceDataSync } from '@cdktn/provider-awscc'

ssmResourceDataSync.SsmResourceDataSync.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport"></a>

```typescript
import { ssmResourceDataSync } from '@cdktn/provider-awscc'

ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SsmResourceDataSync resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmResourceDataSync to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmResourceDataSync that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmResourceDataSync to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.s3Destination">s3Destination</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference">SsmResourceDataSyncS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncSource">syncSource</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference">SsmResourceDataSyncSyncSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketRegionInput">bucketRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.s3DestinationInput">s3DestinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncFormatInput">syncFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncNameInput">syncNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncSourceInput">syncSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncTypeInput">syncTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketRegion">bucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncFormat">syncFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncName">syncName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncType">syncType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `s3Destination`<sup>Required</sup> <a name="s3Destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.s3Destination"></a>

```typescript
public readonly s3Destination: SsmResourceDataSyncS3DestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference">SsmResourceDataSyncS3DestinationOutputReference</a>

---

##### `syncSource`<sup>Required</sup> <a name="syncSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncSource"></a>

```typescript
public readonly syncSource: SsmResourceDataSyncSyncSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference">SsmResourceDataSyncSyncSourceOutputReference</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketPrefixInput"></a>

```typescript
public readonly bucketPrefixInput: string;
```

- *Type:* string

---

##### `bucketRegionInput`<sup>Optional</sup> <a name="bucketRegionInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketRegionInput"></a>

```typescript
public readonly bucketRegionInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `s3DestinationInput`<sup>Optional</sup> <a name="s3DestinationInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.s3DestinationInput"></a>

```typescript
public readonly s3DestinationInput: IResolvable | SsmResourceDataSyncS3Destination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

---

##### `syncFormatInput`<sup>Optional</sup> <a name="syncFormatInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncFormatInput"></a>

```typescript
public readonly syncFormatInput: string;
```

- *Type:* string

---

##### `syncNameInput`<sup>Optional</sup> <a name="syncNameInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncNameInput"></a>

```typescript
public readonly syncNameInput: string;
```

- *Type:* string

---

##### `syncSourceInput`<sup>Optional</sup> <a name="syncSourceInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncSourceInput"></a>

```typescript
public readonly syncSourceInput: IResolvable | SsmResourceDataSyncSyncSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a>

---

##### `syncTypeInput`<sup>Optional</sup> <a name="syncTypeInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncTypeInput"></a>

```typescript
public readonly syncTypeInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `bucketRegion`<sup>Required</sup> <a name="bucketRegion" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketRegion"></a>

```typescript
public readonly bucketRegion: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `syncFormat`<sup>Required</sup> <a name="syncFormat" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncFormat"></a>

```typescript
public readonly syncFormat: string;
```

- *Type:* string

---

##### `syncName`<sup>Required</sup> <a name="syncName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncName"></a>

```typescript
public readonly syncName: string;
```

- *Type:* string

---

##### `syncType`<sup>Required</sup> <a name="syncType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncType"></a>

```typescript
public readonly syncType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmResourceDataSyncConfig <a name="SsmResourceDataSyncConfig" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.Initializer"></a>

```typescript
import { ssmResourceDataSync } from '@cdktn/provider-awscc'

const ssmResourceDataSyncConfig: ssmResourceDataSync.SsmResourceDataSyncConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncName">syncName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#sync_name SsmResourceDataSync#sync_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_prefix SsmResourceDataSync#bucket_prefix}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketRegion">bucketRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_region SsmResourceDataSync#bucket_region}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.s3Destination">s3Destination</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#s3_destination SsmResourceDataSync#s3_destination}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncFormat">syncFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncSource">syncSource</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#sync_source SsmResourceDataSync#sync_source}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncType">syncType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#sync_type SsmResourceDataSync#sync_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `syncName`<sup>Required</sup> <a name="syncName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncName"></a>

```typescript
public readonly syncName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#sync_name SsmResourceDataSync#sync_name}.

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}.

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_prefix SsmResourceDataSync#bucket_prefix}.

---

##### `bucketRegion`<sup>Optional</sup> <a name="bucketRegion" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketRegion"></a>

```typescript
public readonly bucketRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_region SsmResourceDataSync#bucket_region}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}.

---

##### `s3Destination`<sup>Optional</sup> <a name="s3Destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.s3Destination"></a>

```typescript
public readonly s3Destination: SsmResourceDataSyncS3Destination;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#s3_destination SsmResourceDataSync#s3_destination}.

---

##### `syncFormat`<sup>Optional</sup> <a name="syncFormat" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncFormat"></a>

```typescript
public readonly syncFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}.

---

##### `syncSource`<sup>Optional</sup> <a name="syncSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncSource"></a>

```typescript
public readonly syncSource: SsmResourceDataSyncSyncSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#sync_source SsmResourceDataSync#sync_source}.

---

##### `syncType`<sup>Optional</sup> <a name="syncType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncType"></a>

```typescript
public readonly syncType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#sync_type SsmResourceDataSync#sync_type}.

---

### SsmResourceDataSyncS3Destination <a name="SsmResourceDataSyncS3Destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.Initializer"></a>

```typescript
import { ssmResourceDataSync } from '@cdktn/provider-awscc'

const ssmResourceDataSyncS3Destination: ssmResourceDataSync.SsmResourceDataSyncS3Destination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_prefix SsmResourceDataSync#bucket_prefix}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketRegion">bucketRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_region SsmResourceDataSync#bucket_region}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.syncFormat">syncFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}.

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_prefix SsmResourceDataSync#bucket_prefix}.

---

##### `bucketRegion`<sup>Optional</sup> <a name="bucketRegion" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketRegion"></a>

```typescript
public readonly bucketRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_region SsmResourceDataSync#bucket_region}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}.

---

##### `syncFormat`<sup>Optional</sup> <a name="syncFormat" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.syncFormat"></a>

```typescript
public readonly syncFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}.

---

### SsmResourceDataSyncSyncSource <a name="SsmResourceDataSyncSyncSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.Initializer"></a>

```typescript
import { ssmResourceDataSync } from '@cdktn/provider-awscc'

const ssmResourceDataSyncSyncSource: ssmResourceDataSync.SsmResourceDataSyncSyncSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.awsOrganizationsSource">awsOrganizationsSource</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#aws_organizations_source SsmResourceDataSync#aws_organizations_source}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.includeFutureRegions">includeFutureRegions</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#include_future_regions SsmResourceDataSync#include_future_regions}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.sourceRegions">sourceRegions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#source_regions SsmResourceDataSync#source_regions}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#source_type SsmResourceDataSync#source_type}. |

---

##### `awsOrganizationsSource`<sup>Optional</sup> <a name="awsOrganizationsSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.awsOrganizationsSource"></a>

```typescript
public readonly awsOrganizationsSource: SsmResourceDataSyncSyncSourceAwsOrganizationsSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#aws_organizations_source SsmResourceDataSync#aws_organizations_source}.

---

##### `includeFutureRegions`<sup>Optional</sup> <a name="includeFutureRegions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.includeFutureRegions"></a>

```typescript
public readonly includeFutureRegions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#include_future_regions SsmResourceDataSync#include_future_regions}.

---

##### `sourceRegions`<sup>Optional</sup> <a name="sourceRegions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.sourceRegions"></a>

```typescript
public readonly sourceRegions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#source_regions SsmResourceDataSync#source_regions}.

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#source_type SsmResourceDataSync#source_type}.

---

### SsmResourceDataSyncSyncSourceAwsOrganizationsSource <a name="SsmResourceDataSyncSyncSourceAwsOrganizationsSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource.Initializer"></a>

```typescript
import { ssmResourceDataSync } from '@cdktn/provider-awscc'

const ssmResourceDataSyncSyncSourceAwsOrganizationsSource: ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#organizational_units SsmResourceDataSync#organizational_units}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource.property.organizationSourceType">organizationSourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#organization_source_type SsmResourceDataSync#organization_source_type}. |

---

##### `organizationalUnits`<sup>Optional</sup> <a name="organizationalUnits" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#organizational_units SsmResourceDataSync#organizational_units}.

---

##### `organizationSourceType`<sup>Optional</sup> <a name="organizationSourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource.property.organizationSourceType"></a>

```typescript
public readonly organizationSourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#organization_source_type SsmResourceDataSync#organization_source_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmResourceDataSyncS3DestinationOutputReference <a name="SsmResourceDataSyncS3DestinationOutputReference" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer"></a>

```typescript
import { ssmResourceDataSync } from '@cdktn/provider-awscc'

new ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketPrefix">resetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketRegion">resetBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetSyncFormat">resetSyncFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetBucketPrefix` <a name="resetBucketPrefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketPrefix"></a>

```typescript
public resetBucketPrefix(): void
```

##### `resetBucketRegion` <a name="resetBucketRegion" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketRegion"></a>

```typescript
public resetBucketRegion(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetSyncFormat` <a name="resetSyncFormat" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetSyncFormat"></a>

```typescript
public resetSyncFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketRegionInput">bucketRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormatInput">syncFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketRegion">bucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormat">syncFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefixInput"></a>

```typescript
public readonly bucketPrefixInput: string;
```

- *Type:* string

---

##### `bucketRegionInput`<sup>Optional</sup> <a name="bucketRegionInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketRegionInput"></a>

```typescript
public readonly bucketRegionInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `syncFormatInput`<sup>Optional</sup> <a name="syncFormatInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormatInput"></a>

```typescript
public readonly syncFormatInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `bucketRegion`<sup>Required</sup> <a name="bucketRegion" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketRegion"></a>

```typescript
public readonly bucketRegion: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `syncFormat`<sup>Required</sup> <a name="syncFormat" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormat"></a>

```typescript
public readonly syncFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmResourceDataSyncS3Destination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

---


### SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference <a name="SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer"></a>

```typescript
import { ssmResourceDataSync } from '@cdktn/provider-awscc'

new ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resetOrganizationalUnits">resetOrganizationalUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resetOrganizationSourceType">resetOrganizationSourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOrganizationalUnits` <a name="resetOrganizationalUnits" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resetOrganizationalUnits"></a>

```typescript
public resetOrganizationalUnits(): void
```

##### `resetOrganizationSourceType` <a name="resetOrganizationSourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resetOrganizationSourceType"></a>

```typescript
public resetOrganizationSourceType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnitsInput">organizationalUnitsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceTypeInput">organizationSourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceType">organizationSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `organizationalUnitsInput`<sup>Optional</sup> <a name="organizationalUnitsInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnitsInput"></a>

```typescript
public readonly organizationalUnitsInput: string[];
```

- *Type:* string[]

---

##### `organizationSourceTypeInput`<sup>Optional</sup> <a name="organizationSourceTypeInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceTypeInput"></a>

```typescript
public readonly organizationSourceTypeInput: string;
```

- *Type:* string

---

##### `organizationalUnits`<sup>Required</sup> <a name="organizationalUnits" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

---

##### `organizationSourceType`<sup>Required</sup> <a name="organizationSourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceType"></a>

```typescript
public readonly organizationSourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmResourceDataSyncSyncSourceAwsOrganizationsSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a>

---


### SsmResourceDataSyncSyncSourceOutputReference <a name="SsmResourceDataSyncSyncSourceOutputReference" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.Initializer"></a>

```typescript
import { ssmResourceDataSync } from '@cdktn/provider-awscc'

new ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.putAwsOrganizationsSource">putAwsOrganizationsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetAwsOrganizationsSource">resetAwsOrganizationsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetIncludeFutureRegions">resetIncludeFutureRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetSourceRegions">resetSourceRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetSourceType">resetSourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsOrganizationsSource` <a name="putAwsOrganizationsSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.putAwsOrganizationsSource"></a>

```typescript
public putAwsOrganizationsSource(value: SsmResourceDataSyncSyncSourceAwsOrganizationsSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.putAwsOrganizationsSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a>

---

##### `resetAwsOrganizationsSource` <a name="resetAwsOrganizationsSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetAwsOrganizationsSource"></a>

```typescript
public resetAwsOrganizationsSource(): void
```

##### `resetIncludeFutureRegions` <a name="resetIncludeFutureRegions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetIncludeFutureRegions"></a>

```typescript
public resetIncludeFutureRegions(): void
```

##### `resetSourceRegions` <a name="resetSourceRegions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetSourceRegions"></a>

```typescript
public resetSourceRegions(): void
```

##### `resetSourceType` <a name="resetSourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetSourceType"></a>

```typescript
public resetSourceType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSource">awsOrganizationsSource</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference">SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSourceInput">awsOrganizationsSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegionsInput">includeFutureRegionsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceRegionsInput">sourceRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegions">includeFutureRegions</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceRegions">sourceRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsOrganizationsSource`<sup>Required</sup> <a name="awsOrganizationsSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSource"></a>

```typescript
public readonly awsOrganizationsSource: SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference">SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference</a>

---

##### `awsOrganizationsSourceInput`<sup>Optional</sup> <a name="awsOrganizationsSourceInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSourceInput"></a>

```typescript
public readonly awsOrganizationsSourceInput: IResolvable | SsmResourceDataSyncSyncSourceAwsOrganizationsSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a>

---

##### `includeFutureRegionsInput`<sup>Optional</sup> <a name="includeFutureRegionsInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegionsInput"></a>

```typescript
public readonly includeFutureRegionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sourceRegionsInput`<sup>Optional</sup> <a name="sourceRegionsInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceRegionsInput"></a>

```typescript
public readonly sourceRegionsInput: string[];
```

- *Type:* string[]

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `includeFutureRegions`<sup>Required</sup> <a name="includeFutureRegions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegions"></a>

```typescript
public readonly includeFutureRegions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sourceRegions`<sup>Required</sup> <a name="sourceRegions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceRegions"></a>

```typescript
public readonly sourceRegions: string[];
```

- *Type:* string[]

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmResourceDataSyncSyncSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a>

---



