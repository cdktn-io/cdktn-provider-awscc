# `rdsGlobalCluster` Submodule <a name="`rdsGlobalCluster` Submodule" id="@cdktn/provider-awscc.rdsGlobalCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsGlobalCluster <a name="RdsGlobalCluster" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_global_cluster awscc_rds_global_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.Initializer"></a>

```typescript
import { rdsGlobalCluster } from '@cdktn/provider-awscc'

new rdsGlobalCluster.RdsGlobalCluster(scope: Construct, id: string, config?: RdsGlobalClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig">RdsGlobalClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig">RdsGlobalClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.resetEngineLifecycleSupport">resetEngineLifecycleSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.resetGlobalClusterIdentifier">resetGlobalClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.resetSourceDbClusterIdentifier">resetSourceDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.resetStorageEncrypted">resetStorageEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.putTags"></a>

```typescript
public putTags(value: IResolvable | RdsGlobalClusterTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTags">RdsGlobalClusterTags</a>[]

---

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetEngine` <a name="resetEngine" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.resetEngine"></a>

```typescript
public resetEngine(): void
```

##### `resetEngineLifecycleSupport` <a name="resetEngineLifecycleSupport" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.resetEngineLifecycleSupport"></a>

```typescript
public resetEngineLifecycleSupport(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetGlobalClusterIdentifier` <a name="resetGlobalClusterIdentifier" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.resetGlobalClusterIdentifier"></a>

```typescript
public resetGlobalClusterIdentifier(): void
```

##### `resetSourceDbClusterIdentifier` <a name="resetSourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.resetSourceDbClusterIdentifier"></a>

```typescript
public resetSourceDbClusterIdentifier(): void
```

##### `resetStorageEncrypted` <a name="resetStorageEncrypted" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.resetStorageEncrypted"></a>

```typescript
public resetStorageEncrypted(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RdsGlobalCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.isConstruct"></a>

```typescript
import { rdsGlobalCluster } from '@cdktn/provider-awscc'

rdsGlobalCluster.RdsGlobalCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.isTerraformElement"></a>

```typescript
import { rdsGlobalCluster } from '@cdktn/provider-awscc'

rdsGlobalCluster.RdsGlobalCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.isTerraformResource"></a>

```typescript
import { rdsGlobalCluster } from '@cdktn/provider-awscc'

rdsGlobalCluster.RdsGlobalCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.generateConfigForImport"></a>

```typescript
import { rdsGlobalCluster } from '@cdktn/provider-awscc'

rdsGlobalCluster.RdsGlobalCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RdsGlobalCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsGlobalCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsGlobalCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_global_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RdsGlobalCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.globalEndpoint">globalEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference">RdsGlobalClusterGlobalEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList">RdsGlobalClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.engineLifecycleSupportInput">engineLifecycleSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.globalClusterIdentifierInput">globalClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.sourceDbClusterIdentifierInput">sourceDbClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.storageEncryptedInput">storageEncryptedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTags">RdsGlobalClusterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.engineLifecycleSupport">engineLifecycleSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.globalClusterIdentifier">globalClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.sourceDbClusterIdentifier">sourceDbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.storageEncrypted">storageEncrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `globalEndpoint`<sup>Required</sup> <a name="globalEndpoint" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.globalEndpoint"></a>

```typescript
public readonly globalEndpoint: RdsGlobalClusterGlobalEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference">RdsGlobalClusterGlobalEndpointOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.tags"></a>

```typescript
public readonly tags: RdsGlobalClusterTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList">RdsGlobalClusterTagsList</a>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `engineLifecycleSupportInput`<sup>Optional</sup> <a name="engineLifecycleSupportInput" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.engineLifecycleSupportInput"></a>

```typescript
public readonly engineLifecycleSupportInput: string;
```

- *Type:* string

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `globalClusterIdentifierInput`<sup>Optional</sup> <a name="globalClusterIdentifierInput" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.globalClusterIdentifierInput"></a>

```typescript
public readonly globalClusterIdentifierInput: string;
```

- *Type:* string

---

##### `sourceDbClusterIdentifierInput`<sup>Optional</sup> <a name="sourceDbClusterIdentifierInput" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.sourceDbClusterIdentifierInput"></a>

```typescript
public readonly sourceDbClusterIdentifierInput: string;
```

- *Type:* string

---

##### `storageEncryptedInput`<sup>Optional</sup> <a name="storageEncryptedInput" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.storageEncryptedInput"></a>

```typescript
public readonly storageEncryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | RdsGlobalClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTags">RdsGlobalClusterTags</a>[]

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineLifecycleSupport`<sup>Required</sup> <a name="engineLifecycleSupport" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.engineLifecycleSupport"></a>

```typescript
public readonly engineLifecycleSupport: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `globalClusterIdentifier`<sup>Required</sup> <a name="globalClusterIdentifier" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.globalClusterIdentifier"></a>

```typescript
public readonly globalClusterIdentifier: string;
```

- *Type:* string

---

##### `sourceDbClusterIdentifier`<sup>Required</sup> <a name="sourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.sourceDbClusterIdentifier"></a>

```typescript
public readonly sourceDbClusterIdentifier: string;
```

- *Type:* string

---

##### `storageEncrypted`<sup>Required</sup> <a name="storageEncrypted" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.storageEncrypted"></a>

```typescript
public readonly storageEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsGlobalClusterConfig <a name="RdsGlobalClusterConfig" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.Initializer"></a>

```typescript
import { rdsGlobalCluster } from '@cdktn/provider-awscc'

const rdsGlobalClusterConfig: rdsGlobalCluster.RdsGlobalClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | The deletion protection setting for the new global database. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.engine">engine</a></code> | <code>string</code> | The name of the database engine to be used for this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.engineLifecycleSupport">engineLifecycleSupport</a></code> | <code>string</code> | The life cycle type of the global cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | The version number of the database engine to use. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.globalClusterIdentifier">globalClusterIdentifier</a></code> | <code>string</code> | The cluster identifier of the new global database cluster. This parameter is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.sourceDbClusterIdentifier">sourceDbClusterIdentifier</a></code> | <code>string</code> | The Amazon Resource Name (ARN) to use as the primary cluster of the global database. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.storageEncrypted">storageEncrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | The storage encryption setting for the new global database cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTags">RdsGlobalClusterTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The deletion protection setting for the new global database.

The global database can't be deleted when deletion protection is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_global_cluster#deletion_protection RdsGlobalCluster#deletion_protection}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

The name of the database engine to be used for this DB cluster.

Valid Values: aurora (for MySQL 5.6-compatible Aurora), aurora-mysql (for MySQL 5.7-compatible Aurora).
If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_global_cluster#engine RdsGlobalCluster#engine}

---

##### `engineLifecycleSupport`<sup>Optional</sup> <a name="engineLifecycleSupport" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.engineLifecycleSupport"></a>

```typescript
public readonly engineLifecycleSupport: string;
```

- *Type:* string

The life cycle type of the global cluster.

You can use this setting to enroll your global cluster into Amazon RDS Extended Support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_global_cluster#engine_lifecycle_support RdsGlobalCluster#engine_lifecycle_support}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

The version number of the database engine to use.

If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_global_cluster#engine_version RdsGlobalCluster#engine_version}

---

##### `globalClusterIdentifier`<sup>Optional</sup> <a name="globalClusterIdentifier" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.globalClusterIdentifier"></a>

```typescript
public readonly globalClusterIdentifier: string;
```

- *Type:* string

The cluster identifier of the new global database cluster. This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_global_cluster#global_cluster_identifier RdsGlobalCluster#global_cluster_identifier}

---

##### `sourceDbClusterIdentifier`<sup>Optional</sup> <a name="sourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.sourceDbClusterIdentifier"></a>

```typescript
public readonly sourceDbClusterIdentifier: string;
```

- *Type:* string

The Amazon Resource Name (ARN) to use as the primary cluster of the global database.

This parameter is optional. This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_global_cluster#source_db_cluster_identifier RdsGlobalCluster#source_db_cluster_identifier}

---

##### `storageEncrypted`<sup>Optional</sup> <a name="storageEncrypted" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.storageEncrypted"></a>

```typescript
public readonly storageEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The storage encryption setting for the new global database cluster.

If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_global_cluster#storage_encrypted RdsGlobalCluster#storage_encrypted}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | RdsGlobalClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTags">RdsGlobalClusterTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_global_cluster#tags RdsGlobalCluster#tags}

---

### RdsGlobalClusterGlobalEndpoint <a name="RdsGlobalClusterGlobalEndpoint" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpoint.Initializer"></a>

```typescript
import { rdsGlobalCluster } from '@cdktn/provider-awscc'

const rdsGlobalClusterGlobalEndpoint: rdsGlobalCluster.RdsGlobalClusterGlobalEndpoint = { ... }
```


### RdsGlobalClusterTags <a name="RdsGlobalClusterTags" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTags.Initializer"></a>

```typescript
import { rdsGlobalCluster } from '@cdktn/provider-awscc'

const rdsGlobalClusterTags: rdsGlobalCluster.RdsGlobalClusterTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_global_cluster#key RdsGlobalCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_global_cluster#value RdsGlobalCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsGlobalClusterGlobalEndpointOutputReference <a name="RdsGlobalClusterGlobalEndpointOutputReference" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.Initializer"></a>

```typescript
import { rdsGlobalCluster } from '@cdktn/provider-awscc'

new rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpoint">RdsGlobalClusterGlobalEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RdsGlobalClusterGlobalEndpoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterGlobalEndpoint">RdsGlobalClusterGlobalEndpoint</a>

---


### RdsGlobalClusterTagsList <a name="RdsGlobalClusterTagsList" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.Initializer"></a>

```typescript
import { rdsGlobalCluster } from '@cdktn/provider-awscc'

new rdsGlobalCluster.RdsGlobalClusterTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.get"></a>

```typescript
public get(index: number): RdsGlobalClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTags">RdsGlobalClusterTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsGlobalClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTags">RdsGlobalClusterTags</a>[]

---


### RdsGlobalClusterTagsOutputReference <a name="RdsGlobalClusterTagsOutputReference" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.Initializer"></a>

```typescript
import { rdsGlobalCluster } from '@cdktn/provider-awscc'

new rdsGlobalCluster.RdsGlobalClusterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTags">RdsGlobalClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsGlobalClusterTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsGlobalCluster.RdsGlobalClusterTags">RdsGlobalClusterTags</a>

---



