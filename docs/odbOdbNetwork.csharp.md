# `odbOdbNetwork` Submodule <a name="`odbOdbNetwork` Submodule" id="@cdktn/provider-awscc.odbOdbNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbOdbNetwork <a name="OdbOdbNetwork" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_network awscc_odb_odb_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetwork(Construct Scope, string Id, OdbOdbNetworkConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig">OdbOdbNetworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig">OdbOdbNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetAvailabilityZoneId">ResetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetBackupSubnetCidr">ResetBackupSubnetCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetClientSubnetCidr">ResetClientSubnetCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetCrossRegionS3RestoreSources">ResetCrossRegionS3RestoreSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetCustomDomainName">ResetCustomDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetDefaultDnsPrefix">ResetDefaultDnsPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetDeleteAssociatedResources">ResetDeleteAssociatedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetKmsAccess">ResetKmsAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetKmsPolicyDocument">ResetKmsPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetS3Access">ResetS3Access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetS3PolicyDocument">ResetS3PolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetStsAccess">ResetStsAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetStsPolicyDocument">ResetStsPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetZeroEtlAccess">ResetZeroEtlAccess</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.putTags"></a>

```csharp
private void PutTags(IResolvable|OdbOdbNetworkTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>[]

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetAvailabilityZoneId` <a name="ResetAvailabilityZoneId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetAvailabilityZoneId"></a>

```csharp
private void ResetAvailabilityZoneId()
```

##### `ResetBackupSubnetCidr` <a name="ResetBackupSubnetCidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetBackupSubnetCidr"></a>

```csharp
private void ResetBackupSubnetCidr()
```

##### `ResetClientSubnetCidr` <a name="ResetClientSubnetCidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetClientSubnetCidr"></a>

```csharp
private void ResetClientSubnetCidr()
```

##### `ResetCrossRegionS3RestoreSources` <a name="ResetCrossRegionS3RestoreSources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetCrossRegionS3RestoreSources"></a>

```csharp
private void ResetCrossRegionS3RestoreSources()
```

##### `ResetCustomDomainName` <a name="ResetCustomDomainName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetCustomDomainName"></a>

```csharp
private void ResetCustomDomainName()
```

##### `ResetDefaultDnsPrefix` <a name="ResetDefaultDnsPrefix" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetDefaultDnsPrefix"></a>

```csharp
private void ResetDefaultDnsPrefix()
```

##### `ResetDeleteAssociatedResources` <a name="ResetDeleteAssociatedResources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetDeleteAssociatedResources"></a>

```csharp
private void ResetDeleteAssociatedResources()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetKmsAccess` <a name="ResetKmsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetKmsAccess"></a>

```csharp
private void ResetKmsAccess()
```

##### `ResetKmsPolicyDocument` <a name="ResetKmsPolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetKmsPolicyDocument"></a>

```csharp
private void ResetKmsPolicyDocument()
```

##### `ResetS3Access` <a name="ResetS3Access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetS3Access"></a>

```csharp
private void ResetS3Access()
```

##### `ResetS3PolicyDocument` <a name="ResetS3PolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetS3PolicyDocument"></a>

```csharp
private void ResetS3PolicyDocument()
```

##### `ResetStsAccess` <a name="ResetStsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetStsAccess"></a>

```csharp
private void ResetStsAccess()
```

##### `ResetStsPolicyDocument` <a name="ResetStsPolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetStsPolicyDocument"></a>

```csharp
private void ResetStsPolicyDocument()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetZeroEtlAccess` <a name="ResetZeroEtlAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetZeroEtlAccess"></a>

