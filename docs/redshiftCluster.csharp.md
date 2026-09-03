# `redshiftCluster` Submodule <a name="`redshiftCluster` Submodule" id="@cdktn/provider-awscc.redshiftCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftCluster <a name="RedshiftCluster" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster awscc_redshift_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftCluster(Construct Scope, string Id, RedshiftClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig">RedshiftClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig">RedshiftClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putEndpoint">PutEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putLoggingProperties">PutLoggingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAllowVersionUpgrade">ResetAllowVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAquaConfigurationStatus">ResetAquaConfigurationStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAutomatedSnapshotRetentionPeriod">ResetAutomatedSnapshotRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocation">ResetAvailabilityZoneRelocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocationStatus">ResetAvailabilityZoneRelocationStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClassic">ResetClassic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterIdentifier">ResetClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterParameterGroupName">ResetClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterSecurityGroups">ResetClusterSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterSubnetGroupName">ResetClusterSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterVersion">ResetClusterVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenance">ResetDeferMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceDuration">ResetDeferMaintenanceDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceEndTime">ResetDeferMaintenanceEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceStartTime">ResetDeferMaintenanceStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDestinationRegion">ResetDestinationRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetElasticIp">ResetElasticIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEnhancedVpcRouting">ResetEnhancedVpcRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetHsmClientCertificateIdentifier">ResetHsmClientCertificateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetHsmConfigurationIdentifier">ResetHsmConfigurationIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetIamRoles">ResetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetLoggingProperties">ResetLoggingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMaintenanceTrackName">ResetMaintenanceTrackName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetManageMasterPassword">ResetManageMasterPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetManualSnapshotRetentionPeriod">ResetManualSnapshotRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMasterPasswordSecretKmsKeyId">ResetMasterPasswordSecretKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMasterUserPassword">ResetMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMultiAz">ResetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetNamespaceResourcePolicy">ResetNamespaceResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetNumberOfNodes">ResetNumberOfNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetOwnerAccount">ResetOwnerAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPubliclyAccessible">ResetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetResourceAction">ResetResourceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetRevisionTarget">ResetRevisionTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetRotateEncryptionKey">ResetRotateEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotClusterIdentifier">ResetSnapshotClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyGrantName">ResetSnapshotCopyGrantName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyManual">ResetSnapshotCopyManual</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyRetentionPeriod">ResetSnapshotCopyRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotIdentifier">ResetSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpoint` <a name="PutEndpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putEndpoint"></a>

