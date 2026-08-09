# `cassandraTable` Submodule <a name="`cassandraTable` Submodule" id="@cdktn/provider-awscc.cassandraTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CassandraTable <a name="CassandraTable" id="@cdktn/provider-awscc.cassandraTable.CassandraTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table awscc_cassandra_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTable(scope: Construct, id: string, config: CassandraTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig">CassandraTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig">CassandraTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putAutoScalingSpecifications">putAutoScalingSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putBillingMode">putBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putCdcSpecification">putCdcSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putClusteringKeyColumns">putClusteringKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putEncryptionSpecification">putEncryptionSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putPartitionKeyColumns">putPartitionKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putRegularColumns">putRegularColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putReplicaSpecifications">putReplicaSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putWarmThroughput">putWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetAutoScalingSpecifications">resetAutoScalingSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetBillingMode">resetBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetCdcSpecification">resetCdcSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetClientSideTimestampsEnabled">resetClientSideTimestampsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetClusteringKeyColumns">resetClusteringKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetDefaultTimeToLive">resetDefaultTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetEncryptionSpecification">resetEncryptionSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetPointInTimeRecoveryEnabled">resetPointInTimeRecoveryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetRegularColumns">resetRegularColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetReplicaSpecifications">resetReplicaSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetWarmThroughput">resetWarmThroughput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoScalingSpecifications` <a name="putAutoScalingSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putAutoScalingSpecifications"></a>

