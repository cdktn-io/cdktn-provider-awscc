# `timestreamInfluxDbInstance` Submodule <a name="`timestreamInfluxDbInstance` Submodule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimestreamInfluxDbInstance <a name="TimestreamInfluxDbInstance" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance awscc_timestream_influx_db_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbInstance(Construct Scope, string Id, TimestreamInfluxDbInstanceConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig">TimestreamInfluxDbInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig">TimestreamInfluxDbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putLogDeliveryConfiguration">PutLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putMaintenanceSchedule">PutMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetAllocatedStorage">ResetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbInstanceType">ResetDbInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbParameterGroupIdentifier">ResetDbParameterGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbStorageType">ResetDbStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetLogDeliveryConfiguration">ResetLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetMaintenanceSchedule">ResetMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPubliclyAccessible">ResetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetVpcSubnetIds">ResetVpcSubnetIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogDeliveryConfiguration` <a name="PutLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putLogDeliveryConfiguration"></a>

```csharp
private void PutLogDeliveryConfiguration(TimestreamInfluxDbInstanceLogDeliveryConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putLogDeliveryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a>

---

##### `PutMaintenanceSchedule` <a name="PutMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putMaintenanceSchedule"></a>

```csharp
private void PutMaintenanceSchedule(TimestreamInfluxDbInstanceMaintenanceSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putMaintenanceSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putTags"></a>

```csharp
private void PutTags(IResolvable|TimestreamInfluxDbInstanceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>[]

---

##### `ResetAllocatedStorage` <a name="ResetAllocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetAllocatedStorage"></a>

```csharp
private void ResetAllocatedStorage()
```

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetDbInstanceType` <a name="ResetDbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbInstanceType"></a>

```csharp
private void ResetDbInstanceType()
```

##### `ResetDbParameterGroupIdentifier` <a name="ResetDbParameterGroupIdentifier" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbParameterGroupIdentifier"></a>

```csharp
private void ResetDbParameterGroupIdentifier()
```

##### `ResetDbStorageType` <a name="ResetDbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDbStorageType"></a>

```csharp
private void ResetDbStorageType()
```

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetDeploymentType"></a>

```csharp
private void ResetDeploymentType()
```

##### `ResetLogDeliveryConfiguration` <a name="ResetLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetLogDeliveryConfiguration"></a>

```csharp
private void ResetLogDeliveryConfiguration()
```

##### `ResetMaintenanceSchedule` <a name="ResetMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetMaintenanceSchedule"></a>

```csharp
private void ResetMaintenanceSchedule()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetNetworkType"></a>

```csharp
private void ResetNetworkType()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetPubliclyAccessible"></a>

```csharp
private void ResetPubliclyAccessible()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetVpcSecurityGroupIds"></a>

```csharp
private void ResetVpcSecurityGroupIds()
```

##### `ResetVpcSubnetIds` <a name="ResetVpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.resetVpcSubnetIds"></a>

```csharp
private void ResetVpcSubnetIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TimestreamInfluxDbInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TimestreamInfluxDbInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TimestreamInfluxDbInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TimestreamInfluxDbInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TimestreamInfluxDbInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TimestreamInfluxDbInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TimestreamInfluxDbInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TimestreamInfluxDbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TimestreamInfluxDbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.influxAuthParametersSecretArn">InfluxAuthParametersSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.influxDbInstanceId">InfluxDbInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference">TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference">TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.nextMaintenanceTime">NextMaintenanceTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.secondaryAvailabilityZone">SecondaryAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList">TimestreamInfluxDbInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.allocatedStorageInput">AllocatedStorageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbInstanceTypeInput">DbInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbParameterGroupIdentifierInput">DbParameterGroupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbStorageTypeInput">DbStorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.logDeliveryConfigurationInput">LogDeliveryConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.maintenanceScheduleInput">MaintenanceScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSubnetIdsInput">VpcSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.allocatedStorage">AllocatedStorage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbInstanceType">DbInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbParameterGroupIdentifier">DbParameterGroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbStorageType">DbStorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSubnetIds">VpcSubnetIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InfluxAuthParametersSecretArn`<sup>Required</sup> <a name="InfluxAuthParametersSecretArn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.influxAuthParametersSecretArn"></a>

```csharp
public string InfluxAuthParametersSecretArn { get; }
```

- *Type:* string

---

##### `InfluxDbInstanceId`<sup>Required</sup> <a name="InfluxDbInstanceId" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.influxDbInstanceId"></a>

```csharp
public string InfluxDbInstanceId { get; }
```

- *Type:* string

---

##### `LogDeliveryConfiguration`<sup>Required</sup> <a name="LogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.logDeliveryConfiguration"></a>

```csharp
public TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference LogDeliveryConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference">TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference</a>

---

##### `MaintenanceSchedule`<sup>Required</sup> <a name="MaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.maintenanceSchedule"></a>

```csharp
public TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference MaintenanceSchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference">TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference</a>

---

##### `NextMaintenanceTime`<sup>Required</sup> <a name="NextMaintenanceTime" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.nextMaintenanceTime"></a>

```csharp
public string NextMaintenanceTime { get; }
```

- *Type:* string

---

##### `SecondaryAvailabilityZone`<sup>Required</sup> <a name="SecondaryAvailabilityZone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.secondaryAvailabilityZone"></a>

```csharp
public string SecondaryAvailabilityZone { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tags"></a>

```csharp
public TimestreamInfluxDbInstanceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList">TimestreamInfluxDbInstanceTagsList</a>

---

##### `AllocatedStorageInput`<sup>Optional</sup> <a name="AllocatedStorageInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.allocatedStorageInput"></a>

```csharp
public double AllocatedStorageInput { get; }
```

- *Type:* double

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `DbInstanceTypeInput`<sup>Optional</sup> <a name="DbInstanceTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbInstanceTypeInput"></a>

```csharp
public string DbInstanceTypeInput { get; }
```

- *Type:* string

---

##### `DbParameterGroupIdentifierInput`<sup>Optional</sup> <a name="DbParameterGroupIdentifierInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbParameterGroupIdentifierInput"></a>

```csharp
public string DbParameterGroupIdentifierInput { get; }
```

- *Type:* string

---

##### `DbStorageTypeInput`<sup>Optional</sup> <a name="DbStorageTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbStorageTypeInput"></a>

```csharp
public string DbStorageTypeInput { get; }
```

- *Type:* string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.deploymentTypeInput"></a>

```csharp
public string DeploymentTypeInput { get; }
```

- *Type:* string

---

##### `LogDeliveryConfigurationInput`<sup>Optional</sup> <a name="LogDeliveryConfigurationInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.logDeliveryConfigurationInput"></a>

```csharp
public IResolvable|TimestreamInfluxDbInstanceLogDeliveryConfiguration LogDeliveryConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a>

---

##### `MaintenanceScheduleInput`<sup>Optional</sup> <a name="MaintenanceScheduleInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.maintenanceScheduleInput"></a>

```csharp
public IResolvable|TimestreamInfluxDbInstanceMaintenanceSchedule MaintenanceScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.publiclyAccessibleInput"></a>

```csharp
public bool|IResolvable PubliclyAccessibleInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tagsInput"></a>

```csharp
public IResolvable|TimestreamInfluxDbInstanceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>[]

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSecurityGroupIdsInput"></a>

```csharp
public string[] VpcSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `VpcSubnetIdsInput`<sup>Optional</sup> <a name="VpcSubnetIdsInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSubnetIdsInput"></a>

```csharp
public string[] VpcSubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.allocatedStorage"></a>

```csharp
public double AllocatedStorage { get; }
```

- *Type:* double

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `DbInstanceType`<sup>Required</sup> <a name="DbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbInstanceType"></a>

```csharp
public string DbInstanceType { get; }
```

- *Type:* string

---

##### `DbParameterGroupIdentifier`<sup>Required</sup> <a name="DbParameterGroupIdentifier" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbParameterGroupIdentifier"></a>

```csharp
public string DbParameterGroupIdentifier { get; }
```

- *Type:* string

---

##### `DbStorageType`<sup>Required</sup> <a name="DbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.dbStorageType"></a>

```csharp
public string DbStorageType { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.publiclyAccessible"></a>

```csharp
public bool|IResolvable PubliclyAccessible { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `VpcSubnetIds`<sup>Required</sup> <a name="VpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.vpcSubnetIds"></a>

```csharp
public string[] VpcSubnetIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TimestreamInfluxDbInstanceConfig <a name="TimestreamInfluxDbInstanceConfig" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbInstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double AllocatedStorage = null,
    string Bucket = null,
    string DbInstanceType = null,
    string DbParameterGroupIdentifier = null,
    string DbStorageType = null,
    string DeploymentType = null,
    TimestreamInfluxDbInstanceLogDeliveryConfiguration LogDeliveryConfiguration = null,
    TimestreamInfluxDbInstanceMaintenanceSchedule MaintenanceSchedule = null,
    string Name = null,
    string NetworkType = null,
    string Organization = null,
    string Password = null,
    double Port = null,
    bool|IResolvable PubliclyAccessible = null,
    IResolvable|TimestreamInfluxDbInstanceTags[] Tags = null,
    string Username = null,
    string[] VpcSecurityGroupIds = null,
    string[] VpcSubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.allocatedStorage">AllocatedStorage</a></code> | <code>double</code> | The allocated storage for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.bucket">Bucket</a></code> | <code>string</code> | The bucket for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbInstanceType">DbInstanceType</a></code> | <code>string</code> | The compute instance of the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbParameterGroupIdentifier">DbParameterGroupIdentifier</a></code> | <code>string</code> | The name of an existing InfluxDB parameter group. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbStorageType">DbStorageType</a></code> | <code>string</code> | The storage type of the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.deploymentType">DeploymentType</a></code> | <code>string</code> | Deployment type of the InfluxDB Instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a></code> | Configuration for sending logs to customer account from the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a></code> | The maintenance schedule for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.name">Name</a></code> | <code>string</code> | The unique name that is associated with the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.networkType">NetworkType</a></code> | <code>string</code> | Network type of the InfluxDB Instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.organization">Organization</a></code> | <code>string</code> | The organization for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.password">Password</a></code> | <code>string</code> | The password for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.port">Port</a></code> | <code>double</code> | The port number on which InfluxDB accepts connections. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Attach a public IP to the customer ENI. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.username">Username</a></code> | <code>string</code> | The username for the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | A list of Amazon EC2 VPC security groups to associate with this InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.vpcSubnetIds">VpcSubnetIds</a></code> | <code>string[]</code> | A list of EC2 subnet IDs for this InfluxDB instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllocatedStorage`<sup>Optional</sup> <a name="AllocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.allocatedStorage"></a>

```csharp
public double AllocatedStorage { get; set; }
```

- *Type:* double

The allocated storage for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#allocated_storage TimestreamInfluxDbInstance#allocated_storage}

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The bucket for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#bucket TimestreamInfluxDbInstance#bucket}

---

##### `DbInstanceType`<sup>Optional</sup> <a name="DbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbInstanceType"></a>

```csharp
public string DbInstanceType { get; set; }
```

- *Type:* string

The compute instance of the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#db_instance_type TimestreamInfluxDbInstance#db_instance_type}

---

##### `DbParameterGroupIdentifier`<sup>Optional</sup> <a name="DbParameterGroupIdentifier" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbParameterGroupIdentifier"></a>

```csharp
public string DbParameterGroupIdentifier { get; set; }
```

- *Type:* string

The name of an existing InfluxDB parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#db_parameter_group_identifier TimestreamInfluxDbInstance#db_parameter_group_identifier}

---

##### `DbStorageType`<sup>Optional</sup> <a name="DbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.dbStorageType"></a>

```csharp
public string DbStorageType { get; set; }
```

- *Type:* string

The storage type of the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#db_storage_type TimestreamInfluxDbInstance#db_storage_type}

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.deploymentType"></a>

```csharp
public string DeploymentType { get; set; }
```

- *Type:* string

Deployment type of the InfluxDB Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#deployment_type TimestreamInfluxDbInstance#deployment_type}

---

##### `LogDeliveryConfiguration`<sup>Optional</sup> <a name="LogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.logDeliveryConfiguration"></a>

```csharp
public TimestreamInfluxDbInstanceLogDeliveryConfiguration LogDeliveryConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a>

Configuration for sending logs to customer account from the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#log_delivery_configuration TimestreamInfluxDbInstance#log_delivery_configuration}

---

##### `MaintenanceSchedule`<sup>Optional</sup> <a name="MaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.maintenanceSchedule"></a>

```csharp
public TimestreamInfluxDbInstanceMaintenanceSchedule MaintenanceSchedule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a>

The maintenance schedule for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#maintenance_schedule TimestreamInfluxDbInstance#maintenance_schedule}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The unique name that is associated with the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#name TimestreamInfluxDbInstance#name}

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

Network type of the InfluxDB Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#network_type TimestreamInfluxDbInstance#network_type}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The organization for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#organization TimestreamInfluxDbInstance#organization}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#password TimestreamInfluxDbInstance#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port number on which InfluxDB accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#port TimestreamInfluxDbInstance#port}

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.publiclyAccessible"></a>

```csharp
public bool|IResolvable PubliclyAccessible { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Attach a public IP to the customer ENI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#publicly_accessible TimestreamInfluxDbInstance#publicly_accessible}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.tags"></a>

```csharp
public IResolvable|TimestreamInfluxDbInstanceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>[]

An arbitrary set of tags (key-value pairs) for this DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#tags TimestreamInfluxDbInstance#tags}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username for the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#username TimestreamInfluxDbInstance#username}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; set; }
```

- *Type:* string[]

A list of Amazon EC2 VPC security groups to associate with this InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#vpc_security_group_ids TimestreamInfluxDbInstance#vpc_security_group_ids}

---

##### `VpcSubnetIds`<sup>Optional</sup> <a name="VpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceConfig.property.vpcSubnetIds"></a>

```csharp
public string[] VpcSubnetIds { get; set; }
```

- *Type:* string[]

A list of EC2 subnet IDs for this InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#vpc_subnet_ids TimestreamInfluxDbInstance#vpc_subnet_ids}

---

### TimestreamInfluxDbInstanceLogDeliveryConfiguration <a name="TimestreamInfluxDbInstanceLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbInstanceLogDeliveryConfiguration {
    TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration S3Configuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a></code> | S3 configuration for sending logs to customer account from the InfluxDB instance. |

---

##### `S3Configuration`<sup>Optional</sup> <a name="S3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration.property.s3Configuration"></a>

```csharp
public TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration S3Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a>

S3 configuration for sending logs to customer account from the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#s3_configuration TimestreamInfluxDbInstance#s3_configuration}

---

### TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration <a name="TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration {
    string BucketName = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.property.bucketName">BucketName</a></code> | <code>string</code> | The bucket name for logs to be sent from the InfluxDB instance. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether logging to customer specified bucket is enabled. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The bucket name for logs to be sent from the InfluxDB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#bucket_name TimestreamInfluxDbInstance#bucket_name}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether logging to customer specified bucket is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#enabled TimestreamInfluxDbInstance#enabled}

---

### TimestreamInfluxDbInstanceMaintenanceSchedule <a name="TimestreamInfluxDbInstanceMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbInstanceMaintenanceSchedule {
    string PreferredMaintenanceWindow = null,
    string Timezone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule.property.timezone">Timezone</a></code> | <code>string</code> | The IANA timezone identifier for the maintenance schedule. |

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; set; }
```

- *Type:* string

The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#preferred_maintenance_window TimestreamInfluxDbInstance#preferred_maintenance_window}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

The IANA timezone identifier for the maintenance schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#timezone TimestreamInfluxDbInstance#timezone}

---

### TimestreamInfluxDbInstanceTags <a name="TimestreamInfluxDbInstanceTags" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbInstanceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#key TimestreamInfluxDbInstance#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#value TimestreamInfluxDbInstance#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference <a name="TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration">PutS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resetS3Configuration">ResetS3Configuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Configuration` <a name="PutS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration"></a>

```csharp
private void PutS3Configuration(TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a>

---

##### `ResetS3Configuration` <a name="ResetS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resetS3Configuration"></a>

```csharp
private void ResetS3Configuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput">S3ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Configuration`<sup>Required</sup> <a name="S3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.s3Configuration"></a>

```csharp
public TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference S3Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference</a>

---

##### `S3ConfigurationInput`<sup>Optional</sup> <a name="S3ConfigurationInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput"></a>

```csharp
public IResolvable|TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration S3ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TimestreamInfluxDbInstanceLogDeliveryConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfiguration">TimestreamInfluxDbInstanceLogDeliveryConfiguration</a>

---


### TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference <a name="TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a>

---


### TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference <a name="TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resetPreferredMaintenanceWindow"></a>

```csharp
private void ResetPreferredMaintenanceWindow()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resetTimezone"></a>

```csharp
private void ResetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindowInput"></a>

```csharp
public string PreferredMaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TimestreamInfluxDbInstanceMaintenanceSchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceMaintenanceSchedule">TimestreamInfluxDbInstanceMaintenanceSchedule</a>

---


### TimestreamInfluxDbInstanceTagsList <a name="TimestreamInfluxDbInstanceTagsList" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbInstanceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.get"></a>

```csharp
private TimestreamInfluxDbInstanceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsList.property.internalValue"></a>

```csharp
public IResolvable|TimestreamInfluxDbInstanceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>[]

---


### TimestreamInfluxDbInstanceTagsOutputReference <a name="TimestreamInfluxDbInstanceTagsOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbInstanceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TimestreamInfluxDbInstanceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbInstance.TimestreamInfluxDbInstanceTags">TimestreamInfluxDbInstanceTags</a>

---



