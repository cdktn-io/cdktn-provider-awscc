# `memorydbCluster` Submodule <a name="`memorydbCluster` Submodule" id="@cdktn/provider-awscc.memorydbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MemorydbCluster <a name="MemorydbCluster" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster awscc_memorydb_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer"></a>

```typescript
import { memorydbCluster } from '@cdktn/provider-awscc'

new memorydbCluster.MemorydbCluster(scope: Construct, id: string, config: MemorydbClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig">MemorydbClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig">MemorydbClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putClusterEndpoint">putClusterEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetAutoMinorVersionUpgrade">resetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetClusterEndpoint">resetClusterEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetDataTiering">resetDataTiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetFinalSnapshotName">resetFinalSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetIpDiscovery">resetIpDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetMultiRegionClusterName">resetMultiRegionClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNumReplicasPerShard">resetNumReplicasPerShard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNumShards">resetNumShards</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetParameterGroupName">resetParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotArns">resetSnapshotArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotRetentionLimit">resetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotWindow">resetSnapshotWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnsTopicArn">resetSnsTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnsTopicStatus">resetSnsTopicStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSubnetGroupName">resetSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetTlsEnabled">resetTlsEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClusterEndpoint` <a name="putClusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putClusterEndpoint"></a>

