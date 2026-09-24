# `drsReplicationConfigurationTemplate` Submodule <a name="`drsReplicationConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrsReplicationConfigurationTemplate <a name="DrsReplicationConfigurationTemplate" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template awscc_drs_replication_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DrsReplicationConfigurationTemplate(Construct Scope, string Id, DrsReplicationConfigurationTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig">DrsReplicationConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig">DrsReplicationConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putPitPolicy">PutPitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetAssociateDefaultSecurityGroup">ResetAssociateDefaultSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetAutoReplicateNewDisks">ResetAutoReplicateNewDisks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetCreatePublicIp">ResetCreatePublicIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetDataPlaneRouting">ResetDataPlaneRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetDefaultLargeStagingDiskType">ResetDefaultLargeStagingDiskType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetEbsEncryptionKeyArn">ResetEbsEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetInternetProtocol">ResetInternetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetReplicationServerInstanceType">ResetReplicationServerInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetUseDedicatedReplicationServer">ResetUseDedicatedReplicationServer</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPitPolicy` <a name="PutPitPolicy" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putPitPolicy"></a>

```csharp
private void PutPitPolicy(IResolvable|DrsReplicationConfigurationTemplatePitPolicy[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putPitPolicy.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putTags"></a>

```csharp
private void PutTags(IResolvable|DrsReplicationConfigurationTemplateTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>[]

---

##### `ResetAssociateDefaultSecurityGroup` <a name="ResetAssociateDefaultSecurityGroup" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetAssociateDefaultSecurityGroup"></a>

```csharp
private void ResetAssociateDefaultSecurityGroup()
```

##### `ResetAutoReplicateNewDisks` <a name="ResetAutoReplicateNewDisks" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetAutoReplicateNewDisks"></a>

```csharp
private void ResetAutoReplicateNewDisks()
```

##### `ResetCreatePublicIp` <a name="ResetCreatePublicIp" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetCreatePublicIp"></a>

```csharp
private void ResetCreatePublicIp()
```

##### `ResetDataPlaneRouting` <a name="ResetDataPlaneRouting" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetDataPlaneRouting"></a>

```csharp
private void ResetDataPlaneRouting()
```

##### `ResetDefaultLargeStagingDiskType` <a name="ResetDefaultLargeStagingDiskType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetDefaultLargeStagingDiskType"></a>

```csharp
private void ResetDefaultLargeStagingDiskType()
```

##### `ResetEbsEncryptionKeyArn` <a name="ResetEbsEncryptionKeyArn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetEbsEncryptionKeyArn"></a>

```csharp
private void ResetEbsEncryptionKeyArn()
```

##### `ResetInternetProtocol` <a name="ResetInternetProtocol" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetInternetProtocol"></a>

```csharp
private void ResetInternetProtocol()
```

##### `ResetReplicationServerInstanceType` <a name="ResetReplicationServerInstanceType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetReplicationServerInstanceType"></a>

```csharp
private void ResetReplicationServerInstanceType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUseDedicatedReplicationServer` <a name="ResetUseDedicatedReplicationServer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetUseDedicatedReplicationServer"></a>

```csharp
private void ResetUseDedicatedReplicationServer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DrsReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DrsReplicationConfigurationTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DrsReplicationConfigurationTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DrsReplicationConfigurationTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DrsReplicationConfigurationTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DrsReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DrsReplicationConfigurationTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DrsReplicationConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DrsReplicationConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.pitPolicy">PitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList">DrsReplicationConfigurationTemplatePitPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationConfigurationTemplateId">ReplicationConfigurationTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList">DrsReplicationConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroupInput">AssociateDefaultSecurityGroupInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.autoReplicateNewDisksInput">AutoReplicateNewDisksInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.bandwidthThrottlingInput">BandwidthThrottlingInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.createPublicIpInput">CreatePublicIpInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dataPlaneRoutingInput">DataPlaneRoutingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskTypeInput">DefaultLargeStagingDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionInput">EbsEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArnInput">EbsEncryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.internetProtocolInput">InternetProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.pitPolicyInput">PitPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServerInstanceTypeInput">ReplicationServerInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDsInput">ReplicationServersSecurityGroupsIDsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaSubnetIdInput">StagingAreaSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaTagsInput">StagingAreaTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.useDedicatedReplicationServerInput">UseDedicatedReplicationServerInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroup">AssociateDefaultSecurityGroup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.autoReplicateNewDisks">AutoReplicateNewDisks</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.bandwidthThrottling">BandwidthThrottling</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.createPublicIp">CreatePublicIp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dataPlaneRouting">DataPlaneRouting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskType">DefaultLargeStagingDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryption">EbsEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArn">EbsEncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.internetProtocol">InternetProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServerInstanceType">ReplicationServerInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs">ReplicationServersSecurityGroupsIDs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaSubnetId">StagingAreaSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaTags">StagingAreaTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.useDedicatedReplicationServer">UseDedicatedReplicationServer</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PitPolicy`<sup>Required</sup> <a name="PitPolicy" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.pitPolicy"></a>

```csharp
public DrsReplicationConfigurationTemplatePitPolicyList PitPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList">DrsReplicationConfigurationTemplatePitPolicyList</a>

---

##### `ReplicationConfigurationTemplateId`<sup>Required</sup> <a name="ReplicationConfigurationTemplateId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationConfigurationTemplateId"></a>

```csharp
public string ReplicationConfigurationTemplateId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tags"></a>

```csharp
public DrsReplicationConfigurationTemplateTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList">DrsReplicationConfigurationTemplateTagsList</a>

---

##### `AssociateDefaultSecurityGroupInput`<sup>Optional</sup> <a name="AssociateDefaultSecurityGroupInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroupInput"></a>

```csharp
public bool|IResolvable AssociateDefaultSecurityGroupInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoReplicateNewDisksInput`<sup>Optional</sup> <a name="AutoReplicateNewDisksInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.autoReplicateNewDisksInput"></a>

```csharp
public bool|IResolvable AutoReplicateNewDisksInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BandwidthThrottlingInput`<sup>Optional</sup> <a name="BandwidthThrottlingInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.bandwidthThrottlingInput"></a>

```csharp
public double BandwidthThrottlingInput { get; }
```

- *Type:* double

---

##### `CreatePublicIpInput`<sup>Optional</sup> <a name="CreatePublicIpInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.createPublicIpInput"></a>

```csharp
public bool|IResolvable CreatePublicIpInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DataPlaneRoutingInput`<sup>Optional</sup> <a name="DataPlaneRoutingInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dataPlaneRoutingInput"></a>

```csharp
public string DataPlaneRoutingInput { get; }
```

- *Type:* string

---

##### `DefaultLargeStagingDiskTypeInput`<sup>Optional</sup> <a name="DefaultLargeStagingDiskTypeInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskTypeInput"></a>

```csharp
public string DefaultLargeStagingDiskTypeInput { get; }
```

- *Type:* string

---

##### `EbsEncryptionInput`<sup>Optional</sup> <a name="EbsEncryptionInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionInput"></a>

```csharp
public string EbsEncryptionInput { get; }
```

- *Type:* string

---

##### `EbsEncryptionKeyArnInput`<sup>Optional</sup> <a name="EbsEncryptionKeyArnInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArnInput"></a>

```csharp
public string EbsEncryptionKeyArnInput { get; }
```

- *Type:* string

---

##### `InternetProtocolInput`<sup>Optional</sup> <a name="InternetProtocolInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.internetProtocolInput"></a>

```csharp
public string InternetProtocolInput { get; }
```

- *Type:* string

---

##### `PitPolicyInput`<sup>Optional</sup> <a name="PitPolicyInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.pitPolicyInput"></a>

```csharp
public IResolvable|DrsReplicationConfigurationTemplatePitPolicy[] PitPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>[]

---

##### `ReplicationServerInstanceTypeInput`<sup>Optional</sup> <a name="ReplicationServerInstanceTypeInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServerInstanceTypeInput"></a>

```csharp
public string ReplicationServerInstanceTypeInput { get; }
```

- *Type:* string

---

##### `ReplicationServersSecurityGroupsIDsInput`<sup>Optional</sup> <a name="ReplicationServersSecurityGroupsIDsInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDsInput"></a>

```csharp
public string[] ReplicationServersSecurityGroupsIDsInput { get; }
```

- *Type:* string[]

---

##### `StagingAreaSubnetIdInput`<sup>Optional</sup> <a name="StagingAreaSubnetIdInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaSubnetIdInput"></a>

```csharp
public string StagingAreaSubnetIdInput { get; }
```

- *Type:* string

---

##### `StagingAreaTagsInput`<sup>Optional</sup> <a name="StagingAreaTagsInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StagingAreaTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tagsInput"></a>

```csharp
public IResolvable|DrsReplicationConfigurationTemplateTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>[]

---

##### `UseDedicatedReplicationServerInput`<sup>Optional</sup> <a name="UseDedicatedReplicationServerInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.useDedicatedReplicationServerInput"></a>

```csharp
public bool|IResolvable UseDedicatedReplicationServerInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AssociateDefaultSecurityGroup`<sup>Required</sup> <a name="AssociateDefaultSecurityGroup" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroup"></a>

```csharp
public bool|IResolvable AssociateDefaultSecurityGroup { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoReplicateNewDisks`<sup>Required</sup> <a name="AutoReplicateNewDisks" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.autoReplicateNewDisks"></a>

```csharp
public bool|IResolvable AutoReplicateNewDisks { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BandwidthThrottling`<sup>Required</sup> <a name="BandwidthThrottling" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.bandwidthThrottling"></a>

```csharp
public double BandwidthThrottling { get; }
```

- *Type:* double

---

##### `CreatePublicIp`<sup>Required</sup> <a name="CreatePublicIp" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.createPublicIp"></a>

```csharp
public bool|IResolvable CreatePublicIp { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DataPlaneRouting`<sup>Required</sup> <a name="DataPlaneRouting" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dataPlaneRouting"></a>

```csharp
public string DataPlaneRouting { get; }
```

- *Type:* string

---

##### `DefaultLargeStagingDiskType`<sup>Required</sup> <a name="DefaultLargeStagingDiskType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskType"></a>

```csharp
public string DefaultLargeStagingDiskType { get; }
```

- *Type:* string

---

##### `EbsEncryption`<sup>Required</sup> <a name="EbsEncryption" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryption"></a>

```csharp
public string EbsEncryption { get; }
```

- *Type:* string

---

##### `EbsEncryptionKeyArn`<sup>Required</sup> <a name="EbsEncryptionKeyArn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArn"></a>

```csharp
public string EbsEncryptionKeyArn { get; }
```

- *Type:* string

---

##### `InternetProtocol`<sup>Required</sup> <a name="InternetProtocol" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.internetProtocol"></a>

```csharp
public string InternetProtocol { get; }
```

- *Type:* string

---

##### `ReplicationServerInstanceType`<sup>Required</sup> <a name="ReplicationServerInstanceType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServerInstanceType"></a>

```csharp
public string ReplicationServerInstanceType { get; }
```

- *Type:* string

---

##### `ReplicationServersSecurityGroupsIDs`<sup>Required</sup> <a name="ReplicationServersSecurityGroupsIDs" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs"></a>

```csharp
public string[] ReplicationServersSecurityGroupsIDs { get; }
```

- *Type:* string[]

---

##### `StagingAreaSubnetId`<sup>Required</sup> <a name="StagingAreaSubnetId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaSubnetId"></a>

```csharp
public string StagingAreaSubnetId { get; }
```

- *Type:* string

---

##### `StagingAreaTags`<sup>Required</sup> <a name="StagingAreaTags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StagingAreaTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseDedicatedReplicationServer`<sup>Required</sup> <a name="UseDedicatedReplicationServer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.useDedicatedReplicationServer"></a>

```csharp
public bool|IResolvable UseDedicatedReplicationServer { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DrsReplicationConfigurationTemplateConfig <a name="DrsReplicationConfigurationTemplateConfig" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DrsReplicationConfigurationTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double BandwidthThrottling,
    string EbsEncryption,
    IResolvable|DrsReplicationConfigurationTemplatePitPolicy[] PitPolicy,
    string[] ReplicationServersSecurityGroupsIDs,
    string StagingAreaSubnetId,
    System.Collections.Generic.IDictionary<string, string> StagingAreaTags,
    bool|IResolvable AssociateDefaultSecurityGroup = null,
    bool|IResolvable AutoReplicateNewDisks = null,
    bool|IResolvable CreatePublicIp = null,
    string DataPlaneRouting = null,
    string DefaultLargeStagingDiskType = null,
    string EbsEncryptionKeyArn = null,
    string InternetProtocol = null,
    string ReplicationServerInstanceType = null,
    IResolvable|DrsReplicationConfigurationTemplateTags[] Tags = null,
    bool|IResolvable UseDedicatedReplicationServer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.bandwidthThrottling">BandwidthThrottling</a></code> | <code>double</code> | Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.ebsEncryption">EbsEncryption</a></code> | <code>string</code> | The type of EBS encryption to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.pitPolicy">PitPolicy</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>[]</code> | The Point in time (PIT) policy to manage snapshots taken during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.replicationServersSecurityGroupsIDs">ReplicationServersSecurityGroupsIDs</a></code> | <code>string[]</code> | The security group IDs that will be used by the replication server. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.stagingAreaSubnetId">StagingAreaSubnetId</a></code> | <code>string</code> | The subnet to be used by the replication staging area. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.stagingAreaTags">StagingAreaTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.associateDefaultSecurityGroup">AssociateDefaultSecurityGroup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.autoReplicateNewDisks">AutoReplicateNewDisks</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to allow the AWS replication agent to automatically replicate newly added disks. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.createPublicIp">CreatePublicIp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to create a Public IP for the Recovery Instance by default. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.dataPlaneRouting">DataPlaneRouting</a></code> | <code>string</code> | The data plane routing mechanism that will be used for replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.defaultLargeStagingDiskType">DefaultLargeStagingDiskType</a></code> | <code>string</code> | The Staging Disk EBS volume type to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.ebsEncryptionKeyArn">EbsEncryptionKeyArn</a></code> | <code>string</code> | The ARN of the EBS encryption key to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.internetProtocol">InternetProtocol</a></code> | <code>string</code> | Which version of the Internet Protocol to use for replication of data. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.replicationServerInstanceType">ReplicationServerInstanceType</a></code> | <code>string</code> | The instance type to be used for the replication server. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>[]</code> | A set of tags to be associated with the Replication Configuration Template resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.useDedicatedReplicationServer">UseDedicatedReplicationServer</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to use a dedicated Replication Server in the replication staging area. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BandwidthThrottling`<sup>Required</sup> <a name="BandwidthThrottling" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.bandwidthThrottling"></a>

```csharp
public double BandwidthThrottling { get; set; }
```

- *Type:* double

Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#bandwidth_throttling DrsReplicationConfigurationTemplate#bandwidth_throttling}

---

##### `EbsEncryption`<sup>Required</sup> <a name="EbsEncryption" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.ebsEncryption"></a>

```csharp
public string EbsEncryption { get; set; }
```

- *Type:* string

The type of EBS encryption to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#ebs_encryption DrsReplicationConfigurationTemplate#ebs_encryption}

---

##### `PitPolicy`<sup>Required</sup> <a name="PitPolicy" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.pitPolicy"></a>

```csharp
public IResolvable|DrsReplicationConfigurationTemplatePitPolicy[] PitPolicy { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>[]

The Point in time (PIT) policy to manage snapshots taken during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#pit_policy DrsReplicationConfigurationTemplate#pit_policy}

---

##### `ReplicationServersSecurityGroupsIDs`<sup>Required</sup> <a name="ReplicationServersSecurityGroupsIDs" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.replicationServersSecurityGroupsIDs"></a>

```csharp
public string[] ReplicationServersSecurityGroupsIDs { get; set; }
```

- *Type:* string[]

The security group IDs that will be used by the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#replication_servers_security_groups_i_ds DrsReplicationConfigurationTemplate#replication_servers_security_groups_i_ds}

---

##### `StagingAreaSubnetId`<sup>Required</sup> <a name="StagingAreaSubnetId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.stagingAreaSubnetId"></a>

```csharp
public string StagingAreaSubnetId { get; set; }
```

- *Type:* string

The subnet to be used by the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#staging_area_subnet_id DrsReplicationConfigurationTemplate#staging_area_subnet_id}

---

##### `StagingAreaTags`<sup>Required</sup> <a name="StagingAreaTags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.stagingAreaTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StagingAreaTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#staging_area_tags DrsReplicationConfigurationTemplate#staging_area_tags}

---

##### `AssociateDefaultSecurityGroup`<sup>Optional</sup> <a name="AssociateDefaultSecurityGroup" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.associateDefaultSecurityGroup"></a>

```csharp
public bool|IResolvable AssociateDefaultSecurityGroup { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#associate_default_security_group DrsReplicationConfigurationTemplate#associate_default_security_group}

---

##### `AutoReplicateNewDisks`<sup>Optional</sup> <a name="AutoReplicateNewDisks" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.autoReplicateNewDisks"></a>

```csharp
public bool|IResolvable AutoReplicateNewDisks { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to allow the AWS replication agent to automatically replicate newly added disks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#auto_replicate_new_disks DrsReplicationConfigurationTemplate#auto_replicate_new_disks}

---

##### `CreatePublicIp`<sup>Optional</sup> <a name="CreatePublicIp" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.createPublicIp"></a>

```csharp
public bool|IResolvable CreatePublicIp { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to create a Public IP for the Recovery Instance by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#create_public_ip DrsReplicationConfigurationTemplate#create_public_ip}

---

##### `DataPlaneRouting`<sup>Optional</sup> <a name="DataPlaneRouting" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.dataPlaneRouting"></a>

```csharp
public string DataPlaneRouting { get; set; }
```

- *Type:* string

The data plane routing mechanism that will be used for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#data_plane_routing DrsReplicationConfigurationTemplate#data_plane_routing}

---

##### `DefaultLargeStagingDiskType`<sup>Optional</sup> <a name="DefaultLargeStagingDiskType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.defaultLargeStagingDiskType"></a>

```csharp
public string DefaultLargeStagingDiskType { get; set; }
```

- *Type:* string

The Staging Disk EBS volume type to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#default_large_staging_disk_type DrsReplicationConfigurationTemplate#default_large_staging_disk_type}

---

##### `EbsEncryptionKeyArn`<sup>Optional</sup> <a name="EbsEncryptionKeyArn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.ebsEncryptionKeyArn"></a>

```csharp
public string EbsEncryptionKeyArn { get; set; }
```

- *Type:* string

The ARN of the EBS encryption key to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#ebs_encryption_key_arn DrsReplicationConfigurationTemplate#ebs_encryption_key_arn}

---

##### `InternetProtocol`<sup>Optional</sup> <a name="InternetProtocol" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.internetProtocol"></a>

```csharp
public string InternetProtocol { get; set; }
```

- *Type:* string

Which version of the Internet Protocol to use for replication of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#internet_protocol DrsReplicationConfigurationTemplate#internet_protocol}

---

##### `ReplicationServerInstanceType`<sup>Optional</sup> <a name="ReplicationServerInstanceType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.replicationServerInstanceType"></a>

```csharp
public string ReplicationServerInstanceType { get; set; }
```

- *Type:* string

The instance type to be used for the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#replication_server_instance_type DrsReplicationConfigurationTemplate#replication_server_instance_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.tags"></a>

```csharp
public IResolvable|DrsReplicationConfigurationTemplateTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>[]

A set of tags to be associated with the Replication Configuration Template resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#tags DrsReplicationConfigurationTemplate#tags}

---

##### `UseDedicatedReplicationServer`<sup>Optional</sup> <a name="UseDedicatedReplicationServer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.useDedicatedReplicationServer"></a>

```csharp
public bool|IResolvable UseDedicatedReplicationServer { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to use a dedicated Replication Server in the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#use_dedicated_replication_server DrsReplicationConfigurationTemplate#use_dedicated_replication_server}

---

### DrsReplicationConfigurationTemplatePitPolicy <a name="DrsReplicationConfigurationTemplatePitPolicy" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DrsReplicationConfigurationTemplatePitPolicy {
    double Interval,
    double RetentionDuration,
    string Units,
    bool|IResolvable Enabled = null,
    double RuleId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.interval">Interval</a></code> | <code>double</code> | How often, in the chosen units, a snapshot should be taken. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.retentionDuration">RetentionDuration</a></code> | <code>double</code> | The duration to retain a snapshot for, in the chosen units. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.units">Units</a></code> | <code>string</code> | The units used to measure the interval and retentionDuration. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether this rule is enabled or not. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.ruleId">RuleId</a></code> | <code>double</code> | The ID of the rule. |

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

How often, in the chosen units, a snapshot should be taken.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#interval DrsReplicationConfigurationTemplate#interval}

---

##### `RetentionDuration`<sup>Required</sup> <a name="RetentionDuration" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.retentionDuration"></a>

```csharp
public double RetentionDuration { get; set; }
```

- *Type:* double

The duration to retain a snapshot for, in the chosen units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#retention_duration DrsReplicationConfigurationTemplate#retention_duration}

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.units"></a>

```csharp
public string Units { get; set; }
```

- *Type:* string

The units used to measure the interval and retentionDuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#units DrsReplicationConfigurationTemplate#units}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether this rule is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#enabled DrsReplicationConfigurationTemplate#enabled}

---

##### `RuleId`<sup>Optional</sup> <a name="RuleId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.ruleId"></a>

```csharp
public double RuleId { get; set; }
```

- *Type:* double

The ID of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#rule_id DrsReplicationConfigurationTemplate#rule_id}

---

### DrsReplicationConfigurationTemplateTags <a name="DrsReplicationConfigurationTemplateTags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DrsReplicationConfigurationTemplateTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags.property.key">Key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#key DrsReplicationConfigurationTemplate#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#value DrsReplicationConfigurationTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DrsReplicationConfigurationTemplatePitPolicyList <a name="DrsReplicationConfigurationTemplatePitPolicyList" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DrsReplicationConfigurationTemplatePitPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.get"></a>

```csharp
private DrsReplicationConfigurationTemplatePitPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.internalValue"></a>

```csharp
public IResolvable|DrsReplicationConfigurationTemplatePitPolicy[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>[]

---


### DrsReplicationConfigurationTemplatePitPolicyOutputReference <a name="DrsReplicationConfigurationTemplatePitPolicyOutputReference" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DrsReplicationConfigurationTemplatePitPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resetRuleId">ResetRuleId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetRuleId` <a name="ResetRuleId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resetRuleId"></a>

```csharp
private void ResetRuleId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDurationInput">RetentionDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleIdInput">RuleIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.unitsInput">UnitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDuration">RetentionDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleId">RuleId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.units">Units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `RetentionDurationInput`<sup>Optional</sup> <a name="RetentionDurationInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDurationInput"></a>

```csharp
public double RetentionDurationInput { get; }
```

- *Type:* double

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleIdInput"></a>

```csharp
public double RuleIdInput { get; }
```

- *Type:* double

---

##### `UnitsInput`<sup>Optional</sup> <a name="UnitsInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.unitsInput"></a>

```csharp
public string UnitsInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `RetentionDuration`<sup>Required</sup> <a name="RetentionDuration" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDuration"></a>

```csharp
public double RetentionDuration { get; }
```

- *Type:* double

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleId"></a>

```csharp
public double RuleId { get; }
```

- *Type:* double

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.units"></a>

```csharp
public string Units { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DrsReplicationConfigurationTemplatePitPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>

---


### DrsReplicationConfigurationTemplateTagsList <a name="DrsReplicationConfigurationTemplateTagsList" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DrsReplicationConfigurationTemplateTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.get"></a>

```csharp
private DrsReplicationConfigurationTemplateTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.internalValue"></a>

```csharp
public IResolvable|DrsReplicationConfigurationTemplateTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>[]

---


### DrsReplicationConfigurationTemplateTagsOutputReference <a name="DrsReplicationConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DrsReplicationConfigurationTemplateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DrsReplicationConfigurationTemplateTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>

---