```csharp
private void PutEndpoint(RedshiftClusterEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a>

---

##### `PutLoggingProperties` <a name="PutLoggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putLoggingProperties"></a>

```csharp
private void PutLoggingProperties(RedshiftClusterLoggingProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putLoggingProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putTags"></a>

```csharp
private void PutTags(IResolvable|RedshiftClusterTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>[]

---

##### `ResetAllowVersionUpgrade` <a name="ResetAllowVersionUpgrade" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAllowVersionUpgrade"></a>

```csharp
private void ResetAllowVersionUpgrade()
```

##### `ResetAquaConfigurationStatus` <a name="ResetAquaConfigurationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAquaConfigurationStatus"></a>

```csharp
private void ResetAquaConfigurationStatus()
```

##### `ResetAutomatedSnapshotRetentionPeriod` <a name="ResetAutomatedSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAutomatedSnapshotRetentionPeriod"></a>

```csharp
private void ResetAutomatedSnapshotRetentionPeriod()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetAvailabilityZoneRelocation` <a name="ResetAvailabilityZoneRelocation" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocation"></a>

```csharp
private void ResetAvailabilityZoneRelocation()
```

##### `ResetAvailabilityZoneRelocationStatus` <a name="ResetAvailabilityZoneRelocationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocationStatus"></a>

```csharp
private void ResetAvailabilityZoneRelocationStatus()
```

##### `ResetClassic` <a name="ResetClassic" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClassic"></a>

```csharp
private void ResetClassic()
```

##### `ResetClusterIdentifier` <a name="ResetClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterIdentifier"></a>

```csharp
private void ResetClusterIdentifier()
```

##### `ResetClusterParameterGroupName` <a name="ResetClusterParameterGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterParameterGroupName"></a>

```csharp
private void ResetClusterParameterGroupName()
```

##### `ResetClusterSecurityGroups` <a name="ResetClusterSecurityGroups" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterSecurityGroups"></a>

```csharp
private void ResetClusterSecurityGroups()
```

##### `ResetClusterSubnetGroupName` <a name="ResetClusterSubnetGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterSubnetGroupName"></a>

```csharp
private void ResetClusterSubnetGroupName()
```

##### `ResetClusterVersion` <a name="ResetClusterVersion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterVersion"></a>

```csharp
private void ResetClusterVersion()
```

##### `ResetDeferMaintenance` <a name="ResetDeferMaintenance" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenance"></a>

```csharp
private void ResetDeferMaintenance()
```

##### `ResetDeferMaintenanceDuration` <a name="ResetDeferMaintenanceDuration" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceDuration"></a>

```csharp
private void ResetDeferMaintenanceDuration()
```

##### `ResetDeferMaintenanceEndTime` <a name="ResetDeferMaintenanceEndTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceEndTime"></a>

```csharp
private void ResetDeferMaintenanceEndTime()
```

##### `ResetDeferMaintenanceStartTime` <a name="ResetDeferMaintenanceStartTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceStartTime"></a>

```csharp
private void ResetDeferMaintenanceStartTime()
```

##### `ResetDestinationRegion` <a name="ResetDestinationRegion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDestinationRegion"></a>

```csharp
private void ResetDestinationRegion()
```

##### `ResetElasticIp` <a name="ResetElasticIp" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetElasticIp"></a>

```csharp
private void ResetElasticIp()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetEnhancedVpcRouting` <a name="ResetEnhancedVpcRouting" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEnhancedVpcRouting"></a>

```csharp
private void ResetEnhancedVpcRouting()
```

##### `ResetHsmClientCertificateIdentifier` <a name="ResetHsmClientCertificateIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetHsmClientCertificateIdentifier"></a>

```csharp
private void ResetHsmClientCertificateIdentifier()
```

##### `ResetHsmConfigurationIdentifier` <a name="ResetHsmConfigurationIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetHsmConfigurationIdentifier"></a>

```csharp
private void ResetHsmConfigurationIdentifier()
```

##### `ResetIamRoles` <a name="ResetIamRoles" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetIamRoles"></a>

```csharp
private void ResetIamRoles()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetLoggingProperties` <a name="ResetLoggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetLoggingProperties"></a>

```csharp
private void ResetLoggingProperties()
```

##### `ResetMaintenanceTrackName` <a name="ResetMaintenanceTrackName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMaintenanceTrackName"></a>

```csharp
private void ResetMaintenanceTrackName()
```

##### `ResetManageMasterPassword` <a name="ResetManageMasterPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetManageMasterPassword"></a>

```csharp
private void ResetManageMasterPassword()
```

##### `ResetManualSnapshotRetentionPeriod` <a name="ResetManualSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetManualSnapshotRetentionPeriod"></a>

```csharp
private void ResetManualSnapshotRetentionPeriod()
```

##### `ResetMasterPasswordSecretKmsKeyId` <a name="ResetMasterPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMasterPasswordSecretKmsKeyId"></a>

```csharp
private void ResetMasterPasswordSecretKmsKeyId()
```

##### `ResetMasterUserPassword` <a name="ResetMasterUserPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMasterUserPassword"></a>

```csharp
private void ResetMasterUserPassword()
```

##### `ResetMultiAz` <a name="ResetMultiAz" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMultiAz"></a>

```csharp
private void ResetMultiAz()
```

##### `ResetNamespaceResourcePolicy` <a name="ResetNamespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetNamespaceResourcePolicy"></a>

```csharp
private void ResetNamespaceResourcePolicy()
```

##### `ResetNumberOfNodes` <a name="ResetNumberOfNodes" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetNumberOfNodes"></a>

```csharp
private void ResetNumberOfNodes()
```

##### `ResetOwnerAccount` <a name="ResetOwnerAccount" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetOwnerAccount"></a>

```csharp
private void ResetOwnerAccount()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPreferredMaintenanceWindow"></a>

```csharp
private void ResetPreferredMaintenanceWindow()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPubliclyAccessible"></a>

```csharp
private void ResetPubliclyAccessible()
```

##### `ResetResourceAction` <a name="ResetResourceAction" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetResourceAction"></a>

```csharp
private void ResetResourceAction()
```

##### `ResetRevisionTarget` <a name="ResetRevisionTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetRevisionTarget"></a>

```csharp
private void ResetRevisionTarget()
```

##### `ResetRotateEncryptionKey` <a name="ResetRotateEncryptionKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetRotateEncryptionKey"></a>

```csharp
private void ResetRotateEncryptionKey()
```

##### `ResetSnapshotClusterIdentifier` <a name="ResetSnapshotClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotClusterIdentifier"></a>

```csharp
private void ResetSnapshotClusterIdentifier()
```

##### `ResetSnapshotCopyGrantName` <a name="ResetSnapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyGrantName"></a>

```csharp
private void ResetSnapshotCopyGrantName()
```

##### `ResetSnapshotCopyManual` <a name="ResetSnapshotCopyManual" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyManual"></a>

```csharp
private void ResetSnapshotCopyManual()
```

##### `ResetSnapshotCopyRetentionPeriod` <a name="ResetSnapshotCopyRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyRetentionPeriod"></a>

```csharp
private void ResetSnapshotCopyRetentionPeriod()
```

##### `ResetSnapshotIdentifier` <a name="ResetSnapshotIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotIdentifier"></a>

```csharp
private void ResetSnapshotIdentifier()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetVpcSecurityGroupIds"></a>

```csharp
private void ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RedshiftCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RedshiftCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RedshiftCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RedshiftCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RedshiftCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterNamespaceArn">ClusterNamespaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceIdentifier">DeferMaintenanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference">RedshiftClusterEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.loggingProperties">LoggingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference">RedshiftClusterLoggingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretArn">MasterPasswordSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList">RedshiftClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.allowVersionUpgradeInput">AllowVersionUpgradeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatusInput">AquaConfigurationStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriodInput">AutomatedSnapshotRetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationInput">AvailabilityZoneRelocationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationStatusInput">AvailabilityZoneRelocationStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.classicInput">ClassicInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterParameterGroupNameInput">ClusterParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSecurityGroupsInput">ClusterSecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupNameInput">ClusterSubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterTypeInput">ClusterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterVersionInput">ClusterVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dbNameInput">DbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceDurationInput">DeferMaintenanceDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceEndTimeInput">DeferMaintenanceEndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceInput">DeferMaintenanceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceStartTimeInput">DeferMaintenanceStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.destinationRegionInput">DestinationRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.elasticIpInput">ElasticIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.encryptedInput">EncryptedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.endpointInput">EndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.enhancedVpcRoutingInput">EnhancedVpcRoutingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmClientCertificateIdentifierInput">HsmClientCertificateIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmConfigurationIdentifierInput">HsmConfigurationIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.iamRolesInput">IamRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.loggingPropertiesInput">LoggingPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.maintenanceTrackNameInput">MaintenanceTrackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manageMasterPasswordInput">ManageMasterPasswordInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriodInput">ManualSnapshotRetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyIdInput">MasterPasswordSecretKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUsernameInput">MasterUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUserPasswordInput">MasterUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.multiAzInput">MultiAzInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.namespaceResourcePolicyInput">NamespaceResourcePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.nodeTypeInput">NodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.numberOfNodesInput">NumberOfNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.ownerAccountInput">OwnerAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.resourceActionInput">ResourceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.revisionTargetInput">RevisionTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.rotateEncryptionKeyInput">RotateEncryptionKeyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifierInput">SnapshotClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyGrantNameInput">SnapshotCopyGrantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyManualInput">SnapshotCopyManualInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyRetentionPeriodInput">SnapshotCopyRetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotIdentifierInput">SnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.allowVersionUpgrade">AllowVersionUpgrade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatus">AquaConfigurationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriod">AutomatedSnapshotRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocation">AvailabilityZoneRelocation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationStatus">AvailabilityZoneRelocationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.classic">Classic</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterParameterGroupName">ClusterParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSecurityGroups">ClusterSecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupName">ClusterSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterType">ClusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenance">DeferMaintenance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceDuration">DeferMaintenanceDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceEndTime">DeferMaintenanceEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceStartTime">DeferMaintenanceStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.destinationRegion">DestinationRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.elasticIp">ElasticIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.encrypted">Encrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.enhancedVpcRouting">EnhancedVpcRouting</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmClientCertificateIdentifier">HsmClientCertificateIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmConfigurationIdentifier">HsmConfigurationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.iamRoles">IamRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.maintenanceTrackName">MaintenanceTrackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manageMasterPassword">ManageMasterPassword</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriod">ManualSnapshotRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyId">MasterPasswordSecretKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUsername">MasterUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUserPassword">MasterUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.multiAz">MultiAz</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.namespaceResourcePolicy">NamespaceResourcePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.nodeType">NodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.numberOfNodes">NumberOfNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.ownerAccount">OwnerAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.resourceAction">ResourceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.revisionTarget">RevisionTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.rotateEncryptionKey">RotateEncryptionKey</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifier">SnapshotClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyGrantName">SnapshotCopyGrantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyManual">SnapshotCopyManual</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyRetentionPeriod">SnapshotCopyRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClusterNamespaceArn`<sup>Required</sup> <a name="ClusterNamespaceArn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterNamespaceArn"></a>

```csharp
public string ClusterNamespaceArn { get; }
```

- *Type:* string

---

##### `DeferMaintenanceIdentifier`<sup>Required</sup> <a name="DeferMaintenanceIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceIdentifier"></a>

```csharp
public string DeferMaintenanceIdentifier { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.endpoint"></a>

```csharp
public RedshiftClusterEndpointOutputReference Endpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference">RedshiftClusterEndpointOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoggingProperties`<sup>Required</sup> <a name="LoggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.loggingProperties"></a>

```csharp
public RedshiftClusterLoggingPropertiesOutputReference LoggingProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference">RedshiftClusterLoggingPropertiesOutputReference</a>

---

##### `MasterPasswordSecretArn`<sup>Required</sup> <a name="MasterPasswordSecretArn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretArn"></a>

```csharp
public string MasterPasswordSecretArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tags"></a>

```csharp
public RedshiftClusterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList">RedshiftClusterTagsList</a>

---

##### `AllowVersionUpgradeInput`<sup>Optional</sup> <a name="AllowVersionUpgradeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.allowVersionUpgradeInput"></a>

```csharp
public bool|IResolvable AllowVersionUpgradeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AquaConfigurationStatusInput`<sup>Optional</sup> <a name="AquaConfigurationStatusInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatusInput"></a>

```csharp
public string AquaConfigurationStatusInput { get; }
```

- *Type:* string

---

##### `AutomatedSnapshotRetentionPeriodInput`<sup>Optional</sup> <a name="AutomatedSnapshotRetentionPeriodInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriodInput"></a>

```csharp
public double AutomatedSnapshotRetentionPeriodInput { get; }
```

- *Type:* double

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneRelocationInput`<sup>Optional</sup> <a name="AvailabilityZoneRelocationInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationInput"></a>

```csharp
public bool|IResolvable AvailabilityZoneRelocationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AvailabilityZoneRelocationStatusInput`<sup>Optional</sup> <a name="AvailabilityZoneRelocationStatusInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationStatusInput"></a>

```csharp
public string AvailabilityZoneRelocationStatusInput { get; }
```

- *Type:* string

---

##### `ClassicInput`<sup>Optional</sup> <a name="ClassicInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.classicInput"></a>

```csharp
public bool|IResolvable ClassicInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterIdentifierInput"></a>

```csharp
public string ClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `ClusterParameterGroupNameInput`<sup>Optional</sup> <a name="ClusterParameterGroupNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterParameterGroupNameInput"></a>

```csharp
public string ClusterParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `ClusterSecurityGroupsInput`<sup>Optional</sup> <a name="ClusterSecurityGroupsInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSecurityGroupsInput"></a>

```csharp
public string[] ClusterSecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `ClusterSubnetGroupNameInput`<sup>Optional</sup> <a name="ClusterSubnetGroupNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupNameInput"></a>

```csharp
public string ClusterSubnetGroupNameInput { get; }
```

- *Type:* string

---

##### `ClusterTypeInput`<sup>Optional</sup> <a name="ClusterTypeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterTypeInput"></a>

```csharp
public string ClusterTypeInput { get; }
```

- *Type:* string

---

##### `ClusterVersionInput`<sup>Optional</sup> <a name="ClusterVersionInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterVersionInput"></a>

```csharp
public string ClusterVersionInput { get; }
```

- *Type:* string

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dbNameInput"></a>

```csharp
public string DbNameInput { get; }
```

- *Type:* string

---

##### `DeferMaintenanceDurationInput`<sup>Optional</sup> <a name="DeferMaintenanceDurationInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceDurationInput"></a>

```csharp
public double DeferMaintenanceDurationInput { get; }
```

- *Type:* double

---

##### `DeferMaintenanceEndTimeInput`<sup>Optional</sup> <a name="DeferMaintenanceEndTimeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceEndTimeInput"></a>

```csharp
public string DeferMaintenanceEndTimeInput { get; }
```

- *Type:* string

---

##### `DeferMaintenanceInput`<sup>Optional</sup> <a name="DeferMaintenanceInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceInput"></a>

```csharp
public bool|IResolvable DeferMaintenanceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeferMaintenanceStartTimeInput`<sup>Optional</sup> <a name="DeferMaintenanceStartTimeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceStartTimeInput"></a>

```csharp
public string DeferMaintenanceStartTimeInput { get; }
```

- *Type:* string

---

##### `DestinationRegionInput`<sup>Optional</sup> <a name="DestinationRegionInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.destinationRegionInput"></a>

```csharp
public string DestinationRegionInput { get; }
```

- *Type:* string

---

##### `ElasticIpInput`<sup>Optional</sup> <a name="ElasticIpInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.elasticIpInput"></a>

```csharp
public string ElasticIpInput { get; }
```

- *Type:* string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.encryptedInput"></a>

```csharp
public bool|IResolvable EncryptedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.endpointInput"></a>

```csharp
public IResolvable|RedshiftClusterEndpoint EndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a>

---

##### `EnhancedVpcRoutingInput`<sup>Optional</sup> <a name="EnhancedVpcRoutingInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.enhancedVpcRoutingInput"></a>

```csharp
public bool|IResolvable EnhancedVpcRoutingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HsmClientCertificateIdentifierInput`<sup>Optional</sup> <a name="HsmClientCertificateIdentifierInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmClientCertificateIdentifierInput"></a>

```csharp
public string HsmClientCertificateIdentifierInput { get; }
```

- *Type:* string

---

##### `HsmConfigurationIdentifierInput`<sup>Optional</sup> <a name="HsmConfigurationIdentifierInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmConfigurationIdentifierInput"></a>

```csharp
public string HsmConfigurationIdentifierInput { get; }
```

- *Type:* string

---

##### `IamRolesInput`<sup>Optional</sup> <a name="IamRolesInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.iamRolesInput"></a>

```csharp
public string[] IamRolesInput { get; }
```

- *Type:* string[]

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `LoggingPropertiesInput`<sup>Optional</sup> <a name="LoggingPropertiesInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.loggingPropertiesInput"></a>

```csharp
public IResolvable|RedshiftClusterLoggingProperties LoggingPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a>

---

##### `MaintenanceTrackNameInput`<sup>Optional</sup> <a name="MaintenanceTrackNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.maintenanceTrackNameInput"></a>

```csharp
public string MaintenanceTrackNameInput { get; }
```

- *Type:* string

---

##### `ManageMasterPasswordInput`<sup>Optional</sup> <a name="ManageMasterPasswordInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manageMasterPasswordInput"></a>

```csharp
public bool|IResolvable ManageMasterPasswordInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ManualSnapshotRetentionPeriodInput`<sup>Optional</sup> <a name="ManualSnapshotRetentionPeriodInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriodInput"></a>

```csharp
public double ManualSnapshotRetentionPeriodInput { get; }
```

- *Type:* double

---

##### `MasterPasswordSecretKmsKeyIdInput`<sup>Optional</sup> <a name="MasterPasswordSecretKmsKeyIdInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyIdInput"></a>

```csharp
public string MasterPasswordSecretKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `MasterUsernameInput`<sup>Optional</sup> <a name="MasterUsernameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUsernameInput"></a>

```csharp
public string MasterUsernameInput { get; }
```

- *Type:* string

---

##### `MasterUserPasswordInput`<sup>Optional</sup> <a name="MasterUserPasswordInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUserPasswordInput"></a>

```csharp
public string MasterUserPasswordInput { get; }
```

- *Type:* string

---

##### `MultiAzInput`<sup>Optional</sup> <a name="MultiAzInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.multiAzInput"></a>

```csharp
public bool|IResolvable MultiAzInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NamespaceResourcePolicyInput`<sup>Optional</sup> <a name="NamespaceResourcePolicyInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.namespaceResourcePolicyInput"></a>

```csharp
public string NamespaceResourcePolicyInput { get; }
```

- *Type:* string

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.nodeTypeInput"></a>

```csharp
public string NodeTypeInput { get; }
```

- *Type:* string

---

##### `NumberOfNodesInput`<sup>Optional</sup> <a name="NumberOfNodesInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.numberOfNodesInput"></a>

```csharp
public double NumberOfNodesInput { get; }
```

- *Type:* double

---

##### `OwnerAccountInput`<sup>Optional</sup> <a name="OwnerAccountInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.ownerAccountInput"></a>

```csharp
public string OwnerAccountInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindowInput"></a>

```csharp
public string PreferredMaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.publiclyAccessibleInput"></a>

```csharp
public bool|IResolvable PubliclyAccessibleInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourceActionInput`<sup>Optional</sup> <a name="ResourceActionInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.resourceActionInput"></a>

```csharp
public string ResourceActionInput { get; }
```

- *Type:* string

---

##### `RevisionTargetInput`<sup>Optional</sup> <a name="RevisionTargetInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.revisionTargetInput"></a>

```csharp
public string RevisionTargetInput { get; }
```

- *Type:* string

---

##### `RotateEncryptionKeyInput`<sup>Optional</sup> <a name="RotateEncryptionKeyInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.rotateEncryptionKeyInput"></a>

```csharp
public bool|IResolvable RotateEncryptionKeyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SnapshotClusterIdentifierInput`<sup>Optional</sup> <a name="SnapshotClusterIdentifierInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifierInput"></a>

```csharp
public string SnapshotClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `SnapshotCopyGrantNameInput`<sup>Optional</sup> <a name="SnapshotCopyGrantNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyGrantNameInput"></a>

```csharp
public string SnapshotCopyGrantNameInput { get; }
```

- *Type:* string

---

##### `SnapshotCopyManualInput`<sup>Optional</sup> <a name="SnapshotCopyManualInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyManualInput"></a>

```csharp
public bool|IResolvable SnapshotCopyManualInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SnapshotCopyRetentionPeriodInput`<sup>Optional</sup> <a name="SnapshotCopyRetentionPeriodInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyRetentionPeriodInput"></a>

```csharp
public double SnapshotCopyRetentionPeriodInput { get; }
```

- *Type:* double

---

##### `SnapshotIdentifierInput`<sup>Optional</sup> <a name="SnapshotIdentifierInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotIdentifierInput"></a>

```csharp
public string SnapshotIdentifierInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tagsInput"></a>

```csharp
public IResolvable|RedshiftClusterTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>[]

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIdsInput"></a>

```csharp
public string[] VpcSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `AllowVersionUpgrade`<sup>Required</sup> <a name="AllowVersionUpgrade" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.allowVersionUpgrade"></a>

```csharp
public bool|IResolvable AllowVersionUpgrade { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AquaConfigurationStatus`<sup>Required</sup> <a name="AquaConfigurationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatus"></a>

```csharp
public string AquaConfigurationStatus { get; }
```

- *Type:* string

---

##### `AutomatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="AutomatedSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriod"></a>

```csharp
public double AutomatedSnapshotRetentionPeriod { get; }
```

- *Type:* double

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `AvailabilityZoneRelocation`<sup>Required</sup> <a name="AvailabilityZoneRelocation" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocation"></a>

```csharp
public bool|IResolvable AvailabilityZoneRelocation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AvailabilityZoneRelocationStatus`<sup>Required</sup> <a name="AvailabilityZoneRelocationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationStatus"></a>

```csharp
public string AvailabilityZoneRelocationStatus { get; }
```

- *Type:* string

---

##### `Classic`<sup>Required</sup> <a name="Classic" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.classic"></a>

```csharp
public bool|IResolvable Classic { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; }
```

- *Type:* string

---

##### `ClusterParameterGroupName`<sup>Required</sup> <a name="ClusterParameterGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterParameterGroupName"></a>

```csharp
public string ClusterParameterGroupName { get; }
```

- *Type:* string

---

##### `ClusterSecurityGroups`<sup>Required</sup> <a name="ClusterSecurityGroups" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSecurityGroups"></a>

```csharp
public string[] ClusterSecurityGroups { get; }
```

- *Type:* string[]

---

##### `ClusterSubnetGroupName`<sup>Required</sup> <a name="ClusterSubnetGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupName"></a>

```csharp
public string ClusterSubnetGroupName { get; }
```

- *Type:* string

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterType"></a>

```csharp
public string ClusterType { get; }
```

- *Type:* string

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; }
```

- *Type:* string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `DeferMaintenance`<sup>Required</sup> <a name="DeferMaintenance" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenance"></a>

```csharp
public bool|IResolvable DeferMaintenance { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeferMaintenanceDuration`<sup>Required</sup> <a name="DeferMaintenanceDuration" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceDuration"></a>

```csharp
public double DeferMaintenanceDuration { get; }
```

- *Type:* double

---

##### `DeferMaintenanceEndTime`<sup>Required</sup> <a name="DeferMaintenanceEndTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceEndTime"></a>

```csharp
public string DeferMaintenanceEndTime { get; }
```

- *Type:* string

---

##### `DeferMaintenanceStartTime`<sup>Required</sup> <a name="DeferMaintenanceStartTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceStartTime"></a>

```csharp
public string DeferMaintenanceStartTime { get; }
```

- *Type:* string

---

##### `DestinationRegion`<sup>Required</sup> <a name="DestinationRegion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.destinationRegion"></a>

```csharp
public string DestinationRegion { get; }
```

- *Type:* string

---

##### `ElasticIp`<sup>Required</sup> <a name="ElasticIp" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.elasticIp"></a>

```csharp
public string ElasticIp { get; }
```

- *Type:* string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.encrypted"></a>

```csharp
public bool|IResolvable Encrypted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnhancedVpcRouting`<sup>Required</sup> <a name="EnhancedVpcRouting" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.enhancedVpcRouting"></a>

```csharp
public bool|IResolvable EnhancedVpcRouting { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HsmClientCertificateIdentifier`<sup>Required</sup> <a name="HsmClientCertificateIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmClientCertificateIdentifier"></a>

```csharp
public string HsmClientCertificateIdentifier { get; }
```

- *Type:* string

---

##### `HsmConfigurationIdentifier`<sup>Required</sup> <a name="HsmConfigurationIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmConfigurationIdentifier"></a>

```csharp
public string HsmConfigurationIdentifier { get; }
```

- *Type:* string

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.iamRoles"></a>

```csharp
public string[] IamRoles { get; }
```

- *Type:* string[]

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `MaintenanceTrackName`<sup>Required</sup> <a name="MaintenanceTrackName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.maintenanceTrackName"></a>

```csharp
public string MaintenanceTrackName { get; }
```

- *Type:* string

---

##### `ManageMasterPassword`<sup>Required</sup> <a name="ManageMasterPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manageMasterPassword"></a>

```csharp
public bool|IResolvable ManageMasterPassword { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ManualSnapshotRetentionPeriod`<sup>Required</sup> <a name="ManualSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriod"></a>

```csharp
public double ManualSnapshotRetentionPeriod { get; }
```

- *Type:* double

---

##### `MasterPasswordSecretKmsKeyId`<sup>Required</sup> <a name="MasterPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyId"></a>

```csharp
public string MasterPasswordSecretKmsKeyId { get; }
```

- *Type:* string

---

##### `MasterUsername`<sup>Required</sup> <a name="MasterUsername" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUsername"></a>

```csharp
public string MasterUsername { get; }
```

- *Type:* string

---

##### `MasterUserPassword`<sup>Required</sup> <a name="MasterUserPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUserPassword"></a>

```csharp
public string MasterUserPassword { get; }
```

- *Type:* string

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.multiAz"></a>

```csharp
public bool|IResolvable MultiAz { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NamespaceResourcePolicy`<sup>Required</sup> <a name="NamespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.namespaceResourcePolicy"></a>

```csharp
public string NamespaceResourcePolicy { get; }
```

- *Type:* string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.nodeType"></a>

```csharp
public string NodeType { get; }
```

- *Type:* string

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.numberOfNodes"></a>

```csharp
public double NumberOfNodes { get; }
```

- *Type:* double

---

##### `OwnerAccount`<sup>Required</sup> <a name="OwnerAccount" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.ownerAccount"></a>

```csharp
public string OwnerAccount { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; }
```

- *Type:* string

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.publiclyAccessible"></a>

```csharp
public bool|IResolvable PubliclyAccessible { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourceAction`<sup>Required</sup> <a name="ResourceAction" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.resourceAction"></a>

```csharp
public string ResourceAction { get; }
```

- *Type:* string

---

##### `RevisionTarget`<sup>Required</sup> <a name="RevisionTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.revisionTarget"></a>

```csharp
public string RevisionTarget { get; }
```

- *Type:* string

---

##### `RotateEncryptionKey`<sup>Required</sup> <a name="RotateEncryptionKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.rotateEncryptionKey"></a>

```csharp
public bool|IResolvable RotateEncryptionKey { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SnapshotClusterIdentifier`<sup>Required</sup> <a name="SnapshotClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifier"></a>

```csharp
public string SnapshotClusterIdentifier { get; }
```

- *Type:* string

---

##### `SnapshotCopyGrantName`<sup>Required</sup> <a name="SnapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyGrantName"></a>

```csharp
public string SnapshotCopyGrantName { get; }
```

- *Type:* string

---

##### `SnapshotCopyManual`<sup>Required</sup> <a name="SnapshotCopyManual" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyManual"></a>

```csharp
public bool|IResolvable SnapshotCopyManual { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SnapshotCopyRetentionPeriod`<sup>Required</sup> <a name="SnapshotCopyRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyRetentionPeriod"></a>

```csharp
public double SnapshotCopyRetentionPeriod { get; }
```

- *Type:* double

---

##### `SnapshotIdentifier`<sup>Required</sup> <a name="SnapshotIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotIdentifier"></a>

```csharp
public string SnapshotIdentifier { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftClusterConfig <a name="RedshiftClusterConfig" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftClusterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClusterType,
    string DbName,
    string MasterUsername,
    string NodeType,
    bool|IResolvable AllowVersionUpgrade = null,
    string AquaConfigurationStatus = null,
    double AutomatedSnapshotRetentionPeriod = null,
    string AvailabilityZone = null,
    bool|IResolvable AvailabilityZoneRelocation = null,
    string AvailabilityZoneRelocationStatus = null,
    bool|IResolvable Classic = null,
    string ClusterIdentifier = null,
    string ClusterParameterGroupName = null,
    string[] ClusterSecurityGroups = null,
    string ClusterSubnetGroupName = null,
    string ClusterVersion = null,
    bool|IResolvable DeferMaintenance = null,
    double DeferMaintenanceDuration = null,
    string DeferMaintenanceEndTime = null,
    string DeferMaintenanceStartTime = null,
    string DestinationRegion = null,
    string ElasticIp = null,
    bool|IResolvable Encrypted = null,
    RedshiftClusterEndpoint Endpoint = null,
    bool|IResolvable EnhancedVpcRouting = null,
    string HsmClientCertificateIdentifier = null,
    string HsmConfigurationIdentifier = null,
    string[] IamRoles = null,
    string KmsKeyId = null,
    RedshiftClusterLoggingProperties LoggingProperties = null,
    string MaintenanceTrackName = null,
    bool|IResolvable ManageMasterPassword = null,
    double ManualSnapshotRetentionPeriod = null,
    string MasterPasswordSecretKmsKeyId = null,
    string MasterUserPassword = null,
    bool|IResolvable MultiAz = null,
    string NamespaceResourcePolicy = null,
    double NumberOfNodes = null,
    string OwnerAccount = null,
    double Port = null,
    string PreferredMaintenanceWindow = null,
    bool|IResolvable PubliclyAccessible = null,
    string ResourceAction = null,
    string RevisionTarget = null,
    bool|IResolvable RotateEncryptionKey = null,
    string SnapshotClusterIdentifier = null,
    string SnapshotCopyGrantName = null,
    bool|IResolvable SnapshotCopyManual = null,
    double SnapshotCopyRetentionPeriod = null,
    string SnapshotIdentifier = null,
    IResolvable|RedshiftClusterTags[] Tags = null,
    string[] VpcSecurityGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterType">ClusterType</a></code> | <code>string</code> | The type of the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.dbName">DbName</a></code> | <code>string</code> | The name of the first database to be created when the cluster is created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterUsername">MasterUsername</a></code> | <code>string</code> | The user name associated with the master user account for the cluster that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.nodeType">NodeType</a></code> | <code>string</code> | The node type to be provisioned for the cluster.Valid Values: ds2.xlarge \| ds2.8xlarge \| dc1.large \| dc1.8xlarge \| dc2.large \| dc2.8xlarge \| ra3.large \| ra3.4xlarge \| ra3.16xlarge \| rg.large \| rg.xlarge \| rg.4xlarge \| rg.12xlarge. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.allowVersionUpgrade">AllowVersionUpgrade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.aquaConfigurationStatus">AquaConfigurationStatus</a></code> | <code>string</code> | The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.automatedSnapshotRetentionPeriod">AutomatedSnapshotRetentionPeriod</a></code> | <code>double</code> | The number of days that automated snapshots are retained. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocation">AvailabilityZoneRelocation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocationStatus">AvailabilityZoneRelocationStatus</a></code> | <code>string</code> | The availability zone relocation status of the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.classic">Classic</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A boolean value indicating whether the resize operation is using the classic resize process. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | A unique identifier for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterParameterGroupName">ClusterParameterGroupName</a></code> | <code>string</code> | The name of the parameter group to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterSecurityGroups">ClusterSecurityGroups</a></code> | <code>string[]</code> | A list of security groups to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterSubnetGroupName">ClusterSubnetGroupName</a></code> | <code>string</code> | The name of a cluster subnet group to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | The version of the Amazon Redshift engine software that you want to deploy on the cluster.The version selected runs on all the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenance">DeferMaintenance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A boolean indicating whether to enable the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceDuration">DeferMaintenanceDuration</a></code> | <code>double</code> | An integer indicating the duration of the maintenance window in days. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceEndTime">DeferMaintenanceEndTime</a></code> | <code>string</code> | A timestamp indicating end time for the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceStartTime">DeferMaintenanceStartTime</a></code> | <code>string</code> | A timestamp indicating the start time for the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.destinationRegion">DestinationRegion</a></code> | <code>string</code> | The destination AWS Region that you want to copy snapshots to. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.elasticIp">ElasticIp</a></code> | <code>string</code> | The Elastic IP (EIP) address for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.encrypted">Encrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the data in the cluster is encrypted at rest. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#endpoint RedshiftCluster#endpoint}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.enhancedVpcRouting">EnhancedVpcRouting</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | An option that specifies whether to create the cluster with enhanced VPC routing enabled. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.hsmClientCertificateIdentifier">HsmClientCertificateIdentifier</a></code> | <code>string</code> | Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.hsmConfigurationIdentifier">HsmConfigurationIdentifier</a></code> | <code>string</code> | Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.iamRoles">IamRoles</a></code> | <code>string[]</code> | A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.loggingProperties">LoggingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#logging_properties RedshiftCluster#logging_properties}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.maintenanceTrackName">MaintenanceTrackName</a></code> | <code>string</code> | The name for the maintenance track that you want to assign for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.manageMasterPassword">ManageMasterPassword</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A boolean indicating if the redshift cluster's admin user credentials is managed by Redshift or not. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.manualSnapshotRetentionPeriod">ManualSnapshotRetentionPeriod</a></code> | <code>double</code> | The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterPasswordSecretKmsKeyId">MasterPasswordSecretKmsKeyId</a></code> | <code>string</code> | The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin user credentials secret. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterUserPassword">MasterUserPassword</a></code> | <code>string</code> | The password associated with the master user account for the cluster that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.multiAz">MultiAz</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A boolean indicating if the redshift cluster is multi-az or not. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.namespaceResourcePolicy">NamespaceResourcePolicy</a></code> | <code>string</code> | The namespace resource policy document that will be attached to a Redshift cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.numberOfNodes">NumberOfNodes</a></code> | <code>double</code> | The number of compute nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.ownerAccount">OwnerAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#owner_account RedshiftCluster#owner_account}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.port">Port</a></code> | <code>double</code> | The port number on which the cluster accepts incoming connections. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | The weekly time range (in UTC) during which automated cluster maintenance can occur. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the cluster can be accessed from a public network. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.resourceAction">ResourceAction</a></code> | <code>string</code> | The Redshift operation to be performed. Resource Action supports pause-cluster, resume-cluster, failover-primary-compute APIs. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.revisionTarget">RevisionTarget</a></code> | <code>string</code> | The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.rotateEncryptionKey">RotateEncryptionKey</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A boolean indicating if we want to rotate Encryption Keys. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotClusterIdentifier">SnapshotClusterIdentifier</a></code> | <code>string</code> | The name of the cluster the source snapshot was created from. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyGrantName">SnapshotCopyGrantName</a></code> | <code>string</code> | The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyManual">SnapshotCopyManual</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyRetentionPeriod">SnapshotCopyRetentionPeriod</a></code> | <code>double</code> | The number of days to retain automated snapshots in the destination region after they are copied from the source region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>string</code> | The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>[]</code> | The list of tags for the cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterType"></a>

```csharp
public string ClusterType { get; set; }
```

- *Type:* string

The type of the cluster.

When cluster type is specified as single-node, the NumberOfNodes parameter is not required and if multi-node, the NumberOfNodes parameter is required

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#cluster_type RedshiftCluster#cluster_type}

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.dbName"></a>

```csharp
public string DbName { get; set; }
```

- *Type:* string

The name of the first database to be created when the cluster is created.

To create additional databases after the cluster is created, connect to the cluster with a SQL client and use SQL commands to create a database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#db_name RedshiftCluster#db_name}

---

##### `MasterUsername`<sup>Required</sup> <a name="MasterUsername" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterUsername"></a>

```csharp
public string MasterUsername { get; set; }
```

- *Type:* string

The user name associated with the master user account for the cluster that is being created.

The user name can't be PUBLIC and first character must be a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#master_username RedshiftCluster#master_username}

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.nodeType"></a>

```csharp
public string NodeType { get; set; }
```

- *Type:* string

The node type to be provisioned for the cluster.Valid Values: ds2.xlarge | ds2.8xlarge | dc1.large | dc1.8xlarge | dc2.large | dc2.8xlarge | ra3.large | ra3.4xlarge | ra3.16xlarge | rg.large | rg.xlarge | rg.4xlarge | rg.12xlarge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#node_type RedshiftCluster#node_type}

---

##### `AllowVersionUpgrade`<sup>Optional</sup> <a name="AllowVersionUpgrade" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.allowVersionUpgrade"></a>

```csharp
public bool|IResolvable AllowVersionUpgrade { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster.

Default value is True

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}

---

##### `AquaConfigurationStatus`<sup>Optional</sup> <a name="AquaConfigurationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.aquaConfigurationStatus"></a>

```csharp
public string AquaConfigurationStatus { get; set; }
```

- *Type:* string

The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored.

Possible values include the following.

enabled - Use AQUA if it is available for the current Region and Amazon Redshift node type.
disabled - Don't use AQUA.
auto - Amazon Redshift determines whether to use AQUA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}

---

##### `AutomatedSnapshotRetentionPeriod`<sup>Optional</sup> <a name="AutomatedSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.automatedSnapshotRetentionPeriod"></a>

```csharp
public double AutomatedSnapshotRetentionPeriod { get; set; }
```

- *Type:* double

The number of days that automated snapshots are retained.

If the value is 0, automated snapshots are disabled. Default value is 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster.

Default: A random, system-chosen Availability Zone in the region that is specified by the endpoint

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#availability_zone RedshiftCluster#availability_zone}

---

##### `AvailabilityZoneRelocation`<sup>Optional</sup> <a name="AvailabilityZoneRelocation" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocation"></a>

```csharp
public bool|IResolvable AvailabilityZoneRelocation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#availability_zone_relocation RedshiftCluster#availability_zone_relocation}

---

##### `AvailabilityZoneRelocationStatus`<sup>Optional</sup> <a name="AvailabilityZoneRelocationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocationStatus"></a>

```csharp
public string AvailabilityZoneRelocationStatus { get; set; }
```

- *Type:* string

The availability zone relocation status of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#availability_zone_relocation_status RedshiftCluster#availability_zone_relocation_status}

---

##### `Classic`<sup>Optional</sup> <a name="Classic" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.classic"></a>

```csharp
public bool|IResolvable Classic { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A boolean value indicating whether the resize operation is using the classic resize process.

If you don't provide this parameter or set the value to false , the resize type is elastic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#classic RedshiftCluster#classic}

---

##### `ClusterIdentifier`<sup>Optional</sup> <a name="ClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; set; }
```

- *Type:* string

A unique identifier for the cluster.

You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}

---

##### `ClusterParameterGroupName`<sup>Optional</sup> <a name="ClusterParameterGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterParameterGroupName"></a>

```csharp
public string ClusterParameterGroupName { get; set; }
```

- *Type:* string

The name of the parameter group to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}

---

##### `ClusterSecurityGroups`<sup>Optional</sup> <a name="ClusterSecurityGroups" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterSecurityGroups"></a>

```csharp
public string[] ClusterSecurityGroups { get; set; }
```

- *Type:* string[]

A list of security groups to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#cluster_security_groups RedshiftCluster#cluster_security_groups}

---

##### `ClusterSubnetGroupName`<sup>Optional</sup> <a name="ClusterSubnetGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterSubnetGroupName"></a>

```csharp
public string ClusterSubnetGroupName { get; set; }
```

- *Type:* string

The name of a cluster subnet group to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}

---

##### `ClusterVersion`<sup>Optional</sup> <a name="ClusterVersion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; set; }
```

- *Type:* string

The version of the Amazon Redshift engine software that you want to deploy on the cluster.The version selected runs on all the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#cluster_version RedshiftCluster#cluster_version}

---

##### `DeferMaintenance`<sup>Optional</sup> <a name="DeferMaintenance" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenance"></a>

```csharp
public bool|IResolvable DeferMaintenance { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A boolean indicating whether to enable the deferred maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#defer_maintenance RedshiftCluster#defer_maintenance}

---

##### `DeferMaintenanceDuration`<sup>Optional</sup> <a name="DeferMaintenanceDuration" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceDuration"></a>

```csharp
public double DeferMaintenanceDuration { get; set; }
```

- *Type:* double

An integer indicating the duration of the maintenance window in days.

If you specify a duration, you can't specify an end time. The duration must be 60 days or less.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#defer_maintenance_duration RedshiftCluster#defer_maintenance_duration}

---

##### `DeferMaintenanceEndTime`<sup>Optional</sup> <a name="DeferMaintenanceEndTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceEndTime"></a>

```csharp
public string DeferMaintenanceEndTime { get; set; }
```

- *Type:* string

A timestamp indicating end time for the deferred maintenance window.

If you specify an end time, you can't specify a duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#defer_maintenance_end_time RedshiftCluster#defer_maintenance_end_time}

---

##### `DeferMaintenanceStartTime`<sup>Optional</sup> <a name="DeferMaintenanceStartTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceStartTime"></a>

```csharp
public string DeferMaintenanceStartTime { get; set; }
```

- *Type:* string

A timestamp indicating the start time for the deferred maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#defer_maintenance_start_time RedshiftCluster#defer_maintenance_start_time}

---

##### `DestinationRegion`<sup>Optional</sup> <a name="DestinationRegion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.destinationRegion"></a>

```csharp
public string DestinationRegion { get; set; }
```

- *Type:* string

The destination AWS Region that you want to copy snapshots to.

Constraints: Must be the name of a valid AWS Region. For more information, see Regions and Endpoints in the Amazon Web Services [https://docs.aws.amazon.com/general/latest/gr/rande.html#redshift_region] General Reference

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#destination_region RedshiftCluster#destination_region}

---

##### `ElasticIp`<sup>Optional</sup> <a name="ElasticIp" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.elasticIp"></a>

```csharp
public string ElasticIp { get; set; }
```

- *Type:* string

The Elastic IP (EIP) address for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.encrypted"></a>

```csharp
public bool|IResolvable Encrypted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the data in the cluster is encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#encrypted RedshiftCluster#encrypted}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.endpoint"></a>

```csharp
public RedshiftClusterEndpoint Endpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#endpoint RedshiftCluster#endpoint}.

---

##### `EnhancedVpcRouting`<sup>Optional</sup> <a name="EnhancedVpcRouting" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.enhancedVpcRouting"></a>

```csharp
public bool|IResolvable EnhancedVpcRouting { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

An option that specifies whether to create the cluster with enhanced VPC routing enabled.

To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see Enhanced VPC Routing in the Amazon Redshift Cluster Management Guide.

If this option is true , enhanced VPC routing is enabled.

Default: false

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}

---

##### `HsmClientCertificateIdentifier`<sup>Optional</sup> <a name="HsmClientCertificateIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.hsmClientCertificateIdentifier"></a>

```csharp
public string HsmClientCertificateIdentifier { get; set; }
```

- *Type:* string

Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#hsm_client_certificate_identifier RedshiftCluster#hsm_client_certificate_identifier}

---

##### `HsmConfigurationIdentifier`<sup>Optional</sup> <a name="HsmConfigurationIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.hsmConfigurationIdentifier"></a>

```csharp
public string HsmConfigurationIdentifier { get; set; }
```

- *Type:* string

Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#hsm_configuration_identifier RedshiftCluster#hsm_configuration_identifier}

---

##### `IamRoles`<sup>Optional</sup> <a name="IamRoles" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.iamRoles"></a>

```csharp
public string[] IamRoles { get; set; }
```

- *Type:* string[]

A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services.

You must supply the IAM roles in their Amazon Resource Name (ARN) format. You can supply up to 50 IAM roles in a single request

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#iam_roles RedshiftCluster#iam_roles}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}

---

##### `LoggingProperties`<sup>Optional</sup> <a name="LoggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.loggingProperties"></a>

```csharp
public RedshiftClusterLoggingProperties LoggingProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#logging_properties RedshiftCluster#logging_properties}.

---

##### `MaintenanceTrackName`<sup>Optional</sup> <a name="MaintenanceTrackName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.maintenanceTrackName"></a>

```csharp
public string MaintenanceTrackName { get; set; }
```

- *Type:* string

The name for the maintenance track that you want to assign for the cluster.

This name change is asynchronous. The new track name stays in the PendingModifiedValues for the cluster until the next maintenance window. When the maintenance track changes, the cluster is switched to the latest cluster release available for the maintenance track. At this point, the maintenance track name is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}

---

##### `ManageMasterPassword`<sup>Optional</sup> <a name="ManageMasterPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.manageMasterPassword"></a>

```csharp
public bool|IResolvable ManageMasterPassword { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A boolean indicating if the redshift cluster's admin user credentials is managed by Redshift or not.

You can't use MasterUserPassword if ManageMasterPassword is true. If ManageMasterPassword is false or not set, Amazon Redshift uses MasterUserPassword for the admin user account's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#manage_master_password RedshiftCluster#manage_master_password}

---

##### `ManualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="ManualSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.manualSnapshotRetentionPeriod"></a>

```csharp
public double ManualSnapshotRetentionPeriod { get; set; }
```

- *Type:* double

The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region.

If the value is -1, the manual snapshot is retained indefinitely.

The value must be either -1 or an integer between 1 and 3,653.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}

---

##### `MasterPasswordSecretKmsKeyId`<sup>Optional</sup> <a name="MasterPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterPasswordSecretKmsKeyId"></a>

```csharp
public string MasterPasswordSecretKmsKeyId { get; set; }
```

- *Type:* string

The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin user credentials secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#master_password_secret_kms_key_id RedshiftCluster#master_password_secret_kms_key_id}

---

##### `MasterUserPassword`<sup>Optional</sup> <a name="MasterUserPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterUserPassword"></a>

```csharp
public string MasterUserPassword { get; set; }
```

- *Type:* string

The password associated with the master user account for the cluster that is being created.

You can't use MasterUserPassword if ManageMasterPassword is true. Password must be between 8 and 64 characters in length, should have at least one uppercase letter.Must contain at least one lowercase letter.Must contain one number.Can be any printable ASCII character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#master_user_password RedshiftCluster#master_user_password}

---

##### `MultiAz`<sup>Optional</sup> <a name="MultiAz" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.multiAz"></a>

```csharp
public bool|IResolvable MultiAz { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A boolean indicating if the redshift cluster is multi-az or not.

If you don't provide this parameter or set the value to false, the redshift cluster will be single-az.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#multi_az RedshiftCluster#multi_az}

---

##### `NamespaceResourcePolicy`<sup>Optional</sup> <a name="NamespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.namespaceResourcePolicy"></a>

```csharp
public string NamespaceResourcePolicy { get; set; }
```

- *Type:* string

The namespace resource policy document that will be attached to a Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#namespace_resource_policy RedshiftCluster#namespace_resource_policy}

---

##### `NumberOfNodes`<sup>Optional</sup> <a name="NumberOfNodes" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.numberOfNodes"></a>

```csharp
public double NumberOfNodes { get; set; }
```

- *Type:* double

The number of compute nodes in the cluster.

This parameter is required when the ClusterType parameter is specified as multi-node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}

---

##### `OwnerAccount`<sup>Optional</sup> <a name="OwnerAccount" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.ownerAccount"></a>

```csharp
public string OwnerAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#owner_account RedshiftCluster#owner_account}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port number on which the cluster accepts incoming connections.

The cluster is accessible only via the JDBC and ODBC connection strings

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#port RedshiftCluster#port}

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; set; }
```

- *Type:* string

The weekly time range (in UTC) during which automated cluster maintenance can occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.publiclyAccessible"></a>

```csharp
public bool|IResolvable PubliclyAccessible { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the cluster can be accessed from a public network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}

---

##### `ResourceAction`<sup>Optional</sup> <a name="ResourceAction" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.resourceAction"></a>

```csharp
public string ResourceAction { get; set; }
```

- *Type:* string

The Redshift operation to be performed. Resource Action supports pause-cluster, resume-cluster, failover-primary-compute APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#resource_action RedshiftCluster#resource_action}

---

##### `RevisionTarget`<sup>Optional</sup> <a name="RevisionTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.revisionTarget"></a>

```csharp
public string RevisionTarget { get; set; }
```

- *Type:* string

The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#revision_target RedshiftCluster#revision_target}

---

##### `RotateEncryptionKey`<sup>Optional</sup> <a name="RotateEncryptionKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.rotateEncryptionKey"></a>

```csharp
public bool|IResolvable RotateEncryptionKey { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A boolean indicating if we want to rotate Encryption Keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#rotate_encryption_key RedshiftCluster#rotate_encryption_key}

---

##### `SnapshotClusterIdentifier`<sup>Optional</sup> <a name="SnapshotClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotClusterIdentifier"></a>

```csharp
public string SnapshotClusterIdentifier { get; set; }
```

- *Type:* string

The name of the cluster the source snapshot was created from.

This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}

---

##### `SnapshotCopyGrantName`<sup>Optional</sup> <a name="SnapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyGrantName"></a>

```csharp
public string SnapshotCopyGrantName { get; set; }
```

- *Type:* string

The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#snapshot_copy_grant_name RedshiftCluster#snapshot_copy_grant_name}

---

##### `SnapshotCopyManual`<sup>Optional</sup> <a name="SnapshotCopyManual" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyManual"></a>

```csharp
public bool|IResolvable SnapshotCopyManual { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#snapshot_copy_manual RedshiftCluster#snapshot_copy_manual}

---

##### `SnapshotCopyRetentionPeriod`<sup>Optional</sup> <a name="SnapshotCopyRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyRetentionPeriod"></a>

```csharp
public double SnapshotCopyRetentionPeriod { get; set; }
```

- *Type:* double

The number of days to retain automated snapshots in the destination region after they are copied from the source region.

Default is 7.

Constraints: Must be at least 1 and no more than 35.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#snapshot_copy_retention_period RedshiftCluster#snapshot_copy_retention_period}

---

##### `SnapshotIdentifier`<sup>Optional</sup> <a name="SnapshotIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotIdentifier"></a>

```csharp
public string SnapshotIdentifier { get; set; }
```

- *Type:* string

The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.tags"></a>

```csharp
public IResolvable|RedshiftClusterTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>[]

The list of tags for the cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#tags RedshiftCluster#tags}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; set; }
```

- *Type:* string[]

A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}

---

### RedshiftClusterEndpoint <a name="RedshiftClusterEndpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftClusterEndpoint {

};
```


### RedshiftClusterLoggingProperties <a name="RedshiftClusterLoggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftClusterLoggingProperties {
    string BucketName = null,
    string LogDestinationType = null,
    string[] LogExports = null,
    string S3KeyPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#bucket_name RedshiftCluster#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.logDestinationType">LogDestinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#log_destination_type RedshiftCluster#log_destination_type}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.logExports">LogExports</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#log_exports RedshiftCluster#log_exports}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#s3_key_prefix RedshiftCluster#s3_key_prefix}. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#bucket_name RedshiftCluster#bucket_name}.

---

##### `LogDestinationType`<sup>Optional</sup> <a name="LogDestinationType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.logDestinationType"></a>

```csharp
public string LogDestinationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#log_destination_type RedshiftCluster#log_destination_type}.

---

##### `LogExports`<sup>Optional</sup> <a name="LogExports" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.logExports"></a>

```csharp
public string[] LogExports { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#log_exports RedshiftCluster#log_exports}.

---

##### `S3KeyPrefix`<sup>Optional</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.s3KeyPrefix"></a>

```csharp
public string S3KeyPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#s3_key_prefix RedshiftCluster#s3_key_prefix}.

---

### RedshiftClusterTags <a name="RedshiftClusterTags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftClusterTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#key RedshiftCluster#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshift_cluster#value RedshiftCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftClusterEndpointOutputReference <a name="RedshiftClusterEndpointOutputReference" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftClusterEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftClusterEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a>

---


### RedshiftClusterLoggingPropertiesOutputReference <a name="RedshiftClusterLoggingPropertiesOutputReference" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftClusterLoggingPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetLogDestinationType">ResetLogDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetLogExports">ResetLogExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetS3KeyPrefix">ResetS3KeyPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetLogDestinationType` <a name="ResetLogDestinationType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetLogDestinationType"></a>

```csharp
private void ResetLogDestinationType()
```

##### `ResetLogExports` <a name="ResetLogExports" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetLogExports"></a>

```csharp
private void ResetLogExports()
```

##### `ResetS3KeyPrefix` <a name="ResetS3KeyPrefix" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetS3KeyPrefix"></a>

```csharp
private void ResetS3KeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logDestinationTypeInput">LogDestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logExportsInput">LogExportsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.s3KeyPrefixInput">S3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logDestinationType">LogDestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logExports">LogExports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `LogDestinationTypeInput`<sup>Optional</sup> <a name="LogDestinationTypeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logDestinationTypeInput"></a>

```csharp
public string LogDestinationTypeInput { get; }
```

- *Type:* string

---

##### `LogExportsInput`<sup>Optional</sup> <a name="LogExportsInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logExportsInput"></a>

```csharp
public string[] LogExportsInput { get; }
```

- *Type:* string[]

---

##### `S3KeyPrefixInput`<sup>Optional</sup> <a name="S3KeyPrefixInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.s3KeyPrefixInput"></a>

```csharp
public string S3KeyPrefixInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `LogDestinationType`<sup>Required</sup> <a name="LogDestinationType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logDestinationType"></a>

```csharp
public string LogDestinationType { get; }
```

- *Type:* string

---

##### `LogExports`<sup>Required</sup> <a name="LogExports" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logExports"></a>

```csharp
public string[] LogExports { get; }
```

- *Type:* string[]

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.s3KeyPrefix"></a>

```csharp
public string S3KeyPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftClusterLoggingProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a>

---


### RedshiftClusterTagsList <a name="RedshiftClusterTagsList" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftClusterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.get"></a>

```csharp
private RedshiftClusterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.internalValue"></a>

```csharp
public IResolvable|RedshiftClusterTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>[]

---


### RedshiftClusterTagsOutputReference <a name="RedshiftClusterTagsOutputReference" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftClusterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftClusterTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>

---