```csharp
private void ResetZeroEtlAccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OdbOdbNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OdbOdbNetwork.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OdbOdbNetwork.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OdbOdbNetwork.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OdbOdbNetwork.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OdbOdbNetwork resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OdbOdbNetwork to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OdbOdbNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_network#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OdbOdbNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ec2PlacementGroupIds">Ec2PlacementGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.managedServices">ManagedServices</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference">OdbOdbNetworkManagedServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ociNetworkAnchorId">OciNetworkAnchorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ociResourceAnchorName">OciResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ociVcnUrl">OciVcnUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.odbNetworkArn">OdbNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.odbNetworkId">OdbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList">OdbOdbNetworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZoneIdInput">AvailabilityZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.backupSubnetCidrInput">BackupSubnetCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.clientSubnetCidrInput">ClientSubnetCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.crossRegionS3RestoreSourcesInput">CrossRegionS3RestoreSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.customDomainNameInput">CustomDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.defaultDnsPrefixInput">DefaultDnsPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.deleteAssociatedResourcesInput">DeleteAssociatedResourcesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsAccessInput">KmsAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsPolicyDocumentInput">KmsPolicyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3AccessInput">S3AccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3PolicyDocumentInput">S3PolicyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsAccessInput">StsAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsPolicyDocumentInput">StsPolicyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.zeroEtlAccessInput">ZeroEtlAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.backupSubnetCidr">BackupSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.clientSubnetCidr">ClientSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.crossRegionS3RestoreSources">CrossRegionS3RestoreSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.customDomainName">CustomDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.defaultDnsPrefix">DefaultDnsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.deleteAssociatedResources">DeleteAssociatedResources</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsAccess">KmsAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsPolicyDocument">KmsPolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3Access">S3Access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3PolicyDocument">S3PolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsAccess">StsAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsPolicyDocument">StsPolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.zeroEtlAccess">ZeroEtlAccess</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Ec2PlacementGroupIds`<sup>Required</sup> <a name="Ec2PlacementGroupIds" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ec2PlacementGroupIds"></a>

```csharp
public string[] Ec2PlacementGroupIds { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedServices`<sup>Required</sup> <a name="ManagedServices" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.managedServices"></a>

```csharp
public OdbOdbNetworkManagedServicesOutputReference ManagedServices { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference">OdbOdbNetworkManagedServicesOutputReference</a>

---

##### `OciNetworkAnchorId`<sup>Required</sup> <a name="OciNetworkAnchorId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ociNetworkAnchorId"></a>

```csharp
public string OciNetworkAnchorId { get; }
```

- *Type:* string

---

##### `OciResourceAnchorName`<sup>Required</sup> <a name="OciResourceAnchorName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ociResourceAnchorName"></a>

```csharp
public string OciResourceAnchorName { get; }
```

- *Type:* string

---

##### `OciVcnUrl`<sup>Required</sup> <a name="OciVcnUrl" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ociVcnUrl"></a>

```csharp
public string OciVcnUrl { get; }
```

- *Type:* string

---

##### `OdbNetworkArn`<sup>Required</sup> <a name="OdbNetworkArn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.odbNetworkArn"></a>

```csharp
public string OdbNetworkArn { get; }
```

- *Type:* string

---

##### `OdbNetworkId`<sup>Required</sup> <a name="OdbNetworkId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.odbNetworkId"></a>

```csharp
public string OdbNetworkId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.tags"></a>

```csharp
public OdbOdbNetworkTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList">OdbOdbNetworkTagsList</a>

---

##### `AvailabilityZoneIdInput`<sup>Optional</sup> <a name="AvailabilityZoneIdInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZoneIdInput"></a>

```csharp
public string AvailabilityZoneIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `BackupSubnetCidrInput`<sup>Optional</sup> <a name="BackupSubnetCidrInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.backupSubnetCidrInput"></a>

```csharp
public string BackupSubnetCidrInput { get; }
```

- *Type:* string

---

##### `ClientSubnetCidrInput`<sup>Optional</sup> <a name="ClientSubnetCidrInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.clientSubnetCidrInput"></a>

```csharp
public string ClientSubnetCidrInput { get; }
```

- *Type:* string

---

##### `CrossRegionS3RestoreSourcesInput`<sup>Optional</sup> <a name="CrossRegionS3RestoreSourcesInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.crossRegionS3RestoreSourcesInput"></a>

```csharp
public string[] CrossRegionS3RestoreSourcesInput { get; }
```

- *Type:* string[]

---

##### `CustomDomainNameInput`<sup>Optional</sup> <a name="CustomDomainNameInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.customDomainNameInput"></a>

```csharp
public string CustomDomainNameInput { get; }
```

- *Type:* string

---

##### `DefaultDnsPrefixInput`<sup>Optional</sup> <a name="DefaultDnsPrefixInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.defaultDnsPrefixInput"></a>

