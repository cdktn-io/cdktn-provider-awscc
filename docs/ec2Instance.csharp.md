# `ec2Instance` Submodule <a name="`ec2Instance` Submodule" id="@cdktn/provider-awscc.ec2Instance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Instance <a name="Ec2Instance" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance awscc_ec2_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Instance(Construct Scope, string Id, Ec2InstanceConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig">Ec2InstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig">Ec2InstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putBlockDeviceMappings">PutBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCpuOptions">PutCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCreditSpecification">PutCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticGpuSpecifications">PutElasticGpuSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticInferenceAccelerators">PutElasticInferenceAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putEnclaveOptions">PutEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putHibernationOptions">PutHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putIpv6Addresses">PutIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLaunchTemplate">PutLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLicenseSpecifications">PutLicenseSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putMetadataOptions">PutMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putNetworkInterfaces">PutNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putPrivateDnsNameOptions">PutPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putSsmAssociations">PutSsmAssociations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAdditionalInfo">ResetAdditionalInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAffinity">ResetAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetBlockDeviceMappings">ResetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetCpuOptions">ResetCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetCreditSpecification">ResetCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetDisableApiTermination">ResetDisableApiTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetEbsOptimized">ResetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetElasticGpuSpecifications">ResetElasticGpuSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetElasticInferenceAccelerators">ResetElasticInferenceAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetEnclaveOptions">ResetEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHibernationOptions">ResetHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHostId">ResetHostId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHostResourceGroupArn">ResetHostResourceGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIamInstanceProfile">ResetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetInstanceInitiatedShutdownBehavior">ResetInstanceInitiatedShutdownBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIpv6AddressCount">ResetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIpv6Addresses">ResetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetKernelId">ResetKernelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetLaunchTemplate">ResetLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetLicenseSpecifications">ResetLicenseSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetMetadataOptions">ResetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetNetworkInterfaces">ResetNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPlacementGroupName">ResetPlacementGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPrivateDnsNameOptions">ResetPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPrivateIpAddress">ResetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPropagateTagsToVolumeOnCreation">ResetPropagateTagsToVolumeOnCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetRamdiskId">ResetRamdiskId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSourceDestCheck">ResetSourceDestCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSsmAssociations">ResetSsmAssociations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetTenancy">ResetTenancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetUserData">ResetUserData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetVolumes">ResetVolumes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBlockDeviceMappings` <a name="PutBlockDeviceMappings" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putBlockDeviceMappings"></a>