```typescript
public putAutoScalingSpecifications(value: CassandraTableAutoScalingSpecifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putAutoScalingSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a>

---

##### `putBillingMode` <a name="putBillingMode" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putBillingMode"></a>

```typescript
public putBillingMode(value: CassandraTableBillingMode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putBillingMode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a>

---

##### `putCdcSpecification` <a name="putCdcSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putCdcSpecification"></a>

```typescript
public putCdcSpecification(value: CassandraTableCdcSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putCdcSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a>

---

##### `putClusteringKeyColumns` <a name="putClusteringKeyColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putClusteringKeyColumns"></a>

```typescript
public putClusteringKeyColumns(value: IResolvable | CassandraTableClusteringKeyColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putClusteringKeyColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>[]

---

##### `putEncryptionSpecification` <a name="putEncryptionSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putEncryptionSpecification"></a>

```typescript
public putEncryptionSpecification(value: CassandraTableEncryptionSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putEncryptionSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a>

---

##### `putPartitionKeyColumns` <a name="putPartitionKeyColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putPartitionKeyColumns"></a>

```typescript
public putPartitionKeyColumns(value: IResolvable | CassandraTablePartitionKeyColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putPartitionKeyColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>[]

---

##### `putRegularColumns` <a name="putRegularColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putRegularColumns"></a>

```typescript
public putRegularColumns(value: IResolvable | CassandraTableRegularColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putRegularColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>[]

---

##### `putReplicaSpecifications` <a name="putReplicaSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putReplicaSpecifications"></a>

```typescript
public putReplicaSpecifications(value: IResolvable | CassandraTableReplicaSpecifications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putReplicaSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putTags"></a>

```typescript
public putTags(value: IResolvable | CassandraTableTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>[]

---

##### `putWarmThroughput` <a name="putWarmThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putWarmThroughput"></a>

```typescript
public putWarmThroughput(value: CassandraTableWarmThroughput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putWarmThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a>

---

##### `resetAutoScalingSpecifications` <a name="resetAutoScalingSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetAutoScalingSpecifications"></a>

```typescript
public resetAutoScalingSpecifications(): void
```

##### `resetBillingMode` <a name="resetBillingMode" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetBillingMode"></a>

```typescript
public resetBillingMode(): void
```

##### `resetCdcSpecification` <a name="resetCdcSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetCdcSpecification"></a>

```typescript
public resetCdcSpecification(): void
```

##### `resetClientSideTimestampsEnabled` <a name="resetClientSideTimestampsEnabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetClientSideTimestampsEnabled"></a>

```typescript
public resetClientSideTimestampsEnabled(): void
```

##### `resetClusteringKeyColumns` <a name="resetClusteringKeyColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetClusteringKeyColumns"></a>

```typescript
public resetClusteringKeyColumns(): void
```

##### `resetDefaultTimeToLive` <a name="resetDefaultTimeToLive" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetDefaultTimeToLive"></a>

```typescript
public resetDefaultTimeToLive(): void
```

##### `resetEncryptionSpecification` <a name="resetEncryptionSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetEncryptionSpecification"></a>

```typescript
public resetEncryptionSpecification(): void
```

##### `resetPointInTimeRecoveryEnabled` <a name="resetPointInTimeRecoveryEnabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetPointInTimeRecoveryEnabled"></a>

```typescript
public resetPointInTimeRecoveryEnabled(): void
```

##### `resetRegularColumns` <a name="resetRegularColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetRegularColumns"></a>

```typescript
public resetRegularColumns(): void
```

##### `resetReplicaSpecifications` <a name="resetReplicaSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetReplicaSpecifications"></a>

```typescript
public resetReplicaSpecifications(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetTableName"></a>

```typescript
public resetTableName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWarmThroughput` <a name="resetWarmThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetWarmThroughput"></a>

```typescript
public resetWarmThroughput(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CassandraTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.isConstruct"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

cassandraTable.CassandraTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.isTerraformElement"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

cassandraTable.CassandraTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.isTerraformResource"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

cassandraTable.CassandraTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.generateConfigForImport"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

cassandraTable.CassandraTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CassandraTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CassandraTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CassandraTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CassandraTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.autoScalingSpecifications">autoScalingSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference">CassandraTableAutoScalingSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.billingMode">billingMode</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference">CassandraTableBillingModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.cdcSpecification">cdcSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference">CassandraTableCdcSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clusteringKeyColumns">clusteringKeyColumns</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList">CassandraTableClusteringKeyColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.encryptionSpecification">encryptionSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference">CassandraTableEncryptionSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.partitionKeyColumns">partitionKeyColumns</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList">CassandraTablePartitionKeyColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.regularColumns">regularColumns</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList">CassandraTableRegularColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.replicaSpecifications">replicaSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList">CassandraTableReplicaSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList">CassandraTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.warmThroughput">warmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference">CassandraTableWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.autoScalingSpecificationsInput">autoScalingSpecificationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.billingModeInput">billingModeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.cdcSpecificationInput">cdcSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clientSideTimestampsEnabledInput">clientSideTimestampsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clusteringKeyColumnsInput">clusteringKeyColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.defaultTimeToLiveInput">defaultTimeToLiveInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.encryptionSpecificationInput">encryptionSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.keyspaceNameInput">keyspaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.partitionKeyColumnsInput">partitionKeyColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.pointInTimeRecoveryEnabledInput">pointInTimeRecoveryEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.regularColumnsInput">regularColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.replicaSpecificationsInput">replicaSpecificationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.warmThroughputInput">warmThroughputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clientSideTimestampsEnabled">clientSideTimestampsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.defaultTimeToLive">defaultTimeToLive</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.keyspaceName">keyspaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.pointInTimeRecoveryEnabled">pointInTimeRecoveryEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoScalingSpecifications`<sup>Required</sup> <a name="autoScalingSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.autoScalingSpecifications"></a>

```typescript
public readonly autoScalingSpecifications: CassandraTableAutoScalingSpecificationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference">CassandraTableAutoScalingSpecificationsOutputReference</a>

---

##### `billingMode`<sup>Required</sup> <a name="billingMode" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.billingMode"></a>

```typescript
public readonly billingMode: CassandraTableBillingModeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference">CassandraTableBillingModeOutputReference</a>

---

##### `cdcSpecification`<sup>Required</sup> <a name="cdcSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.cdcSpecification"></a>

```typescript
public readonly cdcSpecification: CassandraTableCdcSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference">CassandraTableCdcSpecificationOutputReference</a>

---

##### `clusteringKeyColumns`<sup>Required</sup> <a name="clusteringKeyColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clusteringKeyColumns"></a>

```typescript
public readonly clusteringKeyColumns: CassandraTableClusteringKeyColumnsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList">CassandraTableClusteringKeyColumnsList</a>

---

##### `encryptionSpecification`<sup>Required</sup> <a name="encryptionSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.encryptionSpecification"></a>

```typescript
public readonly encryptionSpecification: CassandraTableEncryptionSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference">CassandraTableEncryptionSpecificationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `partitionKeyColumns`<sup>Required</sup> <a name="partitionKeyColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.partitionKeyColumns"></a>

```typescript
public readonly partitionKeyColumns: CassandraTablePartitionKeyColumnsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList">CassandraTablePartitionKeyColumnsList</a>

---

##### `regularColumns`<sup>Required</sup> <a name="regularColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.regularColumns"></a>

```typescript
public readonly regularColumns: CassandraTableRegularColumnsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList">CassandraTableRegularColumnsList</a>

---

##### `replicaSpecifications`<sup>Required</sup> <a name="replicaSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.replicaSpecifications"></a>

```typescript
public readonly replicaSpecifications: CassandraTableReplicaSpecificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList">CassandraTableReplicaSpecificationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tags"></a>

```typescript
public readonly tags: CassandraTableTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList">CassandraTableTagsList</a>

---

##### `warmThroughput`<sup>Required</sup> <a name="warmThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.warmThroughput"></a>

```typescript
public readonly warmThroughput: CassandraTableWarmThroughputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference">CassandraTableWarmThroughputOutputReference</a>

---

##### `autoScalingSpecificationsInput`<sup>Optional</sup> <a name="autoScalingSpecificationsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.autoScalingSpecificationsInput"></a>

```typescript
public readonly autoScalingSpecificationsInput: IResolvable | CassandraTableAutoScalingSpecifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a>

---

##### `billingModeInput`<sup>Optional</sup> <a name="billingModeInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.billingModeInput"></a>

```typescript
public readonly billingModeInput: IResolvable | CassandraTableBillingMode;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a>

---

##### `cdcSpecificationInput`<sup>Optional</sup> <a name="cdcSpecificationInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.cdcSpecificationInput"></a>

```typescript
public readonly cdcSpecificationInput: IResolvable | CassandraTableCdcSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a>

---

##### `clientSideTimestampsEnabledInput`<sup>Optional</sup> <a name="clientSideTimestampsEnabledInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clientSideTimestampsEnabledInput"></a>

```typescript
public readonly clientSideTimestampsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `clusteringKeyColumnsInput`<sup>Optional</sup> <a name="clusteringKeyColumnsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clusteringKeyColumnsInput"></a>

```typescript
public readonly clusteringKeyColumnsInput: IResolvable | CassandraTableClusteringKeyColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>[]

---

##### `defaultTimeToLiveInput`<sup>Optional</sup> <a name="defaultTimeToLiveInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.defaultTimeToLiveInput"></a>

```typescript
public readonly defaultTimeToLiveInput: number;
```

- *Type:* number

---

##### `encryptionSpecificationInput`<sup>Optional</sup> <a name="encryptionSpecificationInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.encryptionSpecificationInput"></a>

```typescript
public readonly encryptionSpecificationInput: IResolvable | CassandraTableEncryptionSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a>

---

##### `keyspaceNameInput`<sup>Optional</sup> <a name="keyspaceNameInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.keyspaceNameInput"></a>

```typescript
public readonly keyspaceNameInput: string;
```

- *Type:* string

---

##### `partitionKeyColumnsInput`<sup>Optional</sup> <a name="partitionKeyColumnsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.partitionKeyColumnsInput"></a>

```typescript
public readonly partitionKeyColumnsInput: IResolvable | CassandraTablePartitionKeyColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>[]

---

##### `pointInTimeRecoveryEnabledInput`<sup>Optional</sup> <a name="pointInTimeRecoveryEnabledInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.pointInTimeRecoveryEnabledInput"></a>

```typescript
public readonly pointInTimeRecoveryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `regularColumnsInput`<sup>Optional</sup> <a name="regularColumnsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.regularColumnsInput"></a>

```typescript
public readonly regularColumnsInput: IResolvable | CassandraTableRegularColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>[]

---

##### `replicaSpecificationsInput`<sup>Optional</sup> <a name="replicaSpecificationsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.replicaSpecificationsInput"></a>

```typescript
public readonly replicaSpecificationsInput: IResolvable | CassandraTableReplicaSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>[]

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CassandraTableTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>[]

---

##### `warmThroughputInput`<sup>Optional</sup> <a name="warmThroughputInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.warmThroughputInput"></a>

```typescript
public readonly warmThroughputInput: IResolvable | CassandraTableWarmThroughput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a>

---

##### `clientSideTimestampsEnabled`<sup>Required</sup> <a name="clientSideTimestampsEnabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clientSideTimestampsEnabled"></a>

```typescript
public readonly clientSideTimestampsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `defaultTimeToLive`<sup>Required</sup> <a name="defaultTimeToLive" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.defaultTimeToLive"></a>

```typescript
public readonly defaultTimeToLive: number;
```

- *Type:* number

---

##### `keyspaceName`<sup>Required</sup> <a name="keyspaceName" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.keyspaceName"></a>

```typescript
public readonly keyspaceName: string;
```

- *Type:* string

---

##### `pointInTimeRecoveryEnabled`<sup>Required</sup> <a name="pointInTimeRecoveryEnabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.pointInTimeRecoveryEnabled"></a>

```typescript
public readonly pointInTimeRecoveryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CassandraTableAutoScalingSpecifications <a name="CassandraTableAutoScalingSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableAutoScalingSpecifications: cassandraTable.CassandraTableAutoScalingSpecifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications.property.readCapacityAutoScaling">readCapacityAutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a></code> | Represents configuration for auto scaling. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications.property.writeCapacityAutoScaling">writeCapacityAutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a></code> | Represents configuration for auto scaling. |

---

##### `readCapacityAutoScaling`<sup>Optional</sup> <a name="readCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications.property.readCapacityAutoScaling"></a>

```typescript
public readonly readCapacityAutoScaling: CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a>

Represents configuration for auto scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#read_capacity_auto_scaling CassandraTable#read_capacity_auto_scaling}

---

##### `writeCapacityAutoScaling`<sup>Optional</sup> <a name="writeCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications.property.writeCapacityAutoScaling"></a>

```typescript
public readonly writeCapacityAutoScaling: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a>

Represents configuration for auto scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#write_capacity_auto_scaling CassandraTable#write_capacity_auto_scaling}

---

### CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling <a name="CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableAutoScalingSpecificationsReadCapacityAutoScaling: cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.autoScalingDisabled">autoScalingDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.maximumUnits">maximumUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.minimumUnits">minimumUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.scalingPolicy">scalingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a></code> | Represents scaling policy. |

---

##### `autoScalingDisabled`<sup>Optional</sup> <a name="autoScalingDisabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.autoScalingDisabled"></a>

```typescript
public readonly autoScalingDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}.

---

##### `maximumUnits`<sup>Optional</sup> <a name="maximumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.maximumUnits"></a>

```typescript
public readonly maximumUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}.

---

##### `minimumUnits`<sup>Optional</sup> <a name="minimumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.minimumUnits"></a>

```typescript
public readonly minimumUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}.

---

##### `scalingPolicy`<sup>Optional</sup> <a name="scalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.scalingPolicy"></a>

```typescript
public readonly scalingPolicy: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a>

Represents scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scaling_policy CassandraTable#scaling_policy}

---

### CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy <a name="CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy: cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy.property.targetTrackingScalingPolicyConfiguration">targetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | Represents configuration for target tracking scaling policy. |

---

##### `targetTrackingScalingPolicyConfiguration`<sup>Optional</sup> <a name="targetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy.property.targetTrackingScalingPolicyConfiguration"></a>

```typescript
public readonly targetTrackingScalingPolicyConfiguration: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

Represents configuration for target tracking scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_tracking_scaling_policy_configuration CassandraTable#target_tracking_scaling_policy_configuration}

---

### CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration <a name="CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration: cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn">disableScaleIn</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown">scaleInCooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue">targetValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}. |

---

##### `disableScaleIn`<sup>Optional</sup> <a name="disableScaleIn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn"></a>

```typescript
public readonly disableScaleIn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}.

---

##### `scaleInCooldown`<sup>Optional</sup> <a name="scaleInCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown"></a>

```typescript
public readonly scaleInCooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}.

---

##### `scaleOutCooldown`<sup>Optional</sup> <a name="scaleOutCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown"></a>

```typescript
public readonly scaleOutCooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}.

---

##### `targetValue`<sup>Optional</sup> <a name="targetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}.

---

### CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling <a name="CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling: cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.autoScalingDisabled">autoScalingDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.maximumUnits">maximumUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.minimumUnits">minimumUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.scalingPolicy">scalingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a></code> | Represents scaling policy. |

---

##### `autoScalingDisabled`<sup>Optional</sup> <a name="autoScalingDisabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.autoScalingDisabled"></a>

```typescript
public readonly autoScalingDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}.

---

##### `maximumUnits`<sup>Optional</sup> <a name="maximumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.maximumUnits"></a>

```typescript
public readonly maximumUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}.

---

##### `minimumUnits`<sup>Optional</sup> <a name="minimumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.minimumUnits"></a>

```typescript
public readonly minimumUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}.

---

##### `scalingPolicy`<sup>Optional</sup> <a name="scalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.scalingPolicy"></a>

```typescript
public readonly scalingPolicy: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a>

Represents scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scaling_policy CassandraTable#scaling_policy}

---

### CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy <a name="CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy: cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy.property.targetTrackingScalingPolicyConfiguration">targetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | Represents configuration for target tracking scaling policy. |

---

##### `targetTrackingScalingPolicyConfiguration`<sup>Optional</sup> <a name="targetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy.property.targetTrackingScalingPolicyConfiguration"></a>

```typescript
public readonly targetTrackingScalingPolicyConfiguration: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

Represents configuration for target tracking scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_tracking_scaling_policy_configuration CassandraTable#target_tracking_scaling_policy_configuration}

---

### CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration <a name="CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration: cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn">disableScaleIn</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown">scaleInCooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue">targetValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}. |

---

##### `disableScaleIn`<sup>Optional</sup> <a name="disableScaleIn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn"></a>

```typescript
public readonly disableScaleIn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}.

---

##### `scaleInCooldown`<sup>Optional</sup> <a name="scaleInCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown"></a>

```typescript
public readonly scaleInCooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}.

---

##### `scaleOutCooldown`<sup>Optional</sup> <a name="scaleOutCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown"></a>

```typescript
public readonly scaleOutCooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}.