```typescript
public putClusterEndpoint(value: MemorydbClusterClusterEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putClusterEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putTags"></a>

```typescript
public putTags(value: IResolvable | MemorydbClusterTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>[]

---

##### `resetAutoMinorVersionUpgrade` <a name="resetAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetAutoMinorVersionUpgrade"></a>

```typescript
public resetAutoMinorVersionUpgrade(): void
```

##### `resetClusterEndpoint` <a name="resetClusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetClusterEndpoint"></a>

```typescript
public resetClusterEndpoint(): void
```

##### `resetDataTiering` <a name="resetDataTiering" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetDataTiering"></a>

```typescript
public resetDataTiering(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEngine` <a name="resetEngine" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetEngine"></a>

```typescript
public resetEngine(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetFinalSnapshotName` <a name="resetFinalSnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetFinalSnapshotName"></a>

```typescript
public resetFinalSnapshotName(): void
```

##### `resetIpDiscovery` <a name="resetIpDiscovery" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetIpDiscovery"></a>

```typescript
public resetIpDiscovery(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetMultiRegionClusterName` <a name="resetMultiRegionClusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetMultiRegionClusterName"></a>

```typescript
public resetMultiRegionClusterName(): void
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNetworkType"></a>

```typescript
public resetNetworkType(): void
```

##### `resetNumReplicasPerShard` <a name="resetNumReplicasPerShard" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNumReplicasPerShard"></a>

```typescript
public resetNumReplicasPerShard(): void
```

##### `resetNumShards` <a name="resetNumShards" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNumShards"></a>

```typescript
public resetNumShards(): void
```

##### `resetParameterGroupName` <a name="resetParameterGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetParameterGroupName"></a>

```typescript
public resetParameterGroupName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSnapshotArns` <a name="resetSnapshotArns" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotArns"></a>

```typescript
public resetSnapshotArns(): void
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotName"></a>

```typescript
public resetSnapshotName(): void
```

##### `resetSnapshotRetentionLimit` <a name="resetSnapshotRetentionLimit" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotRetentionLimit"></a>

```typescript
public resetSnapshotRetentionLimit(): void
```

##### `resetSnapshotWindow` <a name="resetSnapshotWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotWindow"></a>

```typescript
public resetSnapshotWindow(): void
```

##### `resetSnsTopicArn` <a name="resetSnsTopicArn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnsTopicArn"></a>

```typescript
public resetSnsTopicArn(): void
```

##### `resetSnsTopicStatus` <a name="resetSnsTopicStatus" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnsTopicStatus"></a>

```typescript
public resetSnsTopicStatus(): void
```

##### `resetSubnetGroupName` <a name="resetSubnetGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSubnetGroupName"></a>

```typescript
public resetSubnetGroupName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTlsEnabled` <a name="resetTlsEnabled" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetTlsEnabled"></a>

```typescript
public resetTlsEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MemorydbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isConstruct"></a>

```typescript
import { memorydbCluster } from '@cdktn/provider-awscc'

memorydbCluster.MemorydbCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformElement"></a>

```typescript
import { memorydbCluster } from '@cdktn/provider-awscc'

memorydbCluster.MemorydbCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformResource"></a>

```typescript
import { memorydbCluster } from '@cdktn/provider-awscc'

memorydbCluster.MemorydbCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport"></a>

```typescript
import { memorydbCluster } from '@cdktn/provider-awscc'

memorydbCluster.MemorydbCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MemorydbCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MemorydbCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MemorydbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MemorydbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterEndpoint">clusterEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference">MemorydbClusterClusterEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupStatus">parameterGroupStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList">MemorydbClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.aclNameInput">aclNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgradeInput">autoMinorVersionUpgradeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterEndpointInput">clusterEndpointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dataTieringInput">dataTieringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.finalSnapshotNameInput">finalSnapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.ipDiscoveryInput">ipDiscoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.multiRegionClusterNameInput">multiRegionClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.nodeTypeInput">nodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numReplicasPerShardInput">numReplicasPerShardInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numShardsInput">numShardsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupNameInput">parameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotArnsInput">snapshotArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotNameInput">snapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimitInput">snapshotRetentionLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotWindowInput">snapshotWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicStatusInput">snsTopicStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.subnetGroupNameInput">subnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tlsEnabledInput">tlsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.aclName">aclName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dataTiering">dataTiering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.finalSnapshotName">finalSnapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.ipDiscovery">ipDiscovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.maintenanceWindow">maintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.multiRegionClusterName">multiRegionClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numReplicasPerShard">numReplicasPerShard</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numShards">numShards</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupName">parameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotArns">snapshotArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotName">snapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotWindow">snapshotWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicStatus">snsTopicStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.subnetGroupName">subnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tlsEnabled">tlsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `clusterEndpoint`<sup>Required</sup> <a name="clusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterEndpoint"></a>

```typescript
public readonly clusterEndpoint: MemorydbClusterClusterEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference">MemorydbClusterClusterEndpointOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parameterGroupStatus`<sup>Required</sup> <a name="parameterGroupStatus" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupStatus"></a>

```typescript
public readonly parameterGroupStatus: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tags"></a>

```typescript
public readonly tags: MemorydbClusterTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList">MemorydbClusterTagsList</a>

---

##### `aclNameInput`<sup>Optional</sup> <a name="aclNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.aclNameInput"></a>

```typescript
public readonly aclNameInput: string;
```

- *Type:* string

---

##### `autoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="autoMinorVersionUpgradeInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgradeInput"></a>

```typescript
public readonly autoMinorVersionUpgradeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `clusterEndpointInput`<sup>Optional</sup> <a name="clusterEndpointInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterEndpointInput"></a>

```typescript
public readonly clusterEndpointInput: IResolvable | MemorydbClusterClusterEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `dataTieringInput`<sup>Optional</sup> <a name="dataTieringInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dataTieringInput"></a>

```typescript
public readonly dataTieringInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `finalSnapshotNameInput`<sup>Optional</sup> <a name="finalSnapshotNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.finalSnapshotNameInput"></a>

```typescript
public readonly finalSnapshotNameInput: string;
```

- *Type:* string

---

##### `ipDiscoveryInput`<sup>Optional</sup> <a name="ipDiscoveryInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.ipDiscoveryInput"></a>

```typescript
public readonly ipDiscoveryInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: string;
```

- *Type:* string

---

##### `multiRegionClusterNameInput`<sup>Optional</sup> <a name="multiRegionClusterNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.multiRegionClusterNameInput"></a>

```typescript
public readonly multiRegionClusterNameInput: string;
```

- *Type:* string

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.nodeTypeInput"></a>

```typescript
public readonly nodeTypeInput: string;
```

- *Type:* string

---

##### `numReplicasPerShardInput`<sup>Optional</sup> <a name="numReplicasPerShardInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numReplicasPerShardInput"></a>

```typescript
public readonly numReplicasPerShardInput: number;
```

- *Type:* number

---

##### `numShardsInput`<sup>Optional</sup> <a name="numShardsInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numShardsInput"></a>

```typescript
public readonly numShardsInput: number;
```

- *Type:* number

---

##### `parameterGroupNameInput`<sup>Optional</sup> <a name="parameterGroupNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupNameInput"></a>

```typescript
public readonly parameterGroupNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `snapshotArnsInput`<sup>Optional</sup> <a name="snapshotArnsInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotArnsInput"></a>

```typescript
public readonly snapshotArnsInput: string[];
```

- *Type:* string[]

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotNameInput"></a>

```typescript
public readonly snapshotNameInput: string;
```

- *Type:* string

---

##### `snapshotRetentionLimitInput`<sup>Optional</sup> <a name="snapshotRetentionLimitInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimitInput"></a>

```typescript
public readonly snapshotRetentionLimitInput: number;
```

- *Type:* number

---

##### `snapshotWindowInput`<sup>Optional</sup> <a name="snapshotWindowInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotWindowInput"></a>

```typescript
public readonly snapshotWindowInput: string;
```

- *Type:* string

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicArnInput"></a>

```typescript
public readonly snsTopicArnInput: string;
```

- *Type:* string

---

##### `snsTopicStatusInput`<sup>Optional</sup> <a name="snsTopicStatusInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicStatusInput"></a>

```typescript
public readonly snsTopicStatusInput: string;
```

- *Type:* string

---

##### `subnetGroupNameInput`<sup>Optional</sup> <a name="subnetGroupNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.subnetGroupNameInput"></a>

```typescript
public readonly subnetGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | MemorydbClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>[]

---

##### `tlsEnabledInput`<sup>Optional</sup> <a name="tlsEnabledInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tlsEnabledInput"></a>

```typescript
public readonly tlsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `aclName`<sup>Required</sup> <a name="aclName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.aclName"></a>

```typescript
public readonly aclName: string;
```

- *Type:* string

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `dataTiering`<sup>Required</sup> <a name="dataTiering" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dataTiering"></a>

```typescript
public readonly dataTiering: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `finalSnapshotName`<sup>Required</sup> <a name="finalSnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.finalSnapshotName"></a>

```typescript
public readonly finalSnapshotName: string;
```

- *Type:* string

---

##### `ipDiscovery`<sup>Required</sup> <a name="ipDiscovery" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.ipDiscovery"></a>

```typescript
public readonly ipDiscovery: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: string;
```

- *Type:* string

---

##### `multiRegionClusterName`<sup>Required</sup> <a name="multiRegionClusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.multiRegionClusterName"></a>

```typescript
public readonly multiRegionClusterName: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `numReplicasPerShard`<sup>Required</sup> <a name="numReplicasPerShard" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numReplicasPerShard"></a>

```typescript
public readonly numReplicasPerShard: number;
```

- *Type:* number

---

##### `numShards`<sup>Required</sup> <a name="numShards" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numShards"></a>

```typescript
public readonly numShards: number;
```

- *Type:* number

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupName"></a>

```typescript
public readonly parameterGroupName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `snapshotArns`<sup>Required</sup> <a name="snapshotArns" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotArns"></a>

```typescript
public readonly snapshotArns: string[];
```

- *Type:* string[]

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="snapshotRetentionLimit" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimit"></a>

```typescript
public readonly snapshotRetentionLimit: number;
```

- *Type:* number

---

##### `snapshotWindow`<sup>Required</sup> <a name="snapshotWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotWindow"></a>

```typescript
public readonly snapshotWindow: string;
```

- *Type:* string

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `snsTopicStatus`<sup>Required</sup> <a name="snsTopicStatus" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicStatus"></a>

```typescript
public readonly snsTopicStatus: string;
```

- *Type:* string

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: string;
```

- *Type:* string

---

##### `tlsEnabled`<sup>Required</sup> <a name="tlsEnabled" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tlsEnabled"></a>

```typescript
public readonly tlsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MemorydbClusterClusterEndpoint <a name="MemorydbClusterClusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint.Initializer"></a>

```typescript
import { memorydbCluster } from '@cdktn/provider-awscc'

const memorydbClusterClusterEndpoint: memorydbCluster.MemorydbClusterClusterEndpoint = { ... }
```


### MemorydbClusterConfig <a name="MemorydbClusterConfig" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.Initializer"></a>

```typescript
import { memorydbCluster } from '@cdktn/provider-awscc'

const memorydbClusterConfig: memorydbCluster.MemorydbClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.aclName">aclName</a></code> | <code>string</code> | The name of the Access Control List to associate with the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.clusterName">clusterName</a></code> | <code>string</code> | The name of the cluster. This value must be unique as it also serves as the cluster identifier. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.nodeType">nodeType</a></code> | <code>string</code> | The compute and memory capacity of the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean \| cdktn.IResolvable</code> | A flag that enables automatic minor version upgrade when set to true. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.clusterEndpoint">clusterEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a></code> | The cluster endpoint. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.dataTiering">dataTiering</a></code> | <code>string</code> | Enables data tiering. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.description">description</a></code> | <code>string</code> | An optional description of the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.engine">engine</a></code> | <code>string</code> | The engine type used by the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | The Redis engine version used by the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.finalSnapshotName">finalSnapshotName</a></code> | <code>string</code> | The user-supplied name of a final cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.ipDiscovery">ipDiscovery</a></code> | <code>string</code> | For clusters wth dual stack NetworkType, IpDiscovery controls the Ip protocol (ipv4 or ipv6) returned by the engine commands such as `cluster info` and `cluster nodes` which are used by clients to connect to the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The ID of the KMS key used to encrypt the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code>string</code> | Specifies the weekly time range during which maintenance on the cluster is performed. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.multiRegionClusterName">multiRegionClusterName</a></code> | <code>string</code> | The name of the Global Datastore, it is generated by MemoryDB adding a prefix to MultiRegionClusterNameSuffix. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.networkType">networkType</a></code> | <code>string</code> | Must be either ipv4 \| ipv6 \| dual_stack. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.numReplicasPerShard">numReplicasPerShard</a></code> | <code>number</code> | The number of replicas to apply to each shard. The limit is 5. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.numShards">numShards</a></code> | <code>number</code> | The number of shards the cluster will contain. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.parameterGroupName">parameterGroupName</a></code> | <code>string</code> | The name of the parameter group associated with the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.port">port</a></code> | <code>number</code> | The port number on which each member of the cluster accepts connections. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | One or more Amazon VPC security groups associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotArns">snapshotArns</a></code> | <code>string[]</code> | A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotName">snapshotName</a></code> | <code>string</code> | The name of a snapshot from which to restore data into the new cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>number</code> | The number of days for which MemoryDB retains automatic snapshots before deleting them. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotWindow">snapshotWindow</a></code> | <code>string</code> | The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snsTopicStatus">snsTopicStatus</a></code> | <code>string</code> | The status of the Amazon SNS notification topic. Notifications are sent only if the status is enabled. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.subnetGroupName">subnetGroupName</a></code> | <code>string</code> | The name of the subnet group to be used for the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>[]</code> | An array of key-value pairs to apply to this cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.tlsEnabled">tlsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | A flag that enables in-transit encryption when set to true. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aclName`<sup>Required</sup> <a name="aclName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.aclName"></a>

```typescript
public readonly aclName: string;
```

- *Type:* string

The name of the Access Control List to associate with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#acl_name MemorydbCluster#acl_name}

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The name of the cluster. This value must be unique as it also serves as the cluster identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#cluster_name MemorydbCluster#cluster_name}

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

The compute and memory capacity of the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#node_type MemorydbCluster#node_type}

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A flag that enables automatic minor version upgrade when set to true.

You cannot modify the value of AutoMinorVersionUpgrade after the cluster is created. To enable AutoMinorVersionUpgrade on a cluster you must set AutoMinorVersionUpgrade to true when you create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#auto_minor_version_upgrade MemorydbCluster#auto_minor_version_upgrade}

---

##### `clusterEndpoint`<sup>Optional</sup> <a name="clusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.clusterEndpoint"></a>

```typescript
public readonly clusterEndpoint: MemorydbClusterClusterEndpoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

The cluster endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#cluster_endpoint MemorydbCluster#cluster_endpoint}

---

##### `dataTiering`<sup>Optional</sup> <a name="dataTiering" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.dataTiering"></a>

```typescript
public readonly dataTiering: string;
```

- *Type:* string

Enables data tiering.

Data tiering is only supported for clusters using the r6gd node type. This parameter must be set when using r6gd nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#data_tiering MemorydbCluster#data_tiering}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#description MemorydbCluster#description}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

The engine type used by the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#engine MemorydbCluster#engine}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

The Redis engine version used by the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#engine_version MemorydbCluster#engine_version}

---

##### `finalSnapshotName`<sup>Optional</sup> <a name="finalSnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.finalSnapshotName"></a>

```typescript
public readonly finalSnapshotName: string;
```

- *Type:* string

The user-supplied name of a final cluster snapshot.

This is the unique name that identifies the snapshot. MemoryDB creates the snapshot, and then deletes the cluster immediately afterward.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#final_snapshot_name MemorydbCluster#final_snapshot_name}

---

##### `ipDiscovery`<sup>Optional</sup> <a name="ipDiscovery" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.ipDiscovery"></a>

```typescript
public readonly ipDiscovery: string;
```

- *Type:* string

For clusters wth dual stack NetworkType, IpDiscovery controls the Ip protocol (ipv4 or ipv6) returned by the engine commands such as `cluster info` and `cluster nodes` which are used by clients to connect to the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#ip_discovery MemorydbCluster#ip_discovery}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The ID of the KMS key used to encrypt the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#kms_key_id MemorydbCluster#kms_key_id}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: string;
```

- *Type:* string

Specifies the weekly time range during which maintenance on the cluster is performed.

It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#maintenance_window MemorydbCluster#maintenance_window}

---

##### `multiRegionClusterName`<sup>Optional</sup> <a name="multiRegionClusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.multiRegionClusterName"></a>

```typescript
public readonly multiRegionClusterName: string;
```

- *Type:* string

The name of the Global Datastore, it is generated by MemoryDB adding a prefix to MultiRegionClusterNameSuffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#multi_region_cluster_name MemorydbCluster#multi_region_cluster_name}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

Must be either ipv4 | ipv6 | dual_stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#network_type MemorydbCluster#network_type}

---

##### `numReplicasPerShard`<sup>Optional</sup> <a name="numReplicasPerShard" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.numReplicasPerShard"></a>

```typescript
public readonly numReplicasPerShard: number;
```

- *Type:* number

The number of replicas to apply to each shard. The limit is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#num_replicas_per_shard MemorydbCluster#num_replicas_per_shard}

---

##### `numShards`<sup>Optional</sup> <a name="numShards" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.numShards"></a>

```typescript
public readonly numShards: number;
```

- *Type:* number

The number of shards the cluster will contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#num_shards MemorydbCluster#num_shards}

---

##### `parameterGroupName`<sup>Optional</sup> <a name="parameterGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.parameterGroupName"></a>

```typescript
public readonly parameterGroupName: string;
```

- *Type:* string

The name of the parameter group associated with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#parameter_group_name MemorydbCluster#parameter_group_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number on which each member of the cluster accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#port MemorydbCluster#port}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

One or more Amazon VPC security groups associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#security_group_ids MemorydbCluster#security_group_ids}

---

##### `snapshotArns`<sup>Optional</sup> <a name="snapshotArns" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotArns"></a>

```typescript
public readonly snapshotArns: string[];
```

- *Type:* string[]

A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3.

The snapshot files are used to populate the new cluster. The Amazon S3 object name in the ARN cannot contain any commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#snapshot_arns MemorydbCluster#snapshot_arns}

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

The name of a snapshot from which to restore data into the new cluster.

The snapshot status changes to restoring while the new cluster is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#snapshot_name MemorydbCluster#snapshot_name}

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="snapshotRetentionLimit" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotRetentionLimit"></a>

```typescript
public readonly snapshotRetentionLimit: number;
```

- *Type:* number

The number of days for which MemoryDB retains automatic snapshots before deleting them.

For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#snapshot_retention_limit MemorydbCluster#snapshot_retention_limit}

---

##### `snapshotWindow`<sup>Optional</sup> <a name="snapshotWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotWindow"></a>

```typescript
public readonly snapshotWindow: string;
```

- *Type:* string

The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#snapshot_window MemorydbCluster#snapshot_window}

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#sns_topic_arn MemorydbCluster#sns_topic_arn}

---

##### `snsTopicStatus`<sup>Optional</sup> <a name="snsTopicStatus" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snsTopicStatus"></a>

```typescript
public readonly snsTopicStatus: string;
```

- *Type:* string

The status of the Amazon SNS notification topic. Notifications are sent only if the status is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#sns_topic_status MemorydbCluster#sns_topic_status}

---

##### `subnetGroupName`<sup>Optional</sup> <a name="subnetGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: string;
```

- *Type:* string

The name of the subnet group to be used for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#subnet_group_name MemorydbCluster#subnet_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | MemorydbClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>[]

An array of key-value pairs to apply to this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#tags MemorydbCluster#tags}

---

##### `tlsEnabled`<sup>Optional</sup> <a name="tlsEnabled" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.tlsEnabled"></a>

```typescript
public readonly tlsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A flag that enables in-transit encryption when set to true.

You cannot modify the value of TransitEncryptionEnabled after the cluster is created. To enable in-transit encryption on a cluster you must set TransitEncryptionEnabled to true when you create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#tls_enabled MemorydbCluster#tls_enabled}

---

### MemorydbClusterTags <a name="MemorydbClusterTags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.Initializer"></a>

```typescript
import { memorydbCluster } from '@cdktn/provider-awscc'

const memorydbClusterTags: memorydbCluster.MemorydbClusterTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.property.key">key</a></code> | <code>string</code> | The key for the tag. May not be null. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.property.value">value</a></code> | <code>string</code> | The tag's value. May be null. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key for the tag. May not be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#key MemorydbCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag's value. May be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/memorydb_cluster#value MemorydbCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MemorydbClusterClusterEndpointOutputReference <a name="MemorydbClusterClusterEndpointOutputReference" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer"></a>

```typescript
import { memorydbCluster } from '@cdktn/provider-awscc'

new memorydbCluster.MemorydbClusterClusterEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MemorydbClusterClusterEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

---


### MemorydbClusterTagsList <a name="MemorydbClusterTagsList" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer"></a>

```typescript
import { memorydbCluster } from '@cdktn/provider-awscc'

new memorydbCluster.MemorydbClusterTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.get"></a>

```typescript
public get(index: number): MemorydbClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MemorydbClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>[]

---


### MemorydbClusterTagsOutputReference <a name="MemorydbClusterTagsOutputReference" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer"></a>

```typescript
import { memorydbCluster } from '@cdktn/provider-awscc'

new memorydbCluster.MemorydbClusterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MemorydbClusterTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>

---