```csharp
public string DefaultDnsPrefixInput { get; }
```

- *Type:* string

---

##### `DeleteAssociatedResourcesInput`<sup>Optional</sup> <a name="DeleteAssociatedResourcesInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.deleteAssociatedResourcesInput"></a>

```csharp
public bool|IResolvable DeleteAssociatedResourcesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `KmsAccessInput`<sup>Optional</sup> <a name="KmsAccessInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsAccessInput"></a>

```csharp
public string KmsAccessInput { get; }
```

- *Type:* string

---

##### `KmsPolicyDocumentInput`<sup>Optional</sup> <a name="KmsPolicyDocumentInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsPolicyDocumentInput"></a>

```csharp
public string KmsPolicyDocumentInput { get; }
```

- *Type:* string

---

##### `S3AccessInput`<sup>Optional</sup> <a name="S3AccessInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3AccessInput"></a>

```csharp
public string S3AccessInput { get; }
```

- *Type:* string

---

##### `S3PolicyDocumentInput`<sup>Optional</sup> <a name="S3PolicyDocumentInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3PolicyDocumentInput"></a>

```csharp
public string S3PolicyDocumentInput { get; }
```

- *Type:* string

---

##### `StsAccessInput`<sup>Optional</sup> <a name="StsAccessInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsAccessInput"></a>

```csharp
public string StsAccessInput { get; }
```

- *Type:* string

---

##### `StsPolicyDocumentInput`<sup>Optional</sup> <a name="StsPolicyDocumentInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsPolicyDocumentInput"></a>

```csharp
public string StsPolicyDocumentInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.tagsInput"></a>

