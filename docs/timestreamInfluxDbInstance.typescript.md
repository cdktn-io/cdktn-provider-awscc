# `timestreamInfluxDbInstance` Submodule <a name="`timestreamInfluxDbInstance` Submodule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimestreamInfluxDbInstance <a name="TimestreamInfluxDbInstance" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance awscc_timestream_influx_db_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer"></a>

```typescript
import { timestreamInfluxDbInstance } from '@cdktn/provider-awscc'

new timestreamInfluxDbInstance.TimestreamInfluxDbInstance(scope: Construct, id: string, config?: TimestreamInfluxDbInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig">TimestreamInfluxDbInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig">TimestreamInfluxDbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putLogDeliveryConfiguration">putLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putMaintenanceSchedule">putMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetAllocatedStorage">resetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbInstanceType">resetDbInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbParameterGroupIdentifier">resetDbParameterGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbStorageType">resetDbStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetLogDeliveryConfiguration">resetLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetMaintenanceSchedule">resetMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetVpcSubnetIds">resetVpcSubnetIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogDeliveryConfiguration` <a name="putLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putLogDeliveryConfiguration"></a>

```typescript
public putLogDeliveryConfiguration(value: TimestreamInfluxDbInstanceLogDeliveryConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putLogDeliveryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a>

---

##### `putMaintenanceSchedule` <a name="putMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putMaintenanceSchedule"></a>

```typescript
public putMaintenanceSchedule(value: TimestreamInfluxDbInstanceMaintenanceSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putMaintenanceSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putTags"></a>

```typescript
public putTags(value: IResolvable | TimestreamInfluxDbInstanceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>[]

---

##### `resetAllocatedStorage` <a name="resetAllocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetAllocatedStorage"></a>

```typescript
public resetAllocatedStorage(): void
```

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetDbInstanceType` <a name="resetDbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbInstanceType"></a>

```typescript
public resetDbInstanceType(): void
```

##### `resetDbParameterGroupIdentifier` <a name="resetDbParameterGroupIdentifier" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbParameterGroupIdentifier"></a>

```typescript
public resetDbParameterGroupIdentifier(): void
```

##### `resetDbStorageType` <a name="resetDbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbStorageType"></a>

```typescript
public resetDbStorageType(): void
```

##### `resetDeploymentType` <a name="resetDeploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDeploymentType"></a>

```typescript
public resetDeploymentType(): void
```

##### `resetLogDeliveryConfiguration` <a name="resetLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetLogDeliveryConfiguration"></a>

```typescript
public resetLogDeliveryConfiguration(): void
```

##### `resetMaintenanceSchedule` <a name="resetMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetMaintenanceSchedule"></a>

```typescript
public resetMaintenanceSchedule(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetNetworkType"></a>

```typescript
public resetNetworkType(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPubliclyAccessible"></a>

```typescript
public resetPubliclyAccessible(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetVpcSecurityGroupIds"></a>

```typescript
public resetVpcSecurityGroupIds(): void
```

##### `resetVpcSubnetIds` <a name="resetVpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetVpcSubnetIds"></a>

```typescript
public resetVpcSubnetIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TimestreamInfluxDbInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isConstruct"></a>

```typescript
import { timestreamInfluxDbInstance } from '@cdktn/provider-awscc'

timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformElement"></a>

```typescript
import { timestreamInfluxDbInstance } from '@cdktn/provider-awscc'

timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformResource"></a>

```typescript
import { timestreamInfluxDbInstance } from '@cdktn/provider-awscc'

timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport"></a>

```typescript
import { timestreamInfluxDbInstance } from '@cdktn/provider-awscc'

timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TimestreamInfluxDbInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TimestreamInfluxDbInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TimestreamInfluxDbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TimestreamInfluxDbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.influxAuthParametersSecretArn">influxAuthParametersSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.influxDbInstanceId">influxDbInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference">TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference">TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.nextMaintenanceTime">nextMaintenanceTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.secondaryAvailabilityZone">secondaryAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList">TimestreamInfluxDbInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.allocatedStorageInput">allocatedStorageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbInstanceTypeInput">dbInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbParameterGroupIdentifierInput">dbParameterGroupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbStorageTypeInput">dbStorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.logDeliveryConfigurationInput">logDeliveryConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.maintenanceScheduleInput">maintenanceScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSubnetIdsInput">vpcSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.allocatedStorage">allocatedStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbInstanceType">dbInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbParameterGroupIdentifier">dbParameterGroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbStorageType">dbStorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `influxAuthParametersSecretArn`<sup>Required</sup> <a name="influxAuthParametersSecretArn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.influxAuthParametersSecretArn"></a>

```typescript
public readonly influxAuthParametersSecretArn: string;
```

- *Type:* string

---

##### `influxDbInstanceId`<sup>Required</sup> <a name="influxDbInstanceId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.influxDbInstanceId"></a>

```typescript
public readonly influxDbInstanceId: string;
```

- *Type:* string

---

##### `logDeliveryConfiguration`<sup>Required</sup> <a name="logDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.logDeliveryConfiguration"></a>

```typescript
public readonly logDeliveryConfiguration: TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference">TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference</a>

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.maintenanceSchedule"></a>

```typescript
public readonly maintenanceSchedule: TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference">TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference</a>

---

##### `nextMaintenanceTime`<sup>Required</sup> <a name="nextMaintenanceTime" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.nextMaintenanceTime"></a>

```typescript
public readonly nextMaintenanceTime: string;
```

- *Type:* string

---

##### `secondaryAvailabilityZone`<sup>Required</sup> <a name="secondaryAvailabilityZone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.secondaryAvailabilityZone"></a>

```typescript
public readonly secondaryAvailabilityZone: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tags"></a>

```typescript
public readonly tags: TimestreamInfluxDbInstanceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList">TimestreamInfluxDbInstanceTagsList</a>

---

##### `allocatedStorageInput`<sup>Optional</sup> <a name="allocatedStorageInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.allocatedStorageInput"></a>

```typescript
public readonly allocatedStorageInput: number;
```

- *Type:* number

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `dbInstanceTypeInput`<sup>Optional</sup> <a name="dbInstanceTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbInstanceTypeInput"></a>

```typescript
public readonly dbInstanceTypeInput: string;
```

- *Type:* string

---

##### `dbParameterGroupIdentifierInput`<sup>Optional</sup> <a name="dbParameterGroupIdentifierInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbParameterGroupIdentifierInput"></a>

```typescript
public readonly dbParameterGroupIdentifierInput: string;
```

- *Type:* string

---

##### `dbStorageTypeInput`<sup>Optional</sup> <a name="dbStorageTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbStorageTypeInput"></a>

```typescript
public readonly dbStorageTypeInput: string;
```

- *Type:* string

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.deploymentTypeInput"></a>

```typescript
public readonly deploymentTypeInput: string;
```

- *Type:* string

---

##### `logDeliveryConfigurationInput`<sup>Optional</sup> <a name="logDeliveryConfigurationInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.logDeliveryConfigurationInput"></a>

```typescript
public readonly logDeliveryConfigurationInput: IResolvable | TimestreamInfluxDbInstanceLogDeliveryConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a>

---

##### `maintenanceScheduleInput`<sup>Optional</sup> <a name="maintenanceScheduleInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.maintenanceScheduleInput"></a>

```typescript
public readonly maintenanceScheduleInput: IResolvable | TimestreamInfluxDbInstanceMaintenanceSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.publiclyAccessibleInput"></a>

```typescript
public readonly publiclyAccessibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | TimestreamInfluxDbInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>[]

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSecurityGroupIdsInput"></a>

```typescript
public readonly vpcSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `vpcSubnetIdsInput`<sup>Optional</sup> <a name="vpcSubnetIdsInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSubnetIdsInput"></a>

```typescript
public readonly vpcSubnetIdsInput: string[];
```

- *Type:* string[]

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: number;
```

- *Type:* number

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `dbInstanceType`<sup>Required</sup> <a name="dbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbInstanceType"></a>

```typescript
public readonly dbInstanceType: string;
```

- *Type:* string

---

##### `dbParameterGroupIdentifier`<sup>Required</sup> <a name="dbParameterGroupIdentifier" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbParameterGroupIdentifier"></a>

```typescript
public readonly dbParameterGroupIdentifier: string;
```

- *Type:* string

---

##### `dbStorageType`<sup>Required</sup> <a name="dbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbStorageType"></a>

```typescript
public readonly dbStorageType: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `vpcSubnetIds`<sup>Required</sup> <a name="vpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSubnetIds"></a>

```typescript
public readonly vpcSubnetIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TimestreamInfluxDbInstanceConfig <a name="TimestreamInfluxDbInstanceConfig" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.Initializer"></a>

```typescript
import { timestreamInfluxDbInstance } from '@cdktn/provider-awscc'

const timestreamInfluxDbInstanceConfig: timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.allocatedStorage">allocatedStorage</a></code> | <code>number</code> | The allocated storage for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.bucket">bucket</a></code> | <code>string</code> | The bucket for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbInstanceType">dbInstanceType</a></code> | <code>string</code> | The compute instance of the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbParameterGroupIdentifier">dbParameterGroupIdentifier</a></code> | <code>string</code> | The name of an existing InfluxDB parameter group. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbStorageType">dbStorageType</a></code> | <code>string</code> | The storage type of the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.deploymentType">deploymentType</a></code> | <code>string</code> | Deployment type of the InfluxDB Instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a></code> | Configuration for sending logs to customer account from the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a></code> | The maintenance schedule for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.name">name</a></code> | <code>string</code> | The unique name that is associated with the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.networkType">networkType</a></code> | <code>string</code> | Network type of the InfluxDB Instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.organization">organization</a></code> | <code>string</code> | The organization for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.password">password</a></code> | <code>string</code> | The password for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.port">port</a></code> | <code>number</code> | The port number on which InfluxDB accepts connections. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Attach a public IP to the customer ENI. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.username">username</a></code> | <code>string</code> | The username for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | A list of Amazon EC2 VPC security groups to associate with this InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>string[]</code> | A list of EC2 subnet IDs for this InfluxDB instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allocatedStorage`<sup>Optional</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: number;
```

- *Type:* number

The allocated storage for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#allocated_storage TimestreamInfluxDbInstance#allocated_storage}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The bucket for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#bucket TimestreamInfluxDbInstance#bucket}

---

##### `dbInstanceType`<sup>Optional</sup> <a name="dbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbInstanceType"></a>

```typescript
public readonly dbInstanceType: string;
```

- *Type:* string

The compute instance of the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#db_instance_type TimestreamInfluxDbInstance#db_instance_type}

---

##### `dbParameterGroupIdentifier`<sup>Optional</sup> <a name="dbParameterGroupIdentifier" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbParameterGroupIdentifier"></a>

```typescript
public readonly dbParameterGroupIdentifier: string;
```

- *Type:* string

The name of an existing InfluxDB parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#db_parameter_group_identifier TimestreamInfluxDbInstance#db_parameter_group_identifier}

---

##### `dbStorageType`<sup>Optional</sup> <a name="dbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbStorageType"></a>

```typescript
public readonly dbStorageType: string;
```

- *Type:* string

The storage type of the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#db_storage_type TimestreamInfluxDbInstance#db_storage_type}

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

Deployment type of the InfluxDB Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#deployment_type TimestreamInfluxDbInstance#deployment_type}

---

##### `logDeliveryConfiguration`<sup>Optional</sup> <a name="logDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.logDeliveryConfiguration"></a>

```typescript
public readonly logDeliveryConfiguration: TimestreamInfluxDbInstanceLogDeliveryConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a>

Configuration for sending logs to customer account from the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#log_delivery_configuration TimestreamInfluxDbInstance#log_delivery_configuration}

---

##### `maintenanceSchedule`<sup>Optional</sup> <a name="maintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.maintenanceSchedule"></a>

```typescript
public readonly maintenanceSchedule: TimestreamInfluxDbInstanceMaintenanceSchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a>

The maintenance schedule for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#maintenance_schedule TimestreamInfluxDbInstance#maintenance_schedule}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The unique name that is associated with the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#name TimestreamInfluxDbInstance#name}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

Network type of the InfluxDB Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#network_type TimestreamInfluxDbInstance#network_type}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The organization for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#organization TimestreamInfluxDbInstance#organization}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#password TimestreamInfluxDbInstance#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number on which InfluxDB accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#port TimestreamInfluxDbInstance#port}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Attach a public IP to the customer ENI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#publicly_accessible TimestreamInfluxDbInstance#publicly_accessible}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | TimestreamInfluxDbInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>[]

An arbitrary set of tags (key-value pairs) for this DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#tags TimestreamInfluxDbInstance#tags}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#username TimestreamInfluxDbInstance#username}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

A list of Amazon EC2 VPC security groups to associate with this InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#vpc_security_group_ids TimestreamInfluxDbInstance#vpc_security_group_ids}

---

##### `vpcSubnetIds`<sup>Optional</sup> <a name="vpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.vpcSubnetIds"></a>

```typescript
public readonly vpcSubnetIds: string[];
```

- *Type:* string[]

A list of EC2 subnet IDs for this InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#vpc_subnet_ids TimestreamInfluxDbInstance#vpc_subnet_ids}

---

### TimestreamInfluxDbInstanceLogDeliveryConfiguration <a name="TimestreamInfluxDbInstanceLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration.Initializer"></a>

```typescript
import { timestreamInfluxDbInstance } from '@cdktn/provider-awscc'

const timestreamInfluxDbInstanceLogDeliveryConfiguration: timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a></code> | S3 configuration for sending logs to customer account from the InfluxDB instance. |

---

##### `s3Configuration`<sup>Optional</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a>

S3 configuration for sending logs to customer account from the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#s3_configuration TimestreamInfluxDbInstance#s3_configuration}

---

### TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration <a name="TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.Initializer"></a>

```typescript
import { timestreamInfluxDbInstance } from '@cdktn/provider-awscc'

const timestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration: timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.property.bucketName">bucketName</a></code> | <code>string</code> | The bucket name for logs to be sent from the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether logging to customer specified bucket is enabled. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The bucket name for logs to be sent from the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#bucket_name TimestreamInfluxDbInstance#bucket_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether logging to customer specified bucket is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#enabled TimestreamInfluxDbInstance#enabled}

---

### TimestreamInfluxDbInstanceMaintenanceSchedule <a name="TimestreamInfluxDbInstanceMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule.Initializer"></a>

```typescript
import { timestreamInfluxDbInstance } from '@cdktn/provider-awscc'

const timestreamInfluxDbInstanceMaintenanceSchedule: timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule.property.timezone">timezone</a></code> | <code>string</code> | The IANA timezone identifier for the maintenance schedule. |

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#preferred_maintenance_window TimestreamInfluxDbInstance#preferred_maintenance_window}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

The IANA timezone identifier for the maintenance schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#timezone TimestreamInfluxDbInstance#timezone}

---

### TimestreamInfluxDbInstanceTags <a name="TimestreamInfluxDbInstanceTags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags.Initializer"></a>

```typescript
import { timestreamInfluxDbInstance } from '@cdktn/provider-awscc'

const timestreamInfluxDbInstanceTags: timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#key TimestreamInfluxDbInstance#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#value TimestreamInfluxDbInstance#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference <a name="TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer"></a>

```typescript
import { timestreamInfluxDbInstance } from '@cdktn/provider-awscc'

new timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration">putS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resetS3Configuration">resetS3Configuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Configuration` <a name="putS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration"></a>

```typescript
public putS3Configuration(value: TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a>

---

##### `resetS3Configuration` <a name="resetS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resetS3Configuration"></a>

```typescript
public resetS3Configuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput">s3ConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference</a>

---

##### `s3ConfigurationInput`<sup>Optional</sup> <a name="s3ConfigurationInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput"></a>

```typescript
public readonly s3ConfigurationInput: IResolvable | TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamInfluxDbInstanceLogDeliveryConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a>

---


### TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference <a name="TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { timestreamInfluxDbInstance } from '@cdktn/provider-awscc'

new timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a>

---


### TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference <a name="TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```typescript
import { timestreamInfluxDbInstance } from '@cdktn/provider-awscc'

new timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resetPreferredMaintenanceWindow"></a>

```typescript
public resetPreferredMaintenanceWindow(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resetTimezone"></a>

```typescript
public resetTimezone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindowInput"></a>

```typescript
public readonly preferredMaintenanceWindowInput: string;
```

- *Type:* string

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamInfluxDbInstanceMaintenanceSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a>

---


### TimestreamInfluxDbInstanceTagsList <a name="TimestreamInfluxDbInstanceTagsList" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer"></a>

```typescript
import { timestreamInfluxDbInstance } from '@cdktn/provider-awscc'

new timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.get"></a>

```typescript
public get(index: number): TimestreamInfluxDbInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamInfluxDbInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>[]

---


### TimestreamInfluxDbInstanceTagsOutputReference <a name="TimestreamInfluxDbInstanceTagsOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer"></a>

```typescript
import { timestreamInfluxDbInstance } from '@cdktn/provider-awscc'

new timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamInfluxDbInstanceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>

---