```csharp
private void PutBlockDeviceMappings(IResolvable|Ec2InstanceBlockDeviceMappings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putBlockDeviceMappings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>[]

---

##### `PutCpuOptions` <a name="PutCpuOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCpuOptions"></a>

```csharp
private void PutCpuOptions(Ec2InstanceCpuOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCpuOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a>

---

##### `PutCreditSpecification` <a name="PutCreditSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCreditSpecification"></a>

```csharp
private void PutCreditSpecification(Ec2InstanceCreditSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCreditSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a>

---

##### `PutElasticGpuSpecifications` <a name="PutElasticGpuSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticGpuSpecifications"></a>

```csharp
private void PutElasticGpuSpecifications(IResolvable|Ec2InstanceElasticGpuSpecifications[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticGpuSpecifications.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>[]

---

##### `PutElasticInferenceAccelerators` <a name="PutElasticInferenceAccelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticInferenceAccelerators"></a>

```csharp
private void PutElasticInferenceAccelerators(IResolvable|Ec2InstanceElasticInferenceAccelerators[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticInferenceAccelerators.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>[]

---

##### `PutEnclaveOptions` <a name="PutEnclaveOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putEnclaveOptions"></a>

```csharp
private void PutEnclaveOptions(Ec2InstanceEnclaveOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putEnclaveOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a>

---

##### `PutHibernationOptions` <a name="PutHibernationOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putHibernationOptions"></a>

```csharp
private void PutHibernationOptions(Ec2InstanceHibernationOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putHibernationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a>

---

##### `PutIpv6Addresses` <a name="PutIpv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putIpv6Addresses"></a>

```csharp
private void PutIpv6Addresses(IResolvable|Ec2InstanceIpv6Addresses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putIpv6Addresses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>[]

---

##### `PutLaunchTemplate` <a name="PutLaunchTemplate" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLaunchTemplate"></a>

```csharp
private void PutLaunchTemplate(Ec2InstanceLaunchTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a>

---

##### `PutLicenseSpecifications` <a name="PutLicenseSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLicenseSpecifications"></a>

```csharp
private void PutLicenseSpecifications(IResolvable|Ec2InstanceLicenseSpecifications[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLicenseSpecifications.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>[]

---

##### `PutMetadataOptions` <a name="PutMetadataOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putMetadataOptions"></a>

```csharp
private void PutMetadataOptions(Ec2InstanceMetadataOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a>

---

##### `PutNetworkInterfaces` <a name="PutNetworkInterfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putNetworkInterfaces"></a>

```csharp
private void PutNetworkInterfaces(IResolvable|Ec2InstanceNetworkInterfaces[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putNetworkInterfaces.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>[]

---

##### `PutPrivateDnsNameOptions` <a name="PutPrivateDnsNameOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putPrivateDnsNameOptions"></a>

```csharp
private void PutPrivateDnsNameOptions(Ec2InstancePrivateDnsNameOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putPrivateDnsNameOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a>

---

##### `PutSsmAssociations` <a name="PutSsmAssociations" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putSsmAssociations"></a>

```csharp
private void PutSsmAssociations(IResolvable|Ec2InstanceSsmAssociations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putSsmAssociations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2InstanceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>[]

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putVolumes"></a>

```csharp
private void PutVolumes(IResolvable|Ec2InstanceVolumes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putVolumes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>[]

---

##### `ResetAdditionalInfo` <a name="ResetAdditionalInfo" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAdditionalInfo"></a>

```csharp
private void ResetAdditionalInfo()
```

##### `ResetAffinity` <a name="ResetAffinity" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAffinity"></a>

```csharp
private void ResetAffinity()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetBlockDeviceMappings` <a name="ResetBlockDeviceMappings" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetBlockDeviceMappings"></a>

```csharp
private void ResetBlockDeviceMappings()
```

##### `ResetCpuOptions` <a name="ResetCpuOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetCpuOptions"></a>

```csharp
private void ResetCpuOptions()
```

##### `ResetCreditSpecification` <a name="ResetCreditSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetCreditSpecification"></a>

```csharp
private void ResetCreditSpecification()
```

##### `ResetDisableApiTermination` <a name="ResetDisableApiTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetDisableApiTermination"></a>

```csharp
private void ResetDisableApiTermination()
```

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetEbsOptimized"></a>

```csharp
private void ResetEbsOptimized()
```

##### `ResetElasticGpuSpecifications` <a name="ResetElasticGpuSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetElasticGpuSpecifications"></a>

```csharp
private void ResetElasticGpuSpecifications()
```

##### `ResetElasticInferenceAccelerators` <a name="ResetElasticInferenceAccelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetElasticInferenceAccelerators"></a>

```csharp
private void ResetElasticInferenceAccelerators()
```

##### `ResetEnclaveOptions` <a name="ResetEnclaveOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetEnclaveOptions"></a>

```csharp
private void ResetEnclaveOptions()
```

##### `ResetHibernationOptions` <a name="ResetHibernationOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHibernationOptions"></a>

```csharp
private void ResetHibernationOptions()
```

##### `ResetHostId` <a name="ResetHostId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHostId"></a>

```csharp
private void ResetHostId()
```

##### `ResetHostResourceGroupArn` <a name="ResetHostResourceGroupArn" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHostResourceGroupArn"></a>

```csharp
private void ResetHostResourceGroupArn()
```

##### `ResetIamInstanceProfile` <a name="ResetIamInstanceProfile" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIamInstanceProfile"></a>

```csharp
private void ResetIamInstanceProfile()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetImageId"></a>

```csharp
private void ResetImageId()
```

##### `ResetInstanceInitiatedShutdownBehavior` <a name="ResetInstanceInitiatedShutdownBehavior" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetInstanceInitiatedShutdownBehavior"></a>

```csharp
private void ResetInstanceInitiatedShutdownBehavior()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetIpv6AddressCount` <a name="ResetIpv6AddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIpv6AddressCount"></a>

```csharp
private void ResetIpv6AddressCount()
```

##### `ResetIpv6Addresses` <a name="ResetIpv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIpv6Addresses"></a>

```csharp
private void ResetIpv6Addresses()
```

##### `ResetKernelId` <a name="ResetKernelId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetKernelId"></a>

```csharp
private void ResetKernelId()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetKeyName"></a>

```csharp
private void ResetKeyName()
```

##### `ResetLaunchTemplate` <a name="ResetLaunchTemplate" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetLaunchTemplate"></a>

```csharp
private void ResetLaunchTemplate()
```

##### `ResetLicenseSpecifications` <a name="ResetLicenseSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetLicenseSpecifications"></a>

```csharp
private void ResetLicenseSpecifications()
```

##### `ResetMetadataOptions` <a name="ResetMetadataOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetMetadataOptions"></a>

```csharp
private void ResetMetadataOptions()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetMonitoring"></a>

```csharp
private void ResetMonitoring()
```

##### `ResetNetworkInterfaces` <a name="ResetNetworkInterfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetNetworkInterfaces"></a>

```csharp
private void ResetNetworkInterfaces()
```

##### `ResetPlacementGroupName` <a name="ResetPlacementGroupName" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPlacementGroupName"></a>

```csharp
private void ResetPlacementGroupName()
```

##### `ResetPrivateDnsNameOptions` <a name="ResetPrivateDnsNameOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPrivateDnsNameOptions"></a>

```csharp
private void ResetPrivateDnsNameOptions()
```

##### `ResetPrivateIpAddress` <a name="ResetPrivateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPrivateIpAddress"></a>

```csharp
private void ResetPrivateIpAddress()
```

##### `ResetPropagateTagsToVolumeOnCreation` <a name="ResetPropagateTagsToVolumeOnCreation" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPropagateTagsToVolumeOnCreation"></a>

```csharp
private void ResetPropagateTagsToVolumeOnCreation()
```

##### `ResetRamdiskId` <a name="ResetRamdiskId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetRamdiskId"></a>

```csharp
private void ResetRamdiskId()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetSourceDestCheck` <a name="ResetSourceDestCheck" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSourceDestCheck"></a>

```csharp
private void ResetSourceDestCheck()
```

##### `ResetSsmAssociations` <a name="ResetSsmAssociations" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSsmAssociations"></a>

```csharp
private void ResetSsmAssociations()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTenancy` <a name="ResetTenancy" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetTenancy"></a>

```csharp
private void ResetTenancy()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetUserData"></a>

```csharp
private void ResetUserData()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetVolumes"></a>

```csharp
private void ResetVolumes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2Instance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2Instance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2Instance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2Instance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2Instance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2Instance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2Instance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2Instance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2Instance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList">Ec2InstanceBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cpuOptions">CpuOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference">Ec2InstanceCpuOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.creditSpecification">CreditSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference">Ec2InstanceCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticGpuSpecifications">ElasticGpuSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList">Ec2InstanceElasticGpuSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticInferenceAccelerators">ElasticInferenceAccelerators</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList">Ec2InstanceElasticInferenceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.enclaveOptions">EnclaveOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference">Ec2InstanceEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hibernationOptions">HibernationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference">Ec2InstanceHibernationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6Addresses">Ipv6Addresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList">Ec2InstanceIpv6AddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference">Ec2InstanceLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.licenseSpecifications">LicenseSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList">Ec2InstanceLicenseSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference">Ec2InstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList">Ec2InstanceNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsName">PrivateDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsNameOptions">PrivateDnsNameOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference">Ec2InstancePrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.publicDnsName">PublicDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.publicIp">PublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ssmAssociations">SsmAssociations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList">Ec2InstanceSsmAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.state">State</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference">Ec2InstanceStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList">Ec2InstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.volumes">Volumes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList">Ec2InstanceVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.additionalInfoInput">AdditionalInfoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.affinityInput">AffinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.blockDeviceMappingsInput">BlockDeviceMappingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cpuOptionsInput">CpuOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.creditSpecificationInput">CreditSpecificationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.disableApiTerminationInput">DisableApiTerminationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticGpuSpecificationsInput">ElasticGpuSpecificationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticInferenceAcceleratorsInput">ElasticInferenceAcceleratorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.enclaveOptionsInput">EnclaveOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hibernationOptionsInput">HibernationOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostIdInput">HostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostResourceGroupArnInput">HostResourceGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.imageIdInput">ImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceInitiatedShutdownBehaviorInput">InstanceInitiatedShutdownBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressCountInput">Ipv6AddressCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressesInput">Ipv6AddressesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.kernelIdInput">KernelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.launchTemplateInput">LaunchTemplateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.licenseSpecificationsInput">LicenseSpecificationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.metadataOptionsInput">MetadataOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.monitoringInput">MonitoringInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.networkInterfacesInput">NetworkInterfacesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.placementGroupNameInput">PlacementGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsNameOptionsInput">PrivateDnsNameOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIpAddressInput">PrivateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.propagateTagsToVolumeOnCreationInput">PropagateTagsToVolumeOnCreationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ramdiskIdInput">RamdiskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.sourceDestCheckInput">SourceDestCheckInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ssmAssociationsInput">SsmAssociationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tenancyInput">TenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.userDataInput">UserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.volumesInput">VolumesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.additionalInfo">AdditionalInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.affinity">Affinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.disableApiTermination">DisableApiTermination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ebsOptimized">EbsOptimized</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostId">HostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceInitiatedShutdownBehavior">InstanceInitiatedShutdownBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.kernelId">KernelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.monitoring">Monitoring</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.placementGroupName">PlacementGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.propagateTagsToVolumeOnCreation">PropagateTagsToVolumeOnCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ramdiskId">RamdiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.sourceDestCheck">SourceDestCheck</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tenancy">Tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.userData">UserData</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BlockDeviceMappings`<sup>Required</sup> <a name="BlockDeviceMappings" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.blockDeviceMappings"></a>

```csharp
public Ec2InstanceBlockDeviceMappingsList BlockDeviceMappings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList">Ec2InstanceBlockDeviceMappingsList</a>

---

##### `CpuOptions`<sup>Required</sup> <a name="CpuOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cpuOptions"></a>

```csharp
public Ec2InstanceCpuOptionsOutputReference CpuOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference">Ec2InstanceCpuOptionsOutputReference</a>

---

##### `CreditSpecification`<sup>Required</sup> <a name="CreditSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.creditSpecification"></a>

```csharp
public Ec2InstanceCreditSpecificationOutputReference CreditSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference">Ec2InstanceCreditSpecificationOutputReference</a>

---

##### `ElasticGpuSpecifications`<sup>Required</sup> <a name="ElasticGpuSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticGpuSpecifications"></a>

```csharp
public Ec2InstanceElasticGpuSpecificationsList ElasticGpuSpecifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList">Ec2InstanceElasticGpuSpecificationsList</a>

---

##### `ElasticInferenceAccelerators`<sup>Required</sup> <a name="ElasticInferenceAccelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticInferenceAccelerators"></a>

```csharp
public Ec2InstanceElasticInferenceAcceleratorsList ElasticInferenceAccelerators { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList">Ec2InstanceElasticInferenceAcceleratorsList</a>

---

##### `EnclaveOptions`<sup>Required</sup> <a name="EnclaveOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.enclaveOptions"></a>

```csharp
public Ec2InstanceEnclaveOptionsOutputReference EnclaveOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference">Ec2InstanceEnclaveOptionsOutputReference</a>

---

##### `HibernationOptions`<sup>Required</sup> <a name="HibernationOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hibernationOptions"></a>

```csharp
public Ec2InstanceHibernationOptionsOutputReference HibernationOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference">Ec2InstanceHibernationOptionsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6Addresses"></a>

```csharp
public Ec2InstanceIpv6AddressesList Ipv6Addresses { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList">Ec2InstanceIpv6AddressesList</a>

---

##### `LaunchTemplate`<sup>Required</sup> <a name="LaunchTemplate" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.launchTemplate"></a>

```csharp
public Ec2InstanceLaunchTemplateOutputReference LaunchTemplate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference">Ec2InstanceLaunchTemplateOutputReference</a>

---

##### `LicenseSpecifications`<sup>Required</sup> <a name="LicenseSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.licenseSpecifications"></a>

```csharp
public Ec2InstanceLicenseSpecificationsList LicenseSpecifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList">Ec2InstanceLicenseSpecificationsList</a>

---

##### `MetadataOptions`<sup>Required</sup> <a name="MetadataOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.metadataOptions"></a>

```csharp
public Ec2InstanceMetadataOptionsOutputReference MetadataOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference">Ec2InstanceMetadataOptionsOutputReference</a>

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.networkInterfaces"></a>

```csharp
public Ec2InstanceNetworkInterfacesList NetworkInterfaces { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList">Ec2InstanceNetworkInterfacesList</a>

---

##### `PrivateDnsName`<sup>Required</sup> <a name="PrivateDnsName" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsName"></a>

```csharp
public string PrivateDnsName { get; }
```

- *Type:* string

---

##### `PrivateDnsNameOptions`<sup>Required</sup> <a name="PrivateDnsNameOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsNameOptions"></a>

```csharp
public Ec2InstancePrivateDnsNameOptionsOutputReference PrivateDnsNameOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference">Ec2InstancePrivateDnsNameOptionsOutputReference</a>

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `PublicDnsName`<sup>Required</sup> <a name="PublicDnsName" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.publicDnsName"></a>

```csharp
public string PublicDnsName { get; }
```

- *Type:* string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.publicIp"></a>

```csharp
public string PublicIp { get; }
```

- *Type:* string

---

##### `SsmAssociations`<sup>Required</sup> <a name="SsmAssociations" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ssmAssociations"></a>

```csharp
public Ec2InstanceSsmAssociationsList SsmAssociations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList">Ec2InstanceSsmAssociationsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.state"></a>

```csharp
public Ec2InstanceStateOutputReference State { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference">Ec2InstanceStateOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tags"></a>

```csharp
public Ec2InstanceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList">Ec2InstanceTagsList</a>

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.volumes"></a>

```csharp
public Ec2InstanceVolumesList Volumes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList">Ec2InstanceVolumesList</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `AdditionalInfoInput`<sup>Optional</sup> <a name="AdditionalInfoInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.additionalInfoInput"></a>

```csharp
public string AdditionalInfoInput { get; }
```

- *Type:* string

---

##### `AffinityInput`<sup>Optional</sup> <a name="AffinityInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.affinityInput"></a>

```csharp
public string AffinityInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `BlockDeviceMappingsInput`<sup>Optional</sup> <a name="BlockDeviceMappingsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.blockDeviceMappingsInput"></a>

```csharp
public IResolvable|Ec2InstanceBlockDeviceMappings[] BlockDeviceMappingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>[]

---

##### `CpuOptionsInput`<sup>Optional</sup> <a name="CpuOptionsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cpuOptionsInput"></a>

```csharp
public IResolvable|Ec2InstanceCpuOptions CpuOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a>

---

##### `CreditSpecificationInput`<sup>Optional</sup> <a name="CreditSpecificationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.creditSpecificationInput"></a>

```csharp
public IResolvable|Ec2InstanceCreditSpecification CreditSpecificationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a>

---

##### `DisableApiTerminationInput`<sup>Optional</sup> <a name="DisableApiTerminationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.disableApiTerminationInput"></a>

```csharp
public bool|IResolvable DisableApiTerminationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ebsOptimizedInput"></a>

```csharp
public bool|IResolvable EbsOptimizedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ElasticGpuSpecificationsInput`<sup>Optional</sup> <a name="ElasticGpuSpecificationsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticGpuSpecificationsInput"></a>

```csharp
public IResolvable|Ec2InstanceElasticGpuSpecifications[] ElasticGpuSpecificationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>[]

---

##### `ElasticInferenceAcceleratorsInput`<sup>Optional</sup> <a name="ElasticInferenceAcceleratorsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticInferenceAcceleratorsInput"></a>

```csharp
public IResolvable|Ec2InstanceElasticInferenceAccelerators[] ElasticInferenceAcceleratorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>[]

---

##### `EnclaveOptionsInput`<sup>Optional</sup> <a name="EnclaveOptionsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.enclaveOptionsInput"></a>

```csharp
public IResolvable|Ec2InstanceEnclaveOptions EnclaveOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a>

---

##### `HibernationOptionsInput`<sup>Optional</sup> <a name="HibernationOptionsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hibernationOptionsInput"></a>

```csharp
public IResolvable|Ec2InstanceHibernationOptions HibernationOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a>

---

##### `HostIdInput`<sup>Optional</sup> <a name="HostIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostIdInput"></a>

```csharp
public string HostIdInput { get; }
```

- *Type:* string

---

##### `HostResourceGroupArnInput`<sup>Optional</sup> <a name="HostResourceGroupArnInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostResourceGroupArnInput"></a>

```csharp
public string HostResourceGroupArnInput { get; }
```

- *Type:* string

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.iamInstanceProfileInput"></a>

```csharp
public string IamInstanceProfileInput { get; }
```

- *Type:* string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.imageIdInput"></a>

```csharp
public string ImageIdInput { get; }
```

- *Type:* string

---

##### `InstanceInitiatedShutdownBehaviorInput`<sup>Optional</sup> <a name="InstanceInitiatedShutdownBehaviorInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceInitiatedShutdownBehaviorInput"></a>

```csharp
public string InstanceInitiatedShutdownBehaviorInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `Ipv6AddressCountInput`<sup>Optional</sup> <a name="Ipv6AddressCountInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressCountInput"></a>

```csharp
public double Ipv6AddressCountInput { get; }
```

- *Type:* double

---

##### `Ipv6AddressesInput`<sup>Optional</sup> <a name="Ipv6AddressesInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressesInput"></a>

```csharp
public IResolvable|Ec2InstanceIpv6Addresses[] Ipv6AddressesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>[]

---

##### `KernelIdInput`<sup>Optional</sup> <a name="KernelIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.kernelIdInput"></a>

```csharp
public string KernelIdInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateInput`<sup>Optional</sup> <a name="LaunchTemplateInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.launchTemplateInput"></a>

```csharp
public IResolvable|Ec2InstanceLaunchTemplate LaunchTemplateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a>

---

##### `LicenseSpecificationsInput`<sup>Optional</sup> <a name="LicenseSpecificationsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.licenseSpecificationsInput"></a>

```csharp
public IResolvable|Ec2InstanceLicenseSpecifications[] LicenseSpecificationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>[]

---

##### `MetadataOptionsInput`<sup>Optional</sup> <a name="MetadataOptionsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.metadataOptionsInput"></a>

```csharp
public IResolvable|Ec2InstanceMetadataOptions MetadataOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a>

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.monitoringInput"></a>

```csharp
public bool|IResolvable MonitoringInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NetworkInterfacesInput`<sup>Optional</sup> <a name="NetworkInterfacesInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.networkInterfacesInput"></a>

```csharp
public IResolvable|Ec2InstanceNetworkInterfaces[] NetworkInterfacesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>[]

---

##### `PlacementGroupNameInput`<sup>Optional</sup> <a name="PlacementGroupNameInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.placementGroupNameInput"></a>

```csharp
public string PlacementGroupNameInput { get; }
```

- *Type:* string

---

##### `PrivateDnsNameOptionsInput`<sup>Optional</sup> <a name="PrivateDnsNameOptionsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsNameOptionsInput"></a>

```csharp
public IResolvable|Ec2InstancePrivateDnsNameOptions PrivateDnsNameOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a>

---

##### `PrivateIpAddressInput`<sup>Optional</sup> <a name="PrivateIpAddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIpAddressInput"></a>

```csharp
public string PrivateIpAddressInput { get; }
```

- *Type:* string

---

##### `PropagateTagsToVolumeOnCreationInput`<sup>Optional</sup> <a name="PropagateTagsToVolumeOnCreationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.propagateTagsToVolumeOnCreationInput"></a>

```csharp
public bool|IResolvable PropagateTagsToVolumeOnCreationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RamdiskIdInput`<sup>Optional</sup> <a name="RamdiskIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ramdiskIdInput"></a>

```csharp
public string RamdiskIdInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SourceDestCheckInput`<sup>Optional</sup> <a name="SourceDestCheckInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.sourceDestCheckInput"></a>

```csharp
public bool|IResolvable SourceDestCheckInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SsmAssociationsInput`<sup>Optional</sup> <a name="SsmAssociationsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ssmAssociationsInput"></a>

```csharp
public IResolvable|Ec2InstanceSsmAssociations[] SsmAssociationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tagsInput"></a>

```csharp
public IResolvable|Ec2InstanceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>[]

---

##### `TenancyInput`<sup>Optional</sup> <a name="TenancyInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tenancyInput"></a>

```csharp
public string TenancyInput { get; }
```

- *Type:* string

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.userDataInput"></a>

```csharp
public string UserDataInput { get; }
```

- *Type:* string

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.volumesInput"></a>

```csharp
public IResolvable|Ec2InstanceVolumes[] VolumesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>[]

---

##### `AdditionalInfo`<sup>Required</sup> <a name="AdditionalInfo" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.additionalInfo"></a>

```csharp
public string AdditionalInfo { get; }
```

- *Type:* string

---

##### `Affinity`<sup>Required</sup> <a name="Affinity" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.affinity"></a>

```csharp
public string Affinity { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `DisableApiTermination`<sup>Required</sup> <a name="DisableApiTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.disableApiTermination"></a>

```csharp
public bool|IResolvable DisableApiTermination { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ebsOptimized"></a>

```csharp
public bool|IResolvable EbsOptimized { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostId"></a>

```csharp
public string HostId { get; }
```

- *Type:* string

---

##### `HostResourceGroupArn`<sup>Required</sup> <a name="HostResourceGroupArn" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostResourceGroupArn"></a>

```csharp
public string HostResourceGroupArn { get; }
```

- *Type:* string

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.iamInstanceProfile"></a>

```csharp
public string IamInstanceProfile { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `InstanceInitiatedShutdownBehavior`<sup>Required</sup> <a name="InstanceInitiatedShutdownBehavior" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceInitiatedShutdownBehavior"></a>

```csharp
public string InstanceInitiatedShutdownBehavior { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `Ipv6AddressCount`<sup>Required</sup> <a name="Ipv6AddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressCount"></a>

```csharp
public double Ipv6AddressCount { get; }
```

- *Type:* double

---

##### `KernelId`<sup>Required</sup> <a name="KernelId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.kernelId"></a>

```csharp
public string KernelId { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.monitoring"></a>

```csharp
public bool|IResolvable Monitoring { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PlacementGroupName`<sup>Required</sup> <a name="PlacementGroupName" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.placementGroupName"></a>

```csharp
public string PlacementGroupName { get; }
```

- *Type:* string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `PropagateTagsToVolumeOnCreation`<sup>Required</sup> <a name="PropagateTagsToVolumeOnCreation" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.propagateTagsToVolumeOnCreation"></a>

```csharp
public bool|IResolvable PropagateTagsToVolumeOnCreation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RamdiskId`<sup>Required</sup> <a name="RamdiskId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ramdiskId"></a>

```csharp
public string RamdiskId { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `SourceDestCheck`<sup>Required</sup> <a name="SourceDestCheck" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.sourceDestCheck"></a>

```csharp
public bool|IResolvable SourceDestCheck { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tenancy"></a>

```csharp
public string Tenancy { get; }
```

- *Type:* string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.userData"></a>

```csharp
public string UserData { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2InstanceBlockDeviceMappings <a name="Ec2InstanceBlockDeviceMappings" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceBlockDeviceMappings {
    string DeviceName = null,
    Ec2InstanceBlockDeviceMappingsEbs Ebs = null,
    string NoDevice = null,
    string VirtualName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.deviceName">DeviceName</a></code> | <code>string</code> | The device name (for example, /dev/sdh or xvdh). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.ebs">Ebs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a></code> | Parameters used to automatically set up EBS volumes when the instance is launched. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.noDevice">NoDevice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#no_device Ec2Instance#no_device}. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.virtualName">VirtualName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#virtual_name Ec2Instance#virtual_name}. |

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

The device name (for example, /dev/sdh or xvdh).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#device_name Ec2Instance#device_name}

---

##### `Ebs`<sup>Optional</sup> <a name="Ebs" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.ebs"></a>

```csharp
public Ec2InstanceBlockDeviceMappingsEbs Ebs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a>

Parameters used to automatically set up EBS volumes when the instance is launched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ebs Ec2Instance#ebs}

---

##### `NoDevice`<sup>Optional</sup> <a name="NoDevice" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.noDevice"></a>

```csharp
public string NoDevice { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#no_device Ec2Instance#no_device}.

---

##### `VirtualName`<sup>Optional</sup> <a name="VirtualName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.virtualName"></a>

```csharp
public string VirtualName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#virtual_name Ec2Instance#virtual_name}.

---

### Ec2InstanceBlockDeviceMappingsEbs <a name="Ec2InstanceBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceBlockDeviceMappingsEbs {
    bool|IResolvable DeleteOnTermination = null,
    bool|IResolvable Encrypted = null,
    double Iops = null,
    string KmsKeyId = null,
    string SnapshotId = null,
    double VolumeSize = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the EBS volume is deleted on instance termination. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.encrypted">Encrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the volume should be encrypted. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.iops">Iops</a></code> | <code>double</code> | The number of I/O operations per second (IOPS). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The identifier of the AWS Key Management Service (AWS KMS) customer managed CMK to use for Amazon EBS encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.snapshotId">SnapshotId</a></code> | <code>string</code> | The ID of the snapshot. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.volumeSize">VolumeSize</a></code> | <code>double</code> | The size of the volume, in GiBs. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.volumeType">VolumeType</a></code> | <code>string</code> | The volume type. |

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```csharp
public bool|IResolvable DeleteOnTermination { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the EBS volume is deleted on instance termination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#delete_on_termination Ec2Instance#delete_on_termination}

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.encrypted"></a>

```csharp
public bool|IResolvable Encrypted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the volume should be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#encrypted Ec2Instance#encrypted}

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

The number of I/O operations per second (IOPS).

For gp3, io1, and io2 volumes, this represents the number of IOPS that are provisioned for the volume. For gp2 volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#iops Ec2Instance#iops}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The identifier of the AWS Key Management Service (AWS KMS) customer managed CMK to use for Amazon EBS encryption.

If KmsKeyId is specified, the encrypted state must be true. If the encrypted state is true but you do not specify KmsKeyId, your AWS managed CMK for EBS is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#kms_key_id Ec2Instance#kms_key_id}

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

The ID of the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#snapshot_id Ec2Instance#snapshot_id}

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

The size of the volume, in GiBs.

You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size. You can specify a volume size that is equal to or larger than the snapshot size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#volume_size Ec2Instance#volume_size}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

The volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#volume_type Ec2Instance#volume_type}

---

### Ec2InstanceConfig <a name="Ec2InstanceConfig" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AdditionalInfo = null,
    string Affinity = null,
    string AvailabilityZone = null,
    IResolvable|Ec2InstanceBlockDeviceMappings[] BlockDeviceMappings = null,
    Ec2InstanceCpuOptions CpuOptions = null,
    Ec2InstanceCreditSpecification CreditSpecification = null,
    bool|IResolvable DisableApiTermination = null,
    bool|IResolvable EbsOptimized = null,
    IResolvable|Ec2InstanceElasticGpuSpecifications[] ElasticGpuSpecifications = null,
    IResolvable|Ec2InstanceElasticInferenceAccelerators[] ElasticInferenceAccelerators = null,
    Ec2InstanceEnclaveOptions EnclaveOptions = null,
    Ec2InstanceHibernationOptions HibernationOptions = null,
    string HostId = null,
    string HostResourceGroupArn = null,
    string IamInstanceProfile = null,
    string ImageId = null,
    string InstanceInitiatedShutdownBehavior = null,
    string InstanceType = null,
    double Ipv6AddressCount = null,
    IResolvable|Ec2InstanceIpv6Addresses[] Ipv6Addresses = null,
    string KernelId = null,
    string KeyName = null,
    Ec2InstanceLaunchTemplate LaunchTemplate = null,
    IResolvable|Ec2InstanceLicenseSpecifications[] LicenseSpecifications = null,
    Ec2InstanceMetadataOptions MetadataOptions = null,
    bool|IResolvable Monitoring = null,
    IResolvable|Ec2InstanceNetworkInterfaces[] NetworkInterfaces = null,
    string PlacementGroupName = null,
    Ec2InstancePrivateDnsNameOptions PrivateDnsNameOptions = null,
    string PrivateIpAddress = null,
    bool|IResolvable PropagateTagsToVolumeOnCreation = null,
    string RamdiskId = null,
    string[] SecurityGroupIds = null,
    string[] SecurityGroups = null,
    bool|IResolvable SourceDestCheck = null,
    IResolvable|Ec2InstanceSsmAssociations[] SsmAssociations = null,
    string SubnetId = null,
    IResolvable|Ec2InstanceTags[] Tags = null,
    string Tenancy = null,
    string UserData = null,
    IResolvable|Ec2InstanceVolumes[] Volumes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.additionalInfo">AdditionalInfo</a></code> | <code>string</code> | This property is reserved for internal use. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.affinity">Affinity</a></code> | <code>string</code> | Indicates whether the instance is associated with a dedicated host. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | The Availability Zone of the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>[]</code> | The block device mapping entries that defines the block devices to attach to the instance at launch. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.cpuOptions">CpuOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a></code> | The CPU options for the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.creditSpecification">CreditSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a></code> | The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.disableApiTermination">DisableApiTermination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If you set this parameter to true, you can't terminate the instance using the Amazon EC2 console, CLI, or API; |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ebsOptimized">EbsOptimized</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the instance is optimized for Amazon EBS I/O. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.elasticGpuSpecifications">ElasticGpuSpecifications</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>[]</code> | An elastic GPU to associate with the instance. Amazon Elastic Graphics is no longer available. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.elasticInferenceAccelerators">ElasticInferenceAccelerators</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>[]</code> | An elastic inference accelerator to associate with the instance. Amazon Elastic Inference is no longer available. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.enclaveOptions">EnclaveOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a></code> | Indicates whether the instance is enabled for AWS Nitro Enclaves. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hibernationOptions">HibernationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a></code> | Indicates whether an instance is enabled for hibernation. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hostId">HostId</a></code> | <code>string</code> | If you specify host for the Affinity property, the ID of a dedicated host that the instance is associated with. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>string</code> | The ARN of the host resource group in which to launch the instances. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>string</code> | The IAM instance profile. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.imageId">ImageId</a></code> | <code>string</code> | The ID of the AMI. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.instanceInitiatedShutdownBehavior">InstanceInitiatedShutdownBehavior</a></code> | <code>string</code> | Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | The instance type. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>double</code> | [EC2-VPC] The number of IPv6 addresses to associate with the primary network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>[]</code> | [EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the primary network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.kernelId">KernelId</a></code> | <code>string</code> | The ID of the kernel. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.keyName">KeyName</a></code> | <code>string</code> | The name of the key pair. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a></code> | The launch template to use to launch the instances. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.licenseSpecifications">LicenseSpecifications</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>[]</code> | The license configurations. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a></code> | The metadata options for the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.monitoring">Monitoring</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether detailed monitoring is enabled for the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.networkInterfaces">NetworkInterfaces</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>[]</code> | The network interfaces to associate with the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.placementGroupName">PlacementGroupName</a></code> | <code>string</code> | The name of an existing placement group that you want to launch the instance into (cluster \| partition \| spread). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.privateDnsNameOptions">PrivateDnsNameOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a></code> | The options for the instance hostname. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | [EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.propagateTagsToVolumeOnCreation">PropagateTagsToVolumeOnCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to assign the tags from the instance to all of the volumes attached to the instance at launch. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ramdiskId">RamdiskId</a></code> | <code>string</code> | The ID of the RAM disk to select. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The IDs of the security groups. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | the names of the security groups. For a nondefault VPC, you must use security group IDs instead. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.sourceDestCheck">SourceDestCheck</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to enable an instance launched in a VPC to perform NAT. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ssmAssociations">SsmAssociations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>[]</code> | The SSM document and parameter values in AWS Systems Manager to associate with this instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | [EC2-VPC] The ID of the subnet to launch the instance into. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>[]</code> | The tags to add to the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.tenancy">Tenancy</a></code> | <code>string</code> | The tenancy of the instance (if the instance is running in a VPC). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.userData">UserData</a></code> | <code>string</code> | The user data to make available to the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.volumes">Volumes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>[]</code> | The volumes to attach to the instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdditionalInfo`<sup>Optional</sup> <a name="AdditionalInfo" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.additionalInfo"></a>

```csharp
public string AdditionalInfo { get; set; }
```

- *Type:* string

This property is reserved for internal use.

If you use it, the stack fails with this error: Bad property set: [Testing this property] (Service: AmazonEC2; Status Code: 400; Error Code: InvalidParameterCombination; Request ID: 0XXXXXX-49c7-4b40-8bcc-76885dcXXXXX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#additional_info Ec2Instance#additional_info}

---

##### `Affinity`<sup>Optional</sup> <a name="Affinity" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.affinity"></a>

```csharp
public string Affinity { get; set; }
```

- *Type:* string

Indicates whether the instance is associated with a dedicated host.

If you want the instance to always restart on the same host on which it was launched, specify host. If you want the instance to restart on any available host, but try to launch onto the last host it ran on (on a best-effort basis), specify default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#affinity Ec2Instance#affinity}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

The Availability Zone of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#availability_zone Ec2Instance#availability_zone}

---

##### `BlockDeviceMappings`<sup>Optional</sup> <a name="BlockDeviceMappings" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.blockDeviceMappings"></a>

```csharp
public IResolvable|Ec2InstanceBlockDeviceMappings[] BlockDeviceMappings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>[]

The block device mapping entries that defines the block devices to attach to the instance at launch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#block_device_mappings Ec2Instance#block_device_mappings}

---

##### `CpuOptions`<sup>Optional</sup> <a name="CpuOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.cpuOptions"></a>

```csharp
public Ec2InstanceCpuOptions CpuOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a>

The CPU options for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#cpu_options Ec2Instance#cpu_options}

---

##### `CreditSpecification`<sup>Optional</sup> <a name="CreditSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.creditSpecification"></a>

```csharp
public Ec2InstanceCreditSpecification CreditSpecification { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a>

The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#credit_specification Ec2Instance#credit_specification}

---

##### `DisableApiTermination`<sup>Optional</sup> <a name="DisableApiTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.disableApiTermination"></a>

```csharp
public bool|IResolvable DisableApiTermination { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If you set this parameter to true, you can't terminate the instance using the Amazon EC2 console, CLI, or API;

otherwise, you can.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#disable_api_termination Ec2Instance#disable_api_termination}

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ebsOptimized"></a>

```csharp
public bool|IResolvable EbsOptimized { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the instance is optimized for Amazon EBS I/O.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ebs_optimized Ec2Instance#ebs_optimized}

---

##### `ElasticGpuSpecifications`<sup>Optional</sup> <a name="ElasticGpuSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.elasticGpuSpecifications"></a>

```csharp
public IResolvable|Ec2InstanceElasticGpuSpecifications[] ElasticGpuSpecifications { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>[]

An elastic GPU to associate with the instance. Amazon Elastic Graphics is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#elastic_gpu_specifications Ec2Instance#elastic_gpu_specifications}

---

##### `ElasticInferenceAccelerators`<sup>Optional</sup> <a name="ElasticInferenceAccelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.elasticInferenceAccelerators"></a>

```csharp
public IResolvable|Ec2InstanceElasticInferenceAccelerators[] ElasticInferenceAccelerators { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>[]

An elastic inference accelerator to associate with the instance. Amazon Elastic Inference is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#elastic_inference_accelerators Ec2Instance#elastic_inference_accelerators}

---

##### `EnclaveOptions`<sup>Optional</sup> <a name="EnclaveOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.enclaveOptions"></a>

```csharp
public Ec2InstanceEnclaveOptions EnclaveOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a>

Indicates whether the instance is enabled for AWS Nitro Enclaves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#enclave_options Ec2Instance#enclave_options}

---

##### `HibernationOptions`<sup>Optional</sup> <a name="HibernationOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hibernationOptions"></a>

```csharp
public Ec2InstanceHibernationOptions HibernationOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a>

Indicates whether an instance is enabled for hibernation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#hibernation_options Ec2Instance#hibernation_options}

---

##### `HostId`<sup>Optional</sup> <a name="HostId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hostId"></a>

```csharp
public string HostId { get; set; }
```

- *Type:* string

If you specify host for the Affinity property, the ID of a dedicated host that the instance is associated with.

If you don't specify an ID, Amazon EC2 launches the instance onto any available, compatible dedicated host in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#host_id Ec2Instance#host_id}

---

##### `HostResourceGroupArn`<sup>Optional</sup> <a name="HostResourceGroupArn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hostResourceGroupArn"></a>

```csharp
public string HostResourceGroupArn { get; set; }
```

- *Type:* string

The ARN of the host resource group in which to launch the instances.

If you specify a host resource group ARN, omit the Tenancy parameter or set it to host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#host_resource_group_arn Ec2Instance#host_resource_group_arn}

---

##### `IamInstanceProfile`<sup>Optional</sup> <a name="IamInstanceProfile" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.iamInstanceProfile"></a>

```csharp
public string IamInstanceProfile { get; set; }
```

- *Type:* string

The IAM instance profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#iam_instance_profile Ec2Instance#iam_instance_profile}

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.imageId"></a>

```csharp
public string ImageId { get; set; }
```

- *Type:* string

The ID of the AMI.

An AMI ID is required to launch an instance and must be specified here or in a launch template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#image_id Ec2Instance#image_id}

---

##### `InstanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="InstanceInitiatedShutdownBehavior" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.instanceInitiatedShutdownBehavior"></a>

```csharp
public string InstanceInitiatedShutdownBehavior { get; set; }
```

- *Type:* string

Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#instance_initiated_shutdown_behavior Ec2Instance#instance_initiated_shutdown_behavior}

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

The instance type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#instance_type Ec2Instance#instance_type}

---

##### `Ipv6AddressCount`<sup>Optional</sup> <a name="Ipv6AddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ipv6AddressCount"></a>

```csharp
public double Ipv6AddressCount { get; set; }
```

- *Type:* double

[EC2-VPC] The number of IPv6 addresses to associate with the primary network interface.

Amazon EC2 chooses the IPv6 addresses from the range of your subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ipv_6_address_count Ec2Instance#ipv_6_address_count}

---

##### `Ipv6Addresses`<sup>Optional</sup> <a name="Ipv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ipv6Addresses"></a>

```csharp
public IResolvable|Ec2InstanceIpv6Addresses[] Ipv6Addresses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>[]

[EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the primary network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ipv_6_addresses Ec2Instance#ipv_6_addresses}

---

##### `KernelId`<sup>Optional</sup> <a name="KernelId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.kernelId"></a>

```csharp
public string KernelId { get; set; }
```

- *Type:* string

The ID of the kernel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#kernel_id Ec2Instance#kernel_id}

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

The name of the key pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#key_name Ec2Instance#key_name}

---

##### `LaunchTemplate`<sup>Optional</sup> <a name="LaunchTemplate" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.launchTemplate"></a>

```csharp
public Ec2InstanceLaunchTemplate LaunchTemplate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a>

The launch template to use to launch the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#launch_template Ec2Instance#launch_template}

---

##### `LicenseSpecifications`<sup>Optional</sup> <a name="LicenseSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.licenseSpecifications"></a>

```csharp
public IResolvable|Ec2InstanceLicenseSpecifications[] LicenseSpecifications { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>[]

The license configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#license_specifications Ec2Instance#license_specifications}

---

##### `MetadataOptions`<sup>Optional</sup> <a name="MetadataOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.metadataOptions"></a>

```csharp
public Ec2InstanceMetadataOptions MetadataOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a>

The metadata options for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#metadata_options Ec2Instance#metadata_options}

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.monitoring"></a>

```csharp
public bool|IResolvable Monitoring { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether detailed monitoring is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#monitoring Ec2Instance#monitoring}

---

##### `NetworkInterfaces`<sup>Optional</sup> <a name="NetworkInterfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.networkInterfaces"></a>

```csharp
public IResolvable|Ec2InstanceNetworkInterfaces[] NetworkInterfaces { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>[]

The network interfaces to associate with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#network_interfaces Ec2Instance#network_interfaces}

---

##### `PlacementGroupName`<sup>Optional</sup> <a name="PlacementGroupName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.placementGroupName"></a>

```csharp
public string PlacementGroupName { get; set; }
```

- *Type:* string

The name of an existing placement group that you want to launch the instance into (cluster | partition | spread).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#placement_group_name Ec2Instance#placement_group_name}

---

##### `PrivateDnsNameOptions`<sup>Optional</sup> <a name="PrivateDnsNameOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.privateDnsNameOptions"></a>

```csharp
public Ec2InstancePrivateDnsNameOptions PrivateDnsNameOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a>

The options for the instance hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#private_dns_name_options Ec2Instance#private_dns_name_options}

---

##### `PrivateIpAddress`<sup>Optional</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; set; }
```

- *Type:* string

[EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#private_ip_address Ec2Instance#private_ip_address}

---

##### `PropagateTagsToVolumeOnCreation`<sup>Optional</sup> <a name="PropagateTagsToVolumeOnCreation" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.propagateTagsToVolumeOnCreation"></a>

```csharp
public bool|IResolvable PropagateTagsToVolumeOnCreation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to assign the tags from the instance to all of the volumes attached to the instance at launch.

If you specify true and you assign tags to the instance, those tags are automatically assigned to all of the volumes that you attach to the instance at launch. If you specify false, those tags are not assigned to the attached volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#propagate_tags_to_volume_on_creation Ec2Instance#propagate_tags_to_volume_on_creation}

---

##### `RamdiskId`<sup>Optional</sup> <a name="RamdiskId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ramdiskId"></a>

```csharp
public string RamdiskId { get; set; }
```

- *Type:* string

The ID of the RAM disk to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ramdisk_id Ec2Instance#ramdisk_id}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The IDs of the security groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#security_group_ids Ec2Instance#security_group_ids}

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

the names of the security groups. For a nondefault VPC, you must use security group IDs instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#security_groups Ec2Instance#security_groups}

---

##### `SourceDestCheck`<sup>Optional</sup> <a name="SourceDestCheck" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.sourceDestCheck"></a>

```csharp
public bool|IResolvable SourceDestCheck { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to enable an instance launched in a VPC to perform NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#source_dest_check Ec2Instance#source_dest_check}

---

##### `SsmAssociations`<sup>Optional</sup> <a name="SsmAssociations" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ssmAssociations"></a>

```csharp
public IResolvable|Ec2InstanceSsmAssociations[] SsmAssociations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>[]

The SSM document and parameter values in AWS Systems Manager to associate with this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ssm_associations Ec2Instance#ssm_associations}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

[EC2-VPC] The ID of the subnet to launch the instance into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#subnet_id Ec2Instance#subnet_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.tags"></a>

```csharp
public IResolvable|Ec2InstanceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>[]

The tags to add to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#tags Ec2Instance#tags}

---

##### `Tenancy`<sup>Optional</sup> <a name="Tenancy" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.tenancy"></a>

```csharp
public string Tenancy { get; set; }
```

- *Type:* string

The tenancy of the instance (if the instance is running in a VPC).

An instance with a tenancy of dedicated runs on single-tenant hardware.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#tenancy Ec2Instance#tenancy}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.userData"></a>

```csharp
public string UserData { get; set; }
```

- *Type:* string

The user data to make available to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#user_data Ec2Instance#user_data}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.volumes"></a>

```csharp
public IResolvable|Ec2InstanceVolumes[] Volumes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>[]

The volumes to attach to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#volumes Ec2Instance#volumes}

---

### Ec2InstanceCpuOptions <a name="Ec2InstanceCpuOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceCpuOptions {
    double CoreCount = null,
    double ThreadsPerCore = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions.property.coreCount">CoreCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#core_count Ec2Instance#core_count}. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#threads_per_core Ec2Instance#threads_per_core}. |

---

##### `CoreCount`<sup>Optional</sup> <a name="CoreCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions.property.coreCount"></a>

```csharp
public double CoreCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#core_count Ec2Instance#core_count}.

---

##### `ThreadsPerCore`<sup>Optional</sup> <a name="ThreadsPerCore" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#threads_per_core Ec2Instance#threads_per_core}.

---

### Ec2InstanceCreditSpecification <a name="Ec2InstanceCreditSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceCreditSpecification {
    string CpuCredits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification.property.cpuCredits">CpuCredits</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#cpu_credits Ec2Instance#cpu_credits}. |

---

##### `CpuCredits`<sup>Optional</sup> <a name="CpuCredits" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification.property.cpuCredits"></a>

```csharp
public string CpuCredits { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#cpu_credits Ec2Instance#cpu_credits}.

---

### Ec2InstanceElasticGpuSpecifications <a name="Ec2InstanceElasticGpuSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceElasticGpuSpecifications {
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications.property.type">Type</a></code> | <code>string</code> | The type of Elastic Graphics accelerator. Amazon Elastic Graphics is no longer available. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of Elastic Graphics accelerator. Amazon Elastic Graphics is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#type Ec2Instance#type}

---

### Ec2InstanceElasticInferenceAccelerators <a name="Ec2InstanceElasticInferenceAccelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceElasticInferenceAccelerators {
    double Count = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators.property.count">Count</a></code> | <code>double</code> | The number of elastic inference accelerators to attach to the instance. Amazon Elastic Inference is no longer available. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators.property.type">Type</a></code> | <code>string</code> | The type of elastic inference accelerator. Amazon Elastic Inference is no longer available. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

The number of elastic inference accelerators to attach to the instance. Amazon Elastic Inference is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#count Ec2Instance#count}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of elastic inference accelerator. Amazon Elastic Inference is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#type Ec2Instance#type}

---

### Ec2InstanceEnclaveOptions <a name="Ec2InstanceEnclaveOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceEnclaveOptions {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If this parameter is set to true, the instance is enabled for AWS Nitro Enclaves; |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If this parameter is set to true, the instance is enabled for AWS Nitro Enclaves;

otherwise, it is not enabled for AWS Nitro Enclaves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#enabled Ec2Instance#enabled}

---

### Ec2InstanceHibernationOptions <a name="Ec2InstanceHibernationOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceHibernationOptions {
    bool|IResolvable Configured = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions.property.configured">Configured</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If you set this parameter to true, your instance is enabled for hibernation. |

---

##### `Configured`<sup>Optional</sup> <a name="Configured" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions.property.configured"></a>

```csharp
public bool|IResolvable Configured { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If you set this parameter to true, your instance is enabled for hibernation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#configured Ec2Instance#configured}

---

### Ec2InstanceIpv6Addresses <a name="Ec2InstanceIpv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceIpv6Addresses {
    string Ipv6Address = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | The IPv6 address. |

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; set; }
```

- *Type:* string

The IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ipv_6_address Ec2Instance#ipv_6_address}

---

### Ec2InstanceLaunchTemplate <a name="Ec2InstanceLaunchTemplate" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceLaunchTemplate {
    string LaunchTemplateId = null,
    string LaunchTemplateName = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.launchTemplateId">LaunchTemplateId</a></code> | <code>string</code> | The ID of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.launchTemplateName">LaunchTemplateName</a></code> | <code>string</code> | The name of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.version">Version</a></code> | <code>string</code> | The version number of the launch template. |

---

##### `LaunchTemplateId`<sup>Optional</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.launchTemplateId"></a>

```csharp
public string LaunchTemplateId { get; set; }
```

- *Type:* string

The ID of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#launch_template_id Ec2Instance#launch_template_id}

---

##### `LaunchTemplateName`<sup>Optional</sup> <a name="LaunchTemplateName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.launchTemplateName"></a>

```csharp
public string LaunchTemplateName { get; set; }
```

- *Type:* string

The name of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#launch_template_name Ec2Instance#launch_template_name}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The version number of the launch template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#version Ec2Instance#version}

---

### Ec2InstanceLicenseSpecifications <a name="Ec2InstanceLicenseSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceLicenseSpecifications {
    string LicenseConfigurationArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications.property.licenseConfigurationArn">LicenseConfigurationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the license configuration. |

---

##### `LicenseConfigurationArn`<sup>Optional</sup> <a name="LicenseConfigurationArn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications.property.licenseConfigurationArn"></a>

```csharp
public string LicenseConfigurationArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#license_configuration_arn Ec2Instance#license_configuration_arn}

---

### Ec2InstanceMetadataOptions <a name="Ec2InstanceMetadataOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceMetadataOptions {
    string HttpEndpoint = null,
    string HttpProtocolIpv6 = null,
    double HttpPutResponseHopLimit = null,
    string HttpTokens = null,
    string InstanceMetadataTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpEndpoint">HttpEndpoint</a></code> | <code>string</code> | Enables or disables the HTTP metadata endpoint on your instances. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpProtocolIpv6">HttpProtocolIpv6</a></code> | <code>string</code> | Enables or disables the IPv6 endpoint for the instance metadata service. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | The number of network hops that the metadata token can travel. Maximum is 64. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpTokens">HttpTokens</a></code> | <code>string</code> | Indicates whether IMDSv2 is required. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>string</code> | Indicates whether tags from the instance are propagated to the EBS volumes. |

---

##### `HttpEndpoint`<sup>Optional</sup> <a name="HttpEndpoint" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpEndpoint"></a>

```csharp
public string HttpEndpoint { get; set; }
```

- *Type:* string

Enables or disables the HTTP metadata endpoint on your instances.

If you specify a value of disabled, you cannot access your instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#http_endpoint Ec2Instance#http_endpoint}

---

##### `HttpProtocolIpv6`<sup>Optional</sup> <a name="HttpProtocolIpv6" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpProtocolIpv6"></a>

```csharp
public string HttpProtocolIpv6 { get; set; }
```

- *Type:* string

Enables or disables the IPv6 endpoint for the instance metadata service.

To use this option, the instance must be a Nitro-based instance launched in a subnet that supports IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#http_protocol_ipv_6 Ec2Instance#http_protocol_ipv_6}

---

##### `HttpPutResponseHopLimit`<sup>Optional</sup> <a name="HttpPutResponseHopLimit" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; set; }
```

- *Type:* double

The number of network hops that the metadata token can travel. Maximum is 64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#http_put_response_hop_limit Ec2Instance#http_put_response_hop_limit}

---

##### `HttpTokens`<sup>Optional</sup> <a name="HttpTokens" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpTokens"></a>

```csharp
public string HttpTokens { get; set; }
```

- *Type:* string

Indicates whether IMDSv2 is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#http_tokens Ec2Instance#http_tokens}

---

##### `InstanceMetadataTags`<sup>Optional</sup> <a name="InstanceMetadataTags" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.instanceMetadataTags"></a>

```csharp
public string InstanceMetadataTags { get; set; }
```

- *Type:* string

Indicates whether tags from the instance are propagated to the EBS volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#instance_metadata_tags Ec2Instance#instance_metadata_tags}

---

### Ec2InstanceNetworkInterfaces <a name="Ec2InstanceNetworkInterfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceNetworkInterfaces {
    bool|IResolvable AssociateCarrierIpAddress = null,
    bool|IResolvable AssociatePublicIpAddress = null,
    bool|IResolvable DeleteOnTermination = null,
    string Description = null,
    string DeviceIndex = null,
    Ec2InstanceNetworkInterfacesEnaSrdSpecification EnaSrdSpecification = null,
    string[] GroupSet = null,
    double Ipv6AddressCount = null,
    IResolvable|Ec2InstanceNetworkInterfacesIpv6Addresses[] Ipv6Addresses = null,
    string NetworkInterfaceId = null,
    string PrivateIpAddress = null,
    IResolvable|Ec2InstanceNetworkInterfacesPrivateIpAddresses[] PrivateIpAddresses = null,
    double SecondaryPrivateIpAddressCount = null,
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.associateCarrierIpAddress">AssociateCarrierIpAddress</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Not currently supported by AWS CloudFormation. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to assign a public IPv4 address to an instance you launch in a VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, the interface is deleted when the instance is terminated. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.description">Description</a></code> | <code>string</code> | The description of the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.deviceIndex">DeviceIndex</a></code> | <code>string</code> | The position of the network interface in the attachment order. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.enaSrdSpecification">EnaSrdSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a></code> | Specifies the ENA Express settings for the network interface that's attached to the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.groupSet">GroupSet</a></code> | <code>string[]</code> | The IDs of the security groups for the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>double</code> | A number of IPv6 addresses to assign to the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>[]</code> | The IPv6 addresses associated with the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | The ID of the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | The private IPv4 address of the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.privateIpAddresses">PrivateIpAddresses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>[]</code> | One or more private IPv4 addresses to assign to the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.secondaryPrivateIpAddressCount">SecondaryPrivateIpAddressCount</a></code> | <code>double</code> | The number of secondary private IPv4 addresses. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.subnetId">SubnetId</a></code> | <code>string</code> | The ID of the subnet. |

---

##### `AssociateCarrierIpAddress`<sup>Optional</sup> <a name="AssociateCarrierIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.associateCarrierIpAddress"></a>

```csharp
public bool|IResolvable AssociateCarrierIpAddress { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Not currently supported by AWS CloudFormation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#associate_carrier_ip_address Ec2Instance#associate_carrier_ip_address}

---

##### `AssociatePublicIpAddress`<sup>Optional</sup> <a name="AssociatePublicIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.associatePublicIpAddress"></a>

```csharp
public bool|IResolvable AssociatePublicIpAddress { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to assign a public IPv4 address to an instance you launch in a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#associate_public_ip_address Ec2Instance#associate_public_ip_address}

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.deleteOnTermination"></a>

```csharp
public bool|IResolvable DeleteOnTermination { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, the interface is deleted when the instance is terminated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#delete_on_termination Ec2Instance#delete_on_termination}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#description Ec2Instance#description}

---

##### `DeviceIndex`<sup>Optional</sup> <a name="DeviceIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.deviceIndex"></a>

```csharp
public string DeviceIndex { get; set; }
```

- *Type:* string

The position of the network interface in the attachment order.

A primary network interface has a device index of 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#device_index Ec2Instance#device_index}

---

##### `EnaSrdSpecification`<sup>Optional</sup> <a name="EnaSrdSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.enaSrdSpecification"></a>

```csharp
public Ec2InstanceNetworkInterfacesEnaSrdSpecification EnaSrdSpecification { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a>

Specifies the ENA Express settings for the network interface that's attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ena_srd_specification Ec2Instance#ena_srd_specification}

---

##### `GroupSet`<sup>Optional</sup> <a name="GroupSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.groupSet"></a>

```csharp
public string[] GroupSet { get; set; }
```

- *Type:* string[]

The IDs of the security groups for the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#group_set Ec2Instance#group_set}

---

##### `Ipv6AddressCount`<sup>Optional</sup> <a name="Ipv6AddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.ipv6AddressCount"></a>

```csharp
public double Ipv6AddressCount { get; set; }
```

- *Type:* double

A number of IPv6 addresses to assign to the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ipv_6_address_count Ec2Instance#ipv_6_address_count}

---

##### `Ipv6Addresses`<sup>Optional</sup> <a name="Ipv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.ipv6Addresses"></a>

```csharp
public IResolvable|Ec2InstanceNetworkInterfacesIpv6Addresses[] Ipv6Addresses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>[]

The IPv6 addresses associated with the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ipv_6_addresses Ec2Instance#ipv_6_addresses}

---

##### `NetworkInterfaceId`<sup>Optional</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; set; }
```

- *Type:* string

The ID of the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#network_interface_id Ec2Instance#network_interface_id}

---

##### `PrivateIpAddress`<sup>Optional</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; set; }
```

- *Type:* string

The private IPv4 address of the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#private_ip_address Ec2Instance#private_ip_address}

---

##### `PrivateIpAddresses`<sup>Optional</sup> <a name="PrivateIpAddresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.privateIpAddresses"></a>

```csharp
public IResolvable|Ec2InstanceNetworkInterfacesPrivateIpAddresses[] PrivateIpAddresses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>[]

One or more private IPv4 addresses to assign to the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#private_ip_addresses Ec2Instance#private_ip_addresses}

---

##### `SecondaryPrivateIpAddressCount`<sup>Optional</sup> <a name="SecondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.secondaryPrivateIpAddressCount"></a>

```csharp
public double SecondaryPrivateIpAddressCount { get; set; }
```

- *Type:* double

The number of secondary private IPv4 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#secondary_private_ip_address_count Ec2Instance#secondary_private_ip_address_count}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

The ID of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#subnet_id Ec2Instance#subnet_id}

---

### Ec2InstanceNetworkInterfacesEnaSrdSpecification <a name="Ec2InstanceNetworkInterfacesEnaSrdSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceNetworkInterfacesEnaSrdSpecification {
    bool|IResolvable EnaSrdEnabled = null,
    Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification EnaSrdUdpSpecification = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification.property.enaSrdEnabled">EnaSrdEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether ENA Express is enabled for the network interface when you launch an instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification.property.enaSrdUdpSpecification">EnaSrdUdpSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | Contains ENA Express settings for UDP network traffic for the network interface that's attached to the instance. |

---

##### `EnaSrdEnabled`<sup>Optional</sup> <a name="EnaSrdEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification.property.enaSrdEnabled"></a>

```csharp
public bool|IResolvable EnaSrdEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether ENA Express is enabled for the network interface when you launch an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ena_srd_enabled Ec2Instance#ena_srd_enabled}

---

##### `EnaSrdUdpSpecification`<sup>Optional</sup> <a name="EnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification.property.enaSrdUdpSpecification"></a>

```csharp
public Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification EnaSrdUdpSpecification { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

Contains ENA Express settings for UDP network traffic for the network interface that's attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ena_srd_udp_specification Ec2Instance#ena_srd_udp_specification}

---

### Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification <a name="Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification {
    bool|IResolvable EnaSrdUdpEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification.property.enaSrdUdpEnabled">EnaSrdUdpEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether UDP traffic uses ENA Express for your instance. |

---

##### `EnaSrdUdpEnabled`<sup>Optional</sup> <a name="EnaSrdUdpEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification.property.enaSrdUdpEnabled"></a>

```csharp
public bool|IResolvable EnaSrdUdpEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether UDP traffic uses ENA Express for your instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ena_srd_udp_enabled Ec2Instance#ena_srd_udp_enabled}

---

### Ec2InstanceNetworkInterfacesIpv6Addresses <a name="Ec2InstanceNetworkInterfacesIpv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceNetworkInterfacesIpv6Addresses {
    string Ipv6Address = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | The IPv6 address. |

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; set; }
```

- *Type:* string

The IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#ipv_6_address Ec2Instance#ipv_6_address}

---

### Ec2InstanceNetworkInterfacesPrivateIpAddresses <a name="Ec2InstanceNetworkInterfacesPrivateIpAddresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceNetworkInterfacesPrivateIpAddresses {
    bool|IResolvable Primary = null,
    string PrivateIpAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses.property.primary">Primary</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the private IPv4 address is the primary private IPv4 address. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | The private IPv4 addresses. |

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses.property.primary"></a>

```csharp
public bool|IResolvable Primary { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the private IPv4 address is the primary private IPv4 address.

Only one IPv4 address can be designated as primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#primary Ec2Instance#primary}

---

##### `PrivateIpAddress`<sup>Optional</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; set; }
```

- *Type:* string

The private IPv4 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#private_ip_address Ec2Instance#private_ip_address}

---

### Ec2InstancePrivateDnsNameOptions <a name="Ec2InstancePrivateDnsNameOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstancePrivateDnsNameOptions {
    bool|IResolvable EnableResourceNameDnsAaaaRecord = null,
    bool|IResolvable EnableResourceNameDnsARecord = null,
    string HostnameType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord">EnableResourceNameDnsAaaaRecord</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord">EnableResourceNameDnsARecord</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to respond to DNS queries for instance hostnames with DNS A records. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.hostnameType">HostnameType</a></code> | <code>string</code> | The type of hostnames to assign to instances in the subnet at launch. |

---

##### `EnableResourceNameDnsAaaaRecord`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord"></a>

```csharp
public bool|IResolvable EnableResourceNameDnsAaaaRecord { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.

For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#enable_resource_name_dns_aaaa_record Ec2Instance#enable_resource_name_dns_aaaa_record}

---

##### `EnableResourceNameDnsARecord`<sup>Optional</sup> <a name="EnableResourceNameDnsARecord" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord"></a>

```csharp
public bool|IResolvable EnableResourceNameDnsARecord { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to respond to DNS queries for instance hostnames with DNS A records.

For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#enable_resource_name_dns_a_record Ec2Instance#enable_resource_name_dns_a_record}

---

##### `HostnameType`<sup>Optional</sup> <a name="HostnameType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.hostnameType"></a>

```csharp
public string HostnameType { get; set; }
```

- *Type:* string

The type of hostnames to assign to instances in the subnet at launch.

For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#hostname_type Ec2Instance#hostname_type}

---

### Ec2InstanceSsmAssociations <a name="Ec2InstanceSsmAssociations" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceSsmAssociations {
    IResolvable|Ec2InstanceSsmAssociationsAssociationParameters[] AssociationParameters = null,
    string DocumentName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations.property.associationParameters">AssociationParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>[]</code> | The input parameter values to use with the associated SSM document. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations.property.documentName">DocumentName</a></code> | <code>string</code> | The name of an SSM document to associate with the instance. |

---

##### `AssociationParameters`<sup>Optional</sup> <a name="AssociationParameters" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations.property.associationParameters"></a>

```csharp
public IResolvable|Ec2InstanceSsmAssociationsAssociationParameters[] AssociationParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>[]

The input parameter values to use with the associated SSM document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#association_parameters Ec2Instance#association_parameters}

---

##### `DocumentName`<sup>Optional</sup> <a name="DocumentName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations.property.documentName"></a>

```csharp
public string DocumentName { get; set; }
```

- *Type:* string

The name of an SSM document to associate with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#document_name Ec2Instance#document_name}

---

### Ec2InstanceSsmAssociationsAssociationParameters <a name="Ec2InstanceSsmAssociationsAssociationParameters" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceSsmAssociationsAssociationParameters {
    string Key = null,
    string[] Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters.property.key">Key</a></code> | <code>string</code> | The name of an input parameter that is in the associated SSM document. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters.property.value">Value</a></code> | <code>string[]</code> | The value of an input parameter. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The name of an input parameter that is in the associated SSM document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#key Ec2Instance#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters.property.value"></a>

```csharp
public string[] Value { get; set; }
```

- *Type:* string[]

The value of an input parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#value Ec2Instance#value}

---

### Ec2InstanceState <a name="Ec2InstanceState" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceState.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceState {

};
```


### Ec2InstanceTags <a name="Ec2InstanceTags" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#key Ec2Instance#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#value Ec2Instance#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#key Ec2Instance#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#value Ec2Instance#value}.

---

### Ec2InstanceVolumes <a name="Ec2InstanceVolumes" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceVolumes {
    string Device = null,
    string VolumeId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes.property.device">Device</a></code> | <code>string</code> | The device name (for example, /dev/sdh or xvdh). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes.property.volumeId">VolumeId</a></code> | <code>string</code> | The ID of the EBS volume. The volume and instance must be within the same Availability Zone. |

---

##### `Device`<sup>Optional</sup> <a name="Device" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes.property.device"></a>

```csharp
public string Device { get; set; }
```

- *Type:* string

The device name (for example, /dev/sdh or xvdh).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#device Ec2Instance#device}

---

##### `VolumeId`<sup>Optional</sup> <a name="VolumeId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes.property.volumeId"></a>

```csharp
public string VolumeId { get; set; }
```

- *Type:* string

The ID of the EBS volume. The volume and instance must be within the same Availability Zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance#volume_id Ec2Instance#volume_id}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2InstanceBlockDeviceMappingsEbsOutputReference <a name="Ec2InstanceBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceBlockDeviceMappingsEbsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```csharp
private void ResetDeleteOnTermination()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```csharp
private void ResetSnapshotId()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```csharp
public bool|IResolvable DeleteOnTerminationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```csharp
public bool|IResolvable EncryptedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```csharp
public bool|IResolvable DeleteOnTermination { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```csharp
public bool|IResolvable Encrypted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceBlockDeviceMappingsEbs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a>

---


### Ec2InstanceBlockDeviceMappingsList <a name="Ec2InstanceBlockDeviceMappingsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceBlockDeviceMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.get"></a>

```csharp
private Ec2InstanceBlockDeviceMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceBlockDeviceMappings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>[]

---


### Ec2InstanceBlockDeviceMappingsOutputReference <a name="Ec2InstanceBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceBlockDeviceMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.putEbs">PutEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetEbs">ResetEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetNoDevice">ResetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetVirtualName">ResetVirtualName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbs` <a name="PutEbs" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.putEbs"></a>

```csharp
private void PutEbs(Ec2InstanceBlockDeviceMappingsEbs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a>

---

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```csharp
private void ResetDeviceName()
```

##### `ResetEbs` <a name="ResetEbs" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetEbs"></a>

```csharp
private void ResetEbs()
```

##### `ResetNoDevice` <a name="ResetNoDevice" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```csharp
private void ResetNoDevice()
```

##### `ResetVirtualName` <a name="ResetVirtualName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```csharp
private void ResetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference">Ec2InstanceBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.ebsInput">EbsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.noDeviceInput">NoDeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.virtualNameInput">VirtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.noDevice">NoDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.virtualName">VirtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.ebs"></a>

```csharp
public Ec2InstanceBlockDeviceMappingsEbsOutputReference Ebs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference">Ec2InstanceBlockDeviceMappingsEbsOutputReference</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `EbsInput`<sup>Optional</sup> <a name="EbsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```csharp
public IResolvable|Ec2InstanceBlockDeviceMappingsEbs EbsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a>

---

##### `NoDeviceInput`<sup>Optional</sup> <a name="NoDeviceInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```csharp
public string NoDeviceInput { get; }
```

- *Type:* string

---

##### `VirtualNameInput`<sup>Optional</sup> <a name="VirtualNameInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```csharp
public string VirtualNameInput { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.noDevice"></a>

```csharp
public string NoDevice { get; }
```

- *Type:* string

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.virtualName"></a>

```csharp
public string VirtualName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceBlockDeviceMappings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>

---


### Ec2InstanceCpuOptionsOutputReference <a name="Ec2InstanceCpuOptionsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceCpuOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resetCoreCount">ResetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resetThreadsPerCore">ResetThreadsPerCore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCoreCount` <a name="ResetCoreCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resetCoreCount"></a>

```csharp
private void ResetCoreCount()
```

##### `ResetThreadsPerCore` <a name="ResetThreadsPerCore" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resetThreadsPerCore"></a>

```csharp
private void ResetThreadsPerCore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.coreCountInput">CoreCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.threadsPerCoreInput">ThreadsPerCoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.coreCount">CoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoreCountInput`<sup>Optional</sup> <a name="CoreCountInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.coreCountInput"></a>

```csharp
public double CoreCountInput { get; }
```

- *Type:* double

---

##### `ThreadsPerCoreInput`<sup>Optional</sup> <a name="ThreadsPerCoreInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.threadsPerCoreInput"></a>

```csharp
public double ThreadsPerCoreInput { get; }
```

- *Type:* double

---

##### `CoreCount`<sup>Required</sup> <a name="CoreCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.coreCount"></a>

```csharp
public double CoreCount { get; }
```

- *Type:* double

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceCpuOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a>

---


### Ec2InstanceCreditSpecificationOutputReference <a name="Ec2InstanceCreditSpecificationOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceCreditSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.resetCpuCredits">ResetCpuCredits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuCredits` <a name="ResetCpuCredits" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.resetCpuCredits"></a>

```csharp
private void ResetCpuCredits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.cpuCreditsInput">CpuCreditsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.cpuCredits">CpuCredits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuCreditsInput`<sup>Optional</sup> <a name="CpuCreditsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.cpuCreditsInput"></a>

```csharp
public string CpuCreditsInput { get; }
```

- *Type:* string

---

##### `CpuCredits`<sup>Required</sup> <a name="CpuCredits" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.cpuCredits"></a>

```csharp
public string CpuCredits { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceCreditSpecification InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a>

---


### Ec2InstanceElasticGpuSpecificationsList <a name="Ec2InstanceElasticGpuSpecificationsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceElasticGpuSpecificationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.get"></a>

```csharp
private Ec2InstanceElasticGpuSpecificationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceElasticGpuSpecifications[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>[]

---


### Ec2InstanceElasticGpuSpecificationsOutputReference <a name="Ec2InstanceElasticGpuSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceElasticGpuSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceElasticGpuSpecifications InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>

---


### Ec2InstanceElasticInferenceAcceleratorsList <a name="Ec2InstanceElasticInferenceAcceleratorsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceElasticInferenceAcceleratorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.get"></a>

```csharp
private Ec2InstanceElasticInferenceAcceleratorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceElasticInferenceAccelerators[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>[]

---


### Ec2InstanceElasticInferenceAcceleratorsOutputReference <a name="Ec2InstanceElasticInferenceAcceleratorsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceElasticInferenceAcceleratorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceElasticInferenceAccelerators InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>

---


### Ec2InstanceEnclaveOptionsOutputReference <a name="Ec2InstanceEnclaveOptionsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceEnclaveOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceEnclaveOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a>

---


### Ec2InstanceHibernationOptionsOutputReference <a name="Ec2InstanceHibernationOptionsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceHibernationOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.resetConfigured">ResetConfigured</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfigured` <a name="ResetConfigured" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.resetConfigured"></a>

```csharp
private void ResetConfigured()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.configuredInput">ConfiguredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.configured">Configured</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfiguredInput`<sup>Optional</sup> <a name="ConfiguredInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.configuredInput"></a>

```csharp
public bool|IResolvable ConfiguredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Configured`<sup>Required</sup> <a name="Configured" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.configured"></a>

```csharp
public bool|IResolvable Configured { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceHibernationOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a>

---


### Ec2InstanceIpv6AddressesList <a name="Ec2InstanceIpv6AddressesList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceIpv6AddressesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.get"></a>

```csharp
private Ec2InstanceIpv6AddressesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceIpv6Addresses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>[]

---


### Ec2InstanceIpv6AddressesOutputReference <a name="Ec2InstanceIpv6AddressesOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceIpv6AddressesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.resetIpv6Address"></a>

```csharp
private void ResetIpv6Address()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.ipv6AddressInput"></a>

```csharp
public string Ipv6AddressInput { get; }
```

- *Type:* string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceIpv6Addresses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>

---


### Ec2InstanceLaunchTemplateOutputReference <a name="Ec2InstanceLaunchTemplateOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceLaunchTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetLaunchTemplateId">ResetLaunchTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetLaunchTemplateName">ResetLaunchTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLaunchTemplateId` <a name="ResetLaunchTemplateId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetLaunchTemplateId"></a>

```csharp
private void ResetLaunchTemplateId()
```

##### `ResetLaunchTemplateName` <a name="ResetLaunchTemplateName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetLaunchTemplateName"></a>

```csharp
private void ResetLaunchTemplateName()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateIdInput">LaunchTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateNameInput">LaunchTemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateId">LaunchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateName">LaunchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LaunchTemplateIdInput`<sup>Optional</sup> <a name="LaunchTemplateIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateIdInput"></a>

```csharp
public string LaunchTemplateIdInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateNameInput`<sup>Optional</sup> <a name="LaunchTemplateNameInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateNameInput"></a>

```csharp
public string LaunchTemplateNameInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateId"></a>

```csharp
public string LaunchTemplateId { get; }
```

- *Type:* string

---

##### `LaunchTemplateName`<sup>Required</sup> <a name="LaunchTemplateName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateName"></a>

```csharp
public string LaunchTemplateName { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceLaunchTemplate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a>

---


### Ec2InstanceLicenseSpecificationsList <a name="Ec2InstanceLicenseSpecificationsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceLicenseSpecificationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.get"></a>

```csharp
private Ec2InstanceLicenseSpecificationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceLicenseSpecifications[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>[]

---


### Ec2InstanceLicenseSpecificationsOutputReference <a name="Ec2InstanceLicenseSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceLicenseSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.resetLicenseConfigurationArn">ResetLicenseConfigurationArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLicenseConfigurationArn` <a name="ResetLicenseConfigurationArn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.resetLicenseConfigurationArn"></a>

```csharp
private void ResetLicenseConfigurationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArnInput">LicenseConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArn">LicenseConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LicenseConfigurationArnInput`<sup>Optional</sup> <a name="LicenseConfigurationArnInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArnInput"></a>

```csharp
public string LicenseConfigurationArnInput { get; }
```

- *Type:* string

---

##### `LicenseConfigurationArn`<sup>Required</sup> <a name="LicenseConfigurationArn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArn"></a>

```csharp
public string LicenseConfigurationArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceLicenseSpecifications InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>

---


### Ec2InstanceMetadataOptionsOutputReference <a name="Ec2InstanceMetadataOptionsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceMetadataOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpEndpoint">ResetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpProtocolIpv6">ResetHttpProtocolIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">ResetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpTokens">ResetHttpTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetInstanceMetadataTags">ResetInstanceMetadataTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpEndpoint` <a name="ResetHttpEndpoint" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```csharp
private void ResetHttpEndpoint()
```

##### `ResetHttpProtocolIpv6` <a name="ResetHttpProtocolIpv6" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpProtocolIpv6"></a>

```csharp
private void ResetHttpProtocolIpv6()
```

##### `ResetHttpPutResponseHopLimit` <a name="ResetHttpPutResponseHopLimit" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```csharp
private void ResetHttpPutResponseHopLimit()
```

##### `ResetHttpTokens` <a name="ResetHttpTokens" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpTokens"></a>

```csharp
private void ResetHttpTokens()
```

##### `ResetInstanceMetadataTags` <a name="ResetInstanceMetadataTags" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```csharp
private void ResetInstanceMetadataTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpEndpointInput">HttpEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpProtocolIpv6Input">HttpProtocolIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">HttpPutResponseHopLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpTokensInput">HttpTokensInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput">InstanceMetadataTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpEndpoint">HttpEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpProtocolIpv6">HttpProtocolIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpEndpointInput`<sup>Optional</sup> <a name="HttpEndpointInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```csharp
public string HttpEndpointInput { get; }
```

- *Type:* string

---

##### `HttpProtocolIpv6Input`<sup>Optional</sup> <a name="HttpProtocolIpv6Input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpProtocolIpv6Input"></a>

```csharp
public string HttpProtocolIpv6Input { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimitInput`<sup>Optional</sup> <a name="HttpPutResponseHopLimitInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```csharp
public double HttpPutResponseHopLimitInput { get; }
```

- *Type:* double

---

##### `HttpTokensInput`<sup>Optional</sup> <a name="HttpTokensInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```csharp
public string HttpTokensInput { get; }
```

- *Type:* string

---

##### `InstanceMetadataTagsInput`<sup>Optional</sup> <a name="InstanceMetadataTagsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```csharp
public string InstanceMetadataTagsInput { get; }
```

- *Type:* string

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpEndpoint"></a>

```csharp
public string HttpEndpoint { get; }
```

- *Type:* string

---

##### `HttpProtocolIpv6`<sup>Required</sup> <a name="HttpProtocolIpv6" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpProtocolIpv6"></a>

```csharp
public string HttpProtocolIpv6 { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; }
```

- *Type:* double

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```csharp
public string HttpTokens { get; }
```

- *Type:* string

---

##### `InstanceMetadataTags`<sup>Required</sup> <a name="InstanceMetadataTags" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```csharp
public string InstanceMetadataTags { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceMetadataOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a>

---


### Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference <a name="Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resetEnaSrdUdpEnabled">ResetEnaSrdUdpEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnaSrdUdpEnabled` <a name="ResetEnaSrdUdpEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resetEnaSrdUdpEnabled"></a>

```csharp
private void ResetEnaSrdUdpEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabledInput">EnaSrdUdpEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled">EnaSrdUdpEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnaSrdUdpEnabledInput`<sup>Optional</sup> <a name="EnaSrdUdpEnabledInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabledInput"></a>

```csharp
public bool|IResolvable EnaSrdUdpEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnaSrdUdpEnabled`<sup>Required</sup> <a name="EnaSrdUdpEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled"></a>

```csharp
public bool|IResolvable EnaSrdUdpEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

---


### Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference <a name="Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification">PutEnaSrdUdpSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resetEnaSrdEnabled">ResetEnaSrdEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resetEnaSrdUdpSpecification">ResetEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnaSrdUdpSpecification` <a name="PutEnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification"></a>

```csharp
private void PutEnaSrdUdpSpecification(Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

---

##### `ResetEnaSrdEnabled` <a name="ResetEnaSrdEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resetEnaSrdEnabled"></a>

```csharp
private void ResetEnaSrdEnabled()
```

##### `ResetEnaSrdUdpSpecification` <a name="ResetEnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resetEnaSrdUdpSpecification"></a>

```csharp
private void ResetEnaSrdUdpSpecification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification">EnaSrdUdpSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabledInput">EnaSrdEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecificationInput">EnaSrdUdpSpecificationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabled">EnaSrdEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnaSrdUdpSpecification`<sup>Required</sup> <a name="EnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification"></a>

```csharp
public Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference EnaSrdUdpSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a>

---

##### `EnaSrdEnabledInput`<sup>Optional</sup> <a name="EnaSrdEnabledInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabledInput"></a>

```csharp
public bool|IResolvable EnaSrdEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnaSrdUdpSpecificationInput`<sup>Optional</sup> <a name="EnaSrdUdpSpecificationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecificationInput"></a>

```csharp
public IResolvable|Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification EnaSrdUdpSpecificationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

---

##### `EnaSrdEnabled`<sup>Required</sup> <a name="EnaSrdEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabled"></a>

```csharp
public bool|IResolvable EnaSrdEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceNetworkInterfacesEnaSrdSpecification InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a>

---


### Ec2InstanceNetworkInterfacesIpv6AddressesList <a name="Ec2InstanceNetworkInterfacesIpv6AddressesList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceNetworkInterfacesIpv6AddressesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.get"></a>

```csharp
private Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceNetworkInterfacesIpv6Addresses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>[]

---


### Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference <a name="Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.resetIpv6Address"></a>

```csharp
private void ResetIpv6Address()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.ipv6AddressInput"></a>

```csharp
public string Ipv6AddressInput { get; }
```

- *Type:* string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceNetworkInterfacesIpv6Addresses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>

---


### Ec2InstanceNetworkInterfacesList <a name="Ec2InstanceNetworkInterfacesList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceNetworkInterfacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.get"></a>

```csharp
private Ec2InstanceNetworkInterfacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceNetworkInterfaces[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>[]

---


### Ec2InstanceNetworkInterfacesOutputReference <a name="Ec2InstanceNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceNetworkInterfacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putEnaSrdSpecification">PutEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putIpv6Addresses">PutIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putPrivateIpAddresses">PutPrivateIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetAssociateCarrierIpAddress">ResetAssociateCarrierIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetAssociatePublicIpAddress">ResetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDeviceIndex">ResetDeviceIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetEnaSrdSpecification">ResetEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetGroupSet">ResetGroupSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetIpv6AddressCount">ResetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetIpv6Addresses">ResetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetNetworkInterfaceId">ResetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetPrivateIpAddress">ResetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetPrivateIpAddresses">ResetPrivateIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetSecondaryPrivateIpAddressCount">ResetSecondaryPrivateIpAddressCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnaSrdSpecification` <a name="PutEnaSrdSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putEnaSrdSpecification"></a>

```csharp
private void PutEnaSrdSpecification(Ec2InstanceNetworkInterfacesEnaSrdSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putEnaSrdSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a>

---

##### `PutIpv6Addresses` <a name="PutIpv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putIpv6Addresses"></a>

```csharp
private void PutIpv6Addresses(IResolvable|Ec2InstanceNetworkInterfacesIpv6Addresses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putIpv6Addresses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>[]

---

##### `PutPrivateIpAddresses` <a name="PutPrivateIpAddresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putPrivateIpAddresses"></a>

```csharp
private void PutPrivateIpAddresses(IResolvable|Ec2InstanceNetworkInterfacesPrivateIpAddresses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putPrivateIpAddresses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>[]

---

##### `ResetAssociateCarrierIpAddress` <a name="ResetAssociateCarrierIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetAssociateCarrierIpAddress"></a>

```csharp
private void ResetAssociateCarrierIpAddress()
```

##### `ResetAssociatePublicIpAddress` <a name="ResetAssociatePublicIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetAssociatePublicIpAddress"></a>

```csharp
private void ResetAssociatePublicIpAddress()
```

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDeleteOnTermination"></a>

```csharp
private void ResetDeleteOnTermination()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDeviceIndex` <a name="ResetDeviceIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDeviceIndex"></a>

```csharp
private void ResetDeviceIndex()
```

##### `ResetEnaSrdSpecification` <a name="ResetEnaSrdSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetEnaSrdSpecification"></a>

```csharp
private void ResetEnaSrdSpecification()
```

##### `ResetGroupSet` <a name="ResetGroupSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetGroupSet"></a>

```csharp
private void ResetGroupSet()
```

##### `ResetIpv6AddressCount` <a name="ResetIpv6AddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetIpv6AddressCount"></a>

```csharp
private void ResetIpv6AddressCount()
```

##### `ResetIpv6Addresses` <a name="ResetIpv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetIpv6Addresses"></a>

```csharp
private void ResetIpv6Addresses()
```

##### `ResetNetworkInterfaceId` <a name="ResetNetworkInterfaceId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetNetworkInterfaceId"></a>

```csharp
private void ResetNetworkInterfaceId()
```

##### `ResetPrivateIpAddress` <a name="ResetPrivateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetPrivateIpAddress"></a>

```csharp
private void ResetPrivateIpAddress()
```

##### `ResetPrivateIpAddresses` <a name="ResetPrivateIpAddresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetPrivateIpAddresses"></a>

```csharp
private void ResetPrivateIpAddresses()
```

##### `ResetSecondaryPrivateIpAddressCount` <a name="ResetSecondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetSecondaryPrivateIpAddressCount"></a>

```csharp
private void ResetSecondaryPrivateIpAddressCount()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.enaSrdSpecification">EnaSrdSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference">Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6Addresses">Ipv6Addresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList">Ec2InstanceNetworkInterfacesIpv6AddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddresses">PrivateIpAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList">Ec2InstanceNetworkInterfacesPrivateIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associateCarrierIpAddressInput">AssociateCarrierIpAddressInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associatePublicIpAddressInput">AssociatePublicIpAddressInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deviceIndexInput">DeviceIndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.enaSrdSpecificationInput">EnaSrdSpecificationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.groupSetInput">GroupSetInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressCountInput">Ipv6AddressCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressesInput">Ipv6AddressesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddressesInput">PrivateIpAddressesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddressInput">PrivateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCountInput">SecondaryPrivateIpAddressCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associateCarrierIpAddress">AssociateCarrierIpAddress</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deviceIndex">DeviceIndex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.groupSet">GroupSet</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCount">SecondaryPrivateIpAddressCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnaSrdSpecification`<sup>Required</sup> <a name="EnaSrdSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.enaSrdSpecification"></a>

```csharp
public Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference EnaSrdSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference">Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference</a>

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6Addresses"></a>

```csharp
public Ec2InstanceNetworkInterfacesIpv6AddressesList Ipv6Addresses { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList">Ec2InstanceNetworkInterfacesIpv6AddressesList</a>

---

##### `PrivateIpAddresses`<sup>Required</sup> <a name="PrivateIpAddresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddresses"></a>

```csharp
public Ec2InstanceNetworkInterfacesPrivateIpAddressesList PrivateIpAddresses { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList">Ec2InstanceNetworkInterfacesPrivateIpAddressesList</a>

---

##### `AssociateCarrierIpAddressInput`<sup>Optional</sup> <a name="AssociateCarrierIpAddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associateCarrierIpAddressInput"></a>

```csharp
public bool|IResolvable AssociateCarrierIpAddressInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AssociatePublicIpAddressInput`<sup>Optional</sup> <a name="AssociatePublicIpAddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associatePublicIpAddressInput"></a>

```csharp
public bool|IResolvable AssociatePublicIpAddressInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deleteOnTerminationInput"></a>

```csharp
public bool|IResolvable DeleteOnTerminationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DeviceIndexInput`<sup>Optional</sup> <a name="DeviceIndexInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deviceIndexInput"></a>

```csharp
public string DeviceIndexInput { get; }
```

- *Type:* string

---

##### `EnaSrdSpecificationInput`<sup>Optional</sup> <a name="EnaSrdSpecificationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.enaSrdSpecificationInput"></a>

```csharp
public IResolvable|Ec2InstanceNetworkInterfacesEnaSrdSpecification EnaSrdSpecificationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a>

---

##### `GroupSetInput`<sup>Optional</sup> <a name="GroupSetInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.groupSetInput"></a>

```csharp
public string[] GroupSetInput { get; }
```

- *Type:* string[]

---

##### `Ipv6AddressCountInput`<sup>Optional</sup> <a name="Ipv6AddressCountInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressCountInput"></a>

```csharp
public double Ipv6AddressCountInput { get; }
```

- *Type:* double

---

##### `Ipv6AddressesInput`<sup>Optional</sup> <a name="Ipv6AddressesInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressesInput"></a>

```csharp
public IResolvable|Ec2InstanceNetworkInterfacesIpv6Addresses[] Ipv6AddressesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>[]

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.networkInterfaceIdInput"></a>

```csharp
public string NetworkInterfaceIdInput { get; }
```

- *Type:* string

---

##### `PrivateIpAddressesInput`<sup>Optional</sup> <a name="PrivateIpAddressesInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddressesInput"></a>

```csharp
public IResolvable|Ec2InstanceNetworkInterfacesPrivateIpAddresses[] PrivateIpAddressesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>[]

---

##### `PrivateIpAddressInput`<sup>Optional</sup> <a name="PrivateIpAddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddressInput"></a>

```csharp
public string PrivateIpAddressInput { get; }
```

- *Type:* string

---

##### `SecondaryPrivateIpAddressCountInput`<sup>Optional</sup> <a name="SecondaryPrivateIpAddressCountInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCountInput"></a>

```csharp
public double SecondaryPrivateIpAddressCountInput { get; }
```

- *Type:* double

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `AssociateCarrierIpAddress`<sup>Required</sup> <a name="AssociateCarrierIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associateCarrierIpAddress"></a>

```csharp
public bool|IResolvable AssociateCarrierIpAddress { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associatePublicIpAddress"></a>

```csharp
public bool|IResolvable AssociatePublicIpAddress { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deleteOnTermination"></a>

```csharp
public bool|IResolvable DeleteOnTermination { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deviceIndex"></a>

```csharp
public string DeviceIndex { get; }
```

- *Type:* string

---

##### `GroupSet`<sup>Required</sup> <a name="GroupSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.groupSet"></a>

```csharp
public string[] GroupSet { get; }
```

- *Type:* string[]

---

##### `Ipv6AddressCount`<sup>Required</sup> <a name="Ipv6AddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressCount"></a>

```csharp
public double Ipv6AddressCount { get; }
```

- *Type:* double

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `SecondaryPrivateIpAddressCount`<sup>Required</sup> <a name="SecondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCount"></a>

```csharp
public double SecondaryPrivateIpAddressCount { get; }
```

- *Type:* double

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceNetworkInterfaces InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>

---


### Ec2InstanceNetworkInterfacesPrivateIpAddressesList <a name="Ec2InstanceNetworkInterfacesPrivateIpAddressesList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceNetworkInterfacesPrivateIpAddressesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.get"></a>

```csharp
private Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceNetworkInterfacesPrivateIpAddresses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>[]

---


### Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference <a name="Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resetPrivateIpAddress">ResetPrivateIpAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```

##### `ResetPrivateIpAddress` <a name="ResetPrivateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resetPrivateIpAddress"></a>

```csharp
private void ResetPrivateIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddressInput">PrivateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.primary">Primary</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.primaryInput"></a>

```csharp
public bool|IResolvable PrimaryInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrivateIpAddressInput`<sup>Optional</sup> <a name="PrivateIpAddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddressInput"></a>

```csharp
public string PrivateIpAddressInput { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.primary"></a>

```csharp
public bool|IResolvable Primary { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceNetworkInterfacesPrivateIpAddresses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>

---


### Ec2InstancePrivateDnsNameOptionsOutputReference <a name="Ec2InstancePrivateDnsNameOptionsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstancePrivateDnsNameOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord">ResetEnableResourceNameDnsAaaaRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord">ResetEnableResourceNameDnsARecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetHostnameType">ResetHostnameType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableResourceNameDnsAaaaRecord` <a name="ResetEnableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord"></a>

```csharp
private void ResetEnableResourceNameDnsAaaaRecord()
```

##### `ResetEnableResourceNameDnsARecord` <a name="ResetEnableResourceNameDnsARecord" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord"></a>

```csharp
private void ResetEnableResourceNameDnsARecord()
```

##### `ResetHostnameType` <a name="ResetHostnameType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetHostnameType"></a>

```csharp
private void ResetHostnameType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput">EnableResourceNameDnsAaaaRecordInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput">EnableResourceNameDnsARecordInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput">HostnameTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">EnableResourceNameDnsAaaaRecord</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">EnableResourceNameDnsARecord</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.hostnameType">HostnameType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableResourceNameDnsAaaaRecordInput`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecordInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput"></a>

```csharp
public bool|IResolvable EnableResourceNameDnsAaaaRecordInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableResourceNameDnsARecordInput`<sup>Optional</sup> <a name="EnableResourceNameDnsARecordInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput"></a>

```csharp
public bool|IResolvable EnableResourceNameDnsARecordInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HostnameTypeInput`<sup>Optional</sup> <a name="HostnameTypeInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput"></a>

```csharp
public string HostnameTypeInput { get; }
```

- *Type:* string

---

##### `EnableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="EnableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```csharp
public bool|IResolvable EnableResourceNameDnsAaaaRecord { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableResourceNameDnsARecord`<sup>Required</sup> <a name="EnableResourceNameDnsARecord" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```csharp
public bool|IResolvable EnableResourceNameDnsARecord { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HostnameType`<sup>Required</sup> <a name="HostnameType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```csharp
public string HostnameType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstancePrivateDnsNameOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a>

---


### Ec2InstanceSsmAssociationsAssociationParametersList <a name="Ec2InstanceSsmAssociationsAssociationParametersList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceSsmAssociationsAssociationParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.get"></a>

```csharp
private Ec2InstanceSsmAssociationsAssociationParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceSsmAssociationsAssociationParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>[]

---


### Ec2InstanceSsmAssociationsAssociationParametersOutputReference <a name="Ec2InstanceSsmAssociationsAssociationParametersOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceSsmAssociationsAssociationParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.value">Value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.valueInput"></a>

```csharp
public string[] ValueInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.value"></a>

```csharp
public string[] Value { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceSsmAssociationsAssociationParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>

---


### Ec2InstanceSsmAssociationsList <a name="Ec2InstanceSsmAssociationsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceSsmAssociationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.get"></a>

```csharp
private Ec2InstanceSsmAssociationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceSsmAssociations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>[]

---


### Ec2InstanceSsmAssociationsOutputReference <a name="Ec2InstanceSsmAssociationsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceSsmAssociationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.putAssociationParameters">PutAssociationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resetAssociationParameters">ResetAssociationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resetDocumentName">ResetDocumentName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAssociationParameters` <a name="PutAssociationParameters" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.putAssociationParameters"></a>

```csharp
private void PutAssociationParameters(IResolvable|Ec2InstanceSsmAssociationsAssociationParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.putAssociationParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>[]

---

##### `ResetAssociationParameters` <a name="ResetAssociationParameters" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resetAssociationParameters"></a>

```csharp
private void ResetAssociationParameters()
```

##### `ResetDocumentName` <a name="ResetDocumentName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resetDocumentName"></a>

```csharp
private void ResetDocumentName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.associationParameters">AssociationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList">Ec2InstanceSsmAssociationsAssociationParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.associationParametersInput">AssociationParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.documentNameInput">DocumentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.documentName">DocumentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssociationParameters`<sup>Required</sup> <a name="AssociationParameters" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.associationParameters"></a>

```csharp
public Ec2InstanceSsmAssociationsAssociationParametersList AssociationParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList">Ec2InstanceSsmAssociationsAssociationParametersList</a>

---

##### `AssociationParametersInput`<sup>Optional</sup> <a name="AssociationParametersInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.associationParametersInput"></a>

```csharp
public IResolvable|Ec2InstanceSsmAssociationsAssociationParameters[] AssociationParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>[]

---

##### `DocumentNameInput`<sup>Optional</sup> <a name="DocumentNameInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.documentNameInput"></a>

```csharp
public string DocumentNameInput { get; }
```

- *Type:* string

---

##### `DocumentName`<sup>Required</sup> <a name="DocumentName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.documentName"></a>

```csharp
public string DocumentName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceSsmAssociations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>

---


### Ec2InstanceStateOutputReference <a name="Ec2InstanceStateOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceState">Ec2InstanceState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.internalValue"></a>

```csharp
public Ec2InstanceState InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceState">Ec2InstanceState</a>

---


### Ec2InstanceTagsList <a name="Ec2InstanceTagsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.get"></a>

```csharp
private Ec2InstanceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>[]

---


### Ec2InstanceTagsOutputReference <a name="Ec2InstanceTagsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>

---


### Ec2InstanceVolumesList <a name="Ec2InstanceVolumesList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.get"></a>

```csharp
private Ec2InstanceVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceVolumes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>[]

---


### Ec2InstanceVolumesOutputReference <a name="Ec2InstanceVolumesOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resetDevice">ResetDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resetVolumeId">ResetVolumeId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDevice` <a name="ResetDevice" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resetDevice"></a>

```csharp
private void ResetDevice()
```

##### `ResetVolumeId` <a name="ResetVolumeId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resetVolumeId"></a>

```csharp
private void ResetVolumeId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.deviceInput">DeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.volumeIdInput">VolumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.device">Device</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceInput`<sup>Optional</sup> <a name="DeviceInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.deviceInput"></a>

```csharp
public string DeviceInput { get; }
```

- *Type:* string

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.volumeIdInput"></a>

```csharp
public string VolumeIdInput { get; }
```

- *Type:* string

---

##### `Device`<sup>Required</sup> <a name="Device" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.device"></a>

```csharp
public string Device { get; }
```

- *Type:* string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceVolumes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>

---