```csharp
public IResolvable|OdbOdbNetworkTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>[]

---

##### `ZeroEtlAccessInput`<sup>Optional</sup> <a name="ZeroEtlAccessInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.zeroEtlAccessInput"></a>

```csharp
public string ZeroEtlAccessInput { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `BackupSubnetCidr`<sup>Required</sup> <a name="BackupSubnetCidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.backupSubnetCidr"></a>

```csharp
public string BackupSubnetCidr { get; }
```

- *Type:* string

---

##### `ClientSubnetCidr`<sup>Required</sup> <a name="ClientSubnetCidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.clientSubnetCidr"></a>

```csharp
public string ClientSubnetCidr { get; }
```

- *Type:* string

---

##### `CrossRegionS3RestoreSources`<sup>Required</sup> <a name="CrossRegionS3RestoreSources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.crossRegionS3RestoreSources"></a>

```csharp
public string[] CrossRegionS3RestoreSources { get; }
```

- *Type:* string[]

---

##### `CustomDomainName`<sup>Required</sup> <a name="CustomDomainName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.customDomainName"></a>

```csharp
public string CustomDomainName { get; }
```

- *Type:* string

---

##### `DefaultDnsPrefix`<sup>Required</sup> <a name="DefaultDnsPrefix" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.defaultDnsPrefix"></a>

```csharp
public string DefaultDnsPrefix { get; }
```

- *Type:* string

---

##### `DeleteAssociatedResources`<sup>Required</sup> <a name="DeleteAssociatedResources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.deleteAssociatedResources"></a>

```csharp
public bool|IResolvable DeleteAssociatedResources { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `KmsAccess`<sup>Required</sup> <a name="KmsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsAccess"></a>

```csharp
public string KmsAccess { get; }
```

- *Type:* string

---

##### `KmsPolicyDocument`<sup>Required</sup> <a name="KmsPolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsPolicyDocument"></a>

```csharp
public string KmsPolicyDocument { get; }
```

- *Type:* string

---

##### `S3Access`<sup>Required</sup> <a name="S3Access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3Access"></a>

```csharp
public string S3Access { get; }
```

- *Type:* string

---

##### `S3PolicyDocument`<sup>Required</sup> <a name="S3PolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3PolicyDocument"></a>

```csharp
public string S3PolicyDocument { get; }
```

- *Type:* string

---

##### `StsAccess`<sup>Required</sup> <a name="StsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsAccess"></a>

```csharp
public string StsAccess { get; }
```

- *Type:* string

---

##### `StsPolicyDocument`<sup>Required</sup> <a name="StsPolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsPolicyDocument"></a>

```csharp
public string StsPolicyDocument { get; }
```

- *Type:* string

---

##### `ZeroEtlAccess`<sup>Required</sup> <a name="ZeroEtlAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.zeroEtlAccess"></a>

```csharp
public string ZeroEtlAccess { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OdbOdbNetworkConfig <a name="OdbOdbNetworkConfig" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AvailabilityZone = null,
    string AvailabilityZoneId = null,
    string BackupSubnetCidr = null,
    string ClientSubnetCidr = null,
    string[] CrossRegionS3RestoreSources = null,
    string CustomDomainName = null,
    string DefaultDnsPrefix = null,
    bool|IResolvable DeleteAssociatedResources = null,
    string DisplayName = null,
    string KmsAccess = null,
    string KmsPolicyDocument = null,
    string S3Access = null,
    string S3PolicyDocument = null,
    string StsAccess = null,
    string StsPolicyDocument = null,
    IResolvable|OdbOdbNetworkTags[] Tags = null,
    string ZeroEtlAccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | The AWS Availability Zone (AZ) where the ODB network is located. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | The AZ ID of the AZ where the ODB network is located. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.backupSubnetCidr">BackupSubnetCidr</a></code> | <code>string</code> | The CIDR range of the backup subnet in the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.clientSubnetCidr">ClientSubnetCidr</a></code> | <code>string</code> | The CIDR range of the client subnet in the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.crossRegionS3RestoreSources">CrossRegionS3RestoreSources</a></code> | <code>string[]</code> | The cross-Region Amazon S3 restore sources for the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.customDomainName">CustomDomainName</a></code> | <code>string</code> | The domain name to use for the resources in the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.defaultDnsPrefix">DefaultDnsPrefix</a></code> | <code>string</code> | The DNS prefix to the default DNS domain name. The default DNS domain name is oraclevcn.com. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.deleteAssociatedResources">DeleteAssociatedResources</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to delete associated OCI networking resources along with the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The user-friendly name of the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.kmsAccess">KmsAccess</a></code> | <code>string</code> | The AWS Key Management Service (KMS) access configuration for the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.kmsPolicyDocument">KmsPolicyDocument</a></code> | <code>string</code> | The AWS Key Management Service (KMS) policy document that defines permissions for key usage within the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.s3Access">S3Access</a></code> | <code>string</code> | Specifies the configuration for Amazon S3 access from the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.s3PolicyDocument">S3PolicyDocument</a></code> | <code>string</code> | Specifies the endpoint policy for Amazon S3 access from the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.stsAccess">StsAccess</a></code> | <code>string</code> | The AWS Security Token Service (STS) access configuration for the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.stsPolicyDocument">StsPolicyDocument</a></code> | <code>string</code> | The AWS Security Token Service (STS) policy document that defines permissions for token service usage within the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>[]</code> | Tags to assign to the Odb Network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.zeroEtlAccess">ZeroEtlAccess</a></code> | <code>string</code> | Specifies the configuration for Zero-ETL access from the ODB network. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

The AWS Availability Zone (AZ) where the ODB network is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_network#availability_zone OdbOdbNetwork#availability_zone}

---

##### `AvailabilityZoneId`<sup>Optional</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; set; }
```

- *Type:* string

The AZ ID of the AZ where the ODB network is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_network#availability_zone_id OdbOdbNetwork#availability_zone_id}

---

##### `BackupSubnetCidr`<sup>Optional</sup> <a name="BackupSubnetCidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.backupSubnetCidr"></a>

```csharp
public string BackupSubnetCidr { get; set; }
```

- *Type:* string

The CIDR range of the backup subnet in the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_network#backup_subnet_cidr OdbOdbNetwork#backup_subnet_cidr}

---

##### `ClientSubnetCidr`<sup>Optional</sup> <a name="ClientSubnetCidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.clientSubnetCidr"></a>

```csharp
public string ClientSubnetCidr { get; set; }
```

- *Type:* string

The CIDR range of the client subnet in the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_network#client_subnet_cidr OdbOdbNetwork#client_subnet_cidr}

---

##### `CrossRegionS3RestoreSources`<sup>Optional</sup> <a name="CrossRegionS3RestoreSources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.crossRegionS3RestoreSources"></a>

```csharp
public string[] CrossRegionS3RestoreSources { get; set; }
```

- *Type:* string[]

The cross-Region Amazon S3 restore sources for the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_network#cross_region_s3_restore_sources OdbOdbNetwork#cross_region_s3_restore_sources}

---

##### `CustomDomainName`<sup>Optional</sup> <a name="CustomDomainName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.customDomainName"></a>

```csharp
public string CustomDomainName { get; set; }
```

- *Type:* string

The domain name to use for the resources in the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_network#custom_domain_name OdbOdbNetwork#custom_domain_name}

---

##### `DefaultDnsPrefix`<sup>Optional</sup> <a name="DefaultDnsPrefix" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.defaultDnsPrefix"></a>

```csharp
public string DefaultDnsPrefix { get; set; }
```

- *Type:* string

The DNS prefix to the default DNS domain name. The default DNS domain name is oraclevcn.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_network#default_dns_prefix OdbOdbNetwork#default_dns_prefix}

---

##### `DeleteAssociatedResources`<sup>Optional</sup> <a name="DeleteAssociatedResources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.deleteAssociatedResources"></a>

```csharp
public bool|IResolvable DeleteAssociatedResources { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to delete associated OCI networking resources along with the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_network#delete_associated_resources OdbOdbNetwork#delete_associated_resources}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The user-friendly name of the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_network#display_name OdbOdbNetwork#display_name}

---

##### `KmsAccess`<sup>Optional</sup> <a name="KmsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.kmsAccess"></a>

```csharp
public string KmsAccess { get; set; }
```

- *Type:* string

The AWS Key Management Service (KMS) access configuration for the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_network#kms_access OdbOdbNetwork#kms_access}

---

##### `KmsPolicyDocument`<sup>Optional</sup> <a name="KmsPolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.kmsPolicyDocument"></a>

```csharp
public string KmsPolicyDocument { get; set; }
```

- *Type:* string

The AWS Key Management Service (KMS) policy document that defines permissions for key usage within the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_network#kms_policy_document OdbOdbNetwork#kms_policy_document}

---

##### `S3Access`<sup>Optional</sup> <a name="S3Access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.s3Access"></a>

```csharp
public string S3Access { get; set; }
```

- *Type:* string

Specifies the configuration for Amazon S3 access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_network#s3_access OdbOdbNetwork#s3_access}

---

##### `S3PolicyDocument`<sup>Optional</sup> <a name="S3PolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.s3PolicyDocument"></a>

```csharp
public string S3PolicyDocument { get; set; }
```

- *Type:* string

Specifies the endpoint policy for Amazon S3 access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_network#s3_policy_document OdbOdbNetwork#s3_policy_document}

---

##### `StsAccess`<sup>Optional</sup> <a name="StsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.stsAccess"></a>

```csharp
public string StsAccess { get; set; }
```

- *Type:* string

The AWS Security Token Service (STS) access configuration for the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_network#sts_access OdbOdbNetwork#sts_access}

---

##### `StsPolicyDocument`<sup>Optional</sup> <a name="StsPolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.stsPolicyDocument"></a>

```csharp
public string StsPolicyDocument { get; set; }
```

- *Type:* string

The AWS Security Token Service (STS) policy document that defines permissions for token service usage within the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_network#sts_policy_document OdbOdbNetwork#sts_policy_document}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.tags"></a>

```csharp
public IResolvable|OdbOdbNetworkTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>[]

Tags to assign to the Odb Network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_network#tags OdbOdbNetwork#tags}

---

##### `ZeroEtlAccess`<sup>Optional</sup> <a name="ZeroEtlAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.zeroEtlAccess"></a>

```csharp
public string ZeroEtlAccess { get; set; }
```

- *Type:* string

Specifies the configuration for Zero-ETL access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_network#zero_etl_access OdbOdbNetwork#zero_etl_access}

---

### OdbOdbNetworkManagedServices <a name="OdbOdbNetworkManagedServices" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServices.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkManagedServices {

};
```


### OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess <a name="OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess {

};
```


### OdbOdbNetworkManagedServicesKmsAccess <a name="OdbOdbNetworkManagedServicesKmsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkManagedServicesKmsAccess {

};
```


### OdbOdbNetworkManagedServicesManagedS3BackupAccess <a name="OdbOdbNetworkManagedServicesManagedS3BackupAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkManagedServicesManagedS3BackupAccess {

};
```


### OdbOdbNetworkManagedServicesS3Access <a name="OdbOdbNetworkManagedServicesS3Access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3Access"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3Access.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkManagedServicesS3Access {

};
```


### OdbOdbNetworkManagedServicesServiceNetworkEndpoint <a name="OdbOdbNetworkManagedServicesServiceNetworkEndpoint" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkManagedServicesServiceNetworkEndpoint {

};
```


### OdbOdbNetworkManagedServicesStsAccess <a name="OdbOdbNetworkManagedServicesStsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkManagedServicesStsAccess {

};
```


