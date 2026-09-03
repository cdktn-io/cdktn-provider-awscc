# `timestreamInfluxDbCluster` Submodule <a name="`timestreamInfluxDbCluster` Submodule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimestreamInfluxDbCluster <a name="TimestreamInfluxDbCluster" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster awscc_timestream_influx_db_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbCluster(Construct Scope, string Id, TimestreamInfluxDbClusterConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig">TimestreamInfluxDbClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig">TimestreamInfluxDbClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putLogDeliveryConfiguration">PutLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putMaintenanceSchedule">PutMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetAllocatedStorage">ResetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbInstanceType">ResetDbInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbParameterGroupIdentifier">ResetDbParameterGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbStorageType">ResetDbStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetFailoverMode">ResetFailoverMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetLogDeliveryConfiguration">ResetLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetMaintenanceSchedule">ResetMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPubliclyAccessible">ResetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetVpcSubnetIds">ResetVpcSubnetIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogDeliveryConfiguration` <a name="PutLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putLogDeliveryConfiguration"></a>

```csharp
private void PutLogDeliveryConfiguration(TimestreamInfluxDbClusterLogDeliveryConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putLogDeliveryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a>

---

##### `PutMaintenanceSchedule` <a name="PutMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putMaintenanceSchedule"></a>

```csharp
private void PutMaintenanceSchedule(TimestreamInfluxDbClusterMaintenanceSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putMaintenanceSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putTags"></a>

```csharp
private void PutTags(IResolvable|TimestreamInfluxDbClusterTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>[]

---

##### `ResetAllocatedStorage` <a name="ResetAllocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetAllocatedStorage"></a>

```csharp
private void ResetAllocatedStorage()
```

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetDbInstanceType` <a name="ResetDbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbInstanceType"></a>

```csharp
private void ResetDbInstanceType()
```

##### `ResetDbParameterGroupIdentifier` <a name="ResetDbParameterGroupIdentifier" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbParameterGroupIdentifier"></a>

```csharp
private void ResetDbParameterGroupIdentifier()
```

##### `ResetDbStorageType` <a name="ResetDbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbStorageType"></a>

```csharp
private void ResetDbStorageType()
```

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDeploymentType"></a>

```csharp
private void ResetDeploymentType()
```

##### `ResetFailoverMode` <a name="ResetFailoverMode" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetFailoverMode"></a>

```csharp
private void ResetFailoverMode()
```

##### `ResetLogDeliveryConfiguration` <a name="ResetLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetLogDeliveryConfiguration"></a>

```csharp
private void ResetLogDeliveryConfiguration()
```

##### `ResetMaintenanceSchedule` <a name="ResetMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetMaintenanceSchedule"></a>

```csharp
private void ResetMaintenanceSchedule()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetNetworkType"></a>

```csharp
private void ResetNetworkType()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPubliclyAccessible"></a>

```csharp
private void ResetPubliclyAccessible()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetVpcSecurityGroupIds"></a>

```csharp
private void ResetVpcSecurityGroupIds()
```

##### `ResetVpcSubnetIds` <a name="ResetVpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetVpcSubnetIds"></a>

```csharp
private void ResetVpcSubnetIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TimestreamInfluxDbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TimestreamInfluxDbCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TimestreamInfluxDbCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TimestreamInfluxDbCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TimestreamInfluxDbCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TimestreamInfluxDbCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TimestreamInfluxDbCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TimestreamInfluxDbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TimestreamInfluxDbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.engineType">EngineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.influxAuthParametersSecretArn">InfluxAuthParametersSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.influxDbClusterId">InfluxDbClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference">TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference">TimestreamInfluxDbClusterMaintenanceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.nextMaintenanceTime">NextMaintenanceTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.readerEndpoint">ReaderEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList">TimestreamInfluxDbClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.allocatedStorageInput">AllocatedStorageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbInstanceTypeInput">DbInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbParameterGroupIdentifierInput">DbParameterGroupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbStorageTypeInput">DbStorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.failoverModeInput">FailoverModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.logDeliveryConfigurationInput">LogDeliveryConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.maintenanceScheduleInput">MaintenanceScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSubnetIdsInput">VpcSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.allocatedStorage">AllocatedStorage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbInstanceType">DbInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbParameterGroupIdentifier">DbParameterGroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbStorageType">DbStorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.failoverMode">FailoverMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSubnetIds">VpcSubnetIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.engineType"></a>

```csharp
public string EngineType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InfluxAuthParametersSecretArn`<sup>Required</sup> <a name="InfluxAuthParametersSecretArn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.influxAuthParametersSecretArn"></a>

```csharp
public string InfluxAuthParametersSecretArn { get; }
```

- *Type:* string

---

##### `InfluxDbClusterId`<sup>Required</sup> <a name="InfluxDbClusterId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.influxDbClusterId"></a>

```csharp
public string InfluxDbClusterId { get; }
```

- *Type:* string

---

##### `LogDeliveryConfiguration`<sup>Required</sup> <a name="LogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.logDeliveryConfiguration"></a>

```csharp
public TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference LogDeliveryConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference">TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference</a>

---

##### `MaintenanceSchedule`<sup>Required</sup> <a name="MaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.maintenanceSchedule"></a>

```csharp
public TimestreamInfluxDbClusterMaintenanceScheduleOutputReference MaintenanceSchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference">TimestreamInfluxDbClusterMaintenanceScheduleOutputReference</a>

---

##### `NextMaintenanceTime`<sup>Required</sup> <a name="NextMaintenanceTime" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.nextMaintenanceTime"></a>

```csharp
public string NextMaintenanceTime { get; }
```

- *Type:* string

---

##### `ReaderEndpoint`<sup>Required</sup> <a name="ReaderEndpoint" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.readerEndpoint"></a>

```csharp
public string ReaderEndpoint { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tags"></a>

```csharp
public TimestreamInfluxDbClusterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList">TimestreamInfluxDbClusterTagsList</a>

---

##### `AllocatedStorageInput`<sup>Optional</sup> <a name="AllocatedStorageInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.allocatedStorageInput"></a>

```csharp
public double AllocatedStorageInput { get; }
```

- *Type:* double

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `DbInstanceTypeInput`<sup>Optional</sup> <a name="DbInstanceTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbInstanceTypeInput"></a>

```csharp
public string DbInstanceTypeInput { get; }
```

- *Type:* string

---

##### `DbParameterGroupIdentifierInput`<sup>Optional</sup> <a name="DbParameterGroupIdentifierInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbParameterGroupIdentifierInput"></a>

```csharp
public string DbParameterGroupIdentifierInput { get; }
```

- *Type:* string

---

##### `DbStorageTypeInput`<sup>Optional</sup> <a name="DbStorageTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbStorageTypeInput"></a>

```csharp
public string DbStorageTypeInput { get; }
```

- *Type:* string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.deploymentTypeInput"></a>

```csharp
public string DeploymentTypeInput { get; }
```

- *Type:* string

---

##### `FailoverModeInput`<sup>Optional</sup> <a name="FailoverModeInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.failoverModeInput"></a>

```csharp
public string FailoverModeInput { get; }
```

- *Type:* string

---

##### `LogDeliveryConfigurationInput`<sup>Optional</sup> <a name="LogDeliveryConfigurationInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.logDeliveryConfigurationInput"></a>

```csharp
public IResolvable|TimestreamInfluxDbClusterLogDeliveryConfiguration LogDeliveryConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a>

---

##### `MaintenanceScheduleInput`<sup>Optional</sup> <a name="MaintenanceScheduleInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.maintenanceScheduleInput"></a>

```csharp
public IResolvable|TimestreamInfluxDbClusterMaintenanceSchedule MaintenanceScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.publiclyAccessibleInput"></a>

```csharp
public bool|IResolvable PubliclyAccessibleInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tagsInput"></a>

```csharp
public IResolvable|TimestreamInfluxDbClusterTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>[]

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSecurityGroupIdsInput"></a>

```csharp
public string[] VpcSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `VpcSubnetIdsInput`<sup>Optional</sup> <a name="VpcSubnetIdsInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSubnetIdsInput"></a>

```csharp
public string[] VpcSubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.allocatedStorage"></a>

```csharp
public double AllocatedStorage { get; }
```

- *Type:* double

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `DbInstanceType`<sup>Required</sup> <a name="DbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbInstanceType"></a>

```csharp
public string DbInstanceType { get; }
```

- *Type:* string

---

##### `DbParameterGroupIdentifier`<sup>Required</sup> <a name="DbParameterGroupIdentifier" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbParameterGroupIdentifier"></a>

```csharp
public string DbParameterGroupIdentifier { get; }
```

- *Type:* string

---

##### `DbStorageType`<sup>Required</sup> <a name="DbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbStorageType"></a>

```csharp
public string DbStorageType { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `FailoverMode`<sup>Required</sup> <a name="FailoverMode" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.failoverMode"></a>

```csharp
public string FailoverMode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.publiclyAccessible"></a>

```csharp
public bool|IResolvable PubliclyAccessible { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `VpcSubnetIds`<sup>Required</sup> <a name="VpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSubnetIds"></a>

```csharp
public string[] VpcSubnetIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TimestreamInfluxDbClusterConfig <a name="TimestreamInfluxDbClusterConfig" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbClusterConfig {
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
    string FailoverMode = null,
    TimestreamInfluxDbClusterLogDeliveryConfiguration LogDeliveryConfiguration = null,
    TimestreamInfluxDbClusterMaintenanceSchedule MaintenanceSchedule = null,
    string Name = null,
    string NetworkType = null,
    string Organization = null,
    string Password = null,
    double Port = null,
    bool|IResolvable PubliclyAccessible = null,
    IResolvable|TimestreamInfluxDbClusterTags[] Tags = null,
    string Username = null,
    string[] VpcSecurityGroupIds = null,
    string[] VpcSubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.allocatedStorage">AllocatedStorage</a></code> | <code>double</code> | The allocated storage for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.bucket">Bucket</a></code> | <code>string</code> | The bucket for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbInstanceType">DbInstanceType</a></code> | <code>string</code> | The compute instance of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbParameterGroupIdentifier">DbParameterGroupIdentifier</a></code> | <code>string</code> | The name of an existing InfluxDB parameter group. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbStorageType">DbStorageType</a></code> | <code>string</code> | The storage type of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.deploymentType">DeploymentType</a></code> | <code>string</code> | Deployment type of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.failoverMode">FailoverMode</a></code> | <code>string</code> | Failover mode of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a></code> | Configuration for sending logs to customer account from the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a></code> | The maintenance schedule for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.name">Name</a></code> | <code>string</code> | The unique name that is associated with the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.networkType">NetworkType</a></code> | <code>string</code> | Network type of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.organization">Organization</a></code> | <code>string</code> | The organization for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.password">Password</a></code> | <code>string</code> | The password for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.port">Port</a></code> | <code>double</code> | The port number on which InfluxDB accepts connections. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Attach a public IP to the customer ENI. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.username">Username</a></code> | <code>string</code> | The username for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | A list of Amazon EC2 VPC security groups to associate with this InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.vpcSubnetIds">VpcSubnetIds</a></code> | <code>string[]</code> | A list of EC2 subnet IDs for this InfluxDB cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllocatedStorage`<sup>Optional</sup> <a name="AllocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.allocatedStorage"></a>

```csharp
public double AllocatedStorage { get; set; }
```

- *Type:* double

The allocated storage for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#allocated_storage TimestreamInfluxDbCluster#allocated_storage}

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The bucket for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#bucket TimestreamInfluxDbCluster#bucket}

---

##### `DbInstanceType`<sup>Optional</sup> <a name="DbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbInstanceType"></a>

```csharp
public string DbInstanceType { get; set; }
```

- *Type:* string

The compute instance of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#db_instance_type TimestreamInfluxDbCluster#db_instance_type}

---

##### `DbParameterGroupIdentifier`<sup>Optional</sup> <a name="DbParameterGroupIdentifier" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbParameterGroupIdentifier"></a>

```csharp
public string DbParameterGroupIdentifier { get; set; }
```

- *Type:* string

The name of an existing InfluxDB parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#db_parameter_group_identifier TimestreamInfluxDbCluster#db_parameter_group_identifier}

---

##### `DbStorageType`<sup>Optional</sup> <a name="DbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbStorageType"></a>

```csharp
public string DbStorageType { get; set; }
```

- *Type:* string

The storage type of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#db_storage_type TimestreamInfluxDbCluster#db_storage_type}

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.deploymentType"></a>

```csharp
public string DeploymentType { get; set; }
```

- *Type:* string

Deployment type of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#deployment_type TimestreamInfluxDbCluster#deployment_type}

---

##### `FailoverMode`<sup>Optional</sup> <a name="FailoverMode" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.failoverMode"></a>

```csharp
public string FailoverMode { get; set; }
```

- *Type:* string

Failover mode of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#failover_mode TimestreamInfluxDbCluster#failover_mode}

---

##### `LogDeliveryConfiguration`<sup>Optional</sup> <a name="LogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.logDeliveryConfiguration"></a>

```csharp
public TimestreamInfluxDbClusterLogDeliveryConfiguration LogDeliveryConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a>

Configuration for sending logs to customer account from the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#log_delivery_configuration TimestreamInfluxDbCluster#log_delivery_configuration}

---

##### `MaintenanceSchedule`<sup>Optional</sup> <a name="MaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.maintenanceSchedule"></a>

```csharp
public TimestreamInfluxDbClusterMaintenanceSchedule MaintenanceSchedule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a>

The maintenance schedule for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#maintenance_schedule TimestreamInfluxDbCluster#maintenance_schedule}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The unique name that is associated with the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#name TimestreamInfluxDbCluster#name}

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

Network type of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#network_type TimestreamInfluxDbCluster#network_type}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The organization for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#organization TimestreamInfluxDbCluster#organization}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#password TimestreamInfluxDbCluster#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port number on which InfluxDB accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#port TimestreamInfluxDbCluster#port}

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.publiclyAccessible"></a>

```csharp
public bool|IResolvable PubliclyAccessible { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Attach a public IP to the customer ENI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#publicly_accessible TimestreamInfluxDbCluster#publicly_accessible}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.tags"></a>

```csharp
public IResolvable|TimestreamInfluxDbClusterTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>[]

An arbitrary set of tags (key-value pairs) for this DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#tags TimestreamInfluxDbCluster#tags}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#username TimestreamInfluxDbCluster#username}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; set; }
```

- *Type:* string[]

A list of Amazon EC2 VPC security groups to associate with this InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#vpc_security_group_ids TimestreamInfluxDbCluster#vpc_security_group_ids}

---

##### `VpcSubnetIds`<sup>Optional</sup> <a name="VpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.vpcSubnetIds"></a>

```csharp
public string[] VpcSubnetIds { get; set; }
```

- *Type:* string[]

A list of EC2 subnet IDs for this InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#vpc_subnet_ids TimestreamInfluxDbCluster#vpc_subnet_ids}

---

### TimestreamInfluxDbClusterLogDeliveryConfiguration <a name="TimestreamInfluxDbClusterLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbClusterLogDeliveryConfiguration {
    TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration S3Configuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a></code> | S3 configuration for sending logs to customer account from the InfluxDB cluster. |

---

##### `S3Configuration`<sup>Optional</sup> <a name="S3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration.property.s3Configuration"></a>

```csharp
public TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration S3Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a>

S3 configuration for sending logs to customer account from the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#s3_configuration TimestreamInfluxDbCluster#s3_configuration}

---

### TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration <a name="TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration {
    string BucketName = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.property.bucketName">BucketName</a></code> | <code>string</code> | The bucket name for logs to be sent from the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether logging to customer specified bucket is enabled. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The bucket name for logs to be sent from the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#bucket_name TimestreamInfluxDbCluster#bucket_name}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether logging to customer specified bucket is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#enabled TimestreamInfluxDbCluster#enabled}

---

### TimestreamInfluxDbClusterMaintenanceSchedule <a name="TimestreamInfluxDbClusterMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbClusterMaintenanceSchedule {
    string PreferredMaintenanceWindow = null,
    string Timezone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule.property.timezone">Timezone</a></code> | <code>string</code> | The IANA timezone identifier for the maintenance schedule. |

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; set; }
```

- *Type:* string

The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#preferred_maintenance_window TimestreamInfluxDbCluster#preferred_maintenance_window}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

The IANA timezone identifier for the maintenance schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#timezone TimestreamInfluxDbCluster#timezone}

---

### TimestreamInfluxDbClusterTags <a name="TimestreamInfluxDbClusterTags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbClusterTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#key TimestreamInfluxDbCluster#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/timestream_influx_db_cluster#value TimestreamInfluxDbCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference <a name="TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.putS3Configuration">PutS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resetS3Configuration">ResetS3Configuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Configuration` <a name="PutS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.putS3Configuration"></a>

```csharp
private void PutS3Configuration(TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a>

---

##### `ResetS3Configuration` <a name="ResetS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resetS3Configuration"></a>

```csharp
private void ResetS3Configuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference">TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput">S3ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Configuration`<sup>Required</sup> <a name="S3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.s3Configuration"></a>

```csharp
public TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference S3Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference">TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference</a>

---

##### `S3ConfigurationInput`<sup>Optional</sup> <a name="S3ConfigurationInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput"></a>

```csharp
public IResolvable|TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration S3ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TimestreamInfluxDbClusterLogDeliveryConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a>

---


### TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference <a name="TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a>

---


### TimestreamInfluxDbClusterMaintenanceScheduleOutputReference <a name="TimestreamInfluxDbClusterMaintenanceScheduleOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbClusterMaintenanceScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resetPreferredMaintenanceWindow"></a>

```csharp
private void ResetPreferredMaintenanceWindow()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resetTimezone"></a>

```csharp
private void ResetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.preferredMaintenanceWindowInput"></a>

```csharp
public string PreferredMaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TimestreamInfluxDbClusterMaintenanceSchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a>

---


### TimestreamInfluxDbClusterTagsList <a name="TimestreamInfluxDbClusterTagsList" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbClusterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.get"></a>

```csharp
private TimestreamInfluxDbClusterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.internalValue"></a>

```csharp
public IResolvable|TimestreamInfluxDbClusterTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>[]

---


### TimestreamInfluxDbClusterTagsOutputReference <a name="TimestreamInfluxDbClusterTagsOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamInfluxDbClusterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TimestreamInfluxDbClusterTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags">TimestreamInfluxDbClusterTags</a>

---



