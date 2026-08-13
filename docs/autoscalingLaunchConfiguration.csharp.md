# `autoscalingLaunchConfiguration` Submodule <a name="`autoscalingLaunchConfiguration` Submodule" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingLaunchConfiguration <a name="AutoscalingLaunchConfiguration" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration awscc_autoscaling_launch_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AutoscalingLaunchConfiguration(Construct Scope, string Id, AutoscalingLaunchConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig">AutoscalingLaunchConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig">AutoscalingLaunchConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putBlockDeviceMappings">PutBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putMetadataOptions">PutMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetAssociatePublicIpAddress">ResetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetBlockDeviceMappings">ResetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetClassicLinkVpcId">ResetClassicLinkVpcId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetClassicLinkVpcSecurityGroups">ResetClassicLinkVpcSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetEbsOptimized">ResetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetIamInstanceProfile">ResetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetInstanceMonitoring">ResetInstanceMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetKernelId">ResetKernelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetLaunchConfigurationName">ResetLaunchConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetMetadataOptions">ResetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetPlacementTenancy">ResetPlacementTenancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetRamDiskId">ResetRamDiskId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetSpotPrice">ResetSpotPrice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetUserData">ResetUserData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBlockDeviceMappings` <a name="PutBlockDeviceMappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putBlockDeviceMappings"></a>

