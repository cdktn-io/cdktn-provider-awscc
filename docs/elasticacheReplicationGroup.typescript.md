# `elasticacheReplicationGroup` Submodule <a name="`elasticacheReplicationGroup` Submodule" id="@cdktn/provider-awscc.elasticacheReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheReplicationGroup <a name="ElasticacheReplicationGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group awscc_elasticache_replication_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

new elasticacheReplicationGroup.ElasticacheReplicationGroup(scope: Construct, id: string, config: ElasticacheReplicationGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig">ElasticacheReplicationGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig">ElasticacheReplicationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfigurations">putLogDeliveryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putNodeGroupConfiguration">putNodeGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAtRestEncryptionEnabled">resetAtRestEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAuthToken">resetAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutomaticFailoverEnabled">resetAutomaticFailoverEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutoMinorVersionUpgrade">resetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheNodeType">resetCacheNodeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheParameterGroupName">resetCacheParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheSecurityGroupNames">resetCacheSecurityGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheSubnetGroupName">resetCacheSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetClusterMode">resetClusterMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDataTieringEnabled">resetDataTieringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDurability">resetDurability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetGlobalReplicationGroupId">resetGlobalReplicationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetIpDiscovery">resetIpDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetLogDeliveryConfigurations">resetLogDeliveryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetMultiAzEnabled">resetMultiAzEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNodeGroupConfiguration">resetNodeGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNotificationTopicArn">resetNotificationTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumCacheClusters">resetNumCacheClusters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumNodeGroups">resetNumNodeGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredCacheClusterAZs">resetPreferredCacheClusterAZs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPrimaryClusterId">resetPrimaryClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicasPerNodeGroup">resetReplicasPerNodeGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicationGroupId">resetReplicationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotArns">resetSnapshotArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotRetentionLimit">resetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshottingClusterId">resetSnapshottingClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotWindow">resetSnapshotWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionEnabled">resetTransitEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionMode">resetTransitEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetUserGroupIds">resetUserGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogDeliveryConfigurations` <a name="putLogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfigurations"></a>

```typescript
public putLogDeliveryConfigurations(value: IResolvable | ElasticacheReplicationGroupLogDeliveryConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>[]

---

##### `putNodeGroupConfiguration` <a name="putNodeGroupConfiguration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putNodeGroupConfiguration"></a>

```typescript
public putNodeGroupConfiguration(value: IResolvable | ElasticacheReplicationGroupNodeGroupConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putNodeGroupConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | ElasticacheReplicationGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>[]

---

##### `resetAtRestEncryptionEnabled` <a name="resetAtRestEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAtRestEncryptionEnabled"></a>

```typescript
public resetAtRestEncryptionEnabled(): void
```

##### `resetAuthToken` <a name="resetAuthToken" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAuthToken"></a>

```typescript
public resetAuthToken(): void
```

##### `resetAutomaticFailoverEnabled` <a name="resetAutomaticFailoverEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutomaticFailoverEnabled"></a>

```typescript
public resetAutomaticFailoverEnabled(): void
```

##### `resetAutoMinorVersionUpgrade` <a name="resetAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutoMinorVersionUpgrade"></a>

```typescript
public resetAutoMinorVersionUpgrade(): void
```

##### `resetCacheNodeType` <a name="resetCacheNodeType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheNodeType"></a>

```typescript
public resetCacheNodeType(): void
```

##### `resetCacheParameterGroupName` <a name="resetCacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheParameterGroupName"></a>

```typescript
public resetCacheParameterGroupName(): void
```

##### `resetCacheSecurityGroupNames` <a name="resetCacheSecurityGroupNames" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheSecurityGroupNames"></a>

```typescript
public resetCacheSecurityGroupNames(): void
```

##### `resetCacheSubnetGroupName` <a name="resetCacheSubnetGroupName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheSubnetGroupName"></a>

```typescript
public resetCacheSubnetGroupName(): void
```

##### `resetClusterMode` <a name="resetClusterMode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetClusterMode"></a>

```typescript
public resetClusterMode(): void
```

##### `resetDataTieringEnabled` <a name="resetDataTieringEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDataTieringEnabled"></a>

```typescript
public resetDataTieringEnabled(): void
```

##### `resetDurability` <a name="resetDurability" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDurability"></a>

```typescript
public resetDurability(): void
```

##### `resetEngine` <a name="resetEngine" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngine"></a>

```typescript
public resetEngine(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetGlobalReplicationGroupId` <a name="resetGlobalReplicationGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetGlobalReplicationGroupId"></a>

```typescript
public resetGlobalReplicationGroupId(): void
```

##### `resetIpDiscovery` <a name="resetIpDiscovery" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetIpDiscovery"></a>

```typescript
public resetIpDiscovery(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetLogDeliveryConfigurations` <a name="resetLogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetLogDeliveryConfigurations"></a>

```typescript
public resetLogDeliveryConfigurations(): void
```

##### `resetMultiAzEnabled` <a name="resetMultiAzEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetMultiAzEnabled"></a>

```typescript
public resetMultiAzEnabled(): void
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNetworkType"></a>

```typescript
public resetNetworkType(): void
```

##### `resetNodeGroupConfiguration` <a name="resetNodeGroupConfiguration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNodeGroupConfiguration"></a>

```typescript
public resetNodeGroupConfiguration(): void
```

##### `resetNotificationTopicArn` <a name="resetNotificationTopicArn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNotificationTopicArn"></a>

```typescript
public resetNotificationTopicArn(): void
```

##### `resetNumCacheClusters` <a name="resetNumCacheClusters" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumCacheClusters"></a>

```typescript
public resetNumCacheClusters(): void
```

##### `resetNumNodeGroups` <a name="resetNumNodeGroups" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumNodeGroups"></a>

```typescript
public resetNumNodeGroups(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPreferredCacheClusterAZs` <a name="resetPreferredCacheClusterAZs" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredCacheClusterAZs"></a>

```typescript
public resetPreferredCacheClusterAZs(): void
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredMaintenanceWindow"></a>

```typescript
public resetPreferredMaintenanceWindow(): void
```

##### `resetPrimaryClusterId` <a name="resetPrimaryClusterId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPrimaryClusterId"></a>

```typescript
public resetPrimaryClusterId(): void
```

##### `resetReplicasPerNodeGroup` <a name="resetReplicasPerNodeGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicasPerNodeGroup"></a>

```typescript
public resetReplicasPerNodeGroup(): void
```

##### `resetReplicationGroupId` <a name="resetReplicationGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicationGroupId"></a>

```typescript
public resetReplicationGroupId(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSnapshotArns` <a name="resetSnapshotArns" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotArns"></a>

```typescript
public resetSnapshotArns(): void
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotName"></a>

```typescript
public resetSnapshotName(): void
```

##### `resetSnapshotRetentionLimit` <a name="resetSnapshotRetentionLimit" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotRetentionLimit"></a>

```typescript
public resetSnapshotRetentionLimit(): void
```

##### `resetSnapshottingClusterId` <a name="resetSnapshottingClusterId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshottingClusterId"></a>

```typescript
public resetSnapshottingClusterId(): void
```

##### `resetSnapshotWindow` <a name="resetSnapshotWindow" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotWindow"></a>

```typescript
public resetSnapshotWindow(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTransitEncryptionEnabled` <a name="resetTransitEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionEnabled"></a>

```typescript
public resetTransitEncryptionEnabled(): void
```

##### `resetTransitEncryptionMode` <a name="resetTransitEncryptionMode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionMode"></a>

```typescript
public resetTransitEncryptionMode(): void
```

##### `resetUserGroupIds` <a name="resetUserGroupIds" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetUserGroupIds"></a>

```typescript
public resetUserGroupIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticacheReplicationGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ElasticacheReplicationGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticacheReplicationGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticacheReplicationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ElasticacheReplicationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.configurationEndPoint">configurationEndPoint</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference">ElasticacheReplicationGroupConfigurationEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.effectiveDurability">effectiveDurability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurations">logDeliveryConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList">ElasticacheReplicationGroupLogDeliveryConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeGroupConfiguration">nodeGroupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList">ElasticacheReplicationGroupNodeGroupConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryEndPoint">primaryEndPoint</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference">ElasticacheReplicationGroupPrimaryEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readEndPoint">readEndPoint</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference">ElasticacheReplicationGroupReadEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readerEndPoint">readerEndPoint</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference">ElasticacheReplicationGroupReaderEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList">ElasticacheReplicationGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabledInput">atRestEncryptionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authTokenInput">authTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabledInput">automaticFailoverEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgradeInput">autoMinorVersionUpgradeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheNodeTypeInput">cacheNodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheParameterGroupNameInput">cacheParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSecurityGroupNamesInput">cacheSecurityGroupNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSubnetGroupNameInput">cacheSubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterModeInput">clusterModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabledInput">dataTieringEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.durabilityInput">durabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupIdInput">globalReplicationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.ipDiscoveryInput">ipDiscoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurationsInput">logDeliveryConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabledInput">multiAzEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeGroupConfigurationInput">nodeGroupConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArnInput">notificationTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClustersInput">numCacheClustersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroupsInput">numNodeGroupsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAZsInput">preferredCacheClusterAZsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryClusterIdInput">primaryClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroupInput">replicasPerNodeGroupInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescriptionInput">replicationGroupDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupIdInput">replicationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArnsInput">snapshotArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotNameInput">snapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimitInput">snapshotRetentionLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshottingClusterIdInput">snapshottingClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindowInput">snapshotWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabledInput">transitEncryptionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionModeInput">transitEncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIdsInput">userGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabled">atRestEncryptionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authToken">authToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabled">automaticFailoverEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheNodeType">cacheNodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheParameterGroupName">cacheParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSecurityGroupNames">cacheSecurityGroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSubnetGroupName">cacheSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterMode">clusterMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabled">dataTieringEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.durability">durability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupId">globalReplicationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.ipDiscovery">ipDiscovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabled">multiAzEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClusters">numCacheClusters</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroups">numNodeGroups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAZs">preferredCacheClusterAZs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryClusterId">primaryClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroup">replicasPerNodeGroup</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescription">replicationGroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupId">replicationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArns">snapshotArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotName">snapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshottingClusterId">snapshottingClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindow">snapshotWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionMode">transitEncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIds">userGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configurationEndPoint`<sup>Required</sup> <a name="configurationEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.configurationEndPoint"></a>

```typescript
public readonly configurationEndPoint: ElasticacheReplicationGroupConfigurationEndPointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference">ElasticacheReplicationGroupConfigurationEndPointOutputReference</a>

---

##### `effectiveDurability`<sup>Required</sup> <a name="effectiveDurability" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.effectiveDurability"></a>

```typescript
public readonly effectiveDurability: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logDeliveryConfigurations`<sup>Required</sup> <a name="logDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurations"></a>

```typescript
public readonly logDeliveryConfigurations: ElasticacheReplicationGroupLogDeliveryConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList">ElasticacheReplicationGroupLogDeliveryConfigurationsList</a>

---

##### `nodeGroupConfiguration`<sup>Required</sup> <a name="nodeGroupConfiguration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeGroupConfiguration"></a>

```typescript
public readonly nodeGroupConfiguration: ElasticacheReplicationGroupNodeGroupConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList">ElasticacheReplicationGroupNodeGroupConfigurationList</a>

---

##### `primaryEndPoint`<sup>Required</sup> <a name="primaryEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryEndPoint"></a>

```typescript
public readonly primaryEndPoint: ElasticacheReplicationGroupPrimaryEndPointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference">ElasticacheReplicationGroupPrimaryEndPointOutputReference</a>

---

##### `readEndPoint`<sup>Required</sup> <a name="readEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readEndPoint"></a>

```typescript
public readonly readEndPoint: ElasticacheReplicationGroupReadEndPointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference">ElasticacheReplicationGroupReadEndPointOutputReference</a>

---

##### `readerEndPoint`<sup>Required</sup> <a name="readerEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readerEndPoint"></a>

```typescript
public readonly readerEndPoint: ElasticacheReplicationGroupReaderEndPointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference">ElasticacheReplicationGroupReaderEndPointOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tags"></a>

```typescript
public readonly tags: ElasticacheReplicationGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList">ElasticacheReplicationGroupTagsList</a>

---

##### `atRestEncryptionEnabledInput`<sup>Optional</sup> <a name="atRestEncryptionEnabledInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabledInput"></a>

```typescript
public readonly atRestEncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `authTokenInput`<sup>Optional</sup> <a name="authTokenInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authTokenInput"></a>

```typescript
public readonly authTokenInput: string;
```

- *Type:* string

---

##### `automaticFailoverEnabledInput`<sup>Optional</sup> <a name="automaticFailoverEnabledInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabledInput"></a>

```typescript
public readonly automaticFailoverEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="autoMinorVersionUpgradeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgradeInput"></a>

```typescript
public readonly autoMinorVersionUpgradeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cacheNodeTypeInput`<sup>Optional</sup> <a name="cacheNodeTypeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheNodeTypeInput"></a>

```typescript
public readonly cacheNodeTypeInput: string;
```

- *Type:* string

---

##### `cacheParameterGroupNameInput`<sup>Optional</sup> <a name="cacheParameterGroupNameInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheParameterGroupNameInput"></a>

```typescript
public readonly cacheParameterGroupNameInput: string;
```

- *Type:* string

---

##### `cacheSecurityGroupNamesInput`<sup>Optional</sup> <a name="cacheSecurityGroupNamesInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSecurityGroupNamesInput"></a>

```typescript
public readonly cacheSecurityGroupNamesInput: string[];
```

- *Type:* string[]

---

##### `cacheSubnetGroupNameInput`<sup>Optional</sup> <a name="cacheSubnetGroupNameInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSubnetGroupNameInput"></a>

```typescript
public readonly cacheSubnetGroupNameInput: string;
```

- *Type:* string

---

##### `clusterModeInput`<sup>Optional</sup> <a name="clusterModeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterModeInput"></a>

```typescript
public readonly clusterModeInput: string;
```

- *Type:* string

---

##### `dataTieringEnabledInput`<sup>Optional</sup> <a name="dataTieringEnabledInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabledInput"></a>

```typescript
public readonly dataTieringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `durabilityInput`<sup>Optional</sup> <a name="durabilityInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.durabilityInput"></a>

```typescript
public readonly durabilityInput: string;
```

- *Type:* string

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `globalReplicationGroupIdInput`<sup>Optional</sup> <a name="globalReplicationGroupIdInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupIdInput"></a>

```typescript
public readonly globalReplicationGroupIdInput: string;
```

- *Type:* string

---

##### `ipDiscoveryInput`<sup>Optional</sup> <a name="ipDiscoveryInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.ipDiscoveryInput"></a>

```typescript
public readonly ipDiscoveryInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `logDeliveryConfigurationsInput`<sup>Optional</sup> <a name="logDeliveryConfigurationsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurationsInput"></a>

```typescript
public readonly logDeliveryConfigurationsInput: IResolvable | ElasticacheReplicationGroupLogDeliveryConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>[]

---

##### `multiAzEnabledInput`<sup>Optional</sup> <a name="multiAzEnabledInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabledInput"></a>

```typescript
public readonly multiAzEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `nodeGroupConfigurationInput`<sup>Optional</sup> <a name="nodeGroupConfigurationInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeGroupConfigurationInput"></a>

```typescript
public readonly nodeGroupConfigurationInput: IResolvable | ElasticacheReplicationGroupNodeGroupConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>[]

---

##### `notificationTopicArnInput`<sup>Optional</sup> <a name="notificationTopicArnInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArnInput"></a>

```typescript
public readonly notificationTopicArnInput: string;
```

- *Type:* string

---

##### `numCacheClustersInput`<sup>Optional</sup> <a name="numCacheClustersInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClustersInput"></a>

```typescript
public readonly numCacheClustersInput: number;
```

- *Type:* number

---

##### `numNodeGroupsInput`<sup>Optional</sup> <a name="numNodeGroupsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroupsInput"></a>

```typescript
public readonly numNodeGroupsInput: number;
```

- *Type:* number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `preferredCacheClusterAZsInput`<sup>Optional</sup> <a name="preferredCacheClusterAZsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAZsInput"></a>

```typescript
public readonly preferredCacheClusterAZsInput: string[];
```

- *Type:* string[]

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredMaintenanceWindowInput"></a>

```typescript
public readonly preferredMaintenanceWindowInput: string;
```

- *Type:* string

---

##### `primaryClusterIdInput`<sup>Optional</sup> <a name="primaryClusterIdInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryClusterIdInput"></a>

```typescript
public readonly primaryClusterIdInput: string;
```

- *Type:* string

---

##### `replicasPerNodeGroupInput`<sup>Optional</sup> <a name="replicasPerNodeGroupInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroupInput"></a>

```typescript
public readonly replicasPerNodeGroupInput: number;
```

- *Type:* number

---

##### `replicationGroupDescriptionInput`<sup>Optional</sup> <a name="replicationGroupDescriptionInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescriptionInput"></a>

```typescript
public readonly replicationGroupDescriptionInput: string;
```

- *Type:* string

---

##### `replicationGroupIdInput`<sup>Optional</sup> <a name="replicationGroupIdInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupIdInput"></a>

```typescript
public readonly replicationGroupIdInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `snapshotArnsInput`<sup>Optional</sup> <a name="snapshotArnsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArnsInput"></a>

```typescript
public readonly snapshotArnsInput: string[];
```

- *Type:* string[]

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotNameInput"></a>

```typescript
public readonly snapshotNameInput: string;
```

- *Type:* string

---

##### `snapshotRetentionLimitInput`<sup>Optional</sup> <a name="snapshotRetentionLimitInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimitInput"></a>

```typescript
public readonly snapshotRetentionLimitInput: number;
```

- *Type:* number

---

##### `snapshottingClusterIdInput`<sup>Optional</sup> <a name="snapshottingClusterIdInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshottingClusterIdInput"></a>

```typescript
public readonly snapshottingClusterIdInput: string;
```

- *Type:* string

---

##### `snapshotWindowInput`<sup>Optional</sup> <a name="snapshotWindowInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindowInput"></a>

```typescript
public readonly snapshotWindowInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ElasticacheReplicationGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>[]

---

##### `transitEncryptionEnabledInput`<sup>Optional</sup> <a name="transitEncryptionEnabledInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabledInput"></a>

```typescript
public readonly transitEncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `transitEncryptionModeInput`<sup>Optional</sup> <a name="transitEncryptionModeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionModeInput"></a>

```typescript
public readonly transitEncryptionModeInput: string;
```

- *Type:* string

---

##### `userGroupIdsInput`<sup>Optional</sup> <a name="userGroupIdsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIdsInput"></a>

```typescript
public readonly userGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="atRestEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabled"></a>

```typescript
public readonly atRestEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `authToken`<sup>Required</sup> <a name="authToken" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authToken"></a>

```typescript
public readonly authToken: string;
```

- *Type:* string

---

##### `automaticFailoverEnabled`<sup>Required</sup> <a name="automaticFailoverEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabled"></a>

```typescript
public readonly automaticFailoverEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cacheNodeType`<sup>Required</sup> <a name="cacheNodeType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheNodeType"></a>

```typescript
public readonly cacheNodeType: string;
```

- *Type:* string

---

##### `cacheParameterGroupName`<sup>Required</sup> <a name="cacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheParameterGroupName"></a>

```typescript
public readonly cacheParameterGroupName: string;
```

- *Type:* string

---

##### `cacheSecurityGroupNames`<sup>Required</sup> <a name="cacheSecurityGroupNames" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSecurityGroupNames"></a>

```typescript
public readonly cacheSecurityGroupNames: string[];
```

- *Type:* string[]

---

##### `cacheSubnetGroupName`<sup>Required</sup> <a name="cacheSubnetGroupName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSubnetGroupName"></a>

```typescript
public readonly cacheSubnetGroupName: string;
```

- *Type:* string

---

##### `clusterMode`<sup>Required</sup> <a name="clusterMode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterMode"></a>

```typescript
public readonly clusterMode: string;
```

- *Type:* string

---

##### `dataTieringEnabled`<sup>Required</sup> <a name="dataTieringEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabled"></a>

```typescript
public readonly dataTieringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `durability`<sup>Required</sup> <a name="durability" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.durability"></a>

```typescript
public readonly durability: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `globalReplicationGroupId`<sup>Required</sup> <a name="globalReplicationGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupId"></a>

```typescript
public readonly globalReplicationGroupId: string;
```

- *Type:* string

---

##### `ipDiscovery`<sup>Required</sup> <a name="ipDiscovery" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.ipDiscovery"></a>

```typescript
public readonly ipDiscovery: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `multiAzEnabled`<sup>Required</sup> <a name="multiAzEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabled"></a>

```typescript
public readonly multiAzEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `notificationTopicArn`<sup>Required</sup> <a name="notificationTopicArn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

---

##### `numCacheClusters`<sup>Required</sup> <a name="numCacheClusters" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClusters"></a>

```typescript
public readonly numCacheClusters: number;
```

- *Type:* number

---

##### `numNodeGroups`<sup>Required</sup> <a name="numNodeGroups" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroups"></a>

```typescript
public readonly numNodeGroups: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `preferredCacheClusterAZs`<sup>Required</sup> <a name="preferredCacheClusterAZs" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAZs"></a>

```typescript
public readonly preferredCacheClusterAZs: string[];
```

- *Type:* string[]

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `primaryClusterId`<sup>Required</sup> <a name="primaryClusterId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryClusterId"></a>

```typescript
public readonly primaryClusterId: string;
```

- *Type:* string

---

##### `replicasPerNodeGroup`<sup>Required</sup> <a name="replicasPerNodeGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroup"></a>

```typescript
public readonly replicasPerNodeGroup: number;
```

- *Type:* number

---

##### `replicationGroupDescription`<sup>Required</sup> <a name="replicationGroupDescription" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescription"></a>

```typescript
public readonly replicationGroupDescription: string;
```

- *Type:* string

---

##### `replicationGroupId`<sup>Required</sup> <a name="replicationGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupId"></a>

```typescript
public readonly replicationGroupId: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `snapshotArns`<sup>Required</sup> <a name="snapshotArns" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArns"></a>

```typescript
public readonly snapshotArns: string[];
```

- *Type:* string[]

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="snapshotRetentionLimit" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimit"></a>

```typescript
public readonly snapshotRetentionLimit: number;
```

- *Type:* number

---

##### `snapshottingClusterId`<sup>Required</sup> <a name="snapshottingClusterId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshottingClusterId"></a>

```typescript
public readonly snapshottingClusterId: string;
```

- *Type:* string

---

##### `snapshotWindow`<sup>Required</sup> <a name="snapshotWindow" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindow"></a>

```typescript
public readonly snapshotWindow: string;
```

- *Type:* string

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="transitEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabled"></a>

```typescript
public readonly transitEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `transitEncryptionMode`<sup>Required</sup> <a name="transitEncryptionMode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionMode"></a>

```typescript
public readonly transitEncryptionMode: string;
```

- *Type:* string

---

##### `userGroupIds`<sup>Required</sup> <a name="userGroupIds" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIds"></a>

```typescript
public readonly userGroupIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheReplicationGroupConfig <a name="ElasticacheReplicationGroupConfig" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

const elasticacheReplicationGroupConfig: elasticacheReplicationGroup.ElasticacheReplicationGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupDescription">replicationGroupDescription</a></code> | <code>string</code> | A user-created description for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.atRestEncryptionEnabled">atRestEncryptionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | A flag that enables encryption at rest when set to true.AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.authToken">authToken</a></code> | <code>string</code> | Reserved parameter. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.automaticFailoverEnabled">automaticFailoverEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean \| cdktn.IResolvable</code> | This parameter is currently disabled. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheNodeType">cacheNodeType</a></code> | <code>string</code> | The compute and memory capacity of the nodes in the node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheParameterGroupName">cacheParameterGroupName</a></code> | <code>string</code> | The name of the parameter group to associate with this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheSecurityGroupNames">cacheSecurityGroupNames</a></code> | <code>string[]</code> | A list of cache security group names to associate with this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheSubnetGroupName">cacheSubnetGroupName</a></code> | <code>string</code> | The name of the cache subnet group to be used for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.clusterMode">clusterMode</a></code> | <code>string</code> | Enabled or Disabled. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dataTieringEnabled">dataTieringEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables data tiering. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.durability">durability</a></code> | <code>string</code> | The durability setting for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engine">engine</a></code> | <code>string</code> | The name of the cache engine to be used for the clusters in this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | The version number of the cache engine to be used for the clusters in this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.globalReplicationGroupId">globalReplicationGroupId</a></code> | <code>string</code> | The name of the Global datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.ipDiscovery">ipDiscovery</a></code> | <code>string</code> | The network type you choose when creating a replication group, either ipv4 \| ipv6. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The ID of the KMS key used to encrypt the disk on the cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.logDeliveryConfigurations">logDeliveryConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>[]</code> | Specifies the destination, format and type of the logs. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.multiAzEnabled">multiAzEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see Minimizing Downtime: Multi-AZ. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.networkType">networkType</a></code> | <code>string</code> | Must be either ipv4 \| ipv6 \| dual_stack. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.nodeGroupConfiguration">nodeGroupConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>[]</code> | NodeGroupConfiguration is a property of the AWS::ElastiCache::ReplicationGroup resource that configures an Amazon ElastiCache (ElastiCache) Redis cluster node group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numCacheClusters">numCacheClusters</a></code> | <code>number</code> | The number of clusters this replication group initially has.This parameter is not used if there is more than one node group (shard). You should use ReplicasPerNodeGroup instead. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numNodeGroups">numNodeGroups</a></code> | <code>number</code> | An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.port">port</a></code> | <code>number</code> | The port number on which each member of the replication group accepts connections. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredCacheClusterAZs">preferredCacheClusterAZs</a></code> | <code>string[]</code> | A list of EC2 Availability Zones in which the replication group's clusters are created. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | Specifies the weekly time range during which maintenance on the cluster is performed. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.primaryClusterId">primaryClusterId</a></code> | <code>string</code> | The identifier of the cluster that serves as the primary for this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicasPerNodeGroup">replicasPerNodeGroup</a></code> | <code>number</code> | An optional parameter that specifies the number of replica nodes in each node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupId">replicationGroupId</a></code> | <code>string</code> | The replication group identifier. This parameter is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | One or more Amazon VPC security groups associated with this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotArns">snapshotArns</a></code> | <code>string[]</code> | A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotName">snapshotName</a></code> | <code>string</code> | The name of a snapshot from which to restore data into the new replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>number</code> | The number of days for which ElastiCache retains automatic snapshots before deleting them. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshottingClusterId">snapshottingClusterId</a></code> | <code>string</code> | The cluster ID that is used as the daily snapshot source for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotWindow">snapshotWindow</a></code> | <code>string</code> | The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>[]</code> | A list of cost allocation tags to be added to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | A flag that enables in-transit encryption when set to true. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionMode">transitEncryptionMode</a></code> | <code>string</code> | A setting that allows you to migrate your clients to use in-transit encryption, with no downtime. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.userGroupIds">userGroupIds</a></code> | <code>string[]</code> | The ID of user group to associate with the replication group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `replicationGroupDescription`<sup>Required</sup> <a name="replicationGroupDescription" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupDescription"></a>

```typescript
public readonly replicationGroupDescription: string;
```

- *Type:* string

A user-created description for the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#replication_group_description ElasticacheReplicationGroup#replication_group_description}

---

##### `atRestEncryptionEnabled`<sup>Optional</sup> <a name="atRestEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.atRestEncryptionEnabled"></a>

```typescript
public readonly atRestEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A flag that enables encryption at rest when set to true.AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#at_rest_encryption_enabled ElasticacheReplicationGroup#at_rest_encryption_enabled}

---

##### `authToken`<sup>Optional</sup> <a name="authToken" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.authToken"></a>

```typescript
public readonly authToken: string;
```

- *Type:* string

Reserved parameter.

The password used to access a password protected server.AuthToken can be specified only on replication groups where TransitEncryptionEnabled is true. For more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#auth_token ElasticacheReplicationGroup#auth_token}

---

##### `automaticFailoverEnabled`<sup>Optional</sup> <a name="automaticFailoverEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.automaticFailoverEnabled"></a>

```typescript
public readonly automaticFailoverEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails.

AutomaticFailoverEnabled must be enabled for Redis (cluster mode enabled) replication groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#automatic_failover_enabled ElasticacheReplicationGroup#automatic_failover_enabled}

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This parameter is currently disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#auto_minor_version_upgrade ElasticacheReplicationGroup#auto_minor_version_upgrade}

---

##### `cacheNodeType`<sup>Optional</sup> <a name="cacheNodeType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheNodeType"></a>

```typescript
public readonly cacheNodeType: string;
```

- *Type:* string

The compute and memory capacity of the nodes in the node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#cache_node_type ElasticacheReplicationGroup#cache_node_type}

---

##### `cacheParameterGroupName`<sup>Optional</sup> <a name="cacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheParameterGroupName"></a>

```typescript
public readonly cacheParameterGroupName: string;
```

- *Type:* string

The name of the parameter group to associate with this replication group.

If this argument is omitted, the default cache parameter group for the specified engine is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#cache_parameter_group_name ElasticacheReplicationGroup#cache_parameter_group_name}

---

##### `cacheSecurityGroupNames`<sup>Optional</sup> <a name="cacheSecurityGroupNames" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheSecurityGroupNames"></a>

```typescript
public readonly cacheSecurityGroupNames: string[];
```

- *Type:* string[]

A list of cache security group names to associate with this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#cache_security_group_names ElasticacheReplicationGroup#cache_security_group_names}

---

##### `cacheSubnetGroupName`<sup>Optional</sup> <a name="cacheSubnetGroupName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheSubnetGroupName"></a>

```typescript
public readonly cacheSubnetGroupName: string;
```

- *Type:* string

The name of the cache subnet group to be used for the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#cache_subnet_group_name ElasticacheReplicationGroup#cache_subnet_group_name}

---

##### `clusterMode`<sup>Optional</sup> <a name="clusterMode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.clusterMode"></a>

```typescript
public readonly clusterMode: string;
```

- *Type:* string

Enabled or Disabled.

To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Redis OSS clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Redis OSS clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled. For more information, see Modify cluster mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#cluster_mode ElasticacheReplicationGroup#cluster_mode}

---

##### `dataTieringEnabled`<sup>Optional</sup> <a name="dataTieringEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dataTieringEnabled"></a>

```typescript
public readonly dataTieringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables data tiering.

Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#data_tiering_enabled ElasticacheReplicationGroup#data_tiering_enabled}

---

##### `durability`<sup>Optional</sup> <a name="durability" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.durability"></a>

```typescript
public readonly durability: string;
```

- *Type:* string

The durability setting for the replication group.

Valid values: default, async, sync, disabled. Enabling durability on an existing non-durable cluster or disabling durability on an existing durable cluster is not currently supported and will result in an error; specify the desired durability at create time. The resolved state is returned in EffectiveDurability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#durability ElasticacheReplicationGroup#durability}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

The name of the cache engine to be used for the clusters in this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#engine ElasticacheReplicationGroup#engine}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

The version number of the cache engine to be used for the clusters in this replication group.

To view the supported cache engine versions, use the DescribeCacheEngineVersions operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#engine_version ElasticacheReplicationGroup#engine_version}

---

##### `globalReplicationGroupId`<sup>Optional</sup> <a name="globalReplicationGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.globalReplicationGroupId"></a>

```typescript
public readonly globalReplicationGroupId: string;
```

- *Type:* string

The name of the Global datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#global_replication_group_id ElasticacheReplicationGroup#global_replication_group_id}

---

##### `ipDiscovery`<sup>Optional</sup> <a name="ipDiscovery" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.ipDiscovery"></a>

```typescript
public readonly ipDiscovery: string;
```

- *Type:* string

The network type you choose when creating a replication group, either ipv4 | ipv6.

IPv6 is supported for workloads using Redis OSS engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the Nitro system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#ip_discovery ElasticacheReplicationGroup#ip_discovery}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The ID of the KMS key used to encrypt the disk on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#kms_key_id ElasticacheReplicationGroup#kms_key_id}

---

##### `logDeliveryConfigurations`<sup>Optional</sup> <a name="logDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.logDeliveryConfigurations"></a>

```typescript
public readonly logDeliveryConfigurations: IResolvable | ElasticacheReplicationGroupLogDeliveryConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>[]

Specifies the destination, format and type of the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#log_delivery_configurations ElasticacheReplicationGroup#log_delivery_configurations}

---

##### `multiAzEnabled`<sup>Optional</sup> <a name="multiAzEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.multiAzEnabled"></a>

```typescript
public readonly multiAzEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see Minimizing Downtime: Multi-AZ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#multi_az_enabled ElasticacheReplicationGroup#multi_az_enabled}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

Must be either ipv4 | ipv6 | dual_stack.

IPv6 is supported for workloads using Redis OSS engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the Nitro system

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#network_type ElasticacheReplicationGroup#network_type}

---

##### `nodeGroupConfiguration`<sup>Optional</sup> <a name="nodeGroupConfiguration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.nodeGroupConfiguration"></a>

```typescript
public readonly nodeGroupConfiguration: IResolvable | ElasticacheReplicationGroupNodeGroupConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>[]

NodeGroupConfiguration is a property of the AWS::ElastiCache::ReplicationGroup resource that configures an Amazon ElastiCache (ElastiCache) Redis cluster node group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#node_group_configuration ElasticacheReplicationGroup#node_group_configuration}

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="notificationTopicArn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#notification_topic_arn ElasticacheReplicationGroup#notification_topic_arn}

---

##### `numCacheClusters`<sup>Optional</sup> <a name="numCacheClusters" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numCacheClusters"></a>

```typescript
public readonly numCacheClusters: number;
```

- *Type:* number

The number of clusters this replication group initially has.This parameter is not used if there is more than one node group (shard). You should use ReplicasPerNodeGroup instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#num_cache_clusters ElasticacheReplicationGroup#num_cache_clusters}

---

##### `numNodeGroups`<sup>Optional</sup> <a name="numNodeGroups" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numNodeGroups"></a>

```typescript
public readonly numNodeGroups: number;
```

- *Type:* number

An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group.

For Redis (cluster mode disabled) either omit this parameter or set it to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number on which each member of the replication group accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#port ElasticacheReplicationGroup#port}

---

##### `preferredCacheClusterAZs`<sup>Optional</sup> <a name="preferredCacheClusterAZs" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredCacheClusterAZs"></a>

```typescript
public readonly preferredCacheClusterAZs: string[];
```

- *Type:* string[]

A list of EC2 Availability Zones in which the replication group's clusters are created.

The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list. This parameter is not used if there is more than one node group (shard). You should use NodeGroupConfiguration instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#preferred_cache_cluster_a_zs ElasticacheReplicationGroup#preferred_cache_cluster_a_zs}

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

Specifies the weekly time range during which maintenance on the cluster is performed.

It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#preferred_maintenance_window ElasticacheReplicationGroup#preferred_maintenance_window}

---

##### `primaryClusterId`<sup>Optional</sup> <a name="primaryClusterId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.primaryClusterId"></a>

```typescript
public readonly primaryClusterId: string;
```

- *Type:* string

The identifier of the cluster that serves as the primary for this replication group.

This cluster must already exist and have a status of available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#primary_cluster_id ElasticacheReplicationGroup#primary_cluster_id}

---

##### `replicasPerNodeGroup`<sup>Optional</sup> <a name="replicasPerNodeGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicasPerNodeGroup"></a>

```typescript
public readonly replicasPerNodeGroup: number;
```

- *Type:* number

An optional parameter that specifies the number of replica nodes in each node group (shard).

Valid values are 0 to 5.

**Note:** Using ReplicasPerNodeGroup with NodeGroupConfiguration results in resource replacement. For online scaling, use ReplicasPerNodeGroup alone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}

---

##### `replicationGroupId`<sup>Optional</sup> <a name="replicationGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupId"></a>

```typescript
public readonly replicationGroupId: string;
```

- *Type:* string

The replication group identifier. This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#replication_group_id ElasticacheReplicationGroup#replication_group_id}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

One or more Amazon VPC security groups associated with this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#security_group_ids ElasticacheReplicationGroup#security_group_ids}

---

##### `snapshotArns`<sup>Optional</sup> <a name="snapshotArns" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotArns"></a>

```typescript
public readonly snapshotArns: string[];
```

- *Type:* string[]

A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#snapshot_arns ElasticacheReplicationGroup#snapshot_arns}

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

The name of a snapshot from which to restore data into the new replication group.

The snapshot status changes to restoring while the new replication group is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#snapshot_name ElasticacheReplicationGroup#snapshot_name}

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="snapshotRetentionLimit" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotRetentionLimit"></a>

```typescript
public readonly snapshotRetentionLimit: number;
```

- *Type:* number

The number of days for which ElastiCache retains automatic snapshots before deleting them.

For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#snapshot_retention_limit ElasticacheReplicationGroup#snapshot_retention_limit}

---

##### `snapshottingClusterId`<sup>Optional</sup> <a name="snapshottingClusterId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshottingClusterId"></a>

```typescript
public readonly snapshottingClusterId: string;
```

- *Type:* string

The cluster ID that is used as the daily snapshot source for the replication group.

This parameter cannot be set for Redis (cluster mode enabled) replication groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#snapshotting_cluster_id ElasticacheReplicationGroup#snapshotting_cluster_id}

---

##### `snapshotWindow`<sup>Optional</sup> <a name="snapshotWindow" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotWindow"></a>

```typescript
public readonly snapshotWindow: string;
```

- *Type:* string

The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#snapshot_window ElasticacheReplicationGroup#snapshot_window}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ElasticacheReplicationGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>[]

A list of cost allocation tags to be added to this resource.

Tags are comma-separated key,value pairs (e.g. Key=myKey, Value=myKeyValue. You can include multiple tags as shown following: Key=myKey, Value=myKeyValue Key=mySecondKey, Value=mySecondKeyValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#tags ElasticacheReplicationGroup#tags}

---

##### `transitEncryptionEnabled`<sup>Optional</sup> <a name="transitEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionEnabled"></a>

```typescript
public readonly transitEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A flag that enables in-transit encryption when set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#transit_encryption_enabled ElasticacheReplicationGroup#transit_encryption_enabled}

---

##### `transitEncryptionMode`<sup>Optional</sup> <a name="transitEncryptionMode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionMode"></a>

```typescript
public readonly transitEncryptionMode: string;
```

- *Type:* string

A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.

When setting TransitEncryptionEnabled to true, you can set your TransitEncryptionMode to preferred in the same request, to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Redis OSS clients to use encrypted connections you can modify the value to required to allow encrypted connections only. Setting TransitEncryptionMode to required is a two-step process that requires you to first set the TransitEncryptionMode to preferred, after that you can set TransitEncryptionMode to required. This process will not trigger the replacement of the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#transit_encryption_mode ElasticacheReplicationGroup#transit_encryption_mode}

---

##### `userGroupIds`<sup>Optional</sup> <a name="userGroupIds" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.userGroupIds"></a>

```typescript
public readonly userGroupIds: string[];
```

- *Type:* string[]

The ID of user group to associate with the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#user_group_ids ElasticacheReplicationGroup#user_group_ids}

---

### ElasticacheReplicationGroupConfigurationEndPoint <a name="ElasticacheReplicationGroupConfigurationEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPoint.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

const elasticacheReplicationGroupConfigurationEndPoint: elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPoint = { ... }
```


### ElasticacheReplicationGroupLogDeliveryConfigurations <a name="ElasticacheReplicationGroupLogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

const elasticacheReplicationGroupLogDeliveryConfigurations: elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.destinationDetails">destinationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a></code> | Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.destinationType">destinationType</a></code> | <code>string</code> | Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type. Valid values are either cloudwatch-logs or kinesis-firehose. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.logFormat">logFormat</a></code> | <code>string</code> | Valid values are either json or text. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.logType">logType</a></code> | <code>string</code> | Valid value is either slow-log, which refers to slow-log or engine-log. |

---

##### `destinationDetails`<sup>Optional</sup> <a name="destinationDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.destinationDetails"></a>

```typescript
public readonly destinationDetails: ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a>

Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#destination_details ElasticacheReplicationGroup#destination_details}

---

##### `destinationType`<sup>Optional</sup> <a name="destinationType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type. Valid values are either cloudwatch-logs or kinesis-firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#destination_type ElasticacheReplicationGroup#destination_type}

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

Valid values are either json or text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#log_format ElasticacheReplicationGroup#log_format}

---

##### `logType`<sup>Optional</sup> <a name="logType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

Valid value is either slow-log, which refers to slow-log or engine-log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#log_type ElasticacheReplicationGroup#log_type}

---

### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

const elasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails: elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.property.cloudwatchLogsDetails">cloudwatchLogsDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a></code> | The configuration details of the CloudWatch Logs destination. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.property.kinesisFirehoseDetails">kinesisFirehoseDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a></code> | The configuration details of the Kinesis Data Firehose destination. |

---

##### `cloudwatchLogsDetails`<sup>Optional</sup> <a name="cloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.property.cloudwatchLogsDetails"></a>

```typescript
public readonly cloudwatchLogsDetails: ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

The configuration details of the CloudWatch Logs destination.

Note that this field is marked as required but only if CloudWatch Logs was chosen as the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#cloudwatch_logs_details ElasticacheReplicationGroup#cloudwatch_logs_details}

---

##### `kinesisFirehoseDetails`<sup>Optional</sup> <a name="kinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.property.kinesisFirehoseDetails"></a>

```typescript
public readonly kinesisFirehoseDetails: ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

The configuration details of the Kinesis Data Firehose destination.

Note that this field is marked as required but only if Kinesis Data Firehose was chosen as the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#kinesis_firehose_details ElasticacheReplicationGroup#kinesis_firehose_details}

---

### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

const elasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails: elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.property.logGroup">logGroup</a></code> | <code>string</code> | The name of the CloudWatch Logs log group. |

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

The name of the CloudWatch Logs log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#log_group ElasticacheReplicationGroup#log_group}

---

### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

const elasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails: elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.property.deliveryStream">deliveryStream</a></code> | <code>string</code> | The name of the Kinesis Data Firehose delivery stream. |

---

##### `deliveryStream`<sup>Optional</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: string;
```

- *Type:* string

The name of the Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#delivery_stream ElasticacheReplicationGroup#delivery_stream}

---

### ElasticacheReplicationGroupNodeGroupConfiguration <a name="ElasticacheReplicationGroupNodeGroupConfiguration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

const elasticacheReplicationGroupNodeGroupConfiguration: elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.nodeGroupId">nodeGroupId</a></code> | <code>string</code> | Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these configuration values apply to. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.primaryAvailabilityZone">primaryAvailabilityZone</a></code> | <code>string</code> | The Availability Zone where the primary node of this node group (shard) is launched. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.replicaAvailabilityZones">replicaAvailabilityZones</a></code> | <code>string[]</code> | A list of Availability Zones to be used for the read replicas. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.replicaCount">replicaCount</a></code> | <code>number</code> | The number of read replica nodes in this node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.slots">slots</a></code> | <code>string</code> | A string of comma-separated values where the first set of values are the slot numbers (zero based), and the second set of values are the keyspaces for each slot. |

---

##### `nodeGroupId`<sup>Optional</sup> <a name="nodeGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.nodeGroupId"></a>

```typescript
public readonly nodeGroupId: string;
```

- *Type:* string

Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these configuration values apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#node_group_id ElasticacheReplicationGroup#node_group_id}

---

##### `primaryAvailabilityZone`<sup>Optional</sup> <a name="primaryAvailabilityZone" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.primaryAvailabilityZone"></a>

```typescript
public readonly primaryAvailabilityZone: string;
```

- *Type:* string

The Availability Zone where the primary node of this node group (shard) is launched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#primary_availability_zone ElasticacheReplicationGroup#primary_availability_zone}

---

##### `replicaAvailabilityZones`<sup>Optional</sup> <a name="replicaAvailabilityZones" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.replicaAvailabilityZones"></a>

```typescript
public readonly replicaAvailabilityZones: string[];
```

- *Type:* string[]

A list of Availability Zones to be used for the read replicas.

The number of Availability Zones in this list must match the value of ReplicaCount or ReplicasPerNodeGroup if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#replica_availability_zones ElasticacheReplicationGroup#replica_availability_zones}

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.replicaCount"></a>

```typescript
public readonly replicaCount: number;
```

- *Type:* number

The number of read replica nodes in this node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#replica_count ElasticacheReplicationGroup#replica_count}

---

##### `slots`<sup>Optional</sup> <a name="slots" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.slots"></a>

```typescript
public readonly slots: string;
```

- *Type:* string

A string of comma-separated values where the first set of values are the slot numbers (zero based), and the second set of values are the keyspaces for each slot.

The following example specifies three slots (numbered 0, 1, and 2): 0,1,2,0-4999,5000-9999,10000-16,383.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#slots ElasticacheReplicationGroup#slots}

---

### ElasticacheReplicationGroupPrimaryEndPoint <a name="ElasticacheReplicationGroupPrimaryEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPoint.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

const elasticacheReplicationGroupPrimaryEndPoint: elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPoint = { ... }
```


### ElasticacheReplicationGroupReadEndPoint <a name="ElasticacheReplicationGroupReadEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPoint.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

const elasticacheReplicationGroupReadEndPoint: elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPoint = { ... }
```


### ElasticacheReplicationGroupReaderEndPoint <a name="ElasticacheReplicationGroupReaderEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPoint.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

const elasticacheReplicationGroupReaderEndPoint: elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPoint = { ... }
```


### ElasticacheReplicationGroupTags <a name="ElasticacheReplicationGroupTags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

const elasticacheReplicationGroupTags: elasticacheReplicationGroup.ElasticacheReplicationGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#key ElasticacheReplicationGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_replication_group#value ElasticacheReplicationGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheReplicationGroupConfigurationEndPointOutputReference <a name="ElasticacheReplicationGroupConfigurationEndPointOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

new elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPoint">ElasticacheReplicationGroupConfigurationEndPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticacheReplicationGroupConfigurationEndPoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPoint">ElasticacheReplicationGroupConfigurationEndPoint</a>

---


### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

new elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resetLogGroup"></a>

```typescript
public resetLogGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroupInput"></a>

```typescript
public readonly logGroupInput: string;
```

- *Type:* string

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

---


### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

new elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resetDeliveryStream">resetDeliveryStream</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryStream` <a name="resetDeliveryStream" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resetDeliveryStream"></a>

```typescript
public resetDeliveryStream(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStreamInput">deliveryStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStream">deliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryStreamInput`<sup>Optional</sup> <a name="deliveryStreamInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStreamInput"></a>

```typescript
public readonly deliveryStreamInput: string;
```

- *Type:* string

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

---


### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

new elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putCloudwatchLogsDetails">putCloudwatchLogsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putKinesisFirehoseDetails">putKinesisFirehoseDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resetCloudwatchLogsDetails">resetCloudwatchLogsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resetKinesisFirehoseDetails">resetKinesisFirehoseDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogsDetails` <a name="putCloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putCloudwatchLogsDetails"></a>

```typescript
public putCloudwatchLogsDetails(value: ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putCloudwatchLogsDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

---

##### `putKinesisFirehoseDetails` <a name="putKinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putKinesisFirehoseDetails"></a>

```typescript
public putKinesisFirehoseDetails(value: ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putKinesisFirehoseDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

---

##### `resetCloudwatchLogsDetails` <a name="resetCloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resetCloudwatchLogsDetails"></a>

```typescript
public resetCloudwatchLogsDetails(): void
```

##### `resetKinesisFirehoseDetails` <a name="resetKinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resetKinesisFirehoseDetails"></a>

```typescript
public resetKinesisFirehoseDetails(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetails">cloudwatchLogsDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetails">kinesisFirehoseDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetailsInput">cloudwatchLogsDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetailsInput">kinesisFirehoseDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogsDetails`<sup>Required</sup> <a name="cloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetails"></a>

```typescript
public readonly cloudwatchLogsDetails: ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference</a>

---

##### `kinesisFirehoseDetails`<sup>Required</sup> <a name="kinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetails"></a>

```typescript
public readonly kinesisFirehoseDetails: ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference</a>

---

##### `cloudwatchLogsDetailsInput`<sup>Optional</sup> <a name="cloudwatchLogsDetailsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetailsInput"></a>

```typescript
public readonly cloudwatchLogsDetailsInput: IResolvable | ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

---

##### `kinesisFirehoseDetailsInput`<sup>Optional</sup> <a name="kinesisFirehoseDetailsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetailsInput"></a>

```typescript
public readonly kinesisFirehoseDetailsInput: IResolvable | ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a>

---


### ElasticacheReplicationGroupLogDeliveryConfigurationsList <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsList" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

new elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.get"></a>

```typescript
public get(index: number): ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheReplicationGroupLogDeliveryConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>[]

---


### ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

new elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.putDestinationDetails">putDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetDestinationDetails">resetDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetDestinationType">resetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetLogFormat">resetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetLogType">resetLogType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationDetails` <a name="putDestinationDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.putDestinationDetails"></a>

```typescript
public putDestinationDetails(value: ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.putDestinationDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a>

---

##### `resetDestinationDetails` <a name="resetDestinationDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetDestinationDetails"></a>

```typescript
public resetDestinationDetails(): void
```

##### `resetDestinationType` <a name="resetDestinationType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetDestinationType"></a>

```typescript
public resetDestinationType(): void
```

##### `resetLogFormat` <a name="resetLogFormat" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetLogFormat"></a>

```typescript
public resetLogFormat(): void
```

##### `resetLogType` <a name="resetLogType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetLogType"></a>

```typescript
public resetLogType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationDetails">destinationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationDetailsInput">destinationDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logFormatInput">logFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logFormat">logFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationDetails`<sup>Required</sup> <a name="destinationDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationDetails"></a>

```typescript
public readonly destinationDetails: ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference</a>

---

##### `destinationDetailsInput`<sup>Optional</sup> <a name="destinationDetailsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationDetailsInput"></a>

```typescript
public readonly destinationDetailsInput: IResolvable | ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a>

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationTypeInput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* string

---

##### `logFormatInput`<sup>Optional</sup> <a name="logFormatInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logFormatInput"></a>

```typescript
public readonly logFormatInput: string;
```

- *Type:* string

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logTypeInput"></a>

```typescript
public readonly logTypeInput: string;
```

- *Type:* string

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheReplicationGroupLogDeliveryConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>

---


### ElasticacheReplicationGroupNodeGroupConfigurationList <a name="ElasticacheReplicationGroupNodeGroupConfigurationList" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

new elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.get"></a>

```typescript
public get(index: number): ElasticacheReplicationGroupNodeGroupConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheReplicationGroupNodeGroupConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>[]

---


### ElasticacheReplicationGroupNodeGroupConfigurationOutputReference <a name="ElasticacheReplicationGroupNodeGroupConfigurationOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

new elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetNodeGroupId">resetNodeGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetPrimaryAvailabilityZone">resetPrimaryAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetReplicaAvailabilityZones">resetReplicaAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetReplicaCount">resetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetSlots">resetSlots</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNodeGroupId` <a name="resetNodeGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetNodeGroupId"></a>

```typescript
public resetNodeGroupId(): void
```

##### `resetPrimaryAvailabilityZone` <a name="resetPrimaryAvailabilityZone" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetPrimaryAvailabilityZone"></a>

```typescript
public resetPrimaryAvailabilityZone(): void
```

##### `resetReplicaAvailabilityZones` <a name="resetReplicaAvailabilityZones" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetReplicaAvailabilityZones"></a>

```typescript
public resetReplicaAvailabilityZones(): void
```

##### `resetReplicaCount` <a name="resetReplicaCount" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetReplicaCount"></a>

```typescript
public resetReplicaCount(): void
```

##### `resetSlots` <a name="resetSlots" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetSlots"></a>

```typescript
public resetSlots(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.nodeGroupIdInput">nodeGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.primaryAvailabilityZoneInput">primaryAvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaAvailabilityZonesInput">replicaAvailabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaCountInput">replicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.slotsInput">slotsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.nodeGroupId">nodeGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.primaryAvailabilityZone">primaryAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaAvailabilityZones">replicaAvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaCount">replicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.slots">slots</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeGroupIdInput`<sup>Optional</sup> <a name="nodeGroupIdInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.nodeGroupIdInput"></a>

```typescript
public readonly nodeGroupIdInput: string;
```

- *Type:* string

---

##### `primaryAvailabilityZoneInput`<sup>Optional</sup> <a name="primaryAvailabilityZoneInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.primaryAvailabilityZoneInput"></a>

```typescript
public readonly primaryAvailabilityZoneInput: string;
```

- *Type:* string

---

##### `replicaAvailabilityZonesInput`<sup>Optional</sup> <a name="replicaAvailabilityZonesInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaAvailabilityZonesInput"></a>

```typescript
public readonly replicaAvailabilityZonesInput: string[];
```

- *Type:* string[]

---

##### `replicaCountInput`<sup>Optional</sup> <a name="replicaCountInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaCountInput"></a>

```typescript
public readonly replicaCountInput: number;
```

- *Type:* number

---

##### `slotsInput`<sup>Optional</sup> <a name="slotsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.slotsInput"></a>

```typescript
public readonly slotsInput: string;
```

- *Type:* string

---

##### `nodeGroupId`<sup>Required</sup> <a name="nodeGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.nodeGroupId"></a>

```typescript
public readonly nodeGroupId: string;
```

- *Type:* string

---

##### `primaryAvailabilityZone`<sup>Required</sup> <a name="primaryAvailabilityZone" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.primaryAvailabilityZone"></a>

```typescript
public readonly primaryAvailabilityZone: string;
```

- *Type:* string

---

##### `replicaAvailabilityZones`<sup>Required</sup> <a name="replicaAvailabilityZones" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaAvailabilityZones"></a>

```typescript
public readonly replicaAvailabilityZones: string[];
```

- *Type:* string[]

---

##### `replicaCount`<sup>Required</sup> <a name="replicaCount" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaCount"></a>

```typescript
public readonly replicaCount: number;
```

- *Type:* number

---

##### `slots`<sup>Required</sup> <a name="slots" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.slots"></a>

```typescript
public readonly slots: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheReplicationGroupNodeGroupConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>

---


### ElasticacheReplicationGroupPrimaryEndPointOutputReference <a name="ElasticacheReplicationGroupPrimaryEndPointOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

new elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPoint">ElasticacheReplicationGroupPrimaryEndPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticacheReplicationGroupPrimaryEndPoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPoint">ElasticacheReplicationGroupPrimaryEndPoint</a>

---


### ElasticacheReplicationGroupReadEndPointOutputReference <a name="ElasticacheReplicationGroupReadEndPointOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

new elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.addresses">addresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.addressesList">addressesList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.ports">ports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.portsList">portsList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPoint">ElasticacheReplicationGroupReadEndPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.addresses"></a>

```typescript
public readonly addresses: string;
```

- *Type:* string

---

##### `addressesList`<sup>Required</sup> <a name="addressesList" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.addressesList"></a>

```typescript
public readonly addressesList: string[];
```

- *Type:* string[]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.ports"></a>

```typescript
public readonly ports: string;
```

- *Type:* string

---

##### `portsList`<sup>Required</sup> <a name="portsList" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.portsList"></a>

```typescript
public readonly portsList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticacheReplicationGroupReadEndPoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPoint">ElasticacheReplicationGroupReadEndPoint</a>

---


### ElasticacheReplicationGroupReaderEndPointOutputReference <a name="ElasticacheReplicationGroupReaderEndPointOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

new elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPoint">ElasticacheReplicationGroupReaderEndPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticacheReplicationGroupReaderEndPoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPoint">ElasticacheReplicationGroupReaderEndPoint</a>

---


### ElasticacheReplicationGroupTagsList <a name="ElasticacheReplicationGroupTagsList" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

new elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.get"></a>

```typescript
public get(index: number): ElasticacheReplicationGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheReplicationGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>[]

---


### ElasticacheReplicationGroupTagsOutputReference <a name="ElasticacheReplicationGroupTagsOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktn/provider-awscc'

new elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheReplicationGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>

---



