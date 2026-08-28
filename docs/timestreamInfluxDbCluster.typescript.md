# `timestreamInfluxDbCluster` Submodule <a name="`timestreamInfluxDbCluster` Submodule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimestreamInfluxDbCluster <a name="TimestreamInfluxDbCluster" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster awscc_timestream_influx_db_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer"></a>

```typescript
import { timestreamInfluxDbCluster } from '@cdktn/provider-awscc'

new timestreamInfluxDbCluster.TimestreamInfluxDbCluster(scope: Construct, id: string, config?: TimestreamInfluxDbClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig">TimestreamInfluxDbClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig">TimestreamInfluxDbClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putLogDeliveryConfiguration">putLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putMaintenanceSchedule">putMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetAllocatedStorage">resetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbInstanceType">resetDbInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbParameterGroupIdentifier">resetDbParameterGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbStorageType">resetDbStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetFailoverMode">resetFailoverMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetLogDeliveryConfiguration">resetLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetMaintenanceSchedule">resetMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetVpcSubnetIds">resetVpcSubnetIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogDeliveryConfiguration` <a name="putLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putLogDeliveryConfiguration"></a>

```typescript
public putLogDeliveryConfiguration(value: TimestreamInfluxDbClusterLogDeliveryConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putLogDeliveryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a>

---

##### `putMaintenanceSchedule` <a name="putMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putMaintenanceSchedule"></a>

```typescript
public putMaintenanceSchedule(value: TimestreamInfluxDbClusterMaintenanceSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putMaintenanceSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putTags"></a>

```typescript
public putTags(value: IResolvable | TimestreamInfluxDbClusterTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>[]

---

##### `resetAllocatedStorage` <a name="resetAllocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetAllocatedStorage"></a>

```typescript
public resetAllocatedStorage(): void
```

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetDbInstanceType` <a name="resetDbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbInstanceType"></a>

```typescript
public resetDbInstanceType(): void
```

##### `resetDbParameterGroupIdentifier` <a name="resetDbParameterGroupIdentifier" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbParameterGroupIdentifier"></a>

```typescript
public resetDbParameterGroupIdentifier(): void
```

##### `resetDbStorageType` <a name="resetDbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbStorageType"></a>

```typescript
public resetDbStorageType(): void
```

##### `resetDeploymentType` <a name="resetDeploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDeploymentType"></a>

```typescript
public resetDeploymentType(): void
```

##### `resetFailoverMode` <a name="resetFailoverMode" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetFailoverMode"></a>

```typescript
public resetFailoverMode(): void
```

##### `resetLogDeliveryConfiguration` <a name="resetLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetLogDeliveryConfiguration"></a>

```typescript
public resetLogDeliveryConfiguration(): void
```

##### `resetMaintenanceSchedule` <a name="resetMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetMaintenanceSchedule"></a>

```typescript
public resetMaintenanceSchedule(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetNetworkType"></a>

```typescript
public resetNetworkType(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPubliclyAccessible"></a>

```typescript
public resetPubliclyAccessible(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetVpcSecurityGroupIds"></a>

```typescript
public resetVpcSecurityGroupIds(): void
```

##### `resetVpcSubnetIds` <a name="resetVpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetVpcSubnetIds"></a>

```typescript
public resetVpcSubnetIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TimestreamInfluxDbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isConstruct"></a>

```typescript
import { timestreamInfluxDbCluster } from '@cdktn/provider-awscc'

timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformElement"></a>

```typescript
import { timestreamInfluxDbCluster } from '@cdktn/provider-awscc'

timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformResource"></a>

```typescript
import { timestreamInfluxDbCluster } from '@cdktn/provider-awscc'

timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport"></a>

```typescript
import { timestreamInfluxDbCluster } from '@cdktn/provider-awscc'

timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TimestreamInfluxDbCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TimestreamInfluxDbCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TimestreamInfluxDbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TimestreamInfluxDbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.engineType">engineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.influxAuthParametersSecretArn">influxAuthParametersSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.influxDbClusterId">influxDbClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference">TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference">TimestreamInfluxDbClusterMaintenanceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.nextMaintenanceTime">nextMaintenanceTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.readerEndpoint">readerEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList">TimestreamInfluxDbClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.allocatedStorageInput">allocatedStorageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbInstanceTypeInput">dbInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbParameterGroupIdentifierInput">dbParameterGroupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbStorageTypeInput">dbStorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.failoverModeInput">failoverModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.logDeliveryConfigurationInput">logDeliveryConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.maintenanceScheduleInput">maintenanceScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSubnetIdsInput">vpcSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.allocatedStorage">allocatedStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbInstanceType">dbInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbParameterGroupIdentifier">dbParameterGroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbStorageType">dbStorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.failoverMode">failoverMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.engineType"></a>

```typescript
public readonly engineType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `influxAuthParametersSecretArn`<sup>Required</sup> <a name="influxAuthParametersSecretArn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.influxAuthParametersSecretArn"></a>

```typescript
public readonly influxAuthParametersSecretArn: string;
```

- *Type:* string

---

##### `influxDbClusterId`<sup>Required</sup> <a name="influxDbClusterId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.influxDbClusterId"></a>

```typescript
public readonly influxDbClusterId: string;
```

- *Type:* string

---

##### `logDeliveryConfiguration`<sup>Required</sup> <a name="logDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.logDeliveryConfiguration"></a>

```typescript
public readonly logDeliveryConfiguration: TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference">TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference</a>

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.maintenanceSchedule"></a>

```typescript
public readonly maintenanceSchedule: TimestreamInfluxDbClusterMaintenanceScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference">TimestreamInfluxDbClusterMaintenanceScheduleOutputReference</a>

---

##### `nextMaintenanceTime`<sup>Required</sup> <a name="nextMaintenanceTime" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.nextMaintenanceTime"></a>

```typescript
public readonly nextMaintenanceTime: string;
```

- *Type:* string

---

##### `readerEndpoint`<sup>Required</sup> <a name="readerEndpoint" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.readerEndpoint"></a>

```typescript
public readonly readerEndpoint: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tags"></a>

```typescript
public readonly tags: TimestreamInfluxDbClusterTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList">TimestreamInfluxDbClusterTagsList</a>

---

##### `allocatedStorageInput`<sup>Optional</sup> <a name="allocatedStorageInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.allocatedStorageInput"></a>

```typescript
public readonly allocatedStorageInput: number;
```

- *Type:* number

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `dbInstanceTypeInput`<sup>Optional</sup> <a name="dbInstanceTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbInstanceTypeInput"></a>

```typescript
public readonly dbInstanceTypeInput: string;
```

- *Type:* string

---

##### `dbParameterGroupIdentifierInput`<sup>Optional</sup> <a name="dbParameterGroupIdentifierInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbParameterGroupIdentifierInput"></a>

```typescript
public readonly dbParameterGroupIdentifierInput: string;
```

- *Type:* string

---

##### `dbStorageTypeInput`<sup>Optional</sup> <a name="dbStorageTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbStorageTypeInput"></a>

```typescript
public readonly dbStorageTypeInput: string;
```

- *Type:* string

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.deploymentTypeInput"></a>

```typescript
public readonly deploymentTypeInput: string;
```

- *Type:* string

---

##### `failoverModeInput`<sup>Optional</sup> <a name="failoverModeInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.failoverModeInput"></a>

```typescript
public readonly failoverModeInput: string;
```

- *Type:* string

---

##### `logDeliveryConfigurationInput`<sup>Optional</sup> <a name="logDeliveryConfigurationInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.logDeliveryConfigurationInput"></a>

```typescript
public readonly logDeliveryConfigurationInput: IResolvable | TimestreamInfluxDbClusterLogDeliveryConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a>

---

##### `maintenanceScheduleInput`<sup>Optional</sup> <a name="maintenanceScheduleInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.maintenanceScheduleInput"></a>

```typescript
public readonly maintenanceScheduleInput: IResolvable | TimestreamInfluxDbClusterMaintenanceSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.publiclyAccessibleInput"></a>

```typescript
public readonly publiclyAccessibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | TimestreamInfluxDbClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>[]

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSecurityGroupIdsInput"></a>

```typescript
public readonly vpcSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `vpcSubnetIdsInput`<sup>Optional</sup> <a name="vpcSubnetIdsInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSubnetIdsInput"></a>

```typescript
public readonly vpcSubnetIdsInput: string[];
```

- *Type:* string[]

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: number;
```

- *Type:* number

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `dbInstanceType`<sup>Required</sup> <a name="dbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbInstanceType"></a>

```typescript
public readonly dbInstanceType: string;
```

- *Type:* string

---

##### `dbParameterGroupIdentifier`<sup>Required</sup> <a name="dbParameterGroupIdentifier" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbParameterGroupIdentifier"></a>

```typescript
public readonly dbParameterGroupIdentifier: string;
```

- *Type:* string

---

##### `dbStorageType`<sup>Required</sup> <a name="dbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbStorageType"></a>

```typescript
public readonly dbStorageType: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `failoverMode`<sup>Required</sup> <a name="failoverMode" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.failoverMode"></a>

```typescript
public readonly failoverMode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `vpcSubnetIds`<sup>Required</sup> <a name="vpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSubnetIds"></a>

```typescript
public readonly vpcSubnetIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TimestreamInfluxDbClusterConfig <a name="TimestreamInfluxDbClusterConfig" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.Initializer"></a>

```typescript
import { timestreamInfluxDbCluster } from '@cdktn/provider-awscc'

const timestreamInfluxDbClusterConfig: timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.allocatedStorage">allocatedStorage</a></code> | <code>number</code> | The allocated storage for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.bucket">bucket</a></code> | <code>string</code> | The bucket for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbInstanceType">dbInstanceType</a></code> | <code>string</code> | The compute instance of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbParameterGroupIdentifier">dbParameterGroupIdentifier</a></code> | <code>string</code> | The name of an existing InfluxDB parameter group. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbStorageType">dbStorageType</a></code> | <code>string</code> | The storage type of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.deploymentType">deploymentType</a></code> | <code>string</code> | Deployment type of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.failoverMode">failoverMode</a></code> | <code>string</code> | Failover mode of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a></code> | Configuration for sending logs to customer account from the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a></code> | The maintenance schedule for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.name">name</a></code> | <code>string</code> | The unique name that is associated with the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.networkType">networkType</a></code> | <code>string</code> | Network type of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.organization">organization</a></code> | <code>string</code> | The organization for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.password">password</a></code> | <code>string</code> | The password for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.port">port</a></code> | <code>number</code> | The port number on which InfluxDB accepts connections. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Attach a public IP to the customer ENI. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.username">username</a></code> | <code>string</code> | The username for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | A list of Amazon EC2 VPC security groups to associate with this InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>string[]</code> | A list of EC2 subnet IDs for this InfluxDB cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allocatedStorage`<sup>Optional</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: number;
```

- *Type:* number

The allocated storage for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#allocated_storage TimestreamInfluxDbCluster#allocated_storage}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The bucket for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#bucket TimestreamInfluxDbCluster#bucket}

---

##### `dbInstanceType`<sup>Optional</sup> <a name="dbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbInstanceType"></a>

```typescript
public readonly dbInstanceType: string;
```

- *Type:* string

The compute instance of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#db_instance_type TimestreamInfluxDbCluster#db_instance_type}

---

##### `dbParameterGroupIdentifier`<sup>Optional</sup> <a name="dbParameterGroupIdentifier" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbParameterGroupIdentifier"></a>

```typescript
public readonly dbParameterGroupIdentifier: string;
```

- *Type:* string

The name of an existing InfluxDB parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#db_parameter_group_identifier TimestreamInfluxDbCluster#db_parameter_group_identifier}

---

##### `dbStorageType`<sup>Optional</sup> <a name="dbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbStorageType"></a>

```typescript
public readonly dbStorageType: string;
```

- *Type:* string

The storage type of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#db_storage_type TimestreamInfluxDbCluster#db_storage_type}

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

Deployment type of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#deployment_type TimestreamInfluxDbCluster#deployment_type}

---

##### `failoverMode`<sup>Optional</sup> <a name="failoverMode" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.failoverMode"></a>

```typescript
public readonly failoverMode: string;
```

- *Type:* string

Failover mode of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#failover_mode TimestreamInfluxDbCluster#failover_mode}

---

##### `logDeliveryConfiguration`<sup>Optional</sup> <a name="logDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.logDeliveryConfiguration"></a>

```typescript
public readonly logDeliveryConfiguration: TimestreamInfluxDbClusterLogDeliveryConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a>

Configuration for sending logs to customer account from the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#log_delivery_configuration TimestreamInfluxDbCluster#log_delivery_configuration}

---

##### `maintenanceSchedule`<sup>Optional</sup> <a name="maintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.maintenanceSchedule"></a>

```typescript
public readonly maintenanceSchedule: TimestreamInfluxDbClusterMaintenanceSchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a>

The maintenance schedule for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#maintenance_schedule TimestreamInfluxDbCluster#maintenance_schedule}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The unique name that is associated with the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#name TimestreamInfluxDbCluster#name}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

Network type of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#network_type TimestreamInfluxDbCluster#network_type}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The organization for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#organization TimestreamInfluxDbCluster#organization}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#password TimestreamInfluxDbCluster#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number on which InfluxDB accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#port TimestreamInfluxDbCluster#port}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Attach a public IP to the customer ENI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#publicly_accessible TimestreamInfluxDbCluster#publicly_accessible}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | TimestreamInfluxDbClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>[]

An arbitrary set of tags (key-value pairs) for this DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#tags TimestreamInfluxDbCluster#tags}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#username TimestreamInfluxDbCluster#username}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

A list of Amazon EC2 VPC security groups to associate with this InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#vpc_security_group_ids TimestreamInfluxDbCluster#vpc_security_group_ids}

---

##### `vpcSubnetIds`<sup>Optional</sup> <a name="vpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.vpcSubnetIds"></a>

```typescript
public readonly vpcSubnetIds: string[];
```

- *Type:* string[]

A list of EC2 subnet IDs for this InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#vpc_subnet_ids TimestreamInfluxDbCluster#vpc_subnet_ids}

---

### TimestreamInfluxDbClusterLogDeliveryConfiguration <a name="TimestreamInfluxDbClusterLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration.Initializer"></a>

```typescript
import { timestreamInfluxDbCluster } from '@cdktn/provider-awscc'

const timestreamInfluxDbClusterLogDeliveryConfiguration: timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a></code> | S3 configuration for sending logs to customer account from the InfluxDB cluster. |

---

##### `s3Configuration`<sup>Optional</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a>

S3 configuration for sending logs to customer account from the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#s3_configuration TimestreamInfluxDbCluster#s3_configuration}

---

### TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration <a name="TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.Initializer"></a>

```typescript
import { timestreamInfluxDbCluster } from '@cdktn/provider-awscc'

const timestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration: timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.property.bucketName">bucketName</a></code> | <code>string</code> | The bucket name for logs to be sent from the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether logging to customer specified bucket is enabled. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The bucket name for logs to be sent from the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#bucket_name TimestreamInfluxDbCluster#bucket_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether logging to customer specified bucket is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#enabled TimestreamInfluxDbCluster#enabled}

---

### TimestreamInfluxDbClusterMaintenanceSchedule <a name="TimestreamInfluxDbClusterMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule.Initializer"></a>

```typescript
import { timestreamInfluxDbCluster } from '@cdktn/provider-awscc'

const timestreamInfluxDbClusterMaintenanceSchedule: timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule.property.timezone">timezone</a></code> | <code>string</code> | The IANA timezone identifier for the maintenance schedule. |

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#preferred_maintenance_window TimestreamInfluxDbCluster#preferred_maintenance_window}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

The IANA timezone identifier for the maintenance schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#timezone TimestreamInfluxDbCluster#timezone}

---

### TimestreamInfluxDbClusterTags <a name="TimestreamInfluxDbClusterTags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags.Initializer"></a>

```typescript
import { timestreamInfluxDbCluster } from '@cdktn/provider-awscc'

const timestreamInfluxDbClusterTags: timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#key TimestreamInfluxDbCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#value TimestreamInfluxDbCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference <a name="TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer"></a>

```typescript
import { timestreamInfluxDbCluster } from '@cdktn/provider-awscc'

new timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.putS3Configuration">putS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resetS3Configuration">resetS3Configuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Configuration` <a name="putS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.putS3Configuration"></a>

```typescript
public putS3Configuration(value: TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a>

---

##### `resetS3Configuration` <a name="resetS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resetS3Configuration"></a>

```typescript
public resetS3Configuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference">TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput">s3ConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference">TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference</a>

---

##### `s3ConfigurationInput`<sup>Optional</sup> <a name="s3ConfigurationInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput"></a>

```typescript
public readonly s3ConfigurationInput: IResolvable | TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamInfluxDbClusterLogDeliveryConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a>

---


### TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference <a name="TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { timestreamInfluxDbCluster } from '@cdktn/provider-awscc'

new timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a>

---


### TimestreamInfluxDbClusterMaintenanceScheduleOutputReference <a name="TimestreamInfluxDbClusterMaintenanceScheduleOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer"></a>

```typescript
import { timestreamInfluxDbCluster } from '@cdktn/provider-awscc'

new timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resetPreferredMaintenanceWindow"></a>

```typescript
public resetPreferredMaintenanceWindow(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resetTimezone"></a>

```typescript
public resetTimezone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.preferredMaintenanceWindowInput"></a>

```typescript
public readonly preferredMaintenanceWindowInput: string;
```

- *Type:* string

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamInfluxDbClusterMaintenanceSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a>

---


### TimestreamInfluxDbClusterTagsList <a name="TimestreamInfluxDbClusterTagsList" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer"></a>

```typescript
import { timestreamInfluxDbCluster } from '@cdktn/provider-awscc'

new timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.get"></a>

```typescript
public get(index: number): TimestreamInfluxDbClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamInfluxDbClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>[]

---


### TimestreamInfluxDbClusterTagsOutputReference <a name="TimestreamInfluxDbClusterTagsOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer"></a>

```typescript
import { timestreamInfluxDbCluster } from '@cdktn/provider-awscc'

new timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamInfluxDbClusterTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>

---