### OdbOdbNetworkManagedServicesZeroEtlAccess <a name="OdbOdbNetworkManagedServicesZeroEtlAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkManagedServicesZeroEtlAccess {

};
```


### OdbOdbNetworkTags <a name="OdbOdbNetworkTags" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_network#value OdbOdbNetwork#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList <a name="OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get"></a>

```csharp
private OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference <a name="OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess">OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.ipv4Addresses"></a>

```csharp
public string[] Ipv4Addresses { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.internalValue"></a>

```csharp
public OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess">OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess</a>

---


### OdbOdbNetworkManagedServicesKmsAccessOutputReference <a name="OdbOdbNetworkManagedServicesKmsAccessOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkManagedServicesKmsAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.kmsPolicyDocument">KmsPolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccess">OdbOdbNetworkManagedServicesKmsAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.ipv4Addresses"></a>

```csharp
public string[] Ipv4Addresses { get; }
```

- *Type:* string[]

---

##### `KmsPolicyDocument`<sup>Required</sup> <a name="KmsPolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.kmsPolicyDocument"></a>

```csharp
public string KmsPolicyDocument { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.internalValue"></a>

```csharp
public OdbOdbNetworkManagedServicesKmsAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccess">OdbOdbNetworkManagedServicesKmsAccess</a>