---

##### `targetValue`<sup>Optional</sup> <a name="targetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}.

---

### CassandraTableBillingMode <a name="CassandraTableBillingMode" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableBillingMode: cassandraTable.CassandraTableBillingMode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode.property.mode">mode</a></code> | <code>string</code> | Capacity mode for the specified table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode.property.provisionedThroughput">provisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a></code> | Throughput for the specified table, which consists of values for ReadCapacityUnits and WriteCapacityUnits. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Capacity mode for the specified table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#mode CassandraTable#mode}

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="provisionedThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode.property.provisionedThroughput"></a>

```typescript
public readonly provisionedThroughput: CassandraTableBillingModeProvisionedThroughput;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a>

Throughput for the specified table, which consists of values for ReadCapacityUnits and WriteCapacityUnits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#provisioned_throughput CassandraTable#provisioned_throughput}

---

### CassandraTableBillingModeProvisionedThroughput <a name="CassandraTableBillingModeProvisionedThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableBillingModeProvisionedThroughput: cassandraTable.CassandraTableBillingModeProvisionedThroughput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput.property.readCapacityUnits">readCapacityUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#read_capacity_units CassandraTable#read_capacity_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput.property.writeCapacityUnits">writeCapacityUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#write_capacity_units CassandraTable#write_capacity_units}. |

---

##### `readCapacityUnits`<sup>Optional</sup> <a name="readCapacityUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput.property.readCapacityUnits"></a>

```typescript
public readonly readCapacityUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#read_capacity_units CassandraTable#read_capacity_units}.

---

##### `writeCapacityUnits`<sup>Optional</sup> <a name="writeCapacityUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput.property.writeCapacityUnits"></a>

```typescript
public readonly writeCapacityUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#write_capacity_units CassandraTable#write_capacity_units}.

---

### CassandraTableCdcSpecification <a name="CassandraTableCdcSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableCdcSpecification: cassandraTable.CassandraTableCdcSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.property.status">status</a></code> | <code>string</code> | Indicates whether CDC is enabled or disabled for the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>[]</code> | An array of key-value pairs to apply to the CDC stream resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.property.viewType">viewType</a></code> | <code>string</code> | Specifies what data should be captured in the change data stream. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Indicates whether CDC is enabled or disabled for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#status CassandraTable#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.property.tags"></a>

```typescript
public readonly tags: IResolvable | CassandraTableCdcSpecificationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>[]

An array of key-value pairs to apply to the CDC stream resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#tags CassandraTable#tags}

---

##### `viewType`<sup>Optional</sup> <a name="viewType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.property.viewType"></a>

```typescript
public readonly viewType: string;
```

- *Type:* string

Specifies what data should be captured in the change data stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#view_type CassandraTable#view_type}

---

### CassandraTableCdcSpecificationTags <a name="CassandraTableCdcSpecificationTags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableCdcSpecificationTags: cassandraTable.CassandraTableCdcSpecificationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#key CassandraTable#key}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#value CassandraTable#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#key CassandraTable#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#value CassandraTable#value}.

---

### CassandraTableClusteringKeyColumns <a name="CassandraTableClusteringKeyColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableClusteringKeyColumns: cassandraTable.CassandraTableClusteringKeyColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns.property.column">column</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn">CassandraTableClusteringKeyColumnsColumn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column CassandraTable#column}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns.property.orderBy">orderBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#order_by CassandraTable#order_by}. |

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns.property.column"></a>

```typescript
public readonly column: CassandraTableClusteringKeyColumnsColumn;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn">CassandraTableClusteringKeyColumnsColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column CassandraTable#column}.

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#order_by CassandraTable#order_by}.

---

### CassandraTableClusteringKeyColumnsColumn <a name="CassandraTableClusteringKeyColumnsColumn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableClusteringKeyColumnsColumn: cassandraTable.CassandraTableClusteringKeyColumnsColumn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn.property.columnName">columnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn.property.columnType">columnType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}. |

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}.

---

##### `columnType`<sup>Optional</sup> <a name="columnType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn.property.columnType"></a>

```typescript
public readonly columnType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}.

---

### CassandraTableConfig <a name="CassandraTableConfig" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableConfig: cassandraTable.CassandraTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.keyspaceName">keyspaceName</a></code> | <code>string</code> | Name for Cassandra keyspace. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.partitionKeyColumns">partitionKeyColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>[]</code> | Partition key columns of the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.autoScalingSpecifications">autoScalingSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a></code> | Represents the read and write settings used for AutoScaling. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.billingMode">billingMode</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#billing_mode CassandraTable#billing_mode}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.cdcSpecification">cdcSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a></code> | Represents the CDC configuration for the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.clientSideTimestampsEnabled">clientSideTimestampsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether client side timestamps are enabled (true) or disabled (false) on the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.clusteringKeyColumns">clusteringKeyColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>[]</code> | Clustering key columns of the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.defaultTimeToLive">defaultTimeToLive</a></code> | <code>number</code> | Default TTL (Time To Live) in seconds, where zero is disabled. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.encryptionSpecification">encryptionSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a></code> | Represents the settings used to enable server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.pointInTimeRecoveryEnabled">pointInTimeRecoveryEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether point in time recovery is enabled (true) or disabled (false) on the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.regularColumns">regularColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>[]</code> | Non-key columns of the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.replicaSpecifications">replicaSpecifications</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#replica_specifications CassandraTable#replica_specifications}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.tableName">tableName</a></code> | <code>string</code> | Name for Cassandra table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.warmThroughput">warmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a></code> | Warm throughput configuration for the table. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `keyspaceName`<sup>Required</sup> <a name="keyspaceName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.keyspaceName"></a>

```typescript
public readonly keyspaceName: string;
```

- *Type:* string

Name for Cassandra keyspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#keyspace_name CassandraTable#keyspace_name}

---

##### `partitionKeyColumns`<sup>Required</sup> <a name="partitionKeyColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.partitionKeyColumns"></a>

```typescript
public readonly partitionKeyColumns: IResolvable | CassandraTablePartitionKeyColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>[]

Partition key columns of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#partition_key_columns CassandraTable#partition_key_columns}

---

##### `autoScalingSpecifications`<sup>Optional</sup> <a name="autoScalingSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.autoScalingSpecifications"></a>

```typescript
public readonly autoScalingSpecifications: CassandraTableAutoScalingSpecifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a>

Represents the read and write settings used for AutoScaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#auto_scaling_specifications CassandraTable#auto_scaling_specifications}

