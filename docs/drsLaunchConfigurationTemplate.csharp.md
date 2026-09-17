# `drsLaunchConfigurationTemplate` Submodule <a name="`drsLaunchConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrsLaunchConfigurationTemplate <a name="DrsLaunchConfigurationTemplate" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template awscc_drs_launch_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DrsLaunchConfigurationTemplate(Construct Scope, string Id, DrsLaunchConfigurationTemplateConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig">DrsLaunchConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig">DrsLaunchConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putLicensing">PutLicensing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetCopyPrivateIp">ResetCopyPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetCopyTags">ResetCopyTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetExportBucketArn">ResetExportBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLaunchDisposition">ResetLaunchDisposition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLaunchIntoSourceInstance">ResetLaunchIntoSourceInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLicensing">ResetLicensing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetPostLaunchEnabled">ResetPostLaunchEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetTargetInstanceTypeRightSizingMethod">ResetTargetInstanceTypeRightSizingMethod</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLicensing` <a name="PutLicensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putLicensing"></a>

```csharp
private void PutLicensing(DrsLaunchConfigurationTemplateLicensing Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putLicensing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putTags"></a>

```csharp
private void PutTags(IResolvable|DrsLaunchConfigurationTemplateTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>[]

---

##### `ResetCopyPrivateIp` <a name="ResetCopyPrivateIp" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetCopyPrivateIp"></a>

```csharp
private void ResetCopyPrivateIp()
```

##### `ResetCopyTags` <a name="ResetCopyTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetCopyTags"></a>

```csharp
private void ResetCopyTags()
```

##### `ResetExportBucketArn` <a name="ResetExportBucketArn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetExportBucketArn"></a>

```csharp
private void ResetExportBucketArn()
```

##### `ResetLaunchDisposition` <a name="ResetLaunchDisposition" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLaunchDisposition"></a>

```csharp
private void ResetLaunchDisposition()
```

##### `ResetLaunchIntoSourceInstance` <a name="ResetLaunchIntoSourceInstance" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLaunchIntoSourceInstance"></a>

```csharp
private void ResetLaunchIntoSourceInstance()
```

##### `ResetLicensing` <a name="ResetLicensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLicensing"></a>

```csharp
private void ResetLicensing()
```

##### `ResetPostLaunchEnabled` <a name="ResetPostLaunchEnabled" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetPostLaunchEnabled"></a>

```csharp
private void ResetPostLaunchEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTargetInstanceTypeRightSizingMethod` <a name="ResetTargetInstanceTypeRightSizingMethod" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetTargetInstanceTypeRightSizingMethod"></a>

```csharp
private void ResetTargetInstanceTypeRightSizingMethod()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DrsLaunchConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DrsLaunchConfigurationTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DrsLaunchConfigurationTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DrsLaunchConfigurationTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DrsLaunchConfigurationTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DrsLaunchConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DrsLaunchConfigurationTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DrsLaunchConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DrsLaunchConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchConfigurationTemplateId">LaunchConfigurationTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.licensing">Licensing</a></code> | <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference">DrsLaunchConfigurationTemplateLicensingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList">DrsLaunchConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyPrivateIpInput">CopyPrivateIpInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyTagsInput">CopyTagsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.exportBucketArnInput">ExportBucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchDispositionInput">LaunchDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchIntoSourceInstanceInput">LaunchIntoSourceInstanceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.licensingInput">LicensingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.postLaunchEnabledInput">PostLaunchEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethodInput">TargetInstanceTypeRightSizingMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyPrivateIp">CopyPrivateIp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyTags">CopyTags</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.exportBucketArn">ExportBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchDisposition">LaunchDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchIntoSourceInstance">LaunchIntoSourceInstance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.postLaunchEnabled">PostLaunchEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethod">TargetInstanceTypeRightSizingMethod</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LaunchConfigurationTemplateId`<sup>Required</sup> <a name="LaunchConfigurationTemplateId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchConfigurationTemplateId"></a>

```csharp
public string LaunchConfigurationTemplateId { get; }
```

- *Type:* string

---

##### `Licensing`<sup>Required</sup> <a name="Licensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.licensing"></a>

```csharp
public DrsLaunchConfigurationTemplateLicensingOutputReference Licensing { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference">DrsLaunchConfigurationTemplateLicensingOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tags"></a>

```csharp
public DrsLaunchConfigurationTemplateTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList">DrsLaunchConfigurationTemplateTagsList</a>

---

##### `CopyPrivateIpInput`<sup>Optional</sup> <a name="CopyPrivateIpInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyPrivateIpInput"></a>

```csharp
public bool|IResolvable CopyPrivateIpInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CopyTagsInput`<sup>Optional</sup> <a name="CopyTagsInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyTagsInput"></a>

```csharp
public bool|IResolvable CopyTagsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExportBucketArnInput`<sup>Optional</sup> <a name="ExportBucketArnInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.exportBucketArnInput"></a>

```csharp
public string ExportBucketArnInput { get; }
```

- *Type:* string

---

##### `LaunchDispositionInput`<sup>Optional</sup> <a name="LaunchDispositionInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchDispositionInput"></a>

```csharp
public string LaunchDispositionInput { get; }
```

- *Type:* string

---

##### `LaunchIntoSourceInstanceInput`<sup>Optional</sup> <a name="LaunchIntoSourceInstanceInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchIntoSourceInstanceInput"></a>

```csharp
public bool|IResolvable LaunchIntoSourceInstanceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LicensingInput`<sup>Optional</sup> <a name="LicensingInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.licensingInput"></a>

```csharp
public IResolvable|DrsLaunchConfigurationTemplateLicensing LicensingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a>

---

##### `PostLaunchEnabledInput`<sup>Optional</sup> <a name="PostLaunchEnabledInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.postLaunchEnabledInput"></a>

```csharp
public bool|IResolvable PostLaunchEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tagsInput"></a>

```csharp
public IResolvable|DrsLaunchConfigurationTemplateTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>[]

---

##### `TargetInstanceTypeRightSizingMethodInput`<sup>Optional</sup> <a name="TargetInstanceTypeRightSizingMethodInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethodInput"></a>

```csharp
public string TargetInstanceTypeRightSizingMethodInput { get; }
```

- *Type:* string

---

##### `CopyPrivateIp`<sup>Required</sup> <a name="CopyPrivateIp" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyPrivateIp"></a>

```csharp
public bool|IResolvable CopyPrivateIp { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CopyTags`<sup>Required</sup> <a name="CopyTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyTags"></a>

```csharp
public bool|IResolvable CopyTags { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExportBucketArn`<sup>Required</sup> <a name="ExportBucketArn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.exportBucketArn"></a>

```csharp
public string ExportBucketArn { get; }
```

- *Type:* string

---

##### `LaunchDisposition`<sup>Required</sup> <a name="LaunchDisposition" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchDisposition"></a>

```csharp
public string LaunchDisposition { get; }
```

- *Type:* string

---

##### `LaunchIntoSourceInstance`<sup>Required</sup> <a name="LaunchIntoSourceInstance" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchIntoSourceInstance"></a>

```csharp
public bool|IResolvable LaunchIntoSourceInstance { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PostLaunchEnabled`<sup>Required</sup> <a name="PostLaunchEnabled" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.postLaunchEnabled"></a>

```csharp
public bool|IResolvable PostLaunchEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TargetInstanceTypeRightSizingMethod`<sup>Required</sup> <a name="TargetInstanceTypeRightSizingMethod" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethod"></a>

```csharp
public string TargetInstanceTypeRightSizingMethod { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DrsLaunchConfigurationTemplateConfig <a name="DrsLaunchConfigurationTemplateConfig" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DrsLaunchConfigurationTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable CopyPrivateIp = null,
    bool|IResolvable CopyTags = null,
    string ExportBucketArn = null,
    string LaunchDisposition = null,
    bool|IResolvable LaunchIntoSourceInstance = null,
    DrsLaunchConfigurationTemplateLicensing Licensing = null,
    bool|IResolvable PostLaunchEnabled = null,
    IResolvable|DrsLaunchConfigurationTemplateTags[] Tags = null,
    string TargetInstanceTypeRightSizingMethod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.copyPrivateIp">CopyPrivateIp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Copy private IP. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.copyTags">CopyTags</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Copy tags. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.exportBucketArn">ExportBucketArn</a></code> | <code>string</code> | S3 bucket ARN to export Source Network templates. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.launchDisposition">LaunchDisposition</a></code> | <code>string</code> | Launch disposition. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.launchIntoSourceInstance">LaunchIntoSourceInstance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.licensing">Licensing</a></code> | <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a></code> | Configuration of a machine's license. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.postLaunchEnabled">PostLaunchEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether we want to activate post-launch actions. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>[]</code> | A set of tags associated with the Launch Configuration Template. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.targetInstanceTypeRightSizingMethod">TargetInstanceTypeRightSizingMethod</a></code> | <code>string</code> | Target instance type right-sizing method. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CopyPrivateIp`<sup>Optional</sup> <a name="CopyPrivateIp" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.copyPrivateIp"></a>

```csharp
public bool|IResolvable CopyPrivateIp { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Copy private IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#copy_private_ip DrsLaunchConfigurationTemplate#copy_private_ip}

---

##### `CopyTags`<sup>Optional</sup> <a name="CopyTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.copyTags"></a>

```csharp
public bool|IResolvable CopyTags { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Copy tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#copy_tags DrsLaunchConfigurationTemplate#copy_tags}

---

##### `ExportBucketArn`<sup>Optional</sup> <a name="ExportBucketArn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.exportBucketArn"></a>

```csharp
public string ExportBucketArn { get; set; }
```

- *Type:* string

S3 bucket ARN to export Source Network templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#export_bucket_arn DrsLaunchConfigurationTemplate#export_bucket_arn}

---

##### `LaunchDisposition`<sup>Optional</sup> <a name="LaunchDisposition" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.launchDisposition"></a>

```csharp
public string LaunchDisposition { get; set; }
```

- *Type:* string

Launch disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#launch_disposition DrsLaunchConfigurationTemplate#launch_disposition}

---

##### `LaunchIntoSourceInstance`<sup>Optional</sup> <a name="LaunchIntoSourceInstance" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.launchIntoSourceInstance"></a>

```csharp
public bool|IResolvable LaunchIntoSourceInstance { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#launch_into_source_instance DrsLaunchConfigurationTemplate#launch_into_source_instance}

---

##### `Licensing`<sup>Optional</sup> <a name="Licensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.licensing"></a>

```csharp
public DrsLaunchConfigurationTemplateLicensing Licensing { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a>

Configuration of a machine's license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#licensing DrsLaunchConfigurationTemplate#licensing}

---

##### `PostLaunchEnabled`<sup>Optional</sup> <a name="PostLaunchEnabled" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.postLaunchEnabled"></a>

```csharp
public bool|IResolvable PostLaunchEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether we want to activate post-launch actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#post_launch_enabled DrsLaunchConfigurationTemplate#post_launch_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.tags"></a>

```csharp
public IResolvable|DrsLaunchConfigurationTemplateTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>[]

A set of tags associated with the Launch Configuration Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#tags DrsLaunchConfigurationTemplate#tags}

---

##### `TargetInstanceTypeRightSizingMethod`<sup>Optional</sup> <a name="TargetInstanceTypeRightSizingMethod" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.targetInstanceTypeRightSizingMethod"></a>

```csharp
public string TargetInstanceTypeRightSizingMethod { get; set; }
```

- *Type:* string

Target instance type right-sizing method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#target_instance_type_right_sizing_method DrsLaunchConfigurationTemplate#target_instance_type_right_sizing_method}

---

### DrsLaunchConfigurationTemplateLicensing <a name="DrsLaunchConfigurationTemplateLicensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DrsLaunchConfigurationTemplateLicensing {
    bool|IResolvable OsByol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing.property.osByol">OsByol</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to enable Bring your own license or not. |

---

##### `OsByol`<sup>Optional</sup> <a name="OsByol" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing.property.osByol"></a>

```csharp
public bool|IResolvable OsByol { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to enable Bring your own license or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#os_byol DrsLaunchConfigurationTemplate#os_byol}

---

### DrsLaunchConfigurationTemplateTags <a name="DrsLaunchConfigurationTemplateTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DrsLaunchConfigurationTemplateTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#key DrsLaunchConfigurationTemplate#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#value DrsLaunchConfigurationTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DrsLaunchConfigurationTemplateLicensingOutputReference <a name="DrsLaunchConfigurationTemplateLicensingOutputReference" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DrsLaunchConfigurationTemplateLicensingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resetOsByol">ResetOsByol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOsByol` <a name="ResetOsByol" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resetOsByol"></a>

```csharp
private void ResetOsByol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.osByolInput">OsByolInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.osByol">OsByol</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OsByolInput`<sup>Optional</sup> <a name="OsByolInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.osByolInput"></a>

```csharp
public bool|IResolvable OsByolInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OsByol`<sup>Required</sup> <a name="OsByol" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.osByol"></a>

```csharp
public bool|IResolvable OsByol { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DrsLaunchConfigurationTemplateLicensing InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a>

---


### DrsLaunchConfigurationTemplateTagsList <a name="DrsLaunchConfigurationTemplateTagsList" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DrsLaunchConfigurationTemplateTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.get"></a>

```csharp
private DrsLaunchConfigurationTemplateTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.internalValue"></a>

```csharp
public IResolvable|DrsLaunchConfigurationTemplateTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>[]

---


### DrsLaunchConfigurationTemplateTagsOutputReference <a name="DrsLaunchConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DrsLaunchConfigurationTemplateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DrsLaunchConfigurationTemplateTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>

---