---


### OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference <a name="OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccess">OdbOdbNetworkManagedServicesManagedS3BackupAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.ipv4Addresses"></a>

```csharp
public string[] Ipv4Addresses { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.internalValue"></a>

```csharp
public OdbOdbNetworkManagedServicesManagedS3BackupAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccess">OdbOdbNetworkManagedServicesManagedS3BackupAccess</a>

---


### OdbOdbNetworkManagedServicesOutputReference <a name="OdbOdbNetworkManagedServicesOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkManagedServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.crossRegionS3RestoreSourcesAccess">CrossRegionS3RestoreSourcesAccess</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList">OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.kmsAccess">KmsAccess</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference">OdbOdbNetworkManagedServicesKmsAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.managedS3BackupAccess">ManagedS3BackupAccess</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference">OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.managedServicesIpv4Cidrs">ManagedServicesIpv4Cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.resourceGatewayArn">ResourceGatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.s3Access">S3Access</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference">OdbOdbNetworkManagedServicesS3AccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkArn">ServiceNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkEndpoint">ServiceNetworkEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference">OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.stsAccess">StsAccess</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference">OdbOdbNetworkManagedServicesStsAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.zeroEtlAccess">ZeroEtlAccess</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference">OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServices">OdbOdbNetworkManagedServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrossRegionS3RestoreSourcesAccess`<sup>Required</sup> <a name="CrossRegionS3RestoreSourcesAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.crossRegionS3RestoreSourcesAccess"></a>

```csharp
public OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList CrossRegionS3RestoreSourcesAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList">OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList</a>

---

##### `KmsAccess`<sup>Required</sup> <a name="KmsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.kmsAccess"></a>

```csharp
public OdbOdbNetworkManagedServicesKmsAccessOutputReference KmsAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference">OdbOdbNetworkManagedServicesKmsAccessOutputReference</a>

---

##### `ManagedS3BackupAccess`<sup>Required</sup> <a name="ManagedS3BackupAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.managedS3BackupAccess"></a>