---

##### `billingMode`<sup>Optional</sup> <a name="billingMode" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.billingMode"></a>

```typescript
public readonly billingMode: CassandraTableBillingMode;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#billing_mode CassandraTable#billing_mode}.

---

##### `cdcSpecification`<sup>Optional</sup> <a name="cdcSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.cdcSpecification"></a>

```typescript
public readonly cdcSpecification: CassandraTableCdcSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a>

Represents the CDC configuration for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#cdc_specification CassandraTable#cdc_specification}

---

##### `clientSideTimestampsEnabled`<sup>Optional</sup> <a name="clientSideTimestampsEnabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.clientSideTimestampsEnabled"></a>

```typescript
public readonly clientSideTimestampsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether client side timestamps are enabled (true) or disabled (false) on the table.

False by default, once it is enabled it cannot be disabled again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#client_side_timestamps_enabled CassandraTable#client_side_timestamps_enabled}

---

##### `clusteringKeyColumns`<sup>Optional</sup> <a name="clusteringKeyColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.clusteringKeyColumns"></a>

```typescript
public readonly clusteringKeyColumns: IResolvable | CassandraTableClusteringKeyColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>[]

Clustering key columns of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#clustering_key_columns CassandraTable#clustering_key_columns}

---

##### `defaultTimeToLive`<sup>Optional</sup> <a name="defaultTimeToLive" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.defaultTimeToLive"></a>

```typescript
public readonly defaultTimeToLive: number;
```

- *Type:* number

Default TTL (Time To Live) in seconds, where zero is disabled.

If the value is greater than zero, TTL is enabled for the entire table and an expiration timestamp is added to each column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#default_time_to_live CassandraTable#default_time_to_live}

---

##### `encryptionSpecification`<sup>Optional</sup> <a name="encryptionSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.encryptionSpecification"></a>

```typescript
public readonly encryptionSpecification: CassandraTableEncryptionSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a>

Represents the settings used to enable server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#encryption_specification CassandraTable#encryption_specification}

---

##### `pointInTimeRecoveryEnabled`<sup>Optional</sup> <a name="pointInTimeRecoveryEnabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.pointInTimeRecoveryEnabled"></a>

```typescript
public readonly pointInTimeRecoveryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#point_in_time_recovery_enabled CassandraTable#point_in_time_recovery_enabled}

---

##### `regularColumns`<sup>Optional</sup> <a name="regularColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.regularColumns"></a>

```typescript
public readonly regularColumns: IResolvable | CassandraTableRegularColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>[]

Non-key columns of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#regular_columns CassandraTable#regular_columns}

---

##### `replicaSpecifications`<sup>Optional</sup> <a name="replicaSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.replicaSpecifications"></a>

```typescript
public readonly replicaSpecifications: IResolvable | CassandraTableReplicaSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#replica_specifications CassandraTable#replica_specifications}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Name for Cassandra table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#table_name CassandraTable#table_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CassandraTableTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#tags CassandraTable#tags}

---

##### `warmThroughput`<sup>Optional</sup> <a name="warmThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.warmThroughput"></a>

```typescript
public readonly warmThroughput: CassandraTableWarmThroughput;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a>

Warm throughput configuration for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#warm_throughput CassandraTable#warm_throughput}

---

### CassandraTableEncryptionSpecification <a name="CassandraTableEncryptionSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableEncryptionSpecification: cassandraTable.CassandraTableEncryptionSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification.property.encryptionType">encryptionType</a></code> | <code>string</code> | Server-side encryption type. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>string</code> | The AWS KMS customer master key (CMK) that should be used for the AWS KMS encryption. |

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

Server-side encryption type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#encryption_type CassandraTable#encryption_type}

---

##### `kmsKeyIdentifier`<sup>Optional</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification.property.kmsKeyIdentifier"></a>

```typescript
public readonly kmsKeyIdentifier: string;
```

- *Type:* string

The AWS KMS customer master key (CMK) that should be used for the AWS KMS encryption.

To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#kms_key_identifier CassandraTable#kms_key_identifier}

---

### CassandraTablePartitionKeyColumns <a name="CassandraTablePartitionKeyColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTablePartitionKeyColumns: cassandraTable.CassandraTablePartitionKeyColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns.property.columnName">columnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns.property.columnType">columnType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}. |

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}.

---

##### `columnType`<sup>Required</sup> <a name="columnType" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns.property.columnType"></a>

```typescript
public readonly columnType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}.

---

### CassandraTableRegularColumns <a name="CassandraTableRegularColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableRegularColumns: cassandraTable.CassandraTableRegularColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns.property.columnName">columnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns.property.columnType">columnType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}. |

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}.

---

##### `columnType`<sup>Optional</sup> <a name="columnType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns.property.columnType"></a>

```typescript
public readonly columnType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}.

---

### CassandraTableReplicaSpecifications <a name="CassandraTableReplicaSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableReplicaSpecifications: cassandraTable.CassandraTableReplicaSpecifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.property.readCapacityAutoScaling">readCapacityAutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling">CassandraTableReplicaSpecificationsReadCapacityAutoScaling</a></code> | Represents configuration for auto scaling. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.property.readCapacityUnits">readCapacityUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#read_capacity_units CassandraTable#read_capacity_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#region CassandraTable#region}. |

---

##### `readCapacityAutoScaling`<sup>Optional</sup> <a name="readCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.property.readCapacityAutoScaling"></a>

```typescript
public readonly readCapacityAutoScaling: CassandraTableReplicaSpecificationsReadCapacityAutoScaling;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling">CassandraTableReplicaSpecificationsReadCapacityAutoScaling</a>

Represents configuration for auto scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#read_capacity_auto_scaling CassandraTable#read_capacity_auto_scaling}

---

##### `readCapacityUnits`<sup>Optional</sup> <a name="readCapacityUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.property.readCapacityUnits"></a>

```typescript
public readonly readCapacityUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#read_capacity_units CassandraTable#read_capacity_units}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#region CassandraTable#region}.

---

### CassandraTableReplicaSpecificationsReadCapacityAutoScaling <a name="CassandraTableReplicaSpecificationsReadCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableReplicaSpecificationsReadCapacityAutoScaling: cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.autoScalingDisabled">autoScalingDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.maximumUnits">maximumUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.minimumUnits">minimumUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.scalingPolicy">scalingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a></code> | Represents scaling policy. |

---

##### `autoScalingDisabled`<sup>Optional</sup> <a name="autoScalingDisabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.autoScalingDisabled"></a>

```typescript
public readonly autoScalingDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}.

---

##### `maximumUnits`<sup>Optional</sup> <a name="maximumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.maximumUnits"></a>

```typescript
public readonly maximumUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}.

---

##### `minimumUnits`<sup>Optional</sup> <a name="minimumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.minimumUnits"></a>

```typescript
public readonly minimumUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}.

---

##### `scalingPolicy`<sup>Optional</sup> <a name="scalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.scalingPolicy"></a>

```typescript
public readonly scalingPolicy: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a>

Represents scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scaling_policy CassandraTable#scaling_policy}

---

### CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy <a name="CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy: cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy.property.targetTrackingScalingPolicyConfiguration">targetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | Represents configuration for target tracking scaling policy. |

---

##### `targetTrackingScalingPolicyConfiguration`<sup>Optional</sup> <a name="targetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy.property.targetTrackingScalingPolicyConfiguration"></a>

```typescript
public readonly targetTrackingScalingPolicyConfiguration: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

Represents configuration for target tracking scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_tracking_scaling_policy_configuration CassandraTable#target_tracking_scaling_policy_configuration}

---

### CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration <a name="CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration: cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn">disableScaleIn</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown">scaleInCooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue">targetValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}. |

---

##### `disableScaleIn`<sup>Optional</sup> <a name="disableScaleIn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn"></a>

```typescript
public readonly disableScaleIn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}.

---

##### `scaleInCooldown`<sup>Optional</sup> <a name="scaleInCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown"></a>

```typescript
public readonly scaleInCooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}.

---

##### `scaleOutCooldown`<sup>Optional</sup> <a name="scaleOutCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown"></a>

