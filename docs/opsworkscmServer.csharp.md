# `opsworkscmServer` Submodule <a name="`opsworkscmServer` Submodule" id="@cdktn/provider-awscc.opsworkscmServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworkscmServer <a name="OpsworkscmServer" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server awscc_opsworkscm_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpsworkscmServer(Construct Scope, string Id, OpsworkscmServerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig">OpsworkscmServerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig">OpsworkscmServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putEngineAttributes">PutEngineAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetAssociatePublicIpAddress">ResetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetBackupId">ResetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetBackupRetentionCount">ResetBackupRetentionCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomCertificate">ResetCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomDomain">ResetCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomPrivateKey">ResetCustomPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetDisableAutomatedBackup">ResetDisableAutomatedBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineAttributes">ResetEngineAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineModel">ResetEngineModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetKeyPair">ResetKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetPreferredBackupWindow">ResetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEngineAttributes` <a name="PutEngineAttributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putEngineAttributes"></a>

```csharp
private void PutEngineAttributes(IResolvable|OpsworkscmServerEngineAttributes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putEngineAttributes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putTags"></a>

```csharp
private void PutTags(IResolvable|OpsworkscmServerTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>[]

---

##### `ResetAssociatePublicIpAddress` <a name="ResetAssociatePublicIpAddress" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetAssociatePublicIpAddress"></a>

```csharp
private void ResetAssociatePublicIpAddress()
```

##### `ResetBackupId` <a name="ResetBackupId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetBackupId"></a>

```csharp
private void ResetBackupId()
```

##### `ResetBackupRetentionCount` <a name="ResetBackupRetentionCount" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetBackupRetentionCount"></a>

```csharp
private void ResetBackupRetentionCount()
```

##### `ResetCustomCertificate` <a name="ResetCustomCertificate" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomCertificate"></a>

```csharp
private void ResetCustomCertificate()
```

##### `ResetCustomDomain` <a name="ResetCustomDomain" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomDomain"></a>

```csharp
private void ResetCustomDomain()
```

##### `ResetCustomPrivateKey` <a name="ResetCustomPrivateKey" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomPrivateKey"></a>

```csharp
private void ResetCustomPrivateKey()
```

##### `ResetDisableAutomatedBackup` <a name="ResetDisableAutomatedBackup" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetDisableAutomatedBackup"></a>

```csharp
private void ResetDisableAutomatedBackup()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngine"></a>

```csharp
private void ResetEngine()
```

##### `ResetEngineAttributes` <a name="ResetEngineAttributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineAttributes"></a>

```csharp
private void ResetEngineAttributes()
```

##### `ResetEngineModel` <a name="ResetEngineModel" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineModel"></a>

```csharp
private void ResetEngineModel()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetKeyPair` <a name="ResetKeyPair" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetKeyPair"></a>

```csharp
private void ResetKeyPair()
```

##### `ResetPreferredBackupWindow` <a name="ResetPreferredBackupWindow" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetPreferredBackupWindow"></a>

```csharp
private void ResetPreferredBackupWindow()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetPreferredMaintenanceWindow"></a>

```csharp
private void ResetPreferredMaintenanceWindow()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetServerName"></a>

```csharp
private void ResetServerName()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OpsworkscmServer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OpsworkscmServer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OpsworkscmServer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OpsworkscmServer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OpsworkscmServer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OpsworkscmServer resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpsworkscmServer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpsworkscmServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OpsworkscmServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineAttributes">EngineAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList">OpsworkscmServerEngineAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList">OpsworkscmServerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.associatePublicIpAddressInput">AssociatePublicIpAddressInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupIdInput">BackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupRetentionCountInput">BackupRetentionCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customCertificateInput">CustomCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customDomainInput">CustomDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customPrivateKeyInput">CustomPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.disableAutomatedBackupInput">DisableAutomatedBackupInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineAttributesInput">EngineAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineModelInput">EngineModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceProfileArnInput">InstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.keyPairInput">KeyPairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredBackupWindowInput">PreferredBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serviceRoleArnInput">ServiceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupId">BackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupRetentionCount">BackupRetentionCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customCertificate">CustomCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customDomain">CustomDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customPrivateKey">CustomPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.disableAutomatedBackup">DisableAutomatedBackup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineModel">EngineModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.keyPair">KeyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `EngineAttributes`<sup>Required</sup> <a name="EngineAttributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineAttributes"></a>

```csharp
public OpsworkscmServerEngineAttributesList EngineAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList">OpsworkscmServerEngineAttributesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tags"></a>

```csharp
public OpsworkscmServerTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList">OpsworkscmServerTagsList</a>

---

##### `AssociatePublicIpAddressInput`<sup>Optional</sup> <a name="AssociatePublicIpAddressInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.associatePublicIpAddressInput"></a>

```csharp
public bool|IResolvable AssociatePublicIpAddressInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupIdInput"></a>

```csharp
public string BackupIdInput { get; }
```

- *Type:* string

---

##### `BackupRetentionCountInput`<sup>Optional</sup> <a name="BackupRetentionCountInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupRetentionCountInput"></a>

```csharp
public double BackupRetentionCountInput { get; }
```

- *Type:* double

---

##### `CustomCertificateInput`<sup>Optional</sup> <a name="CustomCertificateInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customCertificateInput"></a>

```csharp
public string CustomCertificateInput { get; }
```

- *Type:* string

---

##### `CustomDomainInput`<sup>Optional</sup> <a name="CustomDomainInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customDomainInput"></a>

```csharp
public string CustomDomainInput { get; }
```

- *Type:* string

---

##### `CustomPrivateKeyInput`<sup>Optional</sup> <a name="CustomPrivateKeyInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customPrivateKeyInput"></a>

```csharp
public string CustomPrivateKeyInput { get; }
```

- *Type:* string

---

##### `DisableAutomatedBackupInput`<sup>Optional</sup> <a name="DisableAutomatedBackupInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.disableAutomatedBackupInput"></a>

```csharp
public bool|IResolvable DisableAutomatedBackupInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EngineAttributesInput`<sup>Optional</sup> <a name="EngineAttributesInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineAttributesInput"></a>

```csharp
public IResolvable|OpsworkscmServerEngineAttributes[] EngineAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>[]

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `EngineModelInput`<sup>Optional</sup> <a name="EngineModelInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineModelInput"></a>

```csharp
public string EngineModelInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `InstanceProfileArnInput`<sup>Optional</sup> <a name="InstanceProfileArnInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceProfileArnInput"></a>

```csharp
public string InstanceProfileArnInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `KeyPairInput`<sup>Optional</sup> <a name="KeyPairInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.keyPairInput"></a>

```csharp
public string KeyPairInput { get; }
```

- *Type:* string

---

##### `PreferredBackupWindowInput`<sup>Optional</sup> <a name="PreferredBackupWindowInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredBackupWindowInput"></a>

```csharp
public string PreferredBackupWindowInput { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredMaintenanceWindowInput"></a>

```csharp
public string PreferredMaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `ServiceRoleArnInput`<sup>Optional</sup> <a name="ServiceRoleArnInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serviceRoleArnInput"></a>

```csharp
public string ServiceRoleArnInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tagsInput"></a>

```csharp
public IResolvable|OpsworkscmServerTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>[]

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.associatePublicIpAddress"></a>

```csharp
public bool|IResolvable AssociatePublicIpAddress { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupId"></a>

```csharp
public string BackupId { get; }
```

- *Type:* string

---

##### `BackupRetentionCount`<sup>Required</sup> <a name="BackupRetentionCount" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupRetentionCount"></a>

```csharp
public double BackupRetentionCount { get; }
```

- *Type:* double

---

##### `CustomCertificate`<sup>Required</sup> <a name="CustomCertificate" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customCertificate"></a>

```csharp
public string CustomCertificate { get; }
```

- *Type:* string

---

##### `CustomDomain`<sup>Required</sup> <a name="CustomDomain" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customDomain"></a>

```csharp
public string CustomDomain { get; }
```

- *Type:* string

---

##### `CustomPrivateKey`<sup>Required</sup> <a name="CustomPrivateKey" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customPrivateKey"></a>

```csharp
public string CustomPrivateKey { get; }
```

- *Type:* string

---

##### `DisableAutomatedBackup`<sup>Required</sup> <a name="DisableAutomatedBackup" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.disableAutomatedBackup"></a>

```csharp
public bool|IResolvable DisableAutomatedBackup { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineModel`<sup>Required</sup> <a name="EngineModel" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineModel"></a>

```csharp
public string EngineModel { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceProfileArn"></a>

```csharp
public string InstanceProfileArn { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `KeyPair`<sup>Required</sup> <a name="KeyPair" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.keyPair"></a>

```csharp
public string KeyPair { get; }
```

- *Type:* string

---

##### `PreferredBackupWindow`<sup>Required</sup> <a name="PreferredBackupWindow" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredBackupWindow"></a>

```csharp
public string PreferredBackupWindow { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serviceRoleArn"></a>

```csharp
public string ServiceRoleArn { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworkscmServerConfig <a name="OpsworkscmServerConfig" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpsworkscmServerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceProfileArn,
    string InstanceType,
    string ServiceRoleArn,
    bool|IResolvable AssociatePublicIpAddress = null,
    string BackupId = null,
    double BackupRetentionCount = null,
    string CustomCertificate = null,
    string CustomDomain = null,
    string CustomPrivateKey = null,
    bool|IResolvable DisableAutomatedBackup = null,
    string Engine = null,
    IResolvable|OpsworkscmServerEngineAttributes[] EngineAttributes = null,
    string EngineModel = null,
    string EngineVersion = null,
    string KeyPair = null,
    string PreferredBackupWindow = null,
    string PreferredMaintenanceWindow = null,
    string[] SecurityGroupIds = null,
    string ServerName = null,
    string[] SubnetIds = null,
    IResolvable|OpsworkscmServerTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#instance_profile_arn OpsworkscmServer#instance_profile_arn}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#instance_type OpsworkscmServer#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#service_role_arn OpsworkscmServer#service_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#associate_public_ip_address OpsworkscmServer#associate_public_ip_address}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.backupId">BackupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#backup_id OpsworkscmServer#backup_id}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.backupRetentionCount">BackupRetentionCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#backup_retention_count OpsworkscmServer#backup_retention_count}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customCertificate">CustomCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#custom_certificate OpsworkscmServer#custom_certificate}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customDomain">CustomDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#custom_domain OpsworkscmServer#custom_domain}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customPrivateKey">CustomPrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#custom_private_key OpsworkscmServer#custom_private_key}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.disableAutomatedBackup">DisableAutomatedBackup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#disable_automated_backup OpsworkscmServer#disable_automated_backup}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#engine OpsworkscmServer#engine}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineAttributes">EngineAttributes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#engine_attributes OpsworkscmServer#engine_attributes}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineModel">EngineModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#engine_model OpsworkscmServer#engine_model}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#engine_version OpsworkscmServer#engine_version}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.keyPair">KeyPair</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#key_pair OpsworkscmServer#key_pair}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#preferred_backup_window OpsworkscmServer#preferred_backup_window}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#preferred_maintenance_window OpsworkscmServer#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#security_group_ids OpsworkscmServer#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#server_name OpsworkscmServer#server_name}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#subnet_ids OpsworkscmServer#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#tags OpsworkscmServer#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.instanceProfileArn"></a>

```csharp
public string InstanceProfileArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#instance_profile_arn OpsworkscmServer#instance_profile_arn}.

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#instance_type OpsworkscmServer#instance_type}.

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.serviceRoleArn"></a>

```csharp
public string ServiceRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#service_role_arn OpsworkscmServer#service_role_arn}.

---

##### `AssociatePublicIpAddress`<sup>Optional</sup> <a name="AssociatePublicIpAddress" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.associatePublicIpAddress"></a>

```csharp
public bool|IResolvable AssociatePublicIpAddress { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#associate_public_ip_address OpsworkscmServer#associate_public_ip_address}.

---

##### `BackupId`<sup>Optional</sup> <a name="BackupId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.backupId"></a>

```csharp
public string BackupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#backup_id OpsworkscmServer#backup_id}.

---

##### `BackupRetentionCount`<sup>Optional</sup> <a name="BackupRetentionCount" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.backupRetentionCount"></a>

```csharp
public double BackupRetentionCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#backup_retention_count OpsworkscmServer#backup_retention_count}.

---

##### `CustomCertificate`<sup>Optional</sup> <a name="CustomCertificate" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customCertificate"></a>

```csharp
public string CustomCertificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#custom_certificate OpsworkscmServer#custom_certificate}.

---

##### `CustomDomain`<sup>Optional</sup> <a name="CustomDomain" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customDomain"></a>

```csharp
public string CustomDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#custom_domain OpsworkscmServer#custom_domain}.

---

##### `CustomPrivateKey`<sup>Optional</sup> <a name="CustomPrivateKey" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customPrivateKey"></a>

```csharp
public string CustomPrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#custom_private_key OpsworkscmServer#custom_private_key}.

---

##### `DisableAutomatedBackup`<sup>Optional</sup> <a name="DisableAutomatedBackup" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.disableAutomatedBackup"></a>

```csharp
public bool|IResolvable DisableAutomatedBackup { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#disable_automated_backup OpsworkscmServer#disable_automated_backup}.

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#engine OpsworkscmServer#engine}.

---

##### `EngineAttributes`<sup>Optional</sup> <a name="EngineAttributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineAttributes"></a>

```csharp
public IResolvable|OpsworkscmServerEngineAttributes[] EngineAttributes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#engine_attributes OpsworkscmServer#engine_attributes}.

---

##### `EngineModel`<sup>Optional</sup> <a name="EngineModel" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineModel"></a>

```csharp
public string EngineModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#engine_model OpsworkscmServer#engine_model}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#engine_version OpsworkscmServer#engine_version}.

---

##### `KeyPair`<sup>Optional</sup> <a name="KeyPair" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.keyPair"></a>

```csharp
public string KeyPair { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#key_pair OpsworkscmServer#key_pair}.

---

##### `PreferredBackupWindow`<sup>Optional</sup> <a name="PreferredBackupWindow" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.preferredBackupWindow"></a>

```csharp
public string PreferredBackupWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#preferred_backup_window OpsworkscmServer#preferred_backup_window}.

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#preferred_maintenance_window OpsworkscmServer#preferred_maintenance_window}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#security_group_ids OpsworkscmServer#security_group_ids}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#server_name OpsworkscmServer#server_name}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#subnet_ids OpsworkscmServer#subnet_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.tags"></a>

```csharp
public IResolvable|OpsworkscmServerTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#tags OpsworkscmServer#tags}.

---

### OpsworkscmServerEngineAttributes <a name="OpsworkscmServerEngineAttributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpsworkscmServerEngineAttributes {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#name OpsworkscmServer#name}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#value OpsworkscmServer#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#name OpsworkscmServer#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#value OpsworkscmServer#value}.

---

### OpsworkscmServerTags <a name="OpsworkscmServerTags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpsworkscmServerTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#key OpsworkscmServer#key}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#value OpsworkscmServer#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#key OpsworkscmServer#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opsworkscm_server#value OpsworkscmServer#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworkscmServerEngineAttributesList <a name="OpsworkscmServerEngineAttributesList" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpsworkscmServerEngineAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.get"></a>

```csharp
private OpsworkscmServerEngineAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.internalValue"></a>

```csharp
public IResolvable|OpsworkscmServerEngineAttributes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>[]

---


### OpsworkscmServerEngineAttributesOutputReference <a name="OpsworkscmServerEngineAttributesOutputReference" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpsworkscmServerEngineAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpsworkscmServerEngineAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>

---


### OpsworkscmServerTagsList <a name="OpsworkscmServerTagsList" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpsworkscmServerTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.get"></a>

```csharp
private OpsworkscmServerTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.internalValue"></a>

```csharp
public IResolvable|OpsworkscmServerTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>[]

---


### OpsworkscmServerTagsOutputReference <a name="OpsworkscmServerTagsOutputReference" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpsworkscmServerTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpsworkscmServerTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>

---



