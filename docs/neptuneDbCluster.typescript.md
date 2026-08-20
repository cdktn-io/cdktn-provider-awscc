# `neptuneDbCluster` Submodule <a name="`neptuneDbCluster` Submodule" id="@cdktn/provider-awscc.neptuneDbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptuneDbCluster <a name="NeptuneDbCluster" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster awscc_neptune_db_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer"></a>

```typescript
import { neptuneDbCluster } from '@cdktn/provider-awscc'

new neptuneDbCluster.NeptuneDbCluster(scope: Construct, id: string, config?: NeptuneDbClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig">NeptuneDbClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig">NeptuneDbClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putAssociatedRoles">putAssociatedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putServerlessScalingConfiguration">putServerlessScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetAssociatedRoles">resetAssociatedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetBackupRetentionPeriod">resetBackupRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetCopyTagsToSnapshot">resetCopyTagsToSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbClusterIdentifier">resetDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbClusterParameterGroupName">resetDbClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbInstanceParameterGroupName">resetDbInstanceParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbPort">resetDbPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbSubnetGroupName">resetDbSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetEnableCloudwatchLogsExports">resetEnableCloudwatchLogsExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetGlobalClusterIdentifier">resetGlobalClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetIamAuthEnabled">resetIamAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetPreferredBackupWindow">resetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetRestoreToTime">resetRestoreToTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetRestoreType">resetRestoreType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetServerlessScalingConfiguration">resetServerlessScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetSnapshotIdentifier">resetSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetSourceDbClusterIdentifier">resetSourceDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetStorageEncrypted">resetStorageEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetUseLatestRestorableTime">resetUseLatestRestorableTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssociatedRoles` <a name="putAssociatedRoles" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putAssociatedRoles"></a>