```typescript
public readonly scaleOutCooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}.

---

##### `targetValue`<sup>Optional</sup> <a name="targetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}.

---

### CassandraTableTags <a name="CassandraTableTags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTags.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableTags: cassandraTable.CassandraTableTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#key CassandraTable#key}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#value CassandraTable#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#key CassandraTable#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#value CassandraTable#value}.

---

### CassandraTableWarmThroughput <a name="CassandraTableWarmThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

const cassandraTableWarmThroughput: cassandraTable.CassandraTableWarmThroughput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput.property.readUnitsPerSecond">readUnitsPerSecond</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#read_units_per_second CassandraTable#read_units_per_second}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput.property.writeUnitsPerSecond">writeUnitsPerSecond</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#write_units_per_second CassandraTable#write_units_per_second}. |

---

##### `readUnitsPerSecond`<sup>Optional</sup> <a name="readUnitsPerSecond" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput.property.readUnitsPerSecond"></a>

```typescript
public readonly readUnitsPerSecond: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#read_units_per_second CassandraTable#read_units_per_second}.

---

##### `writeUnitsPerSecond`<sup>Optional</sup> <a name="writeUnitsPerSecond" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput.property.writeUnitsPerSecond"></a>

```typescript
public readonly writeUnitsPerSecond: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#write_units_per_second CassandraTable#write_units_per_second}.

---

## Classes <a name="Classes" id="Classes"></a>

### CassandraTableAutoScalingSpecificationsOutputReference <a name="CassandraTableAutoScalingSpecificationsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putReadCapacityAutoScaling">putReadCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putWriteCapacityAutoScaling">putWriteCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resetReadCapacityAutoScaling">resetReadCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resetWriteCapacityAutoScaling">resetWriteCapacityAutoScaling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReadCapacityAutoScaling` <a name="putReadCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putReadCapacityAutoScaling"></a>