```csharp
private void PutBlockDeviceMappings(IResolvable|AutoscalingLaunchConfigurationBlockDeviceMappings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putBlockDeviceMappings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>[]

---

##### `PutMetadataOptions` <a name="PutMetadataOptions" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putMetadataOptions"></a>

```csharp
private void PutMetadataOptions(AutoscalingLaunchConfigurationMetadataOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a>

---

##### `ResetAssociatePublicIpAddress` <a name="ResetAssociatePublicIpAddress" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetAssociatePublicIpAddress"></a>

```csharp
private void ResetAssociatePublicIpAddress()
```

##### `ResetBlockDeviceMappings` <a name="ResetBlockDeviceMappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetBlockDeviceMappings"></a>

```csharp
private void ResetBlockDeviceMappings()
```

##### `ResetClassicLinkVpcId` <a name="ResetClassicLinkVpcId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetClassicLinkVpcId"></a>

```csharp
private void ResetClassicLinkVpcId()
```

##### `ResetClassicLinkVpcSecurityGroups` <a name="ResetClassicLinkVpcSecurityGroups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetClassicLinkVpcSecurityGroups"></a>

```csharp
private void ResetClassicLinkVpcSecurityGroups()
```

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetEbsOptimized"></a>

```csharp
private void ResetEbsOptimized()
```

##### `ResetIamInstanceProfile` <a name="ResetIamInstanceProfile" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetIamInstanceProfile"></a>

```csharp
private void ResetIamInstanceProfile()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetInstanceId"></a>

```csharp
private void ResetInstanceId()
```

##### `ResetInstanceMonitoring` <a name="ResetInstanceMonitoring" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetInstanceMonitoring"></a>

```csharp
private void ResetInstanceMonitoring()
```

##### `ResetKernelId` <a name="ResetKernelId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetKernelId"></a>

```csharp
private void ResetKernelId()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetKeyName"></a>

```csharp
private void ResetKeyName()
```

##### `ResetLaunchConfigurationName` <a name="ResetLaunchConfigurationName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetLaunchConfigurationName"></a>

```csharp
private void ResetLaunchConfigurationName()
```

##### `ResetMetadataOptions` <a name="ResetMetadataOptions" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetMetadataOptions"></a>

```csharp
private void ResetMetadataOptions()
```

##### `ResetPlacementTenancy` <a name="ResetPlacementTenancy" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetPlacementTenancy"></a>

```csharp
private void ResetPlacementTenancy()
```

##### `ResetRamDiskId` <a name="ResetRamDiskId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetRamDiskId"></a>

```csharp
private void ResetRamDiskId()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetSpotPrice` <a name="ResetSpotPrice" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetSpotPrice"></a>

```csharp
private void ResetSpotPrice()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetUserData"></a>

```csharp
private void ResetUserData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AutoscalingLaunchConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AutoscalingLaunchConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AutoscalingLaunchConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AutoscalingLaunchConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AutoscalingLaunchConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AutoscalingLaunchConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutoscalingLaunchConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutoscalingLaunchConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AutoscalingLaunchConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList">AutoscalingLaunchConfigurationBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference">AutoscalingLaunchConfigurationMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.associatePublicIpAddressInput">AssociatePublicIpAddressInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.blockDeviceMappingsInput">BlockDeviceMappingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcIdInput">ClassicLinkVpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcSecurityGroupsInput">ClassicLinkVpcSecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.imageIdInput">ImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceMonitoringInput">InstanceMonitoringInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.kernelIdInput">KernelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.launchConfigurationNameInput">LaunchConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.metadataOptionsInput">MetadataOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.placementTenancyInput">PlacementTenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ramDiskIdInput">RamDiskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.spotPriceInput">SpotPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.userDataInput">UserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcId">ClassicLinkVpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcSecurityGroups">ClassicLinkVpcSecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ebsOptimized">EbsOptimized</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceMonitoring">InstanceMonitoring</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.kernelId">KernelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.launchConfigurationName">LaunchConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.placementTenancy">PlacementTenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ramDiskId">RamDiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.spotPrice">SpotPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.userData">UserData</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BlockDeviceMappings`<sup>Required</sup> <a name="BlockDeviceMappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.blockDeviceMappings"></a>

```csharp
public AutoscalingLaunchConfigurationBlockDeviceMappingsList BlockDeviceMappings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList">AutoscalingLaunchConfigurationBlockDeviceMappingsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetadataOptions`<sup>Required</sup> <a name="MetadataOptions" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.metadataOptions"></a>

```csharp
public AutoscalingLaunchConfigurationMetadataOptionsOutputReference MetadataOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference">AutoscalingLaunchConfigurationMetadataOptionsOutputReference</a>

---

##### `AssociatePublicIpAddressInput`<sup>Optional</sup> <a name="AssociatePublicIpAddressInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.associatePublicIpAddressInput"></a>

```csharp
public bool|IResolvable AssociatePublicIpAddressInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BlockDeviceMappingsInput`<sup>Optional</sup> <a name="BlockDeviceMappingsInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.blockDeviceMappingsInput"></a>

```csharp
public IResolvable|AutoscalingLaunchConfigurationBlockDeviceMappings[] BlockDeviceMappingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>[]

---

##### `ClassicLinkVpcIdInput`<sup>Optional</sup> <a name="ClassicLinkVpcIdInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcIdInput"></a>

```csharp
public string ClassicLinkVpcIdInput { get; }
```

- *Type:* string

---

##### `ClassicLinkVpcSecurityGroupsInput`<sup>Optional</sup> <a name="ClassicLinkVpcSecurityGroupsInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcSecurityGroupsInput"></a>

```csharp
public string[] ClassicLinkVpcSecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ebsOptimizedInput"></a>

```csharp
public bool|IResolvable EbsOptimizedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.iamInstanceProfileInput"></a>

```csharp
public string IamInstanceProfileInput { get; }
```

- *Type:* string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.imageIdInput"></a>

```csharp
public string ImageIdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `InstanceMonitoringInput`<sup>Optional</sup> <a name="InstanceMonitoringInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceMonitoringInput"></a>

```csharp
public bool|IResolvable InstanceMonitoringInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `KernelIdInput`<sup>Optional</sup> <a name="KernelIdInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.kernelIdInput"></a>

```csharp
public string KernelIdInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `LaunchConfigurationNameInput`<sup>Optional</sup> <a name="LaunchConfigurationNameInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.launchConfigurationNameInput"></a>

```csharp
public string LaunchConfigurationNameInput { get; }
```

- *Type:* string

---

##### `MetadataOptionsInput`<sup>Optional</sup> <a name="MetadataOptionsInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.metadataOptionsInput"></a>

```csharp
public IResolvable|AutoscalingLaunchConfigurationMetadataOptions MetadataOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a>

---

##### `PlacementTenancyInput`<sup>Optional</sup> <a name="PlacementTenancyInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.placementTenancyInput"></a>

```csharp
public string PlacementTenancyInput { get; }
```

- *Type:* string

---

##### `RamDiskIdInput`<sup>Optional</sup> <a name="RamDiskIdInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ramDiskIdInput"></a>

```csharp
public string RamDiskIdInput { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SpotPriceInput`<sup>Optional</sup> <a name="SpotPriceInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.spotPriceInput"></a>

```csharp
public string SpotPriceInput { get; }
```

- *Type:* string

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.userDataInput"></a>

```csharp
public string UserDataInput { get; }
```

- *Type:* string

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.associatePublicIpAddress"></a>

```csharp
public bool|IResolvable AssociatePublicIpAddress { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ClassicLinkVpcId`<sup>Required</sup> <a name="ClassicLinkVpcId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcId"></a>

```csharp
public string ClassicLinkVpcId { get; }
```

- *Type:* string

---

##### `ClassicLinkVpcSecurityGroups`<sup>Required</sup> <a name="ClassicLinkVpcSecurityGroups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcSecurityGroups"></a>

```csharp
public string[] ClassicLinkVpcSecurityGroups { get; }
```

- *Type:* string[]

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ebsOptimized"></a>

```csharp
public bool|IResolvable EbsOptimized { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.iamInstanceProfile"></a>

```csharp
public string IamInstanceProfile { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `InstanceMonitoring`<sup>Required</sup> <a name="InstanceMonitoring" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceMonitoring"></a>

```csharp
public bool|IResolvable InstanceMonitoring { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `KernelId`<sup>Required</sup> <a name="KernelId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.kernelId"></a>

```csharp
public string KernelId { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `LaunchConfigurationName`<sup>Required</sup> <a name="LaunchConfigurationName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.launchConfigurationName"></a>

```csharp
public string LaunchConfigurationName { get; }
```

- *Type:* string

---

##### `PlacementTenancy`<sup>Required</sup> <a name="PlacementTenancy" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.placementTenancy"></a>

```csharp
public string PlacementTenancy { get; }
```

- *Type:* string

---

##### `RamDiskId`<sup>Required</sup> <a name="RamDiskId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ramDiskId"></a>

```csharp
public string RamDiskId { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `SpotPrice`<sup>Required</sup> <a name="SpotPrice" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.spotPrice"></a>

```csharp
public string SpotPrice { get; }
```

- *Type:* string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.userData"></a>

```csharp
public string UserData { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingLaunchConfigurationBlockDeviceMappings <a name="AutoscalingLaunchConfigurationBlockDeviceMappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AutoscalingLaunchConfigurationBlockDeviceMappings {
    string DeviceName = null,
    AutoscalingLaunchConfigurationBlockDeviceMappingsEbs Ebs = null,
    bool|IResolvable NoDevice = null,
    string VirtualName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.deviceName">DeviceName</a></code> | <code>string</code> | The device name exposed to the EC2 instance (for example, /dev/sdh or xvdh). |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.ebs">Ebs</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a></code> | Parameters used to automatically set up EBS volumes when an instance is launched. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.noDevice">NoDevice</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Setting this value to true suppresses the specified device included in the block device mapping of the AMI. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.virtualName">VirtualName</a></code> | <code>string</code> | The name of the virtual device. |

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

The device name exposed to the EC2 instance (for example, /dev/sdh or xvdh).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#device_name AutoscalingLaunchConfiguration#device_name}

---

##### `Ebs`<sup>Optional</sup> <a name="Ebs" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.ebs"></a>

```csharp
public AutoscalingLaunchConfigurationBlockDeviceMappingsEbs Ebs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a>

Parameters used to automatically set up EBS volumes when an instance is launched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#ebs AutoscalingLaunchConfiguration#ebs}

---

##### `NoDevice`<sup>Optional</sup> <a name="NoDevice" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.noDevice"></a>

```csharp
public bool|IResolvable NoDevice { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Setting this value to true suppresses the specified device included in the block device mapping of the AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#no_device AutoscalingLaunchConfiguration#no_device}

---

##### `VirtualName`<sup>Optional</sup> <a name="VirtualName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.virtualName"></a>

```csharp
public string VirtualName { get; set; }
```

- *Type:* string

The name of the virtual device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#virtual_name AutoscalingLaunchConfiguration#virtual_name}

---

### AutoscalingLaunchConfigurationBlockDeviceMappingsEbs <a name="AutoscalingLaunchConfigurationBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AutoscalingLaunchConfigurationBlockDeviceMappingsEbs {
    bool|IResolvable DeleteOnTermination = null,
    bool|IResolvable Encrypted = null,
    double Iops = null,
    string SnapshotId = null,
    double Throughput = null,
    double VolumeSize = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the volume is deleted on instance termination. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.encrypted">Encrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the volume should be encrypted. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.iops">Iops</a></code> | <code>double</code> | The number of input/output (I/O) operations per second (IOPS) to provision for the volume. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.snapshotId">SnapshotId</a></code> | <code>string</code> | The snapshot ID of the volume to use. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.throughput">Throughput</a></code> | <code>double</code> | The throughput (MiBps) to provision for a gp3 volume. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.volumeSize">VolumeSize</a></code> | <code>double</code> | The volume size, in GiBs. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.volumeType">VolumeType</a></code> | <code>string</code> | The volume type. |

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```csharp
public bool|IResolvable DeleteOnTermination { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the volume is deleted on instance termination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#delete_on_termination AutoscalingLaunchConfiguration#delete_on_termination}

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.encrypted"></a>

```csharp
public bool|IResolvable Encrypted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the volume should be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#encrypted AutoscalingLaunchConfiguration#encrypted}

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

The number of input/output (I/O) operations per second (IOPS) to provision for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#iops AutoscalingLaunchConfiguration#iops}

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

The snapshot ID of the volume to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#snapshot_id AutoscalingLaunchConfiguration#snapshot_id}

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

The throughput (MiBps) to provision for a gp3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#throughput AutoscalingLaunchConfiguration#throughput}

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

The volume size, in GiBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#volume_size AutoscalingLaunchConfiguration#volume_size}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

The volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#volume_type AutoscalingLaunchConfiguration#volume_type}

---

### AutoscalingLaunchConfigurationConfig <a name="AutoscalingLaunchConfigurationConfig" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AutoscalingLaunchConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ImageId,
    string InstanceType,
    bool|IResolvable AssociatePublicIpAddress = null,
    IResolvable|AutoscalingLaunchConfigurationBlockDeviceMappings[] BlockDeviceMappings = null,
    string ClassicLinkVpcId = null,
    string[] ClassicLinkVpcSecurityGroups = null,
    bool|IResolvable EbsOptimized = null,
    string IamInstanceProfile = null,
    string InstanceId = null,
    bool|IResolvable InstanceMonitoring = null,
    string KernelId = null,
    string KeyName = null,
    string LaunchConfigurationName = null,
    AutoscalingLaunchConfigurationMetadataOptions MetadataOptions = null,
    string PlacementTenancy = null,
    string RamDiskId = null,
    string[] SecurityGroups = null,
    string SpotPrice = null,
    string UserData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.imageId">ImageId</a></code> | <code>string</code> | Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | Specifies the instance type of the EC2 instance. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP address to the group's instances. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>[]</code> | Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.classicLinkVpcId">ClassicLinkVpcId</a></code> | <code>string</code> | The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.classicLinkVpcSecurityGroups">ClassicLinkVpcSecurityGroups</a></code> | <code>string[]</code> | The IDs of one or more security groups for the VPC that you specified in the ClassicLinkVPCId property. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.ebsOptimized">EbsOptimized</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false). |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>string</code> | Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | The ID of the Amazon EC2 instance you want to use to create the launch configuration. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceMonitoring">InstanceMonitoring</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.kernelId">KernelId</a></code> | <code>string</code> | Provides the ID of the kernel associated with the EC2 AMI. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.keyName">KeyName</a></code> | <code>string</code> | Provides the name of the EC2 key pair. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.launchConfigurationName">LaunchConfigurationName</a></code> | <code>string</code> | The name of the launch configuration. This name must be unique per Region per account. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a></code> | The metadata options for the instances. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.placementTenancy">PlacementTenancy</a></code> | <code>string</code> | The tenancy of the instance, either default or dedicated. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.ramDiskId">RamDiskId</a></code> | <code>string</code> | The ID of the RAM disk to select. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | A list that contains the security groups to assign to the instances in the Auto Scaling group. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.spotPrice">SpotPrice</a></code> | <code>string</code> | The maximum hourly price you are willing to pay for any Spot Instances launched to fulfill the request. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.userData">UserData</a></code> | <code>string</code> | The Base64-encoded user data to make available to the launched EC2 instances. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.imageId"></a>

```csharp
public string ImageId { get; set; }
```

- *Type:* string

Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#image_id AutoscalingLaunchConfiguration#image_id}

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Specifies the instance type of the EC2 instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#instance_type AutoscalingLaunchConfiguration#instance_type}

---

##### `AssociatePublicIpAddress`<sup>Optional</sup> <a name="AssociatePublicIpAddress" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.associatePublicIpAddress"></a>

```csharp
public bool|IResolvable AssociatePublicIpAddress { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP address to the group's instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#associate_public_ip_address AutoscalingLaunchConfiguration#associate_public_ip_address}

---

##### `BlockDeviceMappings`<sup>Optional</sup> <a name="BlockDeviceMappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.blockDeviceMappings"></a>

```csharp
public IResolvable|AutoscalingLaunchConfigurationBlockDeviceMappings[] BlockDeviceMappings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>[]

Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#block_device_mappings AutoscalingLaunchConfiguration#block_device_mappings}

---

##### `ClassicLinkVpcId`<sup>Optional</sup> <a name="ClassicLinkVpcId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.classicLinkVpcId"></a>

```csharp
public string ClassicLinkVpcId { get; set; }
```

- *Type:* string

The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#classic_link_vpc_id AutoscalingLaunchConfiguration#classic_link_vpc_id}

---

##### `ClassicLinkVpcSecurityGroups`<sup>Optional</sup> <a name="ClassicLinkVpcSecurityGroups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.classicLinkVpcSecurityGroups"></a>

```csharp
public string[] ClassicLinkVpcSecurityGroups { get; set; }
```

- *Type:* string[]

The IDs of one or more security groups for the VPC that you specified in the ClassicLinkVPCId property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#classic_link_vpc_security_groups AutoscalingLaunchConfiguration#classic_link_vpc_security_groups}

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.ebsOptimized"></a>

```csharp
public bool|IResolvable EbsOptimized { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#ebs_optimized AutoscalingLaunchConfiguration#ebs_optimized}

---

##### `IamInstanceProfile`<sup>Optional</sup> <a name="IamInstanceProfile" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.iamInstanceProfile"></a>

```csharp
public string IamInstanceProfile { get; set; }
```

- *Type:* string

Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance.

The instance profile contains the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#iam_instance_profile AutoscalingLaunchConfiguration#iam_instance_profile}

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

The ID of the Amazon EC2 instance you want to use to create the launch configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#instance_id AutoscalingLaunchConfiguration#instance_id}

---

##### `InstanceMonitoring`<sup>Optional</sup> <a name="InstanceMonitoring" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceMonitoring"></a>

```csharp
public bool|IResolvable InstanceMonitoring { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#instance_monitoring AutoscalingLaunchConfiguration#instance_monitoring}

---

##### `KernelId`<sup>Optional</sup> <a name="KernelId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.kernelId"></a>

```csharp
public string KernelId { get; set; }
```

- *Type:* string

Provides the ID of the kernel associated with the EC2 AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#kernel_id AutoscalingLaunchConfiguration#kernel_id}

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Provides the name of the EC2 key pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#key_name AutoscalingLaunchConfiguration#key_name}

---

##### `LaunchConfigurationName`<sup>Optional</sup> <a name="LaunchConfigurationName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.launchConfigurationName"></a>

```csharp
public string LaunchConfigurationName { get; set; }
```

- *Type:* string

The name of the launch configuration. This name must be unique per Region per account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#launch_configuration_name AutoscalingLaunchConfiguration#launch_configuration_name}

---

##### `MetadataOptions`<sup>Optional</sup> <a name="MetadataOptions" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.metadataOptions"></a>

```csharp
public AutoscalingLaunchConfigurationMetadataOptions MetadataOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a>

The metadata options for the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#metadata_options AutoscalingLaunchConfiguration#metadata_options}

---

##### `PlacementTenancy`<sup>Optional</sup> <a name="PlacementTenancy" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.placementTenancy"></a>

```csharp
public string PlacementTenancy { get; set; }
```

- *Type:* string

The tenancy of the instance, either default or dedicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#placement_tenancy AutoscalingLaunchConfiguration#placement_tenancy}

---

##### `RamDiskId`<sup>Optional</sup> <a name="RamDiskId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.ramDiskId"></a>

```csharp
public string RamDiskId { get; set; }
```

- *Type:* string

The ID of the RAM disk to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#ram_disk_id AutoscalingLaunchConfiguration#ram_disk_id}

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

A list that contains the security groups to assign to the instances in the Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#security_groups AutoscalingLaunchConfiguration#security_groups}

---

##### `SpotPrice`<sup>Optional</sup> <a name="SpotPrice" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.spotPrice"></a>

```csharp
public string SpotPrice { get; set; }
```

- *Type:* string

The maximum hourly price you are willing to pay for any Spot Instances launched to fulfill the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#spot_price AutoscalingLaunchConfiguration#spot_price}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.userData"></a>

```csharp
public string UserData { get; set; }
```

- *Type:* string

The Base64-encoded user data to make available to the launched EC2 instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#user_data AutoscalingLaunchConfiguration#user_data}

---

### AutoscalingLaunchConfigurationMetadataOptions <a name="AutoscalingLaunchConfigurationMetadataOptions" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AutoscalingLaunchConfigurationMetadataOptions {
    string HttpEndpoint = null,
    double HttpPutResponseHopLimit = null,
    string HttpTokens = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpEndpoint">HttpEndpoint</a></code> | <code>string</code> | This parameter enables or disables the HTTP metadata endpoint on your instances. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | The desired HTTP PUT response hop limit for instance metadata requests. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpTokens">HttpTokens</a></code> | <code>string</code> | The state of token usage for your instance metadata requests. |

---

##### `HttpEndpoint`<sup>Optional</sup> <a name="HttpEndpoint" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpEndpoint"></a>

```csharp
public string HttpEndpoint { get; set; }
```

- *Type:* string

This parameter enables or disables the HTTP metadata endpoint on your instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#http_endpoint AutoscalingLaunchConfiguration#http_endpoint}

---

##### `HttpPutResponseHopLimit`<sup>Optional</sup> <a name="HttpPutResponseHopLimit" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; set; }
```

- *Type:* double

The desired HTTP PUT response hop limit for instance metadata requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#http_put_response_hop_limit AutoscalingLaunchConfiguration#http_put_response_hop_limit}

---

##### `HttpTokens`<sup>Optional</sup> <a name="HttpTokens" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpTokens"></a>

```csharp
public string HttpTokens { get; set; }
```

- *Type:* string

The state of token usage for your instance metadata requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_launch_configuration#http_tokens AutoscalingLaunchConfiguration#http_tokens}

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference <a name="AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```csharp
private void ResetDeleteOnTermination()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```csharp
private void ResetSnapshotId()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```csharp
public bool|IResolvable DeleteOnTerminationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```csharp
public bool|IResolvable EncryptedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```csharp
public bool|IResolvable DeleteOnTermination { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```csharp
public bool|IResolvable Encrypted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AutoscalingLaunchConfigurationBlockDeviceMappingsEbs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a>

---


### AutoscalingLaunchConfigurationBlockDeviceMappingsList <a name="AutoscalingLaunchConfigurationBlockDeviceMappingsList" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AutoscalingLaunchConfigurationBlockDeviceMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.get"></a>

```csharp
private AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.internalValue"></a>

```csharp
public IResolvable|AutoscalingLaunchConfigurationBlockDeviceMappings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>[]

---


### AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference <a name="AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.putEbs">PutEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetEbs">ResetEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetNoDevice">ResetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetVirtualName">ResetVirtualName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbs` <a name="PutEbs" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.putEbs"></a>

```csharp
private void PutEbs(AutoscalingLaunchConfigurationBlockDeviceMappingsEbs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a>

---

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```csharp
private void ResetDeviceName()
```

##### `ResetEbs` <a name="ResetEbs" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetEbs"></a>

```csharp
private void ResetEbs()
```

##### `ResetNoDevice` <a name="ResetNoDevice" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```csharp
private void ResetNoDevice()
```

##### `ResetVirtualName` <a name="ResetVirtualName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```csharp
private void ResetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference">AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.ebsInput">EbsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.noDeviceInput">NoDeviceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.virtualNameInput">VirtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.noDevice">NoDevice</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.virtualName">VirtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.ebs"></a>

```csharp
public AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference Ebs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference">AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `EbsInput`<sup>Optional</sup> <a name="EbsInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```csharp
public IResolvable|AutoscalingLaunchConfigurationBlockDeviceMappingsEbs EbsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a>

---

##### `NoDeviceInput`<sup>Optional</sup> <a name="NoDeviceInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```csharp
public bool|IResolvable NoDeviceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VirtualNameInput`<sup>Optional</sup> <a name="VirtualNameInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```csharp
public string VirtualNameInput { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.noDevice"></a>

```csharp
public bool|IResolvable NoDevice { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.virtualName"></a>

```csharp
public string VirtualName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AutoscalingLaunchConfigurationBlockDeviceMappings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings">AutoscalingLaunchConfigurationBlockDeviceMappings</a>

---


### AutoscalingLaunchConfigurationMetadataOptionsOutputReference <a name="AutoscalingLaunchConfigurationMetadataOptionsOutputReference" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AutoscalingLaunchConfigurationMetadataOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpEndpoint">ResetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">ResetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpTokens">ResetHttpTokens</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpEndpoint` <a name="ResetHttpEndpoint" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```csharp
private void ResetHttpEndpoint()
```

##### `ResetHttpPutResponseHopLimit` <a name="ResetHttpPutResponseHopLimit" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```csharp
private void ResetHttpPutResponseHopLimit()
```

##### `ResetHttpTokens` <a name="ResetHttpTokens" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpTokens"></a>

```csharp
private void ResetHttpTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpEndpointInput">HttpEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">HttpPutResponseHopLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpTokensInput">HttpTokensInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpEndpoint">HttpEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpEndpointInput`<sup>Optional</sup> <a name="HttpEndpointInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```csharp
public string HttpEndpointInput { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimitInput`<sup>Optional</sup> <a name="HttpPutResponseHopLimitInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```csharp
public double HttpPutResponseHopLimitInput { get; }
```

- *Type:* double

---

##### `HttpTokensInput`<sup>Optional</sup> <a name="HttpTokensInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpTokensInput"></a>

```csharp
public string HttpTokensInput { get; }
```

- *Type:* string

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpEndpoint"></a>

```csharp
public string HttpEndpoint { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; }
```

- *Type:* double

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpTokens"></a>

```csharp
public string HttpTokens { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AutoscalingLaunchConfigurationMetadataOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a>

---