```typescript
public putAssociatedRoles(value: IResolvable | NeptuneDbClusterAssociatedRoles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putAssociatedRoles.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>[]

---

##### `putServerlessScalingConfiguration` <a name="putServerlessScalingConfiguration" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putServerlessScalingConfiguration"></a>

```typescript
public putServerlessScalingConfiguration(value: NeptuneDbClusterServerlessScalingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putServerlessScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putTags"></a>

```typescript
public putTags(value: IResolvable | NeptuneDbClusterTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>[]

---

##### `resetAssociatedRoles` <a name="resetAssociatedRoles" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetAssociatedRoles"></a>

```typescript
public resetAssociatedRoles(): void
```

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetAvailabilityZones"></a>

```typescript
public resetAvailabilityZones(): void
```

##### `resetBackupRetentionPeriod` <a name="resetBackupRetentionPeriod" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetBackupRetentionPeriod"></a>

```typescript
public resetBackupRetentionPeriod(): void
```

##### `resetCopyTagsToSnapshot` <a name="resetCopyTagsToSnapshot" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetCopyTagsToSnapshot"></a>

```typescript
public resetCopyTagsToSnapshot(): void
```

##### `resetDbClusterIdentifier` <a name="resetDbClusterIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbClusterIdentifier"></a>

```typescript
public resetDbClusterIdentifier(): void
```

##### `resetDbClusterParameterGroupName` <a name="resetDbClusterParameterGroupName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbClusterParameterGroupName"></a>

```typescript
public resetDbClusterParameterGroupName(): void
```

##### `resetDbInstanceParameterGroupName` <a name="resetDbInstanceParameterGroupName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbInstanceParameterGroupName"></a>

```typescript
public resetDbInstanceParameterGroupName(): void
```

##### `resetDbPort` <a name="resetDbPort" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbPort"></a>

```typescript
public resetDbPort(): void
```

##### `resetDbSubnetGroupName` <a name="resetDbSubnetGroupName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbSubnetGroupName"></a>

```typescript
public resetDbSubnetGroupName(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetEnableCloudwatchLogsExports` <a name="resetEnableCloudwatchLogsExports" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetEnableCloudwatchLogsExports"></a>

```typescript
public resetEnableCloudwatchLogsExports(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetGlobalClusterIdentifier` <a name="resetGlobalClusterIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetGlobalClusterIdentifier"></a>

```typescript
public resetGlobalClusterIdentifier(): void
```

##### `resetIamAuthEnabled` <a name="resetIamAuthEnabled" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetIamAuthEnabled"></a>

```typescript
public resetIamAuthEnabled(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetNetworkType"></a>

```typescript
public resetNetworkType(): void
```

##### `resetPreferredBackupWindow` <a name="resetPreferredBackupWindow" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetPreferredBackupWindow"></a>

```typescript
public resetPreferredBackupWindow(): void
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetPreferredMaintenanceWindow"></a>

```typescript
public resetPreferredMaintenanceWindow(): void
```

##### `resetRestoreToTime` <a name="resetRestoreToTime" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetRestoreToTime"></a>

```typescript
public resetRestoreToTime(): void
```

##### `resetRestoreType` <a name="resetRestoreType" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetRestoreType"></a>

```typescript
public resetRestoreType(): void
```

##### `resetServerlessScalingConfiguration` <a name="resetServerlessScalingConfiguration" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetServerlessScalingConfiguration"></a>

```typescript
public resetServerlessScalingConfiguration(): void
```

##### `resetSnapshotIdentifier` <a name="resetSnapshotIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetSnapshotIdentifier"></a>

```typescript
public resetSnapshotIdentifier(): void
```

##### `resetSourceDbClusterIdentifier` <a name="resetSourceDbClusterIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetSourceDbClusterIdentifier"></a>

```typescript
public resetSourceDbClusterIdentifier(): void
```

##### `resetStorageEncrypted` <a name="resetStorageEncrypted" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetStorageEncrypted"></a>

```typescript
public resetStorageEncrypted(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUseLatestRestorableTime` <a name="resetUseLatestRestorableTime" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetUseLatestRestorableTime"></a>

```typescript
public resetUseLatestRestorableTime(): void
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetVpcSecurityGroupIds"></a>

```typescript
public resetVpcSecurityGroupIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NeptuneDbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isConstruct"></a>

```typescript
import { neptuneDbCluster } from '@cdktn/provider-awscc'

neptuneDbCluster.NeptuneDbCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isTerraformElement"></a>

```typescript
import { neptuneDbCluster } from '@cdktn/provider-awscc'

neptuneDbCluster.NeptuneDbCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isTerraformResource"></a>

```typescript
import { neptuneDbCluster } from '@cdktn/provider-awscc'

neptuneDbCluster.NeptuneDbCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.generateConfigForImport"></a>

```typescript
import { neptuneDbCluster } from '@cdktn/provider-awscc'

neptuneDbCluster.NeptuneDbCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NeptuneDbCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NeptuneDbCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NeptuneDbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NeptuneDbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.associatedRoles">associatedRoles</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList">NeptuneDbClusterAssociatedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.clusterResourceId">clusterResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.readEndpoint">readEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.serverlessScalingConfiguration">serverlessScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference">NeptuneDbClusterServerlessScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList">NeptuneDbClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.associatedRolesInput">associatedRolesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.backupRetentionPeriodInput">backupRetentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.copyTagsToSnapshotInput">copyTagsToSnapshotInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterIdentifierInput">dbClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterParameterGroupNameInput">dbClusterParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbInstanceParameterGroupNameInput">dbInstanceParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbPortInput">dbPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbSubnetGroupNameInput">dbSubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.enableCloudwatchLogsExportsInput">enableCloudwatchLogsExportsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.globalClusterIdentifierInput">globalClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.iamAuthEnabledInput">iamAuthEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredBackupWindowInput">preferredBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreToTimeInput">restoreToTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreTypeInput">restoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.serverlessScalingConfigurationInput">serverlessScalingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.snapshotIdentifierInput">snapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.sourceDbClusterIdentifierInput">sourceDbClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.storageEncryptedInput">storageEncryptedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.useLatestRestorableTimeInput">useLatestRestorableTimeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterParameterGroupName">dbClusterParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbInstanceParameterGroupName">dbInstanceParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbPort">dbPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.enableCloudwatchLogsExports">enableCloudwatchLogsExports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.globalClusterIdentifier">globalClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.iamAuthEnabled">iamAuthEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreToTime">restoreToTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreType">restoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.sourceDbClusterIdentifier">sourceDbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.storageEncrypted">storageEncrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.useLatestRestorableTime">useLatestRestorableTime</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `associatedRoles`<sup>Required</sup> <a name="associatedRoles" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.associatedRoles"></a>

```typescript
public readonly associatedRoles: NeptuneDbClusterAssociatedRolesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList">NeptuneDbClusterAssociatedRolesList</a>

---

##### `clusterResourceId`<sup>Required</sup> <a name="clusterResourceId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.clusterResourceId"></a>

```typescript
public readonly clusterResourceId: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `readEndpoint`<sup>Required</sup> <a name="readEndpoint" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.readEndpoint"></a>

```typescript
public readonly readEndpoint: string;
```

- *Type:* string

---

##### `serverlessScalingConfiguration`<sup>Required</sup> <a name="serverlessScalingConfiguration" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.serverlessScalingConfiguration"></a>

```typescript
public readonly serverlessScalingConfiguration: NeptuneDbClusterServerlessScalingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference">NeptuneDbClusterServerlessScalingConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.tags"></a>

```typescript
public readonly tags: NeptuneDbClusterTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList">NeptuneDbClusterTagsList</a>

---

##### `associatedRolesInput`<sup>Optional</sup> <a name="associatedRolesInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.associatedRolesInput"></a>

```typescript
public readonly associatedRolesInput: IResolvable | NeptuneDbClusterAssociatedRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>[]

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.availabilityZonesInput"></a>

```typescript
public readonly availabilityZonesInput: string[];
```

- *Type:* string[]

---

##### `backupRetentionPeriodInput`<sup>Optional</sup> <a name="backupRetentionPeriodInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.backupRetentionPeriodInput"></a>

```typescript
public readonly backupRetentionPeriodInput: number;
```

- *Type:* number

---

##### `copyTagsToSnapshotInput`<sup>Optional</sup> <a name="copyTagsToSnapshotInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.copyTagsToSnapshotInput"></a>

```typescript
public readonly copyTagsToSnapshotInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dbClusterIdentifierInput`<sup>Optional</sup> <a name="dbClusterIdentifierInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterIdentifierInput"></a>

```typescript
public readonly dbClusterIdentifierInput: string;
```

- *Type:* string

---

##### `dbClusterParameterGroupNameInput`<sup>Optional</sup> <a name="dbClusterParameterGroupNameInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterParameterGroupNameInput"></a>

```typescript
public readonly dbClusterParameterGroupNameInput: string;
```

- *Type:* string

---

##### `dbInstanceParameterGroupNameInput`<sup>Optional</sup> <a name="dbInstanceParameterGroupNameInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbInstanceParameterGroupNameInput"></a>

```typescript
public readonly dbInstanceParameterGroupNameInput: string;
```

- *Type:* string

---

##### `dbPortInput`<sup>Optional</sup> <a name="dbPortInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbPortInput"></a>

```typescript
public readonly dbPortInput: number;
```

- *Type:* number

---

##### `dbSubnetGroupNameInput`<sup>Optional</sup> <a name="dbSubnetGroupNameInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbSubnetGroupNameInput"></a>

```typescript
public readonly dbSubnetGroupNameInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableCloudwatchLogsExportsInput`<sup>Optional</sup> <a name="enableCloudwatchLogsExportsInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.enableCloudwatchLogsExportsInput"></a>

```typescript
public readonly enableCloudwatchLogsExportsInput: string[];
```

- *Type:* string[]

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `globalClusterIdentifierInput`<sup>Optional</sup> <a name="globalClusterIdentifierInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.globalClusterIdentifierInput"></a>

```typescript
public readonly globalClusterIdentifierInput: string;
```

- *Type:* string

---

##### `iamAuthEnabledInput`<sup>Optional</sup> <a name="iamAuthEnabledInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.iamAuthEnabledInput"></a>

```typescript
public readonly iamAuthEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `preferredBackupWindowInput`<sup>Optional</sup> <a name="preferredBackupWindowInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredBackupWindowInput"></a>

```typescript
public readonly preferredBackupWindowInput: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredMaintenanceWindowInput"></a>

```typescript
public readonly preferredMaintenanceWindowInput: string;
```

- *Type:* string

---

##### `restoreToTimeInput`<sup>Optional</sup> <a name="restoreToTimeInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreToTimeInput"></a>

```typescript
public readonly restoreToTimeInput: string;
```

- *Type:* string

---

##### `restoreTypeInput`<sup>Optional</sup> <a name="restoreTypeInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreTypeInput"></a>

```typescript
public readonly restoreTypeInput: string;
```

- *Type:* string

---

##### `serverlessScalingConfigurationInput`<sup>Optional</sup> <a name="serverlessScalingConfigurationInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.serverlessScalingConfigurationInput"></a>

```typescript
public readonly serverlessScalingConfigurationInput: IResolvable | NeptuneDbClusterServerlessScalingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a>

---

##### `snapshotIdentifierInput`<sup>Optional</sup> <a name="snapshotIdentifierInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.snapshotIdentifierInput"></a>

```typescript
public readonly snapshotIdentifierInput: string;
```

- *Type:* string

---

##### `sourceDbClusterIdentifierInput`<sup>Optional</sup> <a name="sourceDbClusterIdentifierInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.sourceDbClusterIdentifierInput"></a>

```typescript
public readonly sourceDbClusterIdentifierInput: string;
```

- *Type:* string

---

##### `storageEncryptedInput`<sup>Optional</sup> <a name="storageEncryptedInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.storageEncryptedInput"></a>

```typescript
public readonly storageEncryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NeptuneDbClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>[]

---

##### `useLatestRestorableTimeInput`<sup>Optional</sup> <a name="useLatestRestorableTimeInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.useLatestRestorableTimeInput"></a>

```typescript
public readonly useLatestRestorableTimeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.vpcSecurityGroupIdsInput"></a>

```typescript
public readonly vpcSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="backupRetentionPeriod" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.backupRetentionPeriod"></a>

```typescript
public readonly backupRetentionPeriod: number;
```

- *Type:* number

---

##### `copyTagsToSnapshot`<sup>Required</sup> <a name="copyTagsToSnapshot" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.copyTagsToSnapshot"></a>

```typescript
public readonly copyTagsToSnapshot: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterIdentifier"></a>

```typescript
public readonly dbClusterIdentifier: string;
```

- *Type:* string

---

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="dbClusterParameterGroupName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterParameterGroupName"></a>

```typescript
public readonly dbClusterParameterGroupName: string;
```

- *Type:* string

---

##### `dbInstanceParameterGroupName`<sup>Required</sup> <a name="dbInstanceParameterGroupName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbInstanceParameterGroupName"></a>

```typescript
public readonly dbInstanceParameterGroupName: string;
```

- *Type:* string

---

##### `dbPort`<sup>Required</sup> <a name="dbPort" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbPort"></a>

```typescript
public readonly dbPort: number;
```

- *Type:* number

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="dbSubnetGroupName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbSubnetGroupName"></a>

```typescript
public readonly dbSubnetGroupName: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableCloudwatchLogsExports`<sup>Required</sup> <a name="enableCloudwatchLogsExports" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.enableCloudwatchLogsExports"></a>

```typescript
public readonly enableCloudwatchLogsExports: string[];
```

- *Type:* string[]

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `globalClusterIdentifier`<sup>Required</sup> <a name="globalClusterIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.globalClusterIdentifier"></a>

```typescript
public readonly globalClusterIdentifier: string;
```

- *Type:* string

---

##### `iamAuthEnabled`<sup>Required</sup> <a name="iamAuthEnabled" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.iamAuthEnabled"></a>

```typescript
public readonly iamAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredBackupWindow"></a>

```typescript
public readonly preferredBackupWindow: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `restoreToTime`<sup>Required</sup> <a name="restoreToTime" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreToTime"></a>

```typescript
public readonly restoreToTime: string;
```

- *Type:* string

---

##### `restoreType`<sup>Required</sup> <a name="restoreType" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreType"></a>

```typescript
public readonly restoreType: string;
```

- *Type:* string

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="snapshotIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.snapshotIdentifier"></a>

```typescript
public readonly snapshotIdentifier: string;
```

- *Type:* string

---

##### `sourceDbClusterIdentifier`<sup>Required</sup> <a name="sourceDbClusterIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.sourceDbClusterIdentifier"></a>

```typescript
public readonly sourceDbClusterIdentifier: string;
```

- *Type:* string

---

##### `storageEncrypted`<sup>Required</sup> <a name="storageEncrypted" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.storageEncrypted"></a>

```typescript
public readonly storageEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useLatestRestorableTime`<sup>Required</sup> <a name="useLatestRestorableTime" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.useLatestRestorableTime"></a>

```typescript
public readonly useLatestRestorableTime: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NeptuneDbClusterAssociatedRoles <a name="NeptuneDbClusterAssociatedRoles" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles.Initializer"></a>

```typescript
import { neptuneDbCluster } from '@cdktn/provider-awscc'

const neptuneDbClusterAssociatedRoles: neptuneDbCluster.NeptuneDbClusterAssociatedRoles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles.property.featureName">featureName</a></code> | <code>string</code> | The name of the feature associated with the AWS Identity and Access Management (IAM) role. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster. |

---

##### `featureName`<sup>Optional</sup> <a name="featureName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles.property.featureName"></a>

```typescript
public readonly featureName: string;
```

- *Type:* string

The name of the feature associated with the AWS Identity and Access Management (IAM) role.

For the list of supported feature names, see DBEngineVersion in the Amazon Neptune API Reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#feature_name NeptuneDbCluster#feature_name}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#role_arn NeptuneDbCluster#role_arn}

---

### NeptuneDbClusterConfig <a name="NeptuneDbClusterConfig" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.Initializer"></a>

```typescript
import { neptuneDbCluster } from '@cdktn/provider-awscc'

const neptuneDbClusterConfig: neptuneDbCluster.NeptuneDbClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.associatedRoles">associatedRoles</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>[]</code> | Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Provides the list of EC2 Availability Zones that instances in the DB cluster can be created in. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>number</code> | Specifies the number of days for which automatic DB snapshots are retained. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>boolean \| cdktn.IResolvable</code> | A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>string</code> | The DB cluster identifier. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbClusterParameterGroupName">dbClusterParameterGroupName</a></code> | <code>string</code> | Provides the name of the DB cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbInstanceParameterGroupName">dbInstanceParameterGroupName</a></code> | <code>string</code> | The name of the DB parameter group to apply to all instances of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbPort">dbPort</a></code> | <code>number</code> | The port number on which the DB instances in the DB cluster accept connections. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>string</code> | Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether or not the DB cluster has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.enableCloudwatchLogsExports">enableCloudwatchLogsExports</a></code> | <code>string[]</code> | Specifies a list of log types that are enabled for export to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | Indicates the database engine version. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.globalClusterIdentifier">globalClusterIdentifier</a></code> | <code>string</code> | The ID of the Neptune global database to which this new DB cluster should be added. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.iamAuthEnabled">iamAuthEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.networkType">networkType</a></code> | <code>string</code> | The network type of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>string</code> | Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.restoreToTime">restoreToTime</a></code> | <code>string</code> | Creates a new DB cluster from a DB snapshot or DB cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.restoreType">restoreType</a></code> | <code>string</code> | Creates a new DB cluster from a DB snapshot or DB cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.serverlessScalingConfiguration">serverlessScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a></code> | Contains the scaling configuration used by the Neptune Serverless Instances within this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>string</code> | Specifies the identifier for a DB cluster snapshot. Must match the identifier of an existing snapshot. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.sourceDbClusterIdentifier">sourceDbClusterIdentifier</a></code> | <code>string</code> | Creates a new DB cluster from a DB snapshot or DB cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.storageEncrypted">storageEncrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the DB cluster is encrypted. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>[]</code> | The tags assigned to this cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.useLatestRestorableTime">useLatestRestorableTime</a></code> | <code>boolean \| cdktn.IResolvable</code> | Creates a new DB cluster from a DB snapshot or DB cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | Provides a list of VPC security groups that the DB cluster belongs to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `associatedRoles`<sup>Optional</sup> <a name="associatedRoles" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.associatedRoles"></a>

```typescript
public readonly associatedRoles: IResolvable | NeptuneDbClusterAssociatedRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>[]

Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster.

IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#associated_roles NeptuneDbCluster#associated_roles}

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Provides the list of EC2 Availability Zones that instances in the DB cluster can be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#availability_zones NeptuneDbCluster#availability_zones}

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="backupRetentionPeriod" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.backupRetentionPeriod"></a>

```typescript
public readonly backupRetentionPeriod: number;
```

- *Type:* number

Specifies the number of days for which automatic DB snapshots are retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#backup_retention_period NeptuneDbCluster#backup_retention_period}

---

##### `copyTagsToSnapshot`<sup>Optional</sup> <a name="copyTagsToSnapshot" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.copyTagsToSnapshot"></a>

```typescript
public readonly copyTagsToSnapshot: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster.

The default behaviour is not to copy them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#copy_tags_to_snapshot NeptuneDbCluster#copy_tags_to_snapshot}

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbClusterIdentifier"></a>

```typescript
public readonly dbClusterIdentifier: string;
```

- *Type:* string

The DB cluster identifier.

Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#db_cluster_identifier NeptuneDbCluster#db_cluster_identifier}

---

##### `dbClusterParameterGroupName`<sup>Optional</sup> <a name="dbClusterParameterGroupName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbClusterParameterGroupName"></a>

```typescript
public readonly dbClusterParameterGroupName: string;
```

- *Type:* string

Provides the name of the DB cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#db_cluster_parameter_group_name NeptuneDbCluster#db_cluster_parameter_group_name}

---

##### `dbInstanceParameterGroupName`<sup>Optional</sup> <a name="dbInstanceParameterGroupName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbInstanceParameterGroupName"></a>

```typescript
public readonly dbInstanceParameterGroupName: string;
```

- *Type:* string

The name of the DB parameter group to apply to all instances of the DB cluster.

Used only in case of a major EngineVersion upgrade request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#db_instance_parameter_group_name NeptuneDbCluster#db_instance_parameter_group_name}

---

##### `dbPort`<sup>Optional</sup> <a name="dbPort" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbPort"></a>

```typescript
public readonly dbPort: number;
```

- *Type:* number

The port number on which the DB instances in the DB cluster accept connections.

If not specified, the default port used is `8182`. 

Note: `Port` property will soon be deprecated from this resource. Please update existing templates to rename it with new property `DBPort` having same functionalities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#db_port NeptuneDbCluster#db_port}

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="dbSubnetGroupName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbSubnetGroupName"></a>

```typescript
public readonly dbSubnetGroupName: string;
```

- *Type:* string

Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#db_subnet_group_name NeptuneDbCluster#db_subnet_group_name}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether or not the DB cluster has deletion protection enabled.

The database can't be deleted when deletion protection is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#deletion_protection NeptuneDbCluster#deletion_protection}

---

##### `enableCloudwatchLogsExports`<sup>Optional</sup> <a name="enableCloudwatchLogsExports" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.enableCloudwatchLogsExports"></a>

```typescript
public readonly enableCloudwatchLogsExports: string[];
```

- *Type:* string[]

Specifies a list of log types that are enabled for export to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#enable_cloudwatch_logs_exports NeptuneDbCluster#enable_cloudwatch_logs_exports}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

Indicates the database engine version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#engine_version NeptuneDbCluster#engine_version}

---

##### `globalClusterIdentifier`<sup>Optional</sup> <a name="globalClusterIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.globalClusterIdentifier"></a>

```typescript
public readonly globalClusterIdentifier: string;
```

- *Type:* string

The ID of the Neptune global database to which this new DB cluster should be added.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#global_cluster_identifier NeptuneDbCluster#global_cluster_identifier}

---

##### `iamAuthEnabled`<sup>Optional</sup> <a name="iamAuthEnabled" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.iamAuthEnabled"></a>

```typescript
public readonly iamAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#iam_auth_enabled NeptuneDbCluster#iam_auth_enabled}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef.

If you enable the StorageEncrypted property but don't specify this property, the default KMS key is used. If you specify this property, you must set the StorageEncrypted property to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#kms_key_id NeptuneDbCluster#kms_key_id}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

The network type of the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#network_type NeptuneDbCluster#network_type}

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.preferredBackupWindow"></a>

```typescript
public readonly preferredBackupWindow: string;
```

- *Type:* string

Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#preferred_backup_window NeptuneDbCluster#preferred_backup_window}

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#preferred_maintenance_window NeptuneDbCluster#preferred_maintenance_window}

---

##### `restoreToTime`<sup>Optional</sup> <a name="restoreToTime" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.restoreToTime"></a>

```typescript
public readonly restoreToTime: string;
```

- *Type:* string

Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#restore_to_time NeptuneDbCluster#restore_to_time}

---

##### `restoreType`<sup>Optional</sup> <a name="restoreType" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.restoreType"></a>

```typescript
public readonly restoreType: string;
```

- *Type:* string

Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#restore_type NeptuneDbCluster#restore_type}

---

##### `serverlessScalingConfiguration`<sup>Optional</sup> <a name="serverlessScalingConfiguration" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.serverlessScalingConfiguration"></a>

```typescript
public readonly serverlessScalingConfiguration: NeptuneDbClusterServerlessScalingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a>

Contains the scaling configuration used by the Neptune Serverless Instances within this DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#serverless_scaling_configuration NeptuneDbCluster#serverless_scaling_configuration}

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="snapshotIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.snapshotIdentifier"></a>

```typescript
public readonly snapshotIdentifier: string;
```

- *Type:* string

Specifies the identifier for a DB cluster snapshot. Must match the identifier of an existing snapshot.

After you restore a DB cluster using a SnapshotIdentifier, you must specify the same SnapshotIdentifier for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed.

However, if you don't specify the SnapshotIdentifier, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, the DB cluster is restored from the snapshot specified by the SnapshotIdentifier, and the original DB cluster is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#snapshot_identifier NeptuneDbCluster#snapshot_identifier}

---

##### `sourceDbClusterIdentifier`<sup>Optional</sup> <a name="sourceDbClusterIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.sourceDbClusterIdentifier"></a>

```typescript
public readonly sourceDbClusterIdentifier: string;
```

- *Type:* string

Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#source_db_cluster_identifier NeptuneDbCluster#source_db_cluster_identifier}

---

##### `storageEncrypted`<sup>Optional</sup> <a name="storageEncrypted" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.storageEncrypted"></a>

```typescript
public readonly storageEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the DB cluster is encrypted.

If you specify the KmsKeyId property, then you must enable encryption and set this property to true.

If you enable the StorageEncrypted property but don't specify KmsKeyId property, then the default KMS key is used. If you specify KmsKeyId property, then that KMS Key is used to encrypt the database instances in the DB cluster.

If you specify the SourceDBClusterIdentifier property and don't specify this property or disable it. The value is inherited from the source DB cluster, and if the DB cluster is encrypted, the KmsKeyId property from the source cluster is used.

If you specify the DBSnapshotIdentifier and don't specify this property or disable it. The value is inherited from the snapshot, and the specified KmsKeyId property from the snapshot is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#storage_encrypted NeptuneDbCluster#storage_encrypted}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | NeptuneDbClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>[]

The tags assigned to this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#tags NeptuneDbCluster#tags}

---

##### `useLatestRestorableTime`<sup>Optional</sup> <a name="useLatestRestorableTime" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.useLatestRestorableTime"></a>

```typescript
public readonly useLatestRestorableTime: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#use_latest_restorable_time NeptuneDbCluster#use_latest_restorable_time}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

Provides a list of VPC security groups that the DB cluster belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#vpc_security_group_ids NeptuneDbCluster#vpc_security_group_ids}

---

### NeptuneDbClusterServerlessScalingConfiguration <a name="NeptuneDbClusterServerlessScalingConfiguration" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration.Initializer"></a>

```typescript
import { neptuneDbCluster } from '@cdktn/provider-awscc'

const neptuneDbClusterServerlessScalingConfiguration: neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | The maximum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration.property.minCapacity">minCapacity</a></code> | <code>number</code> | The minimum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster. |

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

The maximum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster.

You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on. The smallest value you can use is 2.5, whereas the largest is 128.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#max_capacity NeptuneDbCluster#max_capacity}

---

##### `minCapacity`<sup>Optional</sup> <a name="minCapacity" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration.property.minCapacity"></a>

```typescript
public readonly minCapacity: number;
```

- *Type:* number

The minimum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster.

You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on. The smallest value you can use is 1, whereas the largest is 128.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#min_capacity NeptuneDbCluster#min_capacity}

---

### NeptuneDbClusterTags <a name="NeptuneDbClusterTags" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags.Initializer"></a>

```typescript
import { neptuneDbCluster } from '@cdktn/provider-awscc'

const neptuneDbClusterTags: neptuneDbCluster.NeptuneDbClusterTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#key NeptuneDbCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/neptune_db_cluster#value NeptuneDbCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NeptuneDbClusterAssociatedRolesList <a name="NeptuneDbClusterAssociatedRolesList" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer"></a>

```typescript
import { neptuneDbCluster } from '@cdktn/provider-awscc'

new neptuneDbCluster.NeptuneDbClusterAssociatedRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.get"></a>

```typescript
public get(index: number): NeptuneDbClusterAssociatedRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NeptuneDbClusterAssociatedRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>[]

---


### NeptuneDbClusterAssociatedRolesOutputReference <a name="NeptuneDbClusterAssociatedRolesOutputReference" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer"></a>

```typescript
import { neptuneDbCluster } from '@cdktn/provider-awscc'

new neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resetFeatureName">resetFeatureName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFeatureName` <a name="resetFeatureName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resetFeatureName"></a>

```typescript
public resetFeatureName(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.featureNameInput">featureNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.featureName">featureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `featureNameInput`<sup>Optional</sup> <a name="featureNameInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.featureNameInput"></a>

```typescript
public readonly featureNameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.featureName"></a>

```typescript
public readonly featureName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NeptuneDbClusterAssociatedRoles;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>

---


### NeptuneDbClusterServerlessScalingConfigurationOutputReference <a name="NeptuneDbClusterServerlessScalingConfigurationOutputReference" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer"></a>

```typescript
import { neptuneDbCluster } from '@cdktn/provider-awscc'

new neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resetMinCapacity">resetMinCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resetMaxCapacity"></a>

```typescript
public resetMaxCapacity(): void
```

##### `resetMinCapacity` <a name="resetMinCapacity" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resetMinCapacity"></a>

```typescript
public resetMinCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.minCapacityInput">minCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.minCapacity">minCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```typescript
public readonly maxCapacityInput: number;
```

- *Type:* number

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.minCapacityInput"></a>

```typescript
public readonly minCapacityInput: number;
```

- *Type:* number

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.minCapacity"></a>

```typescript
public readonly minCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NeptuneDbClusterServerlessScalingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a>

---


### NeptuneDbClusterTagsList <a name="NeptuneDbClusterTagsList" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer"></a>

```typescript
import { neptuneDbCluster } from '@cdktn/provider-awscc'

new neptuneDbCluster.NeptuneDbClusterTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.get"></a>

```typescript
public get(index: number): NeptuneDbClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NeptuneDbClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>[]

---


### NeptuneDbClusterTagsOutputReference <a name="NeptuneDbClusterTagsOutputReference" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer"></a>

```typescript
import { neptuneDbCluster } from '@cdktn/provider-awscc'

new neptuneDbCluster.NeptuneDbClusterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NeptuneDbClusterTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>

---