```typescript
public putReadCapacityAutoScaling(value: CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putReadCapacityAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a>

---

##### `putWriteCapacityAutoScaling` <a name="putWriteCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putWriteCapacityAutoScaling"></a>

```typescript
public putWriteCapacityAutoScaling(value: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putWriteCapacityAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a>

---

##### `resetReadCapacityAutoScaling` <a name="resetReadCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resetReadCapacityAutoScaling"></a>

```typescript
public resetReadCapacityAutoScaling(): void
```

##### `resetWriteCapacityAutoScaling` <a name="resetWriteCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resetWriteCapacityAutoScaling"></a>

```typescript
public resetWriteCapacityAutoScaling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.readCapacityAutoScaling">readCapacityAutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.writeCapacityAutoScaling">writeCapacityAutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.readCapacityAutoScalingInput">readCapacityAutoScalingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.writeCapacityAutoScalingInput">writeCapacityAutoScalingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readCapacityAutoScaling`<sup>Required</sup> <a name="readCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.readCapacityAutoScaling"></a>

```typescript
public readonly readCapacityAutoScaling: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference</a>

---

##### `writeCapacityAutoScaling`<sup>Required</sup> <a name="writeCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.writeCapacityAutoScaling"></a>

```typescript
public readonly writeCapacityAutoScaling: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference</a>

---

##### `readCapacityAutoScalingInput`<sup>Optional</sup> <a name="readCapacityAutoScalingInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.readCapacityAutoScalingInput"></a>

```typescript
public readonly readCapacityAutoScalingInput: IResolvable | CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a>

---

##### `writeCapacityAutoScalingInput`<sup>Optional</sup> <a name="writeCapacityAutoScalingInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.writeCapacityAutoScalingInput"></a>

```typescript
public readonly writeCapacityAutoScalingInput: IResolvable | CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableAutoScalingSpecifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a>

---


### CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference <a name="CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.putScalingPolicy">putScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetAutoScalingDisabled">resetAutoScalingDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetMaximumUnits">resetMaximumUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetMinimumUnits">resetMinimumUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetScalingPolicy">resetScalingPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScalingPolicy` <a name="putScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.putScalingPolicy"></a>

```typescript
public putScalingPolicy(value: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.putScalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a>

---

##### `resetAutoScalingDisabled` <a name="resetAutoScalingDisabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetAutoScalingDisabled"></a>

```typescript
public resetAutoScalingDisabled(): void
```

##### `resetMaximumUnits` <a name="resetMaximumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetMaximumUnits"></a>

```typescript
public resetMaximumUnits(): void
```

##### `resetMinimumUnits` <a name="resetMinimumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetMinimumUnits"></a>

```typescript
public resetMinimumUnits(): void
```

##### `resetScalingPolicy` <a name="resetScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetScalingPolicy"></a>

```typescript
public resetScalingPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicy">scalingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabledInput">autoScalingDisabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnitsInput">maximumUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnitsInput">minimumUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicyInput">scalingPolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabled">autoScalingDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnits">maximumUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnits">minimumUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scalingPolicy`<sup>Required</sup> <a name="scalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicy"></a>

```typescript
public readonly scalingPolicy: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference</a>

---

##### `autoScalingDisabledInput`<sup>Optional</sup> <a name="autoScalingDisabledInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabledInput"></a>

```typescript
public readonly autoScalingDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maximumUnitsInput`<sup>Optional</sup> <a name="maximumUnitsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnitsInput"></a>

```typescript
public readonly maximumUnitsInput: number;
```

- *Type:* number

---

##### `minimumUnitsInput`<sup>Optional</sup> <a name="minimumUnitsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnitsInput"></a>

```typescript
public readonly minimumUnitsInput: number;
```

- *Type:* number

---

##### `scalingPolicyInput`<sup>Optional</sup> <a name="scalingPolicyInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicyInput"></a>

```typescript
public readonly scalingPolicyInput: IResolvable | CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a>

---

##### `autoScalingDisabled`<sup>Required</sup> <a name="autoScalingDisabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabled"></a>

```typescript
public readonly autoScalingDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maximumUnits`<sup>Required</sup> <a name="maximumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnits"></a>

```typescript
public readonly maximumUnits: number;
```

- *Type:* number

---

##### `minimumUnits`<sup>Required</sup> <a name="minimumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnits"></a>

```typescript
public readonly minimumUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a>

---


### CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference <a name="CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration">putTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resetTargetTrackingScalingPolicyConfiguration">resetTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetTrackingScalingPolicyConfiguration` <a name="putTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration"></a>

```typescript
public putTargetTrackingScalingPolicyConfiguration(value: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---

##### `resetTargetTrackingScalingPolicyConfiguration` <a name="resetTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resetTargetTrackingScalingPolicyConfiguration"></a>

```typescript
public resetTargetTrackingScalingPolicyConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfiguration">targetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfigurationInput">targetTrackingScalingPolicyConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetTrackingScalingPolicyConfiguration`<sup>Required</sup> <a name="targetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```typescript
public readonly targetTrackingScalingPolicyConfiguration: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `targetTrackingScalingPolicyConfigurationInput`<sup>Optional</sup> <a name="targetTrackingScalingPolicyConfigurationInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfigurationInput"></a>

```typescript
public readonly targetTrackingScalingPolicyConfigurationInput: IResolvable | CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a>

---


### CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference <a name="CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn">resetDisableScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown">resetScaleInCooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown">resetScaleOutCooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetTargetValue">resetTargetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableScaleIn` <a name="resetDisableScaleIn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn"></a>

```typescript
public resetDisableScaleIn(): void
```

##### `resetScaleInCooldown` <a name="resetScaleInCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown"></a>

```typescript
public resetScaleInCooldown(): void
```

##### `resetScaleOutCooldown` <a name="resetScaleOutCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown"></a>

```typescript
public resetScaleOutCooldown(): void
```

##### `resetTargetValue` <a name="resetTargetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetTargetValue"></a>

```typescript
public resetTargetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput">disableScaleInInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput">scaleInCooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput">scaleOutCooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">disableScaleIn</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">scaleInCooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">targetValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableScaleInInput`<sup>Optional</sup> <a name="disableScaleInInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput"></a>

```typescript
public readonly disableScaleInInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `scaleInCooldownInput`<sup>Optional</sup> <a name="scaleInCooldownInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput"></a>

```typescript
public readonly scaleInCooldownInput: number;
```

- *Type:* number

---

##### `scaleOutCooldownInput`<sup>Optional</sup> <a name="scaleOutCooldownInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput"></a>

```typescript
public readonly scaleOutCooldownInput: number;
```

- *Type:* number

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput"></a>

```typescript
public readonly targetValueInput: number;
```

- *Type:* number

---

##### `disableScaleIn`<sup>Required</sup> <a name="disableScaleIn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```typescript
public readonly disableScaleIn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `scaleInCooldown`<sup>Required</sup> <a name="scaleInCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```typescript
public readonly scaleInCooldown: number;
```

- *Type:* number

---

##### `scaleOutCooldown`<sup>Required</sup> <a name="scaleOutCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```typescript
public readonly scaleOutCooldown: number;
```

- *Type:* number

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---


### CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference <a name="CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.putScalingPolicy">putScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetAutoScalingDisabled">resetAutoScalingDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetMaximumUnits">resetMaximumUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetMinimumUnits">resetMinimumUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetScalingPolicy">resetScalingPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScalingPolicy` <a name="putScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.putScalingPolicy"></a>

```typescript
public putScalingPolicy(value: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.putScalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a>

---

##### `resetAutoScalingDisabled` <a name="resetAutoScalingDisabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetAutoScalingDisabled"></a>

```typescript
public resetAutoScalingDisabled(): void
```

##### `resetMaximumUnits` <a name="resetMaximumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetMaximumUnits"></a>

```typescript
public resetMaximumUnits(): void
```

##### `resetMinimumUnits` <a name="resetMinimumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetMinimumUnits"></a>

```typescript
public resetMinimumUnits(): void
```

##### `resetScalingPolicy` <a name="resetScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetScalingPolicy"></a>

```typescript
public resetScalingPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.scalingPolicy">scalingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.autoScalingDisabledInput">autoScalingDisabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.maximumUnitsInput">maximumUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.minimumUnitsInput">minimumUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.scalingPolicyInput">scalingPolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.autoScalingDisabled">autoScalingDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.maximumUnits">maximumUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.minimumUnits">minimumUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scalingPolicy`<sup>Required</sup> <a name="scalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.scalingPolicy"></a>

```typescript
public readonly scalingPolicy: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference</a>

---

##### `autoScalingDisabledInput`<sup>Optional</sup> <a name="autoScalingDisabledInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.autoScalingDisabledInput"></a>

```typescript
public readonly autoScalingDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maximumUnitsInput`<sup>Optional</sup> <a name="maximumUnitsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.maximumUnitsInput"></a>

```typescript
public readonly maximumUnitsInput: number;
```

- *Type:* number

---

##### `minimumUnitsInput`<sup>Optional</sup> <a name="minimumUnitsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.minimumUnitsInput"></a>

```typescript
public readonly minimumUnitsInput: number;
```

- *Type:* number

---

##### `scalingPolicyInput`<sup>Optional</sup> <a name="scalingPolicyInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.scalingPolicyInput"></a>

```typescript
public readonly scalingPolicyInput: IResolvable | CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a>

---

##### `autoScalingDisabled`<sup>Required</sup> <a name="autoScalingDisabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.autoScalingDisabled"></a>

```typescript
public readonly autoScalingDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maximumUnits`<sup>Required</sup> <a name="maximumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.maximumUnits"></a>

```typescript
public readonly maximumUnits: number;
```

- *Type:* number

---

##### `minimumUnits`<sup>Required</sup> <a name="minimumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.minimumUnits"></a>

```typescript
public readonly minimumUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a>

---


### CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference <a name="CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration">putTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.resetTargetTrackingScalingPolicyConfiguration">resetTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetTrackingScalingPolicyConfiguration` <a name="putTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration"></a>

```typescript
public putTargetTrackingScalingPolicyConfiguration(value: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---

##### `resetTargetTrackingScalingPolicyConfiguration` <a name="resetTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.resetTargetTrackingScalingPolicyConfiguration"></a>

```typescript
public resetTargetTrackingScalingPolicyConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfiguration">targetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfigurationInput">targetTrackingScalingPolicyConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetTrackingScalingPolicyConfiguration`<sup>Required</sup> <a name="targetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```typescript
public readonly targetTrackingScalingPolicyConfiguration: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `targetTrackingScalingPolicyConfigurationInput`<sup>Optional</sup> <a name="targetTrackingScalingPolicyConfigurationInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfigurationInput"></a>

```typescript
public readonly targetTrackingScalingPolicyConfigurationInput: IResolvable | CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a>

---


### CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference <a name="CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn">resetDisableScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown">resetScaleInCooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown">resetScaleOutCooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetTargetValue">resetTargetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableScaleIn` <a name="resetDisableScaleIn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn"></a>

```typescript
public resetDisableScaleIn(): void
```

##### `resetScaleInCooldown` <a name="resetScaleInCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown"></a>

```typescript
public resetScaleInCooldown(): void
```

##### `resetScaleOutCooldown` <a name="resetScaleOutCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown"></a>

```typescript
public resetScaleOutCooldown(): void
```

##### `resetTargetValue` <a name="resetTargetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetTargetValue"></a>

```typescript
public resetTargetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput">disableScaleInInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput">scaleInCooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput">scaleOutCooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">disableScaleIn</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">scaleInCooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">targetValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableScaleInInput`<sup>Optional</sup> <a name="disableScaleInInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput"></a>

```typescript
public readonly disableScaleInInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `scaleInCooldownInput`<sup>Optional</sup> <a name="scaleInCooldownInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput"></a>

```typescript
public readonly scaleInCooldownInput: number;
```

- *Type:* number

---

##### `scaleOutCooldownInput`<sup>Optional</sup> <a name="scaleOutCooldownInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput"></a>

```typescript
public readonly scaleOutCooldownInput: number;
```

- *Type:* number

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput"></a>

```typescript
public readonly targetValueInput: number;
```

- *Type:* number

---

##### `disableScaleIn`<sup>Required</sup> <a name="disableScaleIn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```typescript
public readonly disableScaleIn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `scaleInCooldown`<sup>Required</sup> <a name="scaleInCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```typescript
public readonly scaleInCooldown: number;
```

- *Type:* number

---

##### `scaleOutCooldown`<sup>Required</sup> <a name="scaleOutCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```typescript
public readonly scaleOutCooldown: number;
```

- *Type:* number

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---


### CassandraTableBillingModeOutputReference <a name="CassandraTableBillingModeOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableBillingModeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.putProvisionedThroughput">putProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resetProvisionedThroughput">resetProvisionedThroughput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProvisionedThroughput` <a name="putProvisionedThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.putProvisionedThroughput"></a>

```typescript
public putProvisionedThroughput(value: CassandraTableBillingModeProvisionedThroughput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.putProvisionedThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a>

---

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetProvisionedThroughput` <a name="resetProvisionedThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resetProvisionedThroughput"></a>

```typescript
public resetProvisionedThroughput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.provisionedThroughput">provisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference">CassandraTableBillingModeProvisionedThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.provisionedThroughputInput">provisionedThroughputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `provisionedThroughput`<sup>Required</sup> <a name="provisionedThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.provisionedThroughput"></a>

```typescript
public readonly provisionedThroughput: CassandraTableBillingModeProvisionedThroughputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference">CassandraTableBillingModeProvisionedThroughputOutputReference</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `provisionedThroughputInput`<sup>Optional</sup> <a name="provisionedThroughputInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.provisionedThroughputInput"></a>

```typescript
public readonly provisionedThroughputInput: IResolvable | CassandraTableBillingModeProvisionedThroughput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableBillingMode;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a>

---


### CassandraTableBillingModeProvisionedThroughputOutputReference <a name="CassandraTableBillingModeProvisionedThroughputOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resetReadCapacityUnits">resetReadCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resetWriteCapacityUnits">resetWriteCapacityUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadCapacityUnits` <a name="resetReadCapacityUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resetReadCapacityUnits"></a>

```typescript
public resetReadCapacityUnits(): void
```

##### `resetWriteCapacityUnits` <a name="resetWriteCapacityUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resetWriteCapacityUnits"></a>

```typescript
public resetWriteCapacityUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.readCapacityUnitsInput">readCapacityUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.writeCapacityUnitsInput">writeCapacityUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.readCapacityUnits">readCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.writeCapacityUnits">writeCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readCapacityUnitsInput`<sup>Optional</sup> <a name="readCapacityUnitsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.readCapacityUnitsInput"></a>

```typescript
public readonly readCapacityUnitsInput: number;
```

- *Type:* number

---

##### `writeCapacityUnitsInput`<sup>Optional</sup> <a name="writeCapacityUnitsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.writeCapacityUnitsInput"></a>

```typescript
public readonly writeCapacityUnitsInput: number;
```

- *Type:* number

---

##### `readCapacityUnits`<sup>Required</sup> <a name="readCapacityUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.readCapacityUnits"></a>

```typescript
public readonly readCapacityUnits: number;
```

- *Type:* number

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="writeCapacityUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.writeCapacityUnits"></a>

```typescript
public readonly writeCapacityUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableBillingModeProvisionedThroughput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a>

---


### CassandraTableCdcSpecificationOutputReference <a name="CassandraTableCdcSpecificationOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableCdcSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resetViewType">resetViewType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | CassandraTableCdcSpecificationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>[]

---

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetViewType` <a name="resetViewType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resetViewType"></a>

```typescript
public resetViewType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList">CassandraTableCdcSpecificationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.viewTypeInput">viewTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.viewType">viewType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.tags"></a>

```typescript
public readonly tags: CassandraTableCdcSpecificationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList">CassandraTableCdcSpecificationTagsList</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CassandraTableCdcSpecificationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>[]

---

##### `viewTypeInput`<sup>Optional</sup> <a name="viewTypeInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.viewTypeInput"></a>

```typescript
public readonly viewTypeInput: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `viewType`<sup>Required</sup> <a name="viewType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.viewType"></a>

```typescript
public readonly viewType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableCdcSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a>

---


### CassandraTableCdcSpecificationTagsList <a name="CassandraTableCdcSpecificationTagsList" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableCdcSpecificationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.get"></a>

```typescript
public get(index: number): CassandraTableCdcSpecificationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableCdcSpecificationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>[]

---


### CassandraTableCdcSpecificationTagsOutputReference <a name="CassandraTableCdcSpecificationTagsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableCdcSpecificationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableCdcSpecificationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>

---


### CassandraTableClusteringKeyColumnsColumnOutputReference <a name="CassandraTableClusteringKeyColumnsColumnOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resetColumnName">resetColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resetColumnType">resetColumnType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnName` <a name="resetColumnName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resetColumnName"></a>

```typescript
public resetColumnName(): void
```

##### `resetColumnType` <a name="resetColumnType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resetColumnType"></a>

```typescript
public resetColumnType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnTypeInput">columnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnType">columnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn">CassandraTableClusteringKeyColumnsColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string;
```

- *Type:* string

---

##### `columnTypeInput`<sup>Optional</sup> <a name="columnTypeInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnTypeInput"></a>

```typescript
public readonly columnTypeInput: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `columnType`<sup>Required</sup> <a name="columnType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnType"></a>

```typescript
public readonly columnType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableClusteringKeyColumnsColumn;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn">CassandraTableClusteringKeyColumnsColumn</a>

---


### CassandraTableClusteringKeyColumnsList <a name="CassandraTableClusteringKeyColumnsList" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableClusteringKeyColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.get"></a>

```typescript
public get(index: number): CassandraTableClusteringKeyColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableClusteringKeyColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>[]

---


### CassandraTableClusteringKeyColumnsOutputReference <a name="CassandraTableClusteringKeyColumnsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableClusteringKeyColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.putColumn">putColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resetColumn">resetColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resetOrderBy">resetOrderBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumn` <a name="putColumn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.putColumn"></a>

```typescript
public putColumn(value: CassandraTableClusteringKeyColumnsColumn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.putColumn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn">CassandraTableClusteringKeyColumnsColumn</a>

---

##### `resetColumn` <a name="resetColumn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resetColumn"></a>

```typescript
public resetColumn(): void
```

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resetOrderBy"></a>

```typescript
public resetOrderBy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.column">column</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference">CassandraTableClusteringKeyColumnsColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.columnInput">columnInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn">CassandraTableClusteringKeyColumnsColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.orderByInput">orderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.orderBy">orderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.column"></a>

```typescript
public readonly column: CassandraTableClusteringKeyColumnsColumnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference">CassandraTableClusteringKeyColumnsColumnOutputReference</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: IResolvable | CassandraTableClusteringKeyColumnsColumn;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn">CassandraTableClusteringKeyColumnsColumn</a>

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.orderByInput"></a>

```typescript
public readonly orderByInput: string;
```

- *Type:* string

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableClusteringKeyColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>

---


### CassandraTableEncryptionSpecificationOutputReference <a name="CassandraTableEncryptionSpecificationOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableEncryptionSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resetKmsKeyIdentifier">resetKmsKeyIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resetEncryptionType"></a>

```typescript
public resetEncryptionType(): void
```

##### `resetKmsKeyIdentifier` <a name="resetKmsKeyIdentifier" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resetKmsKeyIdentifier"></a>

```typescript
public resetKmsKeyIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifierInput">kmsKeyIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.encryptionTypeInput"></a>

```typescript
public readonly encryptionTypeInput: string;
```

- *Type:* string

---

##### `kmsKeyIdentifierInput`<sup>Optional</sup> <a name="kmsKeyIdentifierInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifierInput"></a>

```typescript
public readonly kmsKeyIdentifierInput: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `kmsKeyIdentifier`<sup>Required</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifier"></a>

```typescript
public readonly kmsKeyIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableEncryptionSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a>

---


### CassandraTablePartitionKeyColumnsList <a name="CassandraTablePartitionKeyColumnsList" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTablePartitionKeyColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.get"></a>

```typescript
public get(index: number): CassandraTablePartitionKeyColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTablePartitionKeyColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>[]

---


### CassandraTablePartitionKeyColumnsOutputReference <a name="CassandraTablePartitionKeyColumnsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTablePartitionKeyColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnTypeInput">columnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnType">columnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string;
```

- *Type:* string

---

##### `columnTypeInput`<sup>Optional</sup> <a name="columnTypeInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnTypeInput"></a>

```typescript
public readonly columnTypeInput: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `columnType`<sup>Required</sup> <a name="columnType" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnType"></a>

```typescript
public readonly columnType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTablePartitionKeyColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>

---


### CassandraTableRegularColumnsList <a name="CassandraTableRegularColumnsList" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableRegularColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.get"></a>

```typescript
public get(index: number): CassandraTableRegularColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableRegularColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>[]

---


### CassandraTableRegularColumnsOutputReference <a name="CassandraTableRegularColumnsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableRegularColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resetColumnName">resetColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resetColumnType">resetColumnType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnName` <a name="resetColumnName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resetColumnName"></a>

```typescript
public resetColumnName(): void
```

##### `resetColumnType` <a name="resetColumnType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resetColumnType"></a>

```typescript
public resetColumnType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnTypeInput">columnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnType">columnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string;
```

- *Type:* string

---

##### `columnTypeInput`<sup>Optional</sup> <a name="columnTypeInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnTypeInput"></a>

```typescript
public readonly columnTypeInput: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `columnType`<sup>Required</sup> <a name="columnType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnType"></a>

```typescript
public readonly columnType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableRegularColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>

---


### CassandraTableReplicaSpecificationsList <a name="CassandraTableReplicaSpecificationsList" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableReplicaSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.get"></a>

```typescript
public get(index: number): CassandraTableReplicaSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableReplicaSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>[]

---


### CassandraTableReplicaSpecificationsOutputReference <a name="CassandraTableReplicaSpecificationsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableReplicaSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.putReadCapacityAutoScaling">putReadCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resetReadCapacityAutoScaling">resetReadCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resetReadCapacityUnits">resetReadCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReadCapacityAutoScaling` <a name="putReadCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.putReadCapacityAutoScaling"></a>

```typescript
public putReadCapacityAutoScaling(value: CassandraTableReplicaSpecificationsReadCapacityAutoScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.putReadCapacityAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling">CassandraTableReplicaSpecificationsReadCapacityAutoScaling</a>

---

##### `resetReadCapacityAutoScaling` <a name="resetReadCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resetReadCapacityAutoScaling"></a>

```typescript
public resetReadCapacityAutoScaling(): void
```

##### `resetReadCapacityUnits` <a name="resetReadCapacityUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resetReadCapacityUnits"></a>

```typescript
public resetReadCapacityUnits(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityAutoScaling">readCapacityAutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference">CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityAutoScalingInput">readCapacityAutoScalingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling">CassandraTableReplicaSpecificationsReadCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityUnitsInput">readCapacityUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityUnits">readCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readCapacityAutoScaling`<sup>Required</sup> <a name="readCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityAutoScaling"></a>

```typescript
public readonly readCapacityAutoScaling: CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference">CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference</a>

---

##### `readCapacityAutoScalingInput`<sup>Optional</sup> <a name="readCapacityAutoScalingInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityAutoScalingInput"></a>

```typescript
public readonly readCapacityAutoScalingInput: IResolvable | CassandraTableReplicaSpecificationsReadCapacityAutoScaling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling">CassandraTableReplicaSpecificationsReadCapacityAutoScaling</a>

---

##### `readCapacityUnitsInput`<sup>Optional</sup> <a name="readCapacityUnitsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityUnitsInput"></a>

```typescript
public readonly readCapacityUnitsInput: number;
```

- *Type:* number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `readCapacityUnits`<sup>Required</sup> <a name="readCapacityUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityUnits"></a>

```typescript
public readonly readCapacityUnits: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableReplicaSpecifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>

---


### CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference <a name="CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.putScalingPolicy">putScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetAutoScalingDisabled">resetAutoScalingDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetMaximumUnits">resetMaximumUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetMinimumUnits">resetMinimumUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetScalingPolicy">resetScalingPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScalingPolicy` <a name="putScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.putScalingPolicy"></a>

```typescript
public putScalingPolicy(value: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.putScalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a>

---

##### `resetAutoScalingDisabled` <a name="resetAutoScalingDisabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetAutoScalingDisabled"></a>

```typescript
public resetAutoScalingDisabled(): void
```

##### `resetMaximumUnits` <a name="resetMaximumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetMaximumUnits"></a>

```typescript
public resetMaximumUnits(): void
```

##### `resetMinimumUnits` <a name="resetMinimumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetMinimumUnits"></a>

```typescript
public resetMinimumUnits(): void
```

##### `resetScalingPolicy` <a name="resetScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetScalingPolicy"></a>

```typescript
public resetScalingPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicy">scalingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabledInput">autoScalingDisabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnitsInput">maximumUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnitsInput">minimumUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicyInput">scalingPolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabled">autoScalingDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnits">maximumUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnits">minimumUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling">CassandraTableReplicaSpecificationsReadCapacityAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scalingPolicy`<sup>Required</sup> <a name="scalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicy"></a>

```typescript
public readonly scalingPolicy: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference</a>

---

##### `autoScalingDisabledInput`<sup>Optional</sup> <a name="autoScalingDisabledInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabledInput"></a>

```typescript
public readonly autoScalingDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maximumUnitsInput`<sup>Optional</sup> <a name="maximumUnitsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnitsInput"></a>

```typescript
public readonly maximumUnitsInput: number;
```

- *Type:* number

---

##### `minimumUnitsInput`<sup>Optional</sup> <a name="minimumUnitsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnitsInput"></a>

```typescript
public readonly minimumUnitsInput: number;
```

- *Type:* number

---

##### `scalingPolicyInput`<sup>Optional</sup> <a name="scalingPolicyInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicyInput"></a>

```typescript
public readonly scalingPolicyInput: IResolvable | CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a>

---

##### `autoScalingDisabled`<sup>Required</sup> <a name="autoScalingDisabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabled"></a>

```typescript
public readonly autoScalingDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maximumUnits`<sup>Required</sup> <a name="maximumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnits"></a>

```typescript
public readonly maximumUnits: number;
```

- *Type:* number

---

##### `minimumUnits`<sup>Required</sup> <a name="minimumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnits"></a>

```typescript
public readonly minimumUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableReplicaSpecificationsReadCapacityAutoScaling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling">CassandraTableReplicaSpecificationsReadCapacityAutoScaling</a>

---


### CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference <a name="CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration">putTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resetTargetTrackingScalingPolicyConfiguration">resetTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetTrackingScalingPolicyConfiguration` <a name="putTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration"></a>

```typescript
public putTargetTrackingScalingPolicyConfiguration(value: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---

##### `resetTargetTrackingScalingPolicyConfiguration` <a name="resetTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resetTargetTrackingScalingPolicyConfiguration"></a>

```typescript
public resetTargetTrackingScalingPolicyConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfiguration">targetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfigurationInput">targetTrackingScalingPolicyConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetTrackingScalingPolicyConfiguration`<sup>Required</sup> <a name="targetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```typescript
public readonly targetTrackingScalingPolicyConfiguration: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `targetTrackingScalingPolicyConfigurationInput`<sup>Optional</sup> <a name="targetTrackingScalingPolicyConfigurationInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfigurationInput"></a>

```typescript
public readonly targetTrackingScalingPolicyConfigurationInput: IResolvable | CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a>

---


### CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference <a name="CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn">resetDisableScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown">resetScaleInCooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown">resetScaleOutCooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetTargetValue">resetTargetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableScaleIn` <a name="resetDisableScaleIn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn"></a>

```typescript
public resetDisableScaleIn(): void
```

##### `resetScaleInCooldown` <a name="resetScaleInCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown"></a>

```typescript
public resetScaleInCooldown(): void
```

##### `resetScaleOutCooldown` <a name="resetScaleOutCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown"></a>

```typescript
public resetScaleOutCooldown(): void
```

##### `resetTargetValue` <a name="resetTargetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetTargetValue"></a>

```typescript
public resetTargetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput">disableScaleInInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput">scaleInCooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput">scaleOutCooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">disableScaleIn</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">scaleInCooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">targetValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableScaleInInput`<sup>Optional</sup> <a name="disableScaleInInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput"></a>

```typescript
public readonly disableScaleInInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `scaleInCooldownInput`<sup>Optional</sup> <a name="scaleInCooldownInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput"></a>

```typescript
public readonly scaleInCooldownInput: number;
```

- *Type:* number

---

##### `scaleOutCooldownInput`<sup>Optional</sup> <a name="scaleOutCooldownInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput"></a>

```typescript
public readonly scaleOutCooldownInput: number;
```

- *Type:* number

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput"></a>

```typescript
public readonly targetValueInput: number;
```

- *Type:* number

---

##### `disableScaleIn`<sup>Required</sup> <a name="disableScaleIn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```typescript
public readonly disableScaleIn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `scaleInCooldown`<sup>Required</sup> <a name="scaleInCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```typescript
public readonly scaleInCooldown: number;
```

- *Type:* number

---

##### `scaleOutCooldown`<sup>Required</sup> <a name="scaleOutCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```typescript
public readonly scaleOutCooldown: number;
```

- *Type:* number

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---


### CassandraTableTagsList <a name="CassandraTableTagsList" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.get"></a>

```typescript
public get(index: number): CassandraTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>[]

---


### CassandraTableTagsOutputReference <a name="CassandraTableTagsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>

---


### CassandraTableWarmThroughputOutputReference <a name="CassandraTableWarmThroughputOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.Initializer"></a>

```typescript
import { cassandraTable } from '@cdktn/provider-awscc'

new cassandraTable.CassandraTableWarmThroughputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resetReadUnitsPerSecond">resetReadUnitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resetWriteUnitsPerSecond">resetWriteUnitsPerSecond</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadUnitsPerSecond` <a name="resetReadUnitsPerSecond" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resetReadUnitsPerSecond"></a>

```typescript
public resetReadUnitsPerSecond(): void
```

##### `resetWriteUnitsPerSecond` <a name="resetWriteUnitsPerSecond" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resetWriteUnitsPerSecond"></a>

```typescript
public resetWriteUnitsPerSecond(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.readUnitsPerSecondInput">readUnitsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.writeUnitsPerSecondInput">writeUnitsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.readUnitsPerSecond">readUnitsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.writeUnitsPerSecond">writeUnitsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readUnitsPerSecondInput`<sup>Optional</sup> <a name="readUnitsPerSecondInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.readUnitsPerSecondInput"></a>

```typescript
public readonly readUnitsPerSecondInput: number;
```

- *Type:* number

---

##### `writeUnitsPerSecondInput`<sup>Optional</sup> <a name="writeUnitsPerSecondInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.writeUnitsPerSecondInput"></a>

```typescript
public readonly writeUnitsPerSecondInput: number;
```

- *Type:* number

---

##### `readUnitsPerSecond`<sup>Required</sup> <a name="readUnitsPerSecond" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```typescript
public readonly readUnitsPerSecond: number;
```

- *Type:* number

---

##### `writeUnitsPerSecond`<sup>Required</sup> <a name="writeUnitsPerSecond" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```typescript
public readonly writeUnitsPerSecond: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CassandraTableWarmThroughput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a>

---



