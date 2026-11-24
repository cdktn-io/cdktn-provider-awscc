# `dmsReplicationInstance` Submodule <a name="`dmsReplicationInstance` Submodule" id="@cdktn/provider-awscc.dmsReplicationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReplicationInstance <a name="DmsReplicationInstance" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance awscc_dms_replication_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsReplicationInstance(Construct Scope, string Id, DmsReplicationInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig">DmsReplicationInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig">DmsReplicationInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAllocatedStorage">ResetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAllowMajorVersionUpgrade">ResetAllowMajorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAutoMinorVersionUpgrade">ResetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetDnsNameServers">ResetDnsNameServers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetMultiAz">ResetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetPubliclyAccessible">ResetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetReplicationInstanceIdentifier">ResetReplicationInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetReplicationSubnetGroupIdentifier">ResetReplicationSubnetGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetResourceIdentifier">ResetResourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.putTags"></a>

```csharp
private void PutTags(IResolvable|DmsReplicationInstanceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>[]

---

##### `ResetAllocatedStorage` <a name="ResetAllocatedStorage" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAllocatedStorage"></a>

```csharp
private void ResetAllocatedStorage()
```

##### `ResetAllowMajorVersionUpgrade` <a name="ResetAllowMajorVersionUpgrade" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAllowMajorVersionUpgrade"></a>

```csharp
private void ResetAllowMajorVersionUpgrade()
```

##### `ResetAutoMinorVersionUpgrade` <a name="ResetAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAutoMinorVersionUpgrade"></a>

```csharp
private void ResetAutoMinorVersionUpgrade()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetDnsNameServers` <a name="ResetDnsNameServers" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetDnsNameServers"></a>

```csharp
private void ResetDnsNameServers()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetMultiAz` <a name="ResetMultiAz" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetMultiAz"></a>

```csharp
private void ResetMultiAz()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetNetworkType"></a>

```csharp
private void ResetNetworkType()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetPreferredMaintenanceWindow"></a>

```csharp
private void ResetPreferredMaintenanceWindow()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetPubliclyAccessible"></a>

```csharp
private void ResetPubliclyAccessible()
```

##### `ResetReplicationInstanceIdentifier` <a name="ResetReplicationInstanceIdentifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetReplicationInstanceIdentifier"></a>

```csharp
private void ResetReplicationInstanceIdentifier()
```

##### `ResetReplicationSubnetGroupIdentifier` <a name="ResetReplicationSubnetGroupIdentifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetReplicationSubnetGroupIdentifier"></a>

```csharp
private void ResetReplicationSubnetGroupIdentifier()
```

##### `ResetResourceIdentifier` <a name="ResetResourceIdentifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetResourceIdentifier"></a>