```csharp
public OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference ManagedS3BackupAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference">OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference</a>

---

##### `ManagedServicesIpv4Cidrs`<sup>Required</sup> <a name="ManagedServicesIpv4Cidrs" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.managedServicesIpv4Cidrs"></a>

```csharp
public string[] ManagedServicesIpv4Cidrs { get; }
```

- *Type:* string[]

---

##### `ResourceGatewayArn`<sup>Required</sup> <a name="ResourceGatewayArn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.resourceGatewayArn"></a>

```csharp
public string ResourceGatewayArn { get; }
```

- *Type:* string

---

##### `S3Access`<sup>Required</sup> <a name="S3Access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.s3Access"></a>

```csharp
public OdbOdbNetworkManagedServicesS3AccessOutputReference S3Access { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference">OdbOdbNetworkManagedServicesS3AccessOutputReference</a>

---

##### `ServiceNetworkArn`<sup>Required</sup> <a name="ServiceNetworkArn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkArn"></a>

```csharp
public string ServiceNetworkArn { get; }
```

- *Type:* string

---

##### `ServiceNetworkEndpoint`<sup>Required</sup> <a name="ServiceNetworkEndpoint" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkEndpoint"></a>

```csharp
public OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference ServiceNetworkEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference">OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference</a>

---

##### `StsAccess`<sup>Required</sup> <a name="StsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.stsAccess"></a>

```csharp
public OdbOdbNetworkManagedServicesStsAccessOutputReference StsAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference">OdbOdbNetworkManagedServicesStsAccessOutputReference</a>

---

##### `ZeroEtlAccess`<sup>Required</sup> <a name="ZeroEtlAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.zeroEtlAccess"></a>

```csharp
public OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference ZeroEtlAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference">OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.internalValue"></a>

```csharp
public OdbOdbNetworkManagedServices InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServices">OdbOdbNetworkManagedServices</a>

---


### OdbOdbNetworkManagedServicesS3AccessOutputReference <a name="OdbOdbNetworkManagedServicesS3AccessOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkManagedServicesS3AccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.s3PolicyDocument">S3PolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3Access">OdbOdbNetworkManagedServicesS3Access</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.ipv4Addresses"></a>

```csharp
public string[] Ipv4Addresses { get; }
```

- *Type:* string[]

---

##### `S3PolicyDocument`<sup>Required</sup> <a name="S3PolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.s3PolicyDocument"></a>

```csharp
public string S3PolicyDocument { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.internalValue"></a>

```csharp
public OdbOdbNetworkManagedServicesS3Access InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3Access">OdbOdbNetworkManagedServicesS3Access</a>

---


### OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference <a name="OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointType">VpcEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpoint">OdbOdbNetworkManagedServicesServiceNetworkEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; }
```

- *Type:* string

---

##### `VpcEndpointType`<sup>Required</sup> <a name="VpcEndpointType" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointType"></a>

```csharp
public string VpcEndpointType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.internalValue"></a>

```csharp
public OdbOdbNetworkManagedServicesServiceNetworkEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpoint">OdbOdbNetworkManagedServicesServiceNetworkEndpoint</a>

---


### OdbOdbNetworkManagedServicesStsAccessOutputReference <a name="OdbOdbNetworkManagedServicesStsAccessOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkManagedServicesStsAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.stsPolicyDocument">StsPolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccess">OdbOdbNetworkManagedServicesStsAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.ipv4Addresses"></a>

```csharp
public string[] Ipv4Addresses { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StsPolicyDocument`<sup>Required</sup> <a name="StsPolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.stsPolicyDocument"></a>

```csharp
public string StsPolicyDocument { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.internalValue"></a>

```csharp
public OdbOdbNetworkManagedServicesStsAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccess">OdbOdbNetworkManagedServicesStsAccess</a>

---


### OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference <a name="OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccess">OdbOdbNetworkManagedServicesZeroEtlAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.internalValue"></a>

```csharp
public OdbOdbNetworkManagedServicesZeroEtlAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccess">OdbOdbNetworkManagedServicesZeroEtlAccess</a>

---


### OdbOdbNetworkTagsList <a name="OdbOdbNetworkTagsList" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.get"></a>

```csharp
private OdbOdbNetworkTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.property.internalValue"></a>

```csharp
public IResolvable|OdbOdbNetworkTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>[]

---


### OdbOdbNetworkTagsOutputReference <a name="OdbOdbNetworkTagsOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbNetworkTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbOdbNetworkTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>

---