```csharp
private void ResetResourceIdentifier()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetVpcSecurityGroupIds"></a>

```csharp
private void ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DmsReplicationInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DmsReplicationInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DmsReplicationInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DmsReplicationInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DmsReplicationInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DmsReplicationInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsReplicationInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsReplicationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DmsReplicationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceArn">ReplicationInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstancePrivateIpAddresses">ReplicationInstancePrivateIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstancePublicIpAddresses">ReplicationInstancePublicIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList">DmsReplicationInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allocatedStorageInput">AllocatedStorageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allowMajorVersionUpgradeInput">AllowMajorVersionUpgradeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.autoMinorVersionUpgradeInput">AutoMinorVersionUpgradeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.dnsNameServersInput">DnsNameServersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.multiAzInput">MultiAzInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceClassInput">ReplicationInstanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceIdentifierInput">ReplicationInstanceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationSubnetGroupIdentifierInput">ReplicationSubnetGroupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.resourceIdentifierInput">ResourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allocatedStorage">AllocatedStorage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allowMajorVersionUpgrade">AllowMajorVersionUpgrade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.dnsNameServers">DnsNameServers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.multiAz">MultiAz</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceClass">ReplicationInstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceIdentifier">ReplicationInstanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationSubnetGroupIdentifier">ReplicationSubnetGroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ReplicationInstanceArn`<sup>Required</sup> <a name="ReplicationInstanceArn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceArn"></a>

```csharp
public string ReplicationInstanceArn { get; }
```

- *Type:* string

---

##### `ReplicationInstancePrivateIpAddresses`<sup>Required</sup> <a name="ReplicationInstancePrivateIpAddresses" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstancePrivateIpAddresses"></a>

```csharp
public string ReplicationInstancePrivateIpAddresses { get; }
```

- *Type:* string

---

##### `ReplicationInstancePublicIpAddresses`<sup>Required</sup> <a name="ReplicationInstancePublicIpAddresses" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstancePublicIpAddresses"></a>

```csharp
public string ReplicationInstancePublicIpAddresses { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.tags"></a>

```csharp
public DmsReplicationInstanceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList">DmsReplicationInstanceTagsList</a>

---

##### `AllocatedStorageInput`<sup>Optional</sup> <a name="AllocatedStorageInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allocatedStorageInput"></a>

```csharp
public double AllocatedStorageInput { get; }
```

- *Type:* double

---

##### `AllowMajorVersionUpgradeInput`<sup>Optional</sup> <a name="AllowMajorVersionUpgradeInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allowMajorVersionUpgradeInput"></a>

```csharp
public bool|IResolvable AllowMajorVersionUpgradeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="AutoMinorVersionUpgradeInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.autoMinorVersionUpgradeInput"></a>

```csharp
public bool|IResolvable AutoMinorVersionUpgradeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `DnsNameServersInput`<sup>Optional</sup> <a name="DnsNameServersInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.dnsNameServersInput"></a>

```csharp
public string DnsNameServersInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `MultiAzInput`<sup>Optional</sup> <a name="MultiAzInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.multiAzInput"></a>

```csharp
public bool|IResolvable MultiAzInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.preferredMaintenanceWindowInput"></a>

```csharp
public string PreferredMaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.publiclyAccessibleInput"></a>

```csharp
public bool|IResolvable PubliclyAccessibleInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReplicationInstanceClassInput`<sup>Optional</sup> <a name="ReplicationInstanceClassInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceClassInput"></a>

```csharp
public string ReplicationInstanceClassInput { get; }
```

- *Type:* string

---

##### `ReplicationInstanceIdentifierInput`<sup>Optional</sup> <a name="ReplicationInstanceIdentifierInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceIdentifierInput"></a>

```csharp
public string ReplicationInstanceIdentifierInput { get; }
```

- *Type:* string

---

##### `ReplicationSubnetGroupIdentifierInput`<sup>Optional</sup> <a name="ReplicationSubnetGroupIdentifierInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationSubnetGroupIdentifierInput"></a>

```csharp
public string ReplicationSubnetGroupIdentifierInput { get; }
```

- *Type:* string

---

##### `ResourceIdentifierInput`<sup>Optional</sup> <a name="ResourceIdentifierInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.resourceIdentifierInput"></a>

```csharp
public string ResourceIdentifierInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.tagsInput"></a>

```csharp
public IResolvable|DmsReplicationInstanceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>[]

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.vpcSecurityGroupIdsInput"></a>

```csharp
public string[] VpcSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allocatedStorage"></a>

```csharp
public double AllocatedStorage { get; }
```

- *Type:* double

---

##### `AllowMajorVersionUpgrade`<sup>Required</sup> <a name="AllowMajorVersionUpgrade" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allowMajorVersionUpgrade"></a>

```csharp
public bool|IResolvable AllowMajorVersionUpgrade { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.autoMinorVersionUpgrade"></a>

```csharp
public bool|IResolvable AutoMinorVersionUpgrade { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `DnsNameServers`<sup>Required</sup> <a name="DnsNameServers" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.dnsNameServers"></a>

```csharp
public string DnsNameServers { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.multiAz"></a>

```csharp
public bool|IResolvable MultiAz { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; }
```

- *Type:* string

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.publiclyAccessible"></a>

```csharp
public bool|IResolvable PubliclyAccessible { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReplicationInstanceClass`<sup>Required</sup> <a name="ReplicationInstanceClass" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceClass"></a>

```csharp
public string ReplicationInstanceClass { get; }
```

- *Type:* string

---

##### `ReplicationInstanceIdentifier`<sup>Required</sup> <a name="ReplicationInstanceIdentifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceIdentifier"></a>

```csharp
public string ReplicationInstanceIdentifier { get; }
```

- *Type:* string

---

##### `ReplicationSubnetGroupIdentifier`<sup>Required</sup> <a name="ReplicationSubnetGroupIdentifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationSubnetGroupIdentifier"></a>

```csharp
public string ReplicationSubnetGroupIdentifier { get; }
```

- *Type:* string

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReplicationInstanceConfig <a name="DmsReplicationInstanceConfig" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsReplicationInstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ReplicationInstanceClass,
    double AllocatedStorage = null,
    bool|IResolvable AllowMajorVersionUpgrade = null,
    bool|IResolvable AutoMinorVersionUpgrade = null,
    string AvailabilityZone = null,
    string DnsNameServers = null,
    string EngineVersion = null,
    string KmsKeyId = null,
    bool|IResolvable MultiAz = null,
    string NetworkType = null,
    string PreferredMaintenanceWindow = null,
    bool|IResolvable PubliclyAccessible = null,
    string ReplicationInstanceIdentifier = null,
    string ReplicationSubnetGroupIdentifier = null,
    string ResourceIdentifier = null,
    IResolvable|DmsReplicationInstanceTags[] Tags = null,
    string[] VpcSecurityGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationInstanceClass">ReplicationInstanceClass</a></code> | <code>string</code> | The compute and memory capacity of the replication instance as defined for the specified replication instance class. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.allocatedStorage">AllocatedStorage</a></code> | <code>double</code> | The amount of storage (in gigabytes) to be initially allocated for the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.allowMajorVersionUpgrade">AllowMajorVersionUpgrade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates that major version upgrades are allowed. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A value that indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | The Availability Zone that the replication instance will be created in. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.dnsNameServers">DnsNameServers</a></code> | <code>string</code> | A list of custom DNS name servers supported for the replication instance to access your on-premise source or target database. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | The engine version number of the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | An AWS KMS key identifier that is used to encrypt the data on the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.multiAz">MultiAz</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the replication instance is a Multi-AZ deployment. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.networkType">NetworkType</a></code> | <code>string</code> | The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | The weekly time range during which system maintenance can occur, in UTC. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies the accessibility options for the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationInstanceIdentifier">ReplicationInstanceIdentifier</a></code> | <code>string</code> | The replication instance identifier. This parameter is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationSubnetGroupIdentifier">ReplicationSubnetGroupIdentifier</a></code> | <code>string</code> | A subnet group to associate with the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>[]</code> | One or more tags to be assigned to the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | Specifies the virtual private cloud (VPC) security group to be used with the replication instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ReplicationInstanceClass`<sup>Required</sup> <a name="ReplicationInstanceClass" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationInstanceClass"></a>

```csharp
public string ReplicationInstanceClass { get; set; }
```

- *Type:* string

The compute and memory capacity of the replication instance as defined for the specified replication instance class.

For example, to specify the instance class dms.c4.large, set this parameter to `"dms.c4.large"`. For more information on the settings and capacities for the available replication instance classes, see [Selecting the right AWS DMS replication instance for your migration](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth) in the AWS Database Migration Service User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#replication_instance_class DmsReplicationInstance#replication_instance_class}

---

##### `AllocatedStorage`<sup>Optional</sup> <a name="AllocatedStorage" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.allocatedStorage"></a>

```csharp
public double AllocatedStorage { get; set; }
```

- *Type:* double

The amount of storage (in gigabytes) to be initially allocated for the replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#allocated_storage DmsReplicationInstance#allocated_storage}

---

##### `AllowMajorVersionUpgrade`<sup>Optional</sup> <a name="AllowMajorVersionUpgrade" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.allowMajorVersionUpgrade"></a>

```csharp
public bool|IResolvable AllowMajorVersionUpgrade { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates that major version upgrades are allowed.

Changing this parameter does not result in an outage, and the change is asynchronously applied as soon as possible.

This parameter must be set to `true` when specifying a value for the `EngineVersion` parameter that is a different major version than the replication instance's current version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#allow_major_version_upgrade DmsReplicationInstance#allow_major_version_upgrade}

---

##### `AutoMinorVersionUpgrade`<sup>Optional</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.autoMinorVersionUpgrade"></a>

```csharp
public bool|IResolvable AutoMinorVersionUpgrade { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A value that indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance window.

This parameter defaults to `true`.

Default: `true`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#auto_minor_version_upgrade DmsReplicationInstance#auto_minor_version_upgrade}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

The Availability Zone that the replication instance will be created in.

The default value is a random, system-chosen Availability Zone in the endpoint's AWS Region, for example `us-east-1d`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#availability_zone DmsReplicationInstance#availability_zone}

---

##### `DnsNameServers`<sup>Optional</sup> <a name="DnsNameServers" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.dnsNameServers"></a>

```csharp
public string DnsNameServers { get; set; }
```

- *Type:* string

A list of custom DNS name servers supported for the replication instance to access your on-premise source or target database.

This list overrides the default name servers supported by the replication instance. You can specify a comma-separated list of internet addresses for up to four on-premise DNS name servers. For example: `"1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4"`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#dns_name_servers DmsReplicationInstance#dns_name_servers}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

The engine version number of the replication instance.

If an engine version number is not specified when a replication instance is created, the default is the latest engine version available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#engine_version DmsReplicationInstance#engine_version}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

An AWS KMS key identifier that is used to encrypt the data on the replication instance.

If you don't specify a value for the `KmsKeyId` parameter, AWS DMS uses your default encryption key.

AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#kms_key_id DmsReplicationInstance#kms_key_id}

---

##### `MultiAz`<sup>Optional</sup> <a name="MultiAz" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.multiAz"></a>

```csharp
public bool|IResolvable MultiAz { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the replication instance is a Multi-AZ deployment.

You can't set the `AvailabilityZone` parameter if the Multi-AZ parameter is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#multi_az DmsReplicationInstance#multi_az}

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing.

IPv6 only is not yet supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#network_type DmsReplicationInstance#network_type}

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; set; }
```

- *Type:* string

The weekly time range during which system maintenance can occur, in UTC.

Format: `ddd:hh24:mi-ddd:hh24:mi`

Default: A 30-minute window selected at random from an 8-hour block of time per AWS Region, occurring on a random day of the week.

Valid days (`ddd`): `Mon` | `Tue` | `Wed` | `Thu` | `Fri` | `Sat` | `Sun`

Constraints: Minimum 30-minute window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#preferred_maintenance_window DmsReplicationInstance#preferred_maintenance_window}

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.publiclyAccessible"></a>

```csharp
public bool|IResolvable PubliclyAccessible { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies the accessibility options for the replication instance.

A value of `true` represents an instance with a public IP address. A value of `false` represents an instance with a private IP address. The default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#publicly_accessible DmsReplicationInstance#publicly_accessible}

---

##### `ReplicationInstanceIdentifier`<sup>Optional</sup> <a name="ReplicationInstanceIdentifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationInstanceIdentifier"></a>

```csharp
public string ReplicationInstanceIdentifier { get; set; }
```

- *Type:* string

The replication instance identifier. This parameter is stored as a lowercase string.

Constraints:

* Must contain 1-63 alphanumeric characters or hyphens.
* First character must be a letter.
* Can't end with a hyphen or contain two consecutive hyphens.

Example: `myrepinstance`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#replication_instance_identifier DmsReplicationInstance#replication_instance_identifier}

---

##### `ReplicationSubnetGroupIdentifier`<sup>Optional</sup> <a name="ReplicationSubnetGroupIdentifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationSubnetGroupIdentifier"></a>

```csharp
public string ReplicationSubnetGroupIdentifier { get; set; }
```

- *Type:* string

A subnet group to associate with the replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#replication_subnet_group_identifier DmsReplicationInstance#replication_subnet_group_identifier}

---

##### `ResourceIdentifier`<sup>Optional</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; set; }
```

- *Type:* string

A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object.

The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as `Example-App-ARN1`. For example, this value might result in the `EndpointArn` value `arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1`. If you don't specify a `ResourceIdentifier` value, AWS DMS generates a default identifier value for the end of `EndpointArn`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#resource_identifier DmsReplicationInstance#resource_identifier}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.tags"></a>

```csharp
public IResolvable|DmsReplicationInstanceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>[]

One or more tags to be assigned to the replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#tags DmsReplicationInstance#tags}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; set; }
```

- *Type:* string[]

Specifies the virtual private cloud (VPC) security group to be used with the replication instance.

The VPC security group must work with the VPC containing the replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#vpc_security_group_ids DmsReplicationInstance#vpc_security_group_ids}

---

### DmsReplicationInstanceTags <a name="DmsReplicationInstanceTags" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsReplicationInstanceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#key DmsReplicationInstance#key}. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#value DmsReplicationInstance#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#key DmsReplicationInstance#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#value DmsReplicationInstance#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsReplicationInstanceTagsList <a name="DmsReplicationInstanceTagsList" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsReplicationInstanceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.get"></a>

```csharp
private DmsReplicationInstanceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.property.internalValue"></a>

```csharp
public IResolvable|DmsReplicationInstanceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>[]

---


### DmsReplicationInstanceTagsOutputReference <a name="DmsReplicationInstanceTagsOutputReference" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsReplicationInstanceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsReplicationInstanceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>

---



